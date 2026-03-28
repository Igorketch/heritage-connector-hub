import { Building2, Crown, GraduationCap, Users, Leaf, Heart, HeartPulse, HandHeart, ScrollText } from 'lucide-react';
import { SluggedMember } from '@/components/team/TeamThumbnailGrid';
import { Language } from '@/contexts/LanguageContext';
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import charlottePortrait from '@/assets/charlotte-portrait.jpg';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait-2.png';
import nathaliePortrait from '@/assets/nathalie-kouotou-portrait.jpg';

export interface ConseilMemberWithPlaceholder {
  type: 'member' | 'placeholder';
  member?: SluggedMember;
  placeholder?: { role: string; label: string };
}

export const conseilMembers: Record<Language, SluggedMember[]> = {
  fr: [
    {
      slug: "laurentine-mouchingam",
      name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
      role: "Fondatrice • Présidente",
      portrait: lauretinePortrait,
      bio: [
        "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju' est une experte internationale en égalité, équité, diversité et inclusion (EEDI), spécialisée dans la transformation des politiques publiques, la gouvernance inclusive et le développement international. Anthropologue de formation et leader engagée, elle cumule plus de quinze années d'expérience au sein d'institutions gouvernementales, d'organisations internationales, académiques et d'instances communautaires, au Canada comme à l'international.",
        "Elle occupe actuellement un poste de leadership au sein du gouvernement fédéral du Canada, où elle joue un rôle stratégique dans l'élaboration, la mise en œuvre et le suivi de cadres institutionnels visant à intégrer les principes d'équité, d'inclusion et d'analyse intersectionnelle au cœur des politiques publiques. Elle a notamment contribué à la conception et au déploiement de plans d'action d'envergure en matière d'EEDI, ainsi qu'à l'intégration de l'Analyse comparative entre les sexes plus (ACS+ / GBA+) dans les processus décisionnels gouvernementaux.",
        "Dre Laurentine possède une expertise reconnue à l'intersection des enjeux de genre, de paix et de sécurité, avec une contribution significative à la mise en œuvre de l'agenda international « Femmes, Paix et Sécurité », notamment dans le cadre de la Résolution 1325 du Conseil de sécurité des Nations Unies et de ses résolutions connexes.",
        "Elle possède également une solide expérience en gouvernance stratégique et en développement organisationnel. Fondatrice de l'organisation International Mandjara Heritage, elle en assure l'orientation stratégique, la gouvernance et le rayonnement international. Elle siège à la fois au Conseil d'administration et au Bureau exécutif, contribuant activement à la structuration et à la consolidation de l'organisation.",
        "Engagée de longue date dans les dynamiques communautaires, Dre Laurentine est une actrice influente de la communauté franco-ontarienne, au sein de laquelle elle s'investit depuis plus d'une décennie. Elle a occupé plusieurs fonctions de leadership, notamment comme parent ambassadrice, ainsi qu'au sein de conseils d'administration et de conseils d'école.",
        "Conférencière, auteure et voix engagée, elle développe une réflexion stratégique ancrée dans la décolonisation des savoirs, la transmission intergénérationnelle, la mémoire collective et le dialogue entre les sociétés africaines, diasporiques et occidentales.",
        "Son leadership se situe à la croisée de l'action publique, de l'engagement communautaire, de la gouvernance culturelle et de l'influence internationale.",
        "Au-delà de son parcours institutionnel, Dre Laurentine incarne un leadership profondément ancré dans les dynamiques familiales, culturelles et communautaires. Épouse d'un patriarche issu d'une succession historique s'inscrivant sur plusieurs générations, et mère de quatre enfants, elle mobilise cette expérience comme un espace vivant de leadership, de transmission et de médiation entre héritages culturels et réalités contemporaines."
      ],
      achievements: [
        { icon: Crown, title: "Fondatrice IMH", description: "Fondatrice et Présidente du CA d'International Mandjara Heritage" },
        { icon: Building2, title: "Gouvernement Fédéral", description: "Gestionnaire contribuant aux cadres stratégiques d'équité et d'inclusion au Canada" },
        { icon: GraduationCap, title: "Anthropologue & Experte EEDI", description: "Plus de 15 ans d'expertise en égalité des genres, diversité et inclusion" },
        { icon: Users, title: "Engagement Communautaire", description: "Actrice engagée de la communauté franco-ontarienne, parent ambassadrice et conférencière" }
      ],
      quote: "Un leadership engagé, à la croisée de l'action institutionnelle, de l'engagement communautaire et de la transmission culturelle."
    },
    {
      slug: "eveline-kinyuy",
      name: "Reine Mère Eveline Kinyuy",
      role: "Administratrice • Vice-présidente • Liaison avec la communauté Nso'",
      portrait: evelinePortrait,
      portraitPosition: 'center 20%',
      bio: [
        "La Reine Mère Eveline Kinyuy est une leader communautaire respectée et une figure culturelle engagée, établie à Brampton, en Ontario (Canada). Elle œuvre activement dans les domaines de l'éducation, du soutien communautaire, de la préservation du patrimoine culturel et de la transmission intergénérationnelle des valeurs au sein des communautés africaines et de la diaspora.",
        "Titulaire d'un Master en sciences de l'éducation et d'un diplôme en sociologie, elle possède une formation en tant que conseillère d'orientation et préposée aux services de soutien à la personne. Au sein de l'International Mandjara Heritage, elle est membre du Conseil d'administration et du Bureau exécutif, où elle occupe le poste de Vice-présidente chargée de la liaison avec la communauté Nso'."
      ],
      achievements: [
        { icon: Crown, title: "Reine Mère", description: "Leader communautaire respectée et figure culturelle engagée" },
        { icon: GraduationCap, title: "Master Éducation", description: "Master en sciences de l'éducation et diplôme en sociologie" },
        { icon: Building2, title: "Administratrice", description: "Membre du Conseil d'administration d'International Mandjara Heritage" },
        { icon: HandHeart, title: "Engagement Communautaire", description: "Membre active de Bongkisheri Douala, Nso Family Union Canada et Mandjara du Canada" }
      ],
      quote: "Un parcours dédié à la préservation du patrimoine, à la transmission intergénérationnelle, à la mémoire collective et au service communautaire."
    },
    {
      slug: "charlotte-wirsiy",
      name: "Charlotte Wirsiy",
      role: "Administratrice • Liaison avec la communauté Nso'",
      portrait: charlottePortrait,
      portraitPosition: 'center 20%',
      bio: [
        "Madame Charlotte Wirsiy est une professionnelle dévouée et une défenseure communautaire ayant de l'expérience en développement durable, en résilience communautaire et en soins de santé. Née et élevée au Cameroun, elle a grandi dans un environnement ancré dans la famille, la solidarité et un fort sentiment communautaire — des valeurs qui continuent de façonner son parcours personnel et professionnel.",
        "À l'âge de vingt-trois ans, elle a quitté le Cameroun pour poursuivre des études supérieures à l'étranger, obtenant un master en gestion des catastrophes et développement durable. Cette formation académique a renforcé sa compréhension de la résilience, de la responsabilité et de l'impact social. Après avoir acquis une expérience professionnelle, elle s'est installée au Canada, où elle s'est reconvertie dans le domaine des soins infirmiers, alignant son parcours professionnel avec sa vocation de servir, de prendre soin des autres et de faire une différence significative dans la vie des gens.",
        "Son expérience de la maternité, notamment dans la gestion des défis de santé de son fils, a approfondi son sens de la patience, de la foi et de la force intérieure. Ces expériences de vie continuent d'éclairer son approche compatissante et orientée vers un but dans le service.",
        "Madame Charlotte Wirsiy est présidente et l'une des membres fondatrices de l'association Nso d'Ottawa-Gatineau nommée Nsobahti Canada.",
        "Au sein d'International Mandjara Heritage, Madame Charlotte Wirsiy est membre du Conseil d'administration et représentante de la communauté Nso'. Dans ce rôle, elle contribue au dialogue interculturel, à l'engagement communautaire et à la préservation et la transmission du patrimoine culturel à travers une perspective inclusive et intergénérationnelle.",
        "Son parcours reflète un engagement soutenu envers la famille, la communauté et l'apprentissage tout au long de la vie, fondé sur la conviction que la croissance personnelle et collective évolue avec chaque saison de la vie."
      ],
      achievements: [
        { icon: GraduationCap, title: "Master Développement Durable", description: "Gestion des catastrophes et résilience communautaire" },
        { icon: HeartPulse, title: "Sciences Infirmières", description: "Reconversion professionnelle au Canada, vocation de soin et d'accompagnement" },
        { icon: Building2, title: "Nsobahti Canada", description: "Présidente et membre fondateur de l'Association Nso d'Ottawa-Gatineau" },
        { icon: Crown, title: "Liaison Nso'", description: "Promotion du dialogue interculturel et transmission des valeurs communautaires" }
      ],
      quote: "La croissance personnelle et collective est un processus évolutif nourri par chaque étape de la vie."
    },
    {
      slug: "nathalie-kouotou",
      name: "Nathalie Sandrine Kouotou",
      role: "Administratrice • Secrétaire Générale",
      portrait: nathaliePortrait,
      bio: [
        "Nathalie Sandrine Kouotou est une professionnelle engagée dans la coordination administrative et la gestion organisationnelle. Elle apporte son expertise au service de la structuration et du bon fonctionnement des instances de gouvernance.",
        "Au sein de l'International Mandjara Heritage, elle siège au Conseil d'administration et occupe également le poste de Secrétaire Générale au Bureau exécutif, assurant la coordination administrative, le suivi des dossiers stratégiques et l'organisation des réunions institutionnelles."
      ],
      achievements: [
        { icon: ScrollText, title: "Secrétaire Générale", description: "Coordination administrative et organisationnelle du Bureau exécutif" },
        { icon: Building2, title: "Administratrice", description: "Membre du Conseil d'administration d'International Mandjara Heritage" },
        { icon: Users, title: "Gestion Administrative", description: "Suivi des dossiers stratégiques et organisation des réunions institutionnelles" }
      ],
      quote: "Contribuer à la coordination et au bon fonctionnement de l'organisation pour mieux servir notre mission."
    },
    {
      slug: "aichetou-pouyona",
      name: "Aïchetou Fafa Pouyona",
      role: "Administratrice • Trésorière",
      portrait: aichetouPortrait,
      bio: [
        "Entrepreneure engagée et leader innovante, Aïchetou Fafa Pouyona est spécialisée dans la valorisation durable des ressources naturelles africaines, avec plus de quinze années d'expérience dans l'agroalimentaire, le bien-être, la formation et le développement d'entreprises.",
        "Au sein de l'International Mandjara Heritage, elle met son expertise entrepreneuriale, son sens de la gestion et son engagement communautaire au service de la gouvernance, de la transparence financière et du rayonnement des actions de l'organisation."
      ],
      achievements: [
        { icon: Building2, title: "AF. AGRO-TRADING", description: "Exportation de produits exotiques africains vers le Canada et les marchés internationaux" },
        { icon: Leaf, title: "LAMANJER", description: "Boissons et tisanes à base de plantes médicinales pour le bien-être naturel" },
        { icon: Heart, title: "AF. INSTITUT", description: "Institut de beauté et centre de formation multiculturel" }
      ],
      quote: "Un engagement constant en faveur de l'entrepreneuriat responsable, du bien-être, et du développement durable des communautés."
    }
  ],
  en: [
    {
      slug: "laurentine-mouchingam",
      name: "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
      role: "Founder • Chair",
      portrait: lauretinePortrait,
      bio: [
        "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju' is an international expert in equality, equity, diversity and inclusion (EEDI), specializing in the transformation of public policies, inclusive governance and international development. An anthropologist by training and a committed leader, she has over fifteen years of experience within governmental institutions, international organizations, academic bodies and community organizations, both in Canada and internationally.",
        "She currently holds a leadership position within the Government of Canada, where she plays a strategic role in the development, implementation and monitoring of institutional frameworks aimed at integrating the principles of equity, inclusion and intersectional analysis at the heart of public policies. She has notably contributed to the design and deployment of major EEDI action plans, as well as the integration of Gender-Based Analysis Plus (GBA+) into governmental decision-making processes.",
        "Dr. Laurentine possesses recognized expertise at the intersection of gender, peace and security issues, with a significant contribution to the implementation of the international 'Women, Peace and Security' agenda, particularly within the framework of United Nations Security Council Resolution 1325 and its related resolutions.",
        "She also possesses solid experience in strategic governance and organizational development. Founder of the organization International Mandjara Heritage, she ensures its strategic direction, governance and international outreach. She sits on both the Board of Directors and the Executive Board, actively contributing to the structuring and consolidation of the organization.",
        "Long committed to community dynamics, Dr. Laurentine is an influential figure in the Franco-Ontarian community, in which she has been invested for over a decade. She has held several leadership positions, notably as an ambassador parent, as well as on boards of directors and school councils.",
        "Speaker, author and committed voice, she develops strategic thinking rooted in the decolonization of knowledge, intergenerational transmission, collective memory and dialogue between African, diasporic and Western societies.",
        "Her leadership lies at the crossroads of public action, community engagement, cultural governance and international influence.",
        "Beyond her institutional career, Dr. Laurentine embodies a leadership deeply rooted in family, cultural and community dynamics. Wife of a patriarch from a historical succession spanning several generations, and mother of four children, she mobilizes this experience as a living space of leadership, transmission and mediation between cultural heritages and contemporary realities."
      ],
      achievements: [
        { icon: Crown, title: "IMH Founder", description: "Founder and Chair of the Board of International Mandjara Heritage" },
        { icon: Building2, title: "Federal Government", description: "Manager contributing to strategic equity and inclusion frameworks in Canada" },
        { icon: GraduationCap, title: "Anthropologist & EEDI Expert", description: "Over 15 years of expertise in gender equality, diversity and inclusion" },
        { icon: Users, title: "Community Engagement", description: "Active member of the Franco-Ontarian community, ambassador parent and speaker" }
      ],
      quote: "Committed leadership at the crossroads of institutional action, community engagement and cultural transmission."
    },
    {
      slug: "eveline-kinyuy",
      name: "Queen Mother Eveline Kinyuy",
      role: "Director • Vice-Chair • Nso' Community Liaison",
      portrait: evelinePortrait,
      portraitPosition: 'center 20%',
      bio: [
        "Queen Mother Eveline Kinyuy is a respected community leader and committed cultural figure, based in Brampton, Ontario (Canada). She is actively involved in education, community support, cultural heritage preservation and intergenerational transmission of values within African and diaspora communities.",
        "Holder of a Master's in Education and a diploma in Sociology, she is trained as a guidance counselor and personal support worker. Within International Mandjara Heritage, she serves on the Board of Directors and the Executive Board as Vice-Chair responsible for liaison with the Nso' community."
      ],
      achievements: [
        { icon: Crown, title: "Queen Mother", description: "Respected community leader and committed cultural figure" },
        { icon: GraduationCap, title: "Master's in Education", description: "Master's in Education and diploma in Sociology" },
        { icon: Building2, title: "Director", description: "Member of the Board of Directors of International Mandjara Heritage" },
        { icon: HandHeart, title: "Community Engagement", description: "Active member of Bongkisheri Douala, Nso Family Union Canada and Mandjara du Canada" }
      ],
      quote: "A journey dedicated to heritage preservation, intergenerational transmission, collective memory and community service."
    },
    {
      slug: "charlotte-wirsiy",
      name: "Charlotte Wirsiy",
      role: "Director • Nso' Community Liaison",
      portrait: charlottePortrait,
      portraitPosition: 'center 20%',
      bio: [
        "Ms. Charlotte Wirsiy is a dedicated professional and community advocate with experience in sustainable development, community resilience, and healthcare. Born and raised in Cameroon, she grew up in an environment rooted in family, solidarity, and a strong sense of community—values that continue to shape her personal and professional journey.",
        "At the age of twenty-three, she left Cameroon to pursue graduate studies abroad, earning a Master's degree in Disaster Management and Sustainable Development. This academic training strengthened her understanding of resilience, responsibility, and social impact. After gaining professional experience, she relocated to Canada, where she transitioned into the field of nursing, aligning her career path with her calling to serve, care for others, and make a meaningful difference in people's lives.",
        "Her experience of motherhood, particularly in navigating health-related challenges with her son, deepened her sense of patience, faith, and inner strength. These life experiences continue to inform her compassionate and purpose-driven approach to service.",
        "Ms. Charlotte Wirsiy is president and one of the founding members of the Ottawa-Gatineau Nso association named Nsobahti Canada.",
        "Within International Mandjara Heritage, Ms. Charlotte Wirsiy serves as a Member of the Board of Directors and Representative of the Nso' Community. In this role, she contributes to intercultural dialogue, community engagement, and the preservation and transmission of cultural heritage through an inclusive and intergenerational lens.",
        "Her journey reflects a sustained commitment to family, community, and lifelong learning, grounded in the belief that personal and collective growth evolves with each season of life."
      ],
      achievements: [
        { icon: GraduationCap, title: "Master's in Sustainable Development", description: "Disaster management and community resilience" },
        { icon: HeartPulse, title: "Nursing Sciences", description: "Professional transition in Canada, vocation for care and support" },
        { icon: Building2, title: "Nsobahti Canada", description: "President and founding member of the Ottawa-Gatineau Nso association" },
        { icon: Crown, title: "Nso' Liaison", description: "Promotion of intercultural dialogue and transmission of community values" }
      ],
      quote: "Personal and collective growth is an evolving process nourished by every stage of life."
    },
    {
      slug: "nathalie-kouotou",
      name: "Nathalie Sandrine Kouotou",
      role: "Director • Secretary General",
      portrait: nathaliePortrait,
      bio: [
        "Nathalie Sandrine Kouotou is a committed professional in administrative coordination and organizational management. She brings her expertise to the structuring and smooth functioning of governance bodies.",
        "Within International Mandjara Heritage, she serves on the Board of Directors and also holds the position of Secretary General on the Executive Board, ensuring administrative coordination, strategic file management and the organization of institutional meetings."
      ],
      achievements: [
        { icon: ScrollText, title: "Secretary General", description: "Administrative and organizational coordination of the Executive Board" },
        { icon: Building2, title: "Director", description: "Member of the Board of Directors of International Mandjara Heritage" },
        { icon: Users, title: "Administrative Management", description: "Strategic file management and organization of institutional meetings" }
      ],
      quote: "Contributing to the coordination and smooth functioning of the organization to better serve our mission."
    },
    {
      slug: "aichetou-pouyona",
      name: "Aïchetou Fafa Pouyona",
      role: "Director • Treasurer",
      portrait: aichetouPortrait,
      bio: [
        "A committed entrepreneur and innovative leader, Aïchetou Fafa Pouyona specializes in the sustainable valorization of African natural resources, with over fifteen years of experience in agri-food, wellness, training and business development.",
        "Within International Mandjara Heritage, she brings her entrepreneurial expertise, management skills and community commitment to governance, financial transparency and the organization's outreach."
      ],
      achievements: [
        { icon: Building2, title: "AF. AGRO-TRADING", description: "Export of exotic African products to Canada and international markets" },
        { icon: Leaf, title: "LAMANJER", description: "Beverages and herbal teas from medicinal plants for natural wellness" },
        { icon: Heart, title: "AF. INSTITUT", description: "Beauty institute and multicultural training center" }
      ],
      quote: "A constant commitment to responsible entrepreneurship, wellness, and sustainable community development."
    }
  ]
};

export const conseilPlaceholder: Record<Language, { role: string; label: string }> = {
  fr: { role: "Administratrice (Bafia)", label: "À venir" },
  en: { role: "Director (Bafia)", label: "Coming soon" }
};
