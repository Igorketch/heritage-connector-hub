import { motion } from 'framer-motion';
import { Users, Award, Building2, Heart, Leaf, Globe, HandHeart, MapPin, BookOpen, Languages, Crown, ScrollText, Stethoscope, Sparkles, GraduationCap, Briefcase, Plane, Palette, HeartPulse, Star, UserCheck } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import persidePortrait from '@/assets/perside-portrait.png';
import ncharePortrait from '@/assets/nchare-portrait.png';
import reginaPortrait from '@/assets/regina-portrait.png';
import pepertuaPortrait from '@/assets/pepertua-portrait-refined.jpeg';
import ousmanouPortrait from '@/assets/ousmanou-portrait.jpg';
import sylviePortrait from '@/assets/sylvie-portrait.jpg';
import charlottePortrait from '@/assets/charlotte-portrait.jpg';
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import elizabethPortrait from '@/assets/elizabeth-mbanka.png';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait.jpg';

interface Achievement {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  portrait: string;
  portraitPosition?: string;
  bio: string[];
  achievements: Achievement[];
  quote: string;
}

interface TeamCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  members: TeamMember[];
}

// Conseil d'Administration members
const conseilAdministration: TeamMember[] = [
  {
    name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
    role: "Fondatrice • Présidente",
    portrait: lauretinePortrait,
    bio: [
      "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju' est une experte internationale en égalité des genres, équité, diversité et inclusion (EEDI), anthropologue de formation et leader engagée en développement international, justice sociale et leadership inclusif. Elle cumule plus de quinze années d'expérience au sein d'institutions gouvernementales, académiques et communautaires.",
      "Fondatrice de l'International Mandjara Heritage, elle siège à la fois au Conseil d'administration et au Bureau exécutif, assurant l'orientation stratégique, la gouvernance et le rayonnement international de l'organisation. Conférencière, auteure et activiste communautaire, elle œuvre à la décolonisation des savoirs et au dialogue entre les communautés africaines et diasporiques."
    ],
    achievements: [
      {
        icon: Crown,
        title: "Fondatrice IMH",
        description: "Fondatrice et Présidente du CA d'International Mandjara Heritage"
      },
      {
        icon: Building2,
        title: "Gouvernement Fédéral",
        description: "Gestionnaire contribuant aux cadres stratégiques d'équité et d'inclusion au Canada"
      },
      {
        icon: GraduationCap,
        title: "Anthropologue & Experte EEDI",
        description: "Plus de 15 ans d'expertise en égalité des genres, diversité et inclusion"
      },
      {
        icon: Users,
        title: "Engagement Communautaire",
        description: "Actrice engagée de la communauté franco-ontarienne, parent ambassadrice et conférencière"
      }
    ],
    quote: "Un leadership engagé, à la croisée de l'action institutionnelle, de l'engagement communautaire et de la transmission culturelle."
  },
  {
    name: "Madame Aïchetou",
    role: "Trésorière",
    portrait: aichetouPortrait,
    bio: [
      "Entrepreneure engagée et leader innovante, Madame Aïchetou est spécialisée dans la valorisation durable des ressources naturelles africaines, avec plus de quinze années d'expérience dans l'agroalimentaire, le bien-être, la formation et le développement d'entreprises.",
      "Au sein de l'International Mandjara Heritage, elle met son expertise entrepreneuriale, son sens de la gestion et son engagement communautaire au service de la gouvernance, de la transparence financière et du rayonnement des actions de l'organisation."
    ],
    achievements: [
      {
        icon: Building2,
        title: "AF. AGRO-TRADING",
        description: "Exportation de produits exotiques africains vers le Canada et les marchés internationaux"
      },
      {
        icon: Leaf,
        title: "LAMANJER",
        description: "Boissons et tisanes à base de plantes médicinales pour le bien-être naturel"
      },
      {
        icon: Heart,
        title: "AF. INSTITUT",
        description: "Institut de beauté et centre de formation multiculturel"
      }
    ],
    quote: "Un engagement constant en faveur de l'entrepreneuriat responsable, du bien-être, et du développement durable des communautés."
  },
  {
    name: "Charlotte Wirsiy",
    role: "Membre du CA • Représentante Nso'",
    portrait: charlottePortrait,
    bio: [
      "Madame Charlotte Wirsiy est une professionnelle engagée et une actrice communautaire investie dans les domaines du développement durable, de la résilience communautaire et du soin aux personnes. Née et élevée au Cameroun, elle a grandi dans un environnement marqué par la famille, la solidarité et un fort sentiment d'appartenance communautaire.",
      "Titulaire d'un master en gestion des catastrophes et développement durable, elle s'est ensuite reconvertie vers les sciences infirmières au Canada, alignant son parcours avec sa vocation de service et d'accompagnement humain. Au sein d'International Mandjara Heritage, elle contribue à la promotion du dialogue interculturel et à la valorisation des patrimoines culturels dans une perspective inclusive et intergénérationnelle."
    ],
    achievements: [
      {
        icon: GraduationCap,
        title: "Master Développement Durable",
        description: "Gestion des catastrophes et résilience communautaire"
      },
      {
        icon: HeartPulse,
        title: "Sciences Infirmières",
        description: "Reconversion professionnelle au Canada, vocation de soin et d'accompagnement"
      },
      {
        icon: Users,
        title: "Conseil d'Administration",
        description: "Membre du CA d'International Mandjara Heritage"
      },
      {
        icon: Crown,
        title: "Représentante Nso'",
        description: "Promotion du dialogue interculturel et transmission des valeurs communautaires"
      }
    ],
    quote: "La croissance personnelle et collective est un processus évolutif nourri par chaque étape de la vie."
  },
  {
    name: "Reine Mère Eveline Kinyuy",
    role: "Membre du CA • Vice-Présidente Liaison Nso'",
    portrait: evelinePortrait,
    portraitPosition: 'center 20%',
    bio: [
      "La Reine Mère Eveline Kinyuy est une leader communautaire respectée et une figure culturelle engagée, établie à Brampton, en Ontario (Canada). Elle œuvre activement dans les domaines de l'éducation, du soutien communautaire, de la préservation du patrimoine culturel et de la transmission intergénérationnelle des valeurs.",
      "Au sein de l'International Mandjara Heritage, elle est membre du Conseil d'administration et du Bureau exécutif, où elle occupe le poste de Vice-présidente chargée de la liaison avec la communauté Nso'."
    ],
    achievements: [
      { icon: Crown, title: "Reine Mère", description: "Leader communautaire respectée et figure culturelle engagée" },
      { icon: GraduationCap, title: "Master Éducation", description: "Master en sciences de l'éducation et diplôme en sociologie" },
      { icon: Building2, title: "Membre du CA", description: "Membre du Conseil d'administration d'International Mandjara Heritage" },
      { icon: HandHeart, title: "Engagement Communautaire", description: "Membre active de Bongkisheri Douala, Nso Family Union Canada et Mandjara du Canada" }
    ],
    quote: "Un parcours dédié à la préservation du patrimoine, à la transmission intergénérationnelle et au service communautaire."
  }
];

