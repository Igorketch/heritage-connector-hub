import { motion } from 'framer-motion';
import { Users, Award, Building2, Globe, HandHeart, Crown, ScrollText, Briefcase, Star, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage, Language } from '@/contexts/LanguageContext';

// Portrait imports
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait-2.png';
import charlottePortrait from '@/assets/charlotte-portrait.jpg';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import nathaliePortrait from '@/assets/nathalie-kouotou-portrait.jpg';
import persidePortrait from '@/assets/perside-portrait.png';
import reginaPortrait from '@/assets/regina-portrait.png';
import pepertuaPortrait from '@/assets/pepertua-portrait-refined.jpeg';
import florencePortrait from '@/assets/florence-portrait.png';
import ncharePortrait from '@/assets/nchare-portrait.png';
import yohanaPortrait from '@/assets/yohana-portrait.png';
import sylviePortrait from '@/assets/sylvie-portrait.jpg';
import ousmanouPortrait from '@/assets/ousmanou-portrait.jpg';
import adamuPortrait from '@/assets/adamu-portrait.jpg';
import raoulPortrait from '@/assets/raoul-portrait.jpg';
import geraldPortrait from '@/assets/team/gerald-wirmvem.jpg';
import elizabethPortrait from '@/assets/elizabeth-mbanka.png';
import massanPortrait from '@/assets/massan-abiroko-portrait.png';
import walyPortrait from '@/assets/waly-faye-portrait.jpg';
import henriLeyamPortrait from '@/assets/henri-leyam-tolale-portrait.png';

interface MemberThumb {
  name: string;
  role: string;
  portrait: string;
  portraitPosition?: string;
}

interface TeamCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  link: string;
  members: MemberThumb[];
}

