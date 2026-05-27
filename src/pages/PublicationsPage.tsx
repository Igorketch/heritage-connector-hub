import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Calendar, User, BookOpen, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { supabase } from '@/integrations/supabase/client';

type PubType = 'article' | 'thesis' | 'book' | 'report' | 'other';

interface PublicationRow {
  id: string;
  title: string;
  author: string | null;
  year: string | null;
  pub_type: PubType;
  institution: string | null;
  description_fr: string | null;
  description_en: string | null;
  file_url: string | null;
  file_name: string | null;
  display_order: number;
}

const PublicationsPage = () => {
  const { t, language } = useLanguage();

  const { data: publications = [], isLoading } = useQuery({
    queryKey: ['public-publications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('publications')
        .select('id,title,author,year,pub_type,institution,description_fr,description_en,file_url,file_name,display_order')
        .eq('is_visible', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return (data ?? []) as PublicationRow[];
    },
  });

  const typeLabel = (t1: PubType) => {
    if (t1 === 'thesis') return t('publications.type_thesis');
    if (t1 === 'article') return t('publications.type_article');
    return t1.charAt(0).toUpperCase() + t1.slice(1);
  };

  return (
    <PageLayout>
      <SEO title={"Publications | International Mandjara Heritage"} description={"Documents, recherches et publications d'International Mandjara Heritage."} />
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
              {t('publications.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-cream mb-6">
              {t('publications.title')}{' '}
              <span className="text-gradient-gold">{t('publications.title_highlight')}</span>
            </h1>
            <p className="text-lg text-heritage-cream/70 leading-relaxed">
              {t('publications.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-heritage-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {isLoading && (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-heritage-gold" />
              </div>
            )}

            {!isLoading && publications.length === 0 && (
              <p className="text-center text-muted-foreground italic py-12">
                {t('publications.coming_soon')}
              </p>
            )}

            {publications.map((pub, index) => {
              const description = (language === 'en' ? pub.description_en : pub.description_fr) || pub.description_fr || pub.description_en || '';
              return (
                <motion.article
                  key={pub.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-heritage p-8 lg:p-10"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                      <BookOpen size={14} />
                      {typeLabel(pub.pub_type)}
                    </span>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-tight">
                    {pub.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                    {pub.author && (
                      <span className="flex items-center gap-1.5">
                        <User size={14} className="text-primary" />
                        {pub.author}
                      </span>
                    )}
                    {pub.year && (
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        {pub.year}
                      </span>
                    )}
                    {pub.institution && (
                      <span className="flex items-center gap-1.5">
                        <FileText size={14} className="text-primary" />
                        {pub.institution}
                      </span>
                    )}
                  </div>

                  {description && (
                    <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
                  )}

                  {pub.file_url && (
                    <div className="flex flex-wrap gap-3">
                      <a href={pub.file_url} target="_blank" rel="noopener noreferrer">
                        <Button variant="heritage" size="default">
                          <FileText size={16} />
                          {t('publications.read')}
                        </Button>
                      </a>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>

          {/* Call to contribute */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-16 text-center"
          >
            <div className="card-heritage p-10 bg-heritage-earth text-heritage-cream">
              <BookOpen size={40} className="mx-auto mb-4 text-heritage-gold" />
              <h3 className="text-2xl font-bold mb-3">{t('publications.contribute_title')}</h3>
              <p className="text-heritage-cream/70 mb-6 leading-relaxed">
                {t('publications.contribute_text')}
              </p>
              <a href="/contact">
                <Button variant="gold" size="lg">
                  {t('publications.contribute_cta')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PublicationsPage;