// Représentants nationaux
const representantsNationaux: TeamMember[] = [
  {
    name: "Regina Fonyuy Wirba",
    role: "Représentante Pays • Cameroun • Communauté Nso'",
    portrait: reginaPortrait,
    portraitPosition: 'center 20%',
    bio: [
      "L'honorable Reine mère Regina Fonyuy Wirba est une infirmière anesthésiste engagée et une figure communautaire respectée, originaire de Jakiri, au sein de la communauté Nso'. Elle conjugue expertise professionnelle en santé et engagement communautaire au service du bien-être et de l'autonomisation des femmes.",
      "En reconnaissance de son dévouement et de son rôle fédérateur, elle a été honorée du titre de « Reine Mère de Bongkisheri Douala », une distinction symbolisant sa sagesse, son sens du service et son influence positive au sein de la communauté."
    ],
    achievements: [
      {
        icon: Stethoscope,
        title: "Infirmière Anesthésiste",
        description: "Expertise professionnelle en santé au service du bien-être communautaire"
      },
      {
        icon: Crown,
        title: "Reine Mère Mbinkar",
        description: "Titre honorifique de Reine Mère de Bongkisheri Douala pour son leadership"
      },
      {
        icon: Users,
        title: "Association Femmes Nso'",
        description: "Présidente 2015-2021 de l'Association des Femmes Nso' de Bongkisheri Douala"
      },
      {
        icon: Sparkles,
        title: "ASMADLA",
        description: "Membre du Bureau exécutif de l'Association Mandjara de Douala"
      }
    ],
    quote: "Un engagement profond en faveur de la santé, de la dignité humaine et de la transmission des valeurs culturelles."
  },
  {
    name: "Madame Ngameyet épouse Mouliom Perside",
    role: "Représentante Pays • Cameroun",
    portrait: persidePortrait,
    bio: [
      "Leader sociale et communautaire engagée, Madame Perside œuvre activement au Cameroun pour la promotion de la solidarité, de l'inclusion sociale et de l'autonomisation des femmes. Elle contribue au développement et à la mise en œuvre d'initiatives culturelles et sociales favorisant le dialogue interculturel et le vivre-ensemble.",
      "Présidente de plusieurs associations caritatives et sociales, elle œuvre principalement à l'amélioration des conditions de vie des jeunes filles, des femmes et de leurs familles. Membre fondatrice de l'Association Mandjara de Douala (ASMADLA), elle promeut la cohésion communautaire entre les trois peuples frères — Bamoun, Bafia et Nso'."
    ],
    achievements: [
      {
        icon: Globe,
        title: "Représentante Pays",
        description: "International Mandjara Heritage au Cameroun, développement d'initiatives culturelles"
      },
      {
        icon: Users,
        title: "ASMADLA",
        description: "Membre fondatrice de l'Association Mandjara de Douala pour la cohésion communautaire"
      },
      {
        icon: HandHeart,
        title: "Leadership Social",
        description: "Présidente d'associations caritatives pour l'autonomisation des femmes"
      },
      {
        icon: MapPin,
        title: "Engagement Commonwealth",
        description: "Participation aux dynamiques de collaboration et renforcement des capacités"
      }
    ],
    quote: "Promouvoir l'amour du prochain, la solidarité et les échanges d'expériences culturelles pour un impact social durable."
  },
  {
    name: "Professeure Pepertua K. Nkamanyang Lola",
    role: "Représentante Pays • Cameroun/Nigeria",
    portrait: pepertuaPortrait,
    bio: [
      "La professeure Pepertua K. Nkamanyang Lola est une universitaire, écrivaine et intellectuelle publique de renom, spécialisée en études littéraires et culturelles anglophones. Elle cumule plus de vingt-cinq années d'expérience dans l'enseignement supérieur, la recherche académique et le leadership institutionnel, avec des engagements professionnels au Cameroun, au Nigeria et à l'international.",
      "Autrice primée, poétesse et romancière, elle a reçu en 2014 un prix littéraire pour son ouvrage The Lock on My Lips. Au sein d'International Mandjara Heritage, elle met son expertise académique, son leadership intellectuel et son engagement culturel au service de la promotion du dialogue interculturel, du patrimoine africain et de la transmission intergénérationnelle des savoirs."
    ],
    achievements: [
      {
        icon: Award,
        title: "Prix Littéraire 2014",
        description: "Lauréate pour son ouvrage 'The Lock on My Lips' sur l'égalité des genres"
      },
      {
        icon: BookOpen,
        title: "Universitaire & Chercheuse",
        description: "Plus de 25 ans d'expérience en études littéraires et culturelles anglophones"
      },
      {
        icon: Globe,
        title: "Représentante Pays",
        description: "International Mandjara Heritage au Cameroun et au Nigeria"
      },
      {
        icon: Users,
        title: "Engagement Culturel",
        description: "Promotion du dialogue interculturel et valorisation des voix africaines"
      }
    ],
    quote: "Un engagement constant en faveur de l'éducation, de la préservation culturelle et de la valorisation des voix africaines."
  }
];

