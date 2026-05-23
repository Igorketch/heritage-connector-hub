import { motion } from 'framer-motion';
import { Building2, UserPlus } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamThumbnailGrid } from '@/components/team/TeamThumbnailGrid';
import { useLanguage } from '@/contexts/LanguageContext';
import { conseilMembers, conseilPlaceholder } from '@/data/conseilAdministrationData';
import { useTeamMembers } from '@/hooks/useTeamMembers';
import { SEO } from '@/components/SEO';

const ConseilAdministrationPage = () => {
  const { language, t } = useLanguage();
  const { members: dbMembers, hasData } = useTeamMembers('conseil');
  const members = hasData ? dbMembers : conseilMembers[language];
  const placeholder = conseilPlaceholder[language];

  const membersBeforePlaceholder = members.slice(0, 3);
  const membersAfterPlaceholder = members.slice(3);

  return (
    <PageLayout>
      <SEO title={"Conseil d'administration | Mandjara Heritage"} description={"Le conseil d'administration d'International Mandjara Heritage — gouvernance et stratégie."} />
      <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-heritage-gold/10 border border-heritage-gold/30 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.conseil')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.conseil_sub')}
            </p>
          </motion.div>

          <TeamThumbnailGrid members={membersBeforePlaceholder} basePath="/team/conseil-administration" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center my-12"
          >
            <div className="bg-heritage-earth/60 border border-heritage-gold/20 rounded-2xl p-8 text-center max-w-md w-full">
              <UserPlus className="w-12 h-12 text-heritage-gold/40 mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-heritage-cream/80 mb-2">
                {placeholder.role}
              </h3>
              <p className="text-heritage-cream/50 italic">{placeholder.label}</p>
            </div>
          </motion.div>

          <TeamThumbnailGrid members={membersAfterPlaceholder} basePath="/team/conseil-administration" />
        </div>
      </section>
    </PageLayout>
  );
};

export default ConseilAdministrationPage;
