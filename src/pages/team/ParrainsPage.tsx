import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ScrollText } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import { useLanguage, Language } from '@/contexts/LanguageContext';

interface SubCategory {
  id: string;
  label: string;
  members: TeamMember[];
}

const parrainsData: Record<Language, SubCategory[]> = {
  fr: [
    {
      id: 'bamoun',
      label: 'Bamoun',
      members: []
    },
    {
      id: 'nso',
      label: "Nso'",
      members: []
    },
    {
      id: 'bafia',
      label: 'Bafia',
      members: []
    }
  ],
  en: [
    {
      id: 'bamoun',
      label: 'Bamoun',
      members: []
    },
    {
      id: 'nso',
      label: "Nso'",
      members: []
    },
    {
      id: 'bafia',
      label: 'Bafia',
      members: []
    }
  ]
};

const ParrainsPage = () => {
  const { language, t } = useLanguage();
  const categories = parrainsData[language];
  const [activeTab, setActiveTab] = useState('bamoun');

  const activeCategory = categories.find(c => c.id === activeTab);

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-heritage-gold/10 border border-heritage-gold/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.parrains')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.parrains_sub')}
            </p>
          </motion.div>

          {/* Sub-category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeTab === cat.id
                    ? 'bg-heritage-gold text-heritage-earth border-heritage-gold shadow-lg shadow-heritage-gold/20'
                    : 'bg-heritage-earth/50 text-heritage-cream/70 border-heritage-gold/30 hover:border-heritage-gold/60 hover:text-heritage-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Members */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeCategory && activeCategory.members.length > 0 ? (
              <div className="space-y-20">
                {activeCategory.members.map((member, index) => (
                  <TeamMemberCard key={member.name} member={member} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-heritage-gold/10 border border-heritage-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-heritage-gold/40" />
                </div>
                <p className="text-heritage-cream/50 text-lg italic">
                  {language === 'fr' ? 'Membres à venir...' : 'Members coming soon...'}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ParrainsPage;