// Comité des sages
const comiteSages: TeamMember[] = [
  {
    name: "NJI Ncharé Oumarou",
    role: "Conseiller",
    portrait: ncharePortrait,
    bio: [
      "Figure majeure de la préservation et de la transmission du patrimoine culturel Bamoun, Monsieur Ncharé Oumarou occupe le poste de Directeur des Affaires administratives et culturelles du Palais des Rois Bamoun, où il œuvre depuis plusieurs décennies à la sauvegarde et à la diffusion de l'héritage historique du Royaume Bamoun.",
      "Linguiste, archiviste et muséologue, il est reconnu comme spécialiste de l'écriture Shu-Mom et des langues inventées par le Roi Njoya. Co-traducteur du Saint Coran en langue bamoun, il contribue à la transmission intergénérationnelle des savoirs Bamoun."
    ],
    achievements: [
      {
        icon: Crown,
        title: "Palais des Rois Bamoun",
        description: "Directeur des Affaires administratives et culturelles depuis plusieurs décennies"
      },
      {
        icon: Languages,
        title: "Écriture Shu-Mom",
        description: "Spécialiste des langues inventées par le Roi Njoya et traducteur du Coran en bamoun"
      },
      {
        icon: BookOpen,
        title: "Archiviste & Muséologue",
        description: "Conservation et interprétation des manuscrits royaux du Royaume Bamoun"
      },
      {
        icon: ScrollText,
        title: "Comité des Sages",
        description: "Conseiller apportant expertise historique et sagesse aux orientations de l'organisation"
      }
    ],
    quote: "Une mémoire vivante au service de la culture, de l'histoire et de l'identité des peuples."
  },
  {
    name: "Sylvie Mouchingam épouse Tabue",
    role: "Conseillère",
    portrait: sylviePortrait,
    bio: [
      "Sylvie Mouchingam épouse Tabue est une entrepreneure, dirigeante et actrice communautaire engagée, reconnue pour sa capacité à articuler leadership stratégique, engagement socioculturel et sens profond du service.",
      "Fondatrice et PDG de Mandjara Travel et Mandjara Arts, elle contribue à la promotion des arts, de la culture et à la valorisation du patrimoine. Au sein d'International Mandjara Heritage, elle siège comme conseillère au Comité des sages, accompagnant la vision, l'orientation éthique et la transmission des valeurs fondamentales de l'institution."
    ],
    achievements: [
      {
        icon: Plane,
        title: "Mandjara Travel",
        description: "Fondatrice et PDG, services de transport aérien et mobilité internationale"
      },
      {
        icon: Palette,
        title: "Mandjara Arts",
        description: "Fondatrice et PDG, promotion des arts et valorisation du patrimoine culturel"
      },
      {
        icon: Users,
        title: "Bureau Exécutif",
        description: "Membre du Bureau exécutif de Mandjara Douala, coordination des initiatives"
      },
      {
        icon: ScrollText,
        title: "Comité des Sages",
        description: "Conseillère pour la vision éthique et la transmission intergénérationnelle"
      }
    ],
    quote: "Un leadership fondé sur le service, la foi, la responsabilité sociale et l'impact durable."
  },
  {
    name: "Nji Ousmanou NGAM",
    role: "Conseiller",
    portrait: ousmanouPortrait,
    bio: [
      "Ousmanou NGAM est titulaire d'un Executive MBA de l'Université du Québec à Montréal et d'un Advanced Management Programme de l'ESSEC de Paris. En tant que Président de Global Trade Logistics Canada Inc, il a notamment orchestré l'acquisition du laboratoire de Cosmétique Capillaire KARILISS Inc.",
      "Avant son installation au Canada, il a dirigé plusieurs entreprises en Afrique, en Europe et en Chine. Son engagement actif en tant qu'administrateur au sein de la fondation MMS, ainsi que ses interventions comme éducateur à l'école TEFLER de l'Université d'Ottawa, soulignent son dévouement envers des causes philanthropiques et éducatives."
    ],
    achievements: [
      {
        icon: Building2,
        title: "Global Trade Logistics Canada",
        description: "Président et acquisition du laboratoire KARILISS Inc"
      },
      {
        icon: GraduationCap,
        title: "Formation d'Excellence",
        description: "Executive MBA (UQÀM) et Advanced Management Programme (ESSEC Paris)"
      },
      {
        icon: HandHeart,
        title: "Fondation MMS",
        description: "Administrateur de la fondation Mère du Monde pour la Santé"
      },
      {
        icon: Briefcase,
        title: "Réseaux d'Affaires",
        description: "Membre des Chambres de Commerce de Montréal, Laval et Sainte-Thérèse-Blainville"
      }
    ],
    quote: "Un dévouement envers des causes philanthropiques, éducatives et le développement des échanges internationaux."
  }
];

