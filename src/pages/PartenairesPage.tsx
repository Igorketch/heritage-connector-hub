import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake, ExternalLink } from 'lucide-react';

const PartenairesPage = () => {
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
              {t('partenaires.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-cream mb-6">
              {t('partenaires.title')}{' '}
              <span className="text-gradient-gold">{t('partenaires.title_highlight')}</span>
            </h1>
            <p className="text-lg text-heritage-cream/70 leading-relaxed">
              {t('partenaires.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-heritage-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
              <a href="https://acpha.ca" target="_blank" rel="noopener noreferrer" className="card-heritage p-8 lg:p-10 block group hover:border-heritage-gold/40 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">ACPHA</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Association Canadienne pour la Promotion des Héritages Africains (ACPHA)
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-heritage-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4" />
                </div>
              </a>

              <a href="https://idees-afrique.ca/" target="_blank" rel="noopener noreferrer" className="card-heritage p-8 lg:p-10 block group hover:border-heritage-gold/40 transition-colors mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">IDÉES-AFRIQUE</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Institut de Développement Économique, Éducatif et Social pour l'Afrique
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-heritage-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PartenairesPage;
