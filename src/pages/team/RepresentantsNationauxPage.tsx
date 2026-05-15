import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamThumbnailGrid } from '@/components/team/TeamThumbnailGrid';
import { useLanguage } from '@/contexts/LanguageContext';
import { representantsData } from '@/data/representantsNationauxData';
import { SEO } from '@/components/SEO';

const RepresentantsNationauxPage = () => {
  const { language, t } = useLanguage();
  const categories = representantsData[language];
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const activeCategory = activeTab ? categories.find(c => c.id === activeTab) : null;

  return (
    <PageLayout>
      <SEO title={"Représentants nationaux | Mandjara Heritage"} description={"Les représentants nationaux d'International Mandjara Heritage à travers le monde."} />
      <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-heritage-gold/10 border border-heritage-gold/30 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.representants')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {language === 'fr' ? "Ambassadrices et Ambassadeurs du patrimoine Mandjara à travers le monde" : t('team.cat.representants_sub')}
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

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeCategory && (
              <TeamThumbnailGrid members={activeCategory.members} basePath="/team/representants-nationaux" />
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RepresentantsNationauxPage;