// Membres d'honneur
const membresHonneur: TeamMember[] = [
  {
    name: "Madame Banka Liza Bernsa",
    role: "Représentante Pays • États-Unis",
    portrait: elizabethPortrait,
    bio: [
      "Madame Banka Liza Bernsa est une actrice communautaire engagée et une leader associative reconnue, œuvrant activement à la promotion de la culture, de la solidarité et du vivre-ensemble au sein des communautés de la diaspora.",
      "Ancienne présidente de l'association Bongkisheri Littoral et vice-présidente pionnière de l'ASMADLA, elle agit comme mémoire institutionnelle et corporative du mouvement Mandjara au Cameroun."
    ],
    achievements: [
      {
        icon: Award,
        title: "Membre d'honneur IMH",
        description: "Reconnaissance pour sa contribution exceptionnelle au mouvement Mandjara"
      },
      {
        icon: Globe,
        title: "Représentante Pays • États-Unis",
        description: "Rayonnement international et liens entre diaspora et Cameroun"
      },
      {
        icon: Users,
        title: "ASMADLA",
        description: "Vice-présidente pionnière de l'Association Mandjara de Douala"
      },
      {
        icon: HandHeart,
        title: "Bongkisheri Littoral",
        description: "Ancienne présidente, structuration communautaire et valorisation culturelle"
      }
    ],
    quote: "Un engagement constant au service de la culture, de la mémoire collective et de l'unité des peuples."
  }
];

