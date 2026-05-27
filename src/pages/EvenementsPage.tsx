import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { PartyPopper, GraduationCap, Users, Info, ArrowRight, Calendar, MapPin, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { supabase } from '@/integrations/supabase/client';

interface EventRow {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string | null;
  description_fr: string | null;
  description_en: string | null;
  start_date: string | null;
  end_date: string | null;
  location: string | null;
  external_url: string | null;
  cover_url: string | null;
  display_order: number;
}

const iconForSlug = (slug: string) => {
  if (slug.includes('nguoun') || slug.includes('nguon')) return PartyPopper;
  if (slug.includes('stage')) return GraduationCap;
  if (slug.includes('retrouvailles')) return Users;
  return PartyPopper;
};

// Known internal detail pages
const INTERNAL_ROUTES: Record<string, string> = {
  'nguoun-2024': '/evenements/nguoun-2024',
};

const EvenementsPage = () => {
  const { t, language } = useLanguage();

  const { data: events = [], isLoading } = useQuery({
    queryKey: ['public-events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('id,slug,title_fr,title_en,description_fr,description_en,start_date,end_date,location,external_url,cover_url,display_order')
        .eq('is_visible', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return (data ?? []) as EventRow[];
    },
  });

  return (
    <PageLayout>
      <SEO title={"Événements | International Mandjara Heritage"} description={"Événements à venir et passés d'International Mandjara Heritage."} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-heritage-earth overflow-hidden">
        <div className="absolute inset-0 heritage-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-heritage-earth/50 to-heritage-earth" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-heritage-gold/20 text-heritage-gold text-sm font-medium tracking-wide mb-6">
              {t('events.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-cream mb-6">
              {t('events.title')}{' '}
              <span className="text-gradient-gold">{t('events.title_highlight')}</span>
            </h1>
            <p className="text-lg text-heritage-cream/70 leading-relaxed">
              {t('events.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-heritage-sand">
        <div className="container mx-auto px-4 lg:px-8">
          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-heritage-gold" />
            </div>
          )}

          {!isLoading && events.length === 0 && (
            <p className="text-center text-muted-foreground italic py-12">
              {t('publications.coming_soon')}
            </p>
          )}

          {events.map((ev, idx) => {
            const Icon = iconForSlug(ev.slug);
            const title = (language === 'en' ? ev.title_en : ev.title_fr) || ev.title_fr;
            const description = (language === 'en' ? ev.description_en : ev.description_fr) || ev.description_fr || ev.description_en;
            const internalHref = INTERNAL_ROUTES[ev.slug];
            const href = internalHref || ev.external_url || null;
            const year = ev.start_date ? new Date(ev.start_date).getFullYear() : null;

            const Inner = (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
                    {description ? (
                      <p className="text-muted-foreground leading-relaxed">{description}</p>
                    ) : (
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Info size={18} className="text-heritage-gold flex-shrink-0" />
                        <p className="italic">{t('publications.coming_soon')}</p>
                      </div>
                    )}
                    {(year || ev.location) && (
                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                        {year && (
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-heritage-gold" />
                            {year}
                          </span>
                        )}
                        {ev.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-heritage-gold" />
                            {ev.location}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {href && (
                    <ArrowRight className="w-5 h-5 text-heritage-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4" />
                  )}
                </div>
              </>
            );

            return (
              <div key={ev.id} className="max-w-4xl mx-auto mt-16 first:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                >
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <Icon className="w-7 h-7 text-heritage-gold" />
                    {title}
                  </h2>
                  {internalHref ? (
                    <Link to={internalHref} className="card-heritage p-8 lg:p-10 block group hover:border-heritage-gold/40 transition-colors">
                      {Inner}
                    </Link>
                  ) : ev.external_url ? (
                    <a
                      href={ev.external_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-heritage p-8 lg:p-10 block group hover:border-heritage-gold/40 transition-colors"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div className="card-heritage p-8 lg:p-10 group">{Inner}</div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default EvenementsPage;
