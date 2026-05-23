import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamThumbnailGrid } from '@/components/team/TeamThumbnailGrid';
import { IdentityTabs } from '@/components/team/IdentityTabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { sagesData } from '@/data/comiteSagesData';
import { useTeamMembers } from '@/hooks/useTeamMembers';
import { SEO } from '@/components/SEO';

const ComiteSagesPage = () => {
  const { language, t } = useLanguage();
  const staticCategories = sagesData[language];
  const { members, hasData } = useTeamMembers('sages');
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Build categories from DB if available, else use static
  const SPECIAL_LABEL = language === 'fr' ? 'Conseil consultatif spécial international' : 'Special International Advisory Board';
  const categories = hasData
    ? [
        { id: 'bamoun', label: 'Bamoun', members: members.filter(m => (m as any).ethnic_group === 'bamoun') },
        { id: 'nso', label: "Nso'", members: members.filter(m => (m as any).ethnic_group === 'nso') },
        { id: 'bafia', label: 'Bafia', members: members.filter(m => (m as any).ethnic_group === 'bafia') },
        { id: 'special', label: SPECIAL_LABEL, members: members.filter(m => (m as any).ethnic_group === 'autre') },
      ]
    : staticCategories;

  const activeCategory = activeTab ? categories.find(c => c.id === activeTab) : null;

  return (
    <PageLayout>
      <SEO title={"Comité des sages | Mandjara Heritage"} description={"Le comité des sages d'International Mandjara Heritage — sagesse et continuité culturelle."} />
      <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-heritage-gold/10 border border-heritage-gold/30 rounded-full px-4 py-2 mb-6">
              <ScrollText className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.sages')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.sages_sub')}
            </p>
          </motion.div>

          <IdentityTabs
            tabs={categories.map(c => ({ id: c.id, label: c.label }))}
            activeTab={activeTab}
            onChange={setActiveTab}
            ariaLabel={language === 'fr' ? 'Identités du Comité des sages' : 'Council of Elders identities'}
            panelId="sages-panel"
          />

          <motion.div
            key={activeTab}
            id="sages-panel"
            role="tabpanel"
            aria-labelledby={activeTab ? `tab-${activeTab}` : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeCategory ? (
              <TeamThumbnailGrid members={activeCategory.members} basePath="/team/comite-sages" />
            ) : (
              <p className="text-center text-heritage-cream/60 italic py-12">
                {language === 'fr' ? "Sélectionnez une identité pour afficher les membres." : "Select an identity to display the members."}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ComiteSagesPage;