// Categories structure
const teamCategoriesData: Record<Language, TeamCategory[]> = {
  fr: [
    { id: "parrains", title: "Parrains", subtitle: "Personnalités de marque soutenant notre mission", icon: Star, members: [] },
    { id: "membres-honneur", title: "Membres d'honneur", subtitle: "Reconnus pour leur contribution exceptionnelle", icon: Award, members: membresHonneur },
    { id: "conseil-administration", title: "Conseil d'Administration", subtitle: "Direction stratégique et gouvernance de l'organisation", icon: Building2, members: conseilAdministration },
    { id: "bureau-executif", title: "Bureau Exécutif", subtitle: "Coordination opérationnelle des activités", icon: Briefcase, members: [
      {
        name: "Reine Mère Eveline Kinyuy",
        role: "Vice-Présidente • Liaison Communauté Nso'",
        portrait: evelinePortrait,
        portraitPosition: 'center 20%',
        bio: [
          "La Reine Mère Eveline Kinyuy est une leader communautaire respectée et une figure culturelle engagée, établie à Brampton, en Ontario (Canada).",
          "Au sein du Bureau exécutif, elle joue un rôle clé dans la préservation du patrimoine culturel et la liaison avec la communauté Nso'."
        ],
        achievements: [
          { icon: Crown, title: "Reine Mère", description: "Leader communautaire respectée" },
          { icon: Briefcase, title: "Vice-Présidente", description: "Chargée de la liaison avec la communauté Nso'" },
          { icon: GraduationCap, title: "Master Éducation", description: "Sciences de l'éducation et sociologie" },
          { icon: HandHeart, title: "Engagement Communautaire", description: "Bongkisheri Douala, Nso Family Union Canada, Mandjara du Canada" }
        ],
        quote: "Un parcours dédié à la préservation du patrimoine et au service communautaire."
      }
    ]},
    { id: "representants-nationaux", title: "Représentants nationaux", subtitle: "Ambassadeurs du patrimoine Mandjara à travers le monde", icon: Globe, members: representantsNationaux },
    { id: "comite-sages", title: "Comité des Sages", subtitle: "Gardiens de la sagesse et de la tradition", icon: ScrollText, members: comiteSages }
  ],
  en: [
    { id: "parrains", title: "Patrons", subtitle: "Distinguished figures supporting our mission", icon: Star, members: [] },
    { id: "membres-honneur", title: "Honorary Members", subtitle: "Recognized for their outstanding contribution", icon: Award, members: membresHonneur },
    { id: "conseil-administration", title: "Board of Directors", subtitle: "Strategic direction and governance of the organization", icon: Building2, members: conseilAdministration },
    { id: "bureau-executif", title: "Executive Board", subtitle: "Operational coordination of activities", icon: Briefcase, members: [
      {
        name: "Queen Mother Eveline Kinyuy",
        role: "Vice-President • Nso' Community Liaison",
        portrait: evelinePortrait,
        portraitPosition: 'center 20%',
        bio: [
          "Queen Mother Eveline Kinyuy is a respected community leader and committed cultural figure, based in Brampton, Ontario (Canada).",
          "Within the Executive Board, she plays a key role in cultural heritage preservation and liaison with the Nso' community."
        ],
        achievements: [
          { icon: Crown, title: "Queen Mother", description: "Respected community leader" },
          { icon: Briefcase, title: "Vice-President", description: "Responsible for liaison with the Nso' community" },
          { icon: GraduationCap, title: "Master's in Education", description: "Education and Sociology" },
          { icon: HandHeart, title: "Community Engagement", description: "Bongkisheri Douala, Nso Family Union Canada, Mandjara du Canada" }
        ],
        quote: "A journey dedicated to heritage preservation and community service."
      }
    ]},
    { id: "representants-nationaux", title: "National Representatives", subtitle: "Ambassadors of Mandjara heritage around the world", icon: Globe, members: representantsNationaux },
    { id: "comite-sages", title: "Council of Elders", subtitle: "Guardians of wisdom and tradition", icon: ScrollText, members: comiteSages }
  ]
};

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className={`grid lg:grid-cols-5 gap-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Portrait */}
        <div className={`lg:col-span-2 relative ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden">
            <img
              src={member.portrait}
              alt={`${member.name} - ${member.role}`}
               className="w-full h-full object-cover"
               style={{ objectPosition: member.portraitPosition || 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/60 via-transparent to-transparent" />
            
            {/* Name overlay on mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
              <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-heritage-gold font-medium text-sm">
                {member.role}
              </p>
            </div>
          </div>
          
          {/* Decorative corner */}
          <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} w-16 h-16 ${isEven ? 'border-l-4 border-t-4' : 'border-r-4 border-t-4'} border-heritage-gold/50`} />
        </div>

        {/* Biography content */}
        <div className={`lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
          {/* Name - desktop only */}
          <div className="hidden lg:block mb-6">
            <h3 className="font-playfair text-3xl xl:text-4xl font-bold text-heritage-brown mb-2">
              {member.name}
            </h3>
            <p className="text-heritage-terracotta font-medium text-lg">
              {member.role}
            </p>
          </div>

          <div className="space-y-4 text-heritage-brown/80 leading-relaxed mb-8">
            {member.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Achievements grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {member.achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-heritage-cream/50 rounded-xl hover:bg-heritage-cream transition-colors"
              >
                <div className="w-10 h-10 bg-heritage-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-5 h-5 text-heritage-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold text-heritage-brown text-sm">
                    {achievement.title}
                  </h4>
                  <p className="text-heritage-brown/60 text-xs mt-1">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-6 border-t border-heritage-gold/20"
          >
            <p className="italic text-heritage-brown/70">
              "{member.quote}"
            </p>
          </motion.blockquote>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category, globalIndex }: { category: TeamCategory; globalIndex: number }) => {
  const { t } = useLanguage();
  const IconComponent = category.icon;
  const hasMembers = category.members.length > 0;
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-20"
      id={category.id}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-heritage-gold/20 rounded-xl flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-heritage-terracotta" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-heritage-brown">
            {category.title}
          </h2>
        </div>
        <p className="text-heritage-brown/70 text-lg max-w-2xl mx-auto">
          {category.subtitle}
        </p>
        <div className="w-24 h-1 bg-heritage-gold/40 mx-auto mt-6 rounded-full" />
      </motion.div>

      {hasMembers ? (
        <div className="space-y-12">
          {category.members.map((member, index) => (
            <TeamMemberCard 
              key={member.name} 
              member={member} 
              index={globalIndex + index} 
            />
          ))}
        </div>
      ) : (
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
            {t('team.coming_soon')}
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

const TeamPage = () => {
  const { language, t } = useLanguage();
  const teamCategories = teamCategoriesData[language];
  let globalIndex = 0;
  
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
            {teamCategories.map((category) => {
              const currentIndex = globalIndex;
              globalIndex += category.members.length;
              return (
                <CategorySection 
                  key={category.id} 
                  category={category} 
                  globalIndex={currentIndex}
                />
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
