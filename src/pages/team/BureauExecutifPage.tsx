import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { TeamThumbnailGrid } from '@/components/team/TeamThumbnailGrid';
import { useLanguage } from '@/contexts/LanguageContext';
import { bureauData } from '@/data/bureauExecutifData';
import { SEO } from '@/components/SEO';

const BureauExecutifPage = () => {
  const { language, t } = useLanguage();
  const bureauExecutif = bureauData[language];

  return (
    <PageLayout>
      <SEO title={"Bureau exécutif | Mandjara Heritage"} description={"Le bureau exécutif d'International Mandjara Heritage — équipe opérationnelle."} />
      <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-heritage-gold/10 border border-heritage-gold/30 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.bureau')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.bureau_sub')}
            </p>
          </motion.div>

          <TeamThumbnailGrid members={bureauExecutif} basePath="/team/bureau-executif" />
        </div>
      </section>
    </PageLayout>
  );
};

export default BureauExecutifPage;
