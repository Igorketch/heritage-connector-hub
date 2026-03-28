import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ScrollText } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import sultanNabilImg from '@/assets/team/sultan-nabil.jpg';

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

          {/* Descriptive Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 space-y-6 text-heritage-cream/85 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-heritage-gold text-center mb-8">
              {language === 'fr'
                ? "Un Père, Trois Royaumes, Une Mémoire : Les Parrains d'International Mandjara Heritage"
                : "One Father, Three Kingdoms, One Memory: The Patrons of International Mandjara Heritage"}
            </h2>

            <p className="text-center italic text-heritage-cream/70">
              International Mandjara Heritage opère sous le Haut Patronage Royal et Traditionnel de trois éminentes autorités traditionnelles.
            </p>
            <p className="text-center italic text-heritage-cream/70">
              International Mandjara Heritage operates under the High Royal and Official Patronage of three eminent traditional authorities.
            </p>

            <p>
              International Mandjara Heritage est né d'une conviction profonde : les peuples se projettent dans l'avenir lorsqu'ils savent d'où ils viennent. La mémoire, les traditions et les institutions qui les portent constituent le socle vivant de l'identité collective. Dans cet esprit, l'organisation a l'immense honneur de compter parmi ses Parrains royaux et officiels trois éminentes autorités traditionnelles dont l'engagement symbolise l'unité, la continuité et la dignité des héritages culturels africains. Ces Hautes Autorités sont :
            </p>

            <ul className="space-y-4 pl-4">
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">—</span>
                <span><strong className="text-heritage-cream">Sa Majesté Nabil Mbombo Njoya</strong>, Sultan Roi des Bamoun, souverain du Royaume de Foumban, héritier d'une dynastie prestigieuse dont l'influence culturelle, artistique et politique marque l'histoire de l'Afrique centrale depuis des siècles.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">—</span>
                <span><strong className="text-heritage-cream">Son Altesse Royale Sehm Mbinglo I</strong>, Fon Suprême du Royaume de Nso, gardien d'une institution traditionnelle majeure des Grassfields, reconnue pour son rôle dans la préservation des valeurs sociales, spirituelles et culturelles de son peuple.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">—</span>
                <span><strong className="text-heritage-cream">Sa Majesté Mouthe à Bidias Camille</strong>, Patriarche de Bafia, autorité traditionnelle respectée et dépositaire d'une mémoire historique et culturelle essentielle pour les générations présentes et futures.</span>
              </li>
            </ul>

            <p>
              Par leur acceptation de ce rôle de Parrains Royaux et Officiels de International Mandjara Heritage, ces trois souverains et autorités traditionnelles offrent à l'organisation une bénédiction morale et symbolique qui dépasse les frontières géographiques et générationnelles. Leur présence rappelle une vérité fondamentale : les institutions traditionnelles ne sont pas seulement des héritages du passé, elles sont aussi des piliers de continuité, de sagesse et d'équilibre pour l'avenir.
            </p>

            <p>
              Sous leur haute bienveillance, International Mandjara Heritage poursuit sa mission : <em>préserver, transmettre et faire rayonner l'héritage Mandjara et les traditions africaines à travers le monde, en renforçant les liens entre les communautés locales et les diasporas.</em>
            </p>

            <p className="text-heritage-gold/90 italic text-center border-t border-heritage-gold/20 pt-6 mt-8">
              Ainsi se tisse un pont entre mémoire et modernité, entre royaumes et diaspora, entre héritage ancestral et responsabilité contemporaine. Car lorsque les traditions parlent d'une seule voix, les peuples se souviennent de ce qui les unit.
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