const teamCategoriesData: Record<Language, TeamCategory[]> = {
  fr: [
    {
      id: 'parrains',
      title: 'Haut Patronage Royal et Traditionnel',
      subtitle: 'Personnalités de marque soutenant notre mission',
      icon: Star,
      link: '/team/parrains',
      members: []
    },
    {
      id: 'membres-honneur',
      title: "Membres d'honneur",
      subtitle: 'Reconnus pour leur contribution exceptionnelle',
      icon: Award,
      link: '/team/membres-honneur',
      members: [
        { name: 'Madame Banka Liza Bernsa', role: 'Représentante Pays • États-Unis', portrait: elizabethPortrait },
        { name: 'Maman Massan A Biroko', role: '', portrait: massanPortrait }
      ]
    },
    {
      id: 'conseil-administration',
      title: "Conseil d'Administration",
      subtitle: 'Direction stratégique et gouvernance',
      icon: Building2,
      link: '/team/conseil-administration',
      members: [
        { name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'", role: 'Fondatrice • Présidente', portrait: lauretinePortrait },
        { name: 'Reine Mère Eveline Kinyuy', role: 'Administratrice • Vice-présidente', portrait: evelinePortrait, portraitPosition: 'center 20%' },
        { name: 'Charlotte Wirsiy', role: 'Administratrice • Liaison Nso\'', portrait: charlottePortrait, portraitPosition: 'center 20%' },
        { name: 'Nathalie Sandrine Kouotou', role: 'Administratrice • Secrétaire Générale', portrait: nathaliePortrait },
        { name: 'Aïchetou Fafa Pouyona', role: 'Administratrice • Trésorière', portrait: aichetouPortrait }
      ]
    },
    {
      id: 'bureau-executif',
      title: 'Bureau Exécutif',
      subtitle: 'Coordination opérationnelle des activités',
      icon: Briefcase,
      link: '/team/bureau-executif',
      members: [
        { name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'", role: 'Présidente', portrait: lauretinePortrait },
        { name: 'Reine Mère Eveline Kinyuy', role: 'Vice-Présidente', portrait: evelinePortrait, portraitPosition: 'center 20%' },
        { name: 'Nathalie Sandrine Kouotou', role: 'Secrétaire Générale', portrait: nathaliePortrait },
        { name: 'Aïchetou Fafa Pouyona', role: 'Trésorière', portrait: aichetouPortrait },
        { name: 'Henri Leyam Tolale', role: 'Responsable de la Communication', portrait: henriLeyamPortrait },
        { name: 'Waly Faye', role: 'Coordonnateur de projet', portrait: walyPortrait }
      ]
    },
    {
      id: 'representants-nationaux',
      title: 'Représentation nationale',
      subtitle: 'Ambassadeurs du patrimoine Mandjara à travers le monde',
      icon: Globe,
      link: '/team/representants-nationaux',
      members: [
        { name: 'Madame Ngameyet épouse Mouliom Perside', role: 'Représentante • Cameroun', portrait: persidePortrait },
        { name: 'Reine mère Regina Fonyuy Wirba', role: 'Représentante • Cameroun • Nso\'', portrait: reginaPortrait, portraitPosition: 'center 20%' },
        { name: 'Professeure Perpetua K. Nkamanyang Lola', role: 'Représentante • Cameroun/Nigeria', portrait: pepertuaPortrait },
        { name: 'Reine-Mère Florence Fonka Fortibui', role: 'Représentante • États-Unis • Nso\'', portrait: florencePortrait }
      ]
    },
    {
      id: 'comite-sages',
      title: 'Comité des Sages',
      subtitle: 'Gardiens de la sagesse et de la tradition',
      icon: ScrollText,
      link: '/team/comite-sages',
      members: [
        { name: 'Titamfon Nji Ncharé Oumarou', role: 'Conseiller', portrait: ncharePortrait },
        { name: 'Dre Yohana Kimoun', role: 'Conseillère', portrait: yohanaPortrait },
        { name: 'Nji Ousmanou NGAM', role: 'Conseiller', portrait: ousmanouPortrait },
        { name: 'Nji Nfût Sylvie Mouchingam épouse TABUE', role: 'Conseillère', portrait: sylviePortrait },
        { name: 'Shey Tadze Adamu Mbiydzela', role: 'Conseiller', portrait: adamuPortrait },
        { name: 'Mfoome Nso, Wirmvem Gerald Nyuywir', role: 'Conseiller', portrait: geraldPortrait },
        { name: 'Dr. Raoul Tamekou Tsowa', role: 'Conseiller', portrait: raoulPortrait }
      ]
    }
  ],
  en: [
    {
      id: 'parrains',
      title: 'High Royal & Traditional Patronage',
      subtitle: 'Distinguished figures supporting our mission',
      icon: Star,
      link: '/team/parrains',
      members: []
    },
    {
      id: 'membres-honneur',
      title: 'Honorary Members',
      subtitle: 'Recognized for their outstanding contribution',
      icon: Award,
      link: '/team/membres-honneur',
      members: [
        { name: 'Mrs. Banka Liza Bernsa', role: 'Country Representative • USA', portrait: elizabethPortrait },
        { name: 'Maman Massan A Biroko', role: '', portrait: massanPortrait }
      ]
    },
    {
      id: 'conseil-administration',
      title: 'Board of Directors',
      subtitle: 'Strategic direction and governance',
      icon: Building2,
      link: '/team/conseil-administration',
      members: [
        { name: "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju'", role: 'Founder • Chair', portrait: lauretinePortrait },
        { name: 'Queen Mother Eveline Kinyuy', role: 'Director • Vice-Chair', portrait: evelinePortrait, portraitPosition: 'center 20%' },
        { name: 'Charlotte Wirsiy', role: 'Director • Nso\' Liaison', portrait: charlottePortrait, portraitPosition: 'center 20%' },
        { name: 'Nathalie Sandrine Kouotou', role: 'Director • Secretary General', portrait: nathaliePortrait },
        { name: 'Aïchetou Fafa Pouyona', role: 'Director • Treasurer', portrait: aichetouPortrait }
      ]
    },
    {
      id: 'bureau-executif',
      title: 'Executive Board',
      subtitle: 'Operational coordination of activities',
      icon: Briefcase,
      link: '/team/bureau-executif',
      members: [
        { name: "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju'", role: 'President', portrait: lauretinePortrait },
        { name: 'Queen Mother Eveline Kinyuy', role: 'Vice-President', portrait: evelinePortrait, portraitPosition: 'center 20%' },
        { name: 'Nathalie Sandrine Kouotou', role: 'Secretary General', portrait: nathaliePortrait },
        { name: 'Aïchetou Fafa Pouyona', role: 'Treasurer', portrait: aichetouPortrait },
        { name: 'Henri Leyam Tolale', role: 'Communications Lead', portrait: henriLeyamPortrait },
        { name: 'Waly Faye', role: 'Project Coordinator', portrait: walyPortrait }
      ]
    },
    {
      id: 'representants-nationaux',
      title: 'National Representatives',
      subtitle: 'Ambassadors of Mandjara heritage around the world',
      icon: Globe,
      link: '/team/representants-nationaux',
      members: [
        { name: 'Mrs. Ngameyet née Mouliom Perside', role: 'Representative • Cameroon', portrait: persidePortrait },
        { name: 'Queen Mother Regina Fonyuy Wirba', role: 'Representative • Cameroon • Nso\'', portrait: reginaPortrait, portraitPosition: 'center 20%' },
        { name: 'Professor Perpetua K. Nkamanyang Lola', role: 'Representative • Cameroon/Nigeria', portrait: pepertuaPortrait },
        { name: 'Queen Mother Florence Fonka Fortibui', role: 'Representative • USA • Nso\'', portrait: florencePortrait }
      ]
    },
    {
      id: 'comite-sages',
      title: 'Council of Elders',
      subtitle: 'Guardians of wisdom and tradition',
      icon: ScrollText,
      link: '/team/comite-sages',
      members: [
        { name: 'Titamfon Nji Ncharé Oumarou', role: 'Advisor', portrait: ncharePortrait },
        { name: 'Dr. Yohana Kimoun', role: 'Advisor', portrait: yohanaPortrait },
        { name: 'Nji Ousmanou NGAM', role: 'Advisor', portrait: ousmanouPortrait },
        { name: 'Nji Nfût Sylvie Mouchingam née TABUE', role: 'Advisor', portrait: sylviePortrait },
        { name: 'Shey Tadze Adamu Mbiydzela', role: 'Advisor', portrait: adamuPortrait },
        { name: 'Mfoome Nso, Wirmvem Gerald Nyuywir', role: 'Advisor', portrait: geraldPortrait },
        { name: 'Dr. Raoul Tamekou Tsowa', role: 'Advisor', portrait: raoulPortrait }
      ]
    }
  ]
};

const MemberThumbnail = ({ member, index }: { member: MemberThumb; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group text-center"
  >
    <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-3 rounded-full overflow-hidden border-3 border-heritage-gold/30 group-hover:border-heritage-gold/70 transition-all duration-500 shadow-lg group-hover:shadow-heritage-gold/20 group-hover:shadow-xl">
      {member.portrait ? (
        <img
          src={member.portrait}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ objectPosition: member.portraitPosition || 'top' }}
        />
      ) : (
        <div className="w-full h-full bg-heritage-earth/80 flex items-center justify-center">
          <span className="text-4xl font-display text-heritage-gold/40">{member.name.charAt(0)}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-heritage-earth/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <h4 className="font-display font-semibold text-heritage-brown text-sm leading-tight max-w-[160px] mx-auto">
      {member.name}
    </h4>
    {member.role && (
      <p className="text-heritage-terracotta/80 text-xs mt-1 max-w-[140px] mx-auto">{member.role}</p>
    )}
  </motion.div>
);

const CategorySection = ({ category, index }: { category: TeamCategory; index: number }) => {
  const { language } = useLanguage();
  const IconComponent = category.icon;
  const hasMembers = category.members.length > 0;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-20"
      id={category.id}
    >
      <Link to={category.link} className="block group">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-heritage-gold/20 rounded-xl flex items-center justify-center group-hover:bg-heritage-gold/30 transition-colors">
              <IconComponent className="w-6 h-6 text-heritage-terracotta" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-heritage-brown group-hover:text-heritage-terracotta transition-colors">
              {category.title}
            </h2>
          </div>
          <p className="text-heritage-brown/70 text-lg max-w-2xl mx-auto">
            {category.subtitle}
          </p>
          <div className="w-24 h-1 bg-heritage-gold/40 mx-auto mt-6 rounded-full group-hover:bg-heritage-gold/70 transition-colors" />
        </motion.div>
      </Link>

      {hasMembers ? (
        <Link to={category.link} className="block">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 cursor-pointer">
            {category.members.map((member, idx) => (
              <MemberThumbnail key={member.name + idx} member={member} index={idx} />
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="inline-flex items-center gap-2 text-heritage-terracotta hover:text-heritage-gold font-medium text-sm transition-colors">
              {language === 'fr' ? 'Voir les profils complets →' : 'View full profiles →'}
            </span>
          </div>
        </Link>
      ) : (
        <Link to={category.link} className="block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/50 rounded-2xl border-2 border-dashed border-heritage-gold/30 p-12 text-center"
          >
            <div className="w-16 h-16 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-heritage-gold/50" />
            </div>
            <p className="text-heritage-brown/50 text-lg italic">
              {language === 'fr' ? 'Membres à venir...' : 'Members coming soon...'}
            </p>
          </motion.div>
        </Link>
      )}
    </motion.section>
  );
};

const TeamPage = () => {
  const { language, t } = useLanguage();
  const teamCategories = teamCategoriesData[language];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-heritage-cream">
        <div className="absolute top-0 left-0 w-64 h-64 bg-heritage-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-heritage-terracotta/5 rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-heritage-gold/5 rounded-full" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-gold/20 border border-heritage-gold/30 backdrop-blur-sm mb-8">
              <Users className="w-4 h-4 text-heritage-brown" />
              <span className="text-heritage-brown text-sm font-medium">{t('team.badge')}</span>
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-brown mb-6">
              {t('team.hero_title')} <span className="text-heritage-terracotta">{t('team.hero_highlight')}</span>
            </h1>
            <p className="text-heritage-brown/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('team.hero_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Categories */}
      <section className="py-24 bg-heritage-cream">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {teamCategories.map((category, index) => (
              <CategorySection key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
