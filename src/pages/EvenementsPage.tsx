import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { PartyPopper, Handshake, GraduationCap, Users, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EvenementsPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout>
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
          {/* Événements */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <PartyPopper className="w-7 h-7 text-heritage-gold" />
                {t('publications.events_title')}
              </h2>
              <Link to="/evenements/nguoun-2024" className="card-heritage p-8 lg:p-10 block group hover:border-heritage-gold/40 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Nguoun 2024</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('publications.nguoun_desc')}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-heritage-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Partenaires */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Handshake className="w-7 h-7 text-heritage-gold" />
                {t('publications.partners_title')}
              </h2>
              <div className="card-heritage p-8 lg:p-10">
                <h3 className="text-xl font-bold text-foreground mb-2">ACPHA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Association Canadienne pour la Promotion des Héritages Africains (ACPHA)
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stage 2012 */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-heritage-gold" />
                Stage 2012 des étudiants
              </h2>
              <div className="card-heritage p-8 lg:p-10 flex items-center gap-3 text-muted-foreground">
                <Info size={18} className="text-heritage-gold flex-shrink-0" />
                <p className="italic">{t('publications.coming_soon')}</p>
              </div>
            </motion.div>
          </div>

          {/* Les grandes retrouvailles 2012 */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Users className="w-7 h-7 text-heritage-gold" />
                Les grandes retrouvailles 2012 au Cameroun
              </h2>
              <div className="card-heritage p-8 lg:p-10 flex items-center gap-3 text-muted-foreground">
                <Info size={18} className="text-heritage-gold flex-shrink-0" />
                <p className="italic">{t('publications.coming_soon')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EvenementsPage;
