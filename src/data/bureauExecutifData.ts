import { Briefcase, Crown, GraduationCap, Building2, HandHeart, Globe, Stethoscope, Sparkles, Heart, Leaf, Award, ScrollText } from 'lucide-react';
import { TeamMember } from '@/components/team/TeamMemberCard';
import { Language } from '@/contexts/LanguageContext';
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait-2.png';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import nathaliePortrait from '@/assets/nathalie-kouotou-portrait.jpg';
import walyPortrait from '@/assets/waly-faye-portrait.jpg';
import liliStephaniePortrait from '@/assets/lili-stephanie-portrait.jpg';
import henriLeyamPortrait from '@/assets/henri-leyam-tolale-portrait.png';

export interface BureauMember extends TeamMember {
  slug: string;
}

export const bureauData: Record<Language, BureauMember[]> = {
  fr: [
    {
      slug: "laurentine-mouchingam",
      name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
      role: "Présidente",
      portrait: lauretinePortrait,
      bio: [
        "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju' est une experte internationale en égalité, équité, diversité et inclusion (EEDI), spécialisée dans la transformation des politiques publiques, la gouvernance inclusive et le développement international. Anthropologue de formation et leader engagée, elle cumule plus de quinze années d'expérience au sein d'institutions gouvernementales, d'organisations internationales, académiques et d'instances communautaires, au Canada comme à l'international.",
        "Elle occupe actuellement un poste de leadership au sein du gouvernement fédéral du Canada, où elle joue un rôle stratégique dans l'élaboration, la mise en œuvre et le suivi de cadres institutionnels visant à intégrer les principes d'équité, d'inclusion et d'analyse intersectionnelle au cœur des politiques publiques. Elle a notamment contribué à la conception et au déploiement de plans d'action d'envergure en matière d'EEDI, ainsi qu'à l'intégration de l'Analyse comparative entre les sexes plus (ACS+ / GBA+) dans les processus décisionnels gouvernementaux. Son approche se distingue par une articulation rigoureuse entre politiques publiques, savoirs académiques et réalités communautaires, favorisant des transformations institutionnelles durables.",
        "Dre Laurentine possède une expertise reconnue à l'intersection des enjeux de genre, de paix et de sécurité, avec une contribution significative à la mise en œuvre de l'agenda international « Femmes, Paix et Sécurité », notamment dans le cadre de la Résolution 1325 du Conseil de sécurité des Nations Unies et de ses résolutions connexes. À ce titre, elle a joué un rôle stratégique dans le développement, la coordination et le suivi de politiques et programmes intégrant les principes de participation, de protection et de prévention. Son action contribue à renforcer l'intégration du genre dans les initiatives de paix, de sécurité et de gouvernance, dans une dynamique d'influence institutionnelle visant à transformer durablement les approches en matière de sécurité inclusive et de leadership des femmes.",
        "Elle possède également une solide expérience en gouvernance stratégique et en développement organisationnel. Fondatrice de l'organisation International Mandjara Heritage, elle en assure l'orientation stratégique, la gouvernance et le rayonnement international. Elle siège à la fois au Conseil d'administration et au Bureau exécutif, contribuant activement à la structuration et à la consolidation de l'organisation. Elle est également membre du Bureau exécutif de Mandjara Douala, dont elle a été une actrice clé dès les phases fondatrices, participant à la mise en place des premières orientations stratégiques et opérationnelles.",
        "Engagée de longue date dans les dynamiques communautaires, Dre Laurentine est une actrice influente de la communauté franco-ontarienne, au sein de laquelle elle s'investit depuis plus d'une décennie. Elle a occupé plusieurs fonctions de leadership, notamment comme parent ambassadrice, ainsi qu'au sein de conseils d'administration et de conseils d'école, à des postes de présidence et de représentation. À travers ces engagements, elle contribue activement au renforcement du partenariat école-famille, à la promotion de la réussite éducative et à l'ancrage d'approches inclusives et participatives.",
        "Conférencière, auteure et voix engagée, elle développe une réflexion stratégique ancrée dans la décolonisation des savoirs, la transmission intergénérationnelle, la mémoire collective et le dialogue entre les sociétés africaines, diasporiques et occidentales. Son travail vise à créer des ponts durables entre les institutions, les communautés et les systèmes de savoirs, afin de favoriser des transformations équitables et durables à l'échelle locale et internationale.",
        "Son leadership se situe à la croisée de l'action publique, de l'engagement communautaire, de la gouvernance culturelle et de l'influence internationale.",
        "Au-delà de son parcours institutionnel, Dre Laurentine incarne un leadership profondément ancré dans les dynamiques familiales, culturelles et communautaires. Épouse d'un patriarche issu d'une succession historique s'inscrivant sur plusieurs générations, et mère de quatre enfants, elle mobilise cette expérience comme un espace vivant de leadership, de transmission et de médiation entre héritages culturels et réalités contemporaines. Cette posture singulière nourrit son approche des politiques publiques et du développement international, en intégrant les logiques de gouvernance traditionnelle, les enjeux de transmission intergénérationnelle et les structures sociales qui façonnent durablement les sociétés. Elle apporte ainsi une compréhension fine, enracinée dans une lecture anthropologique des dynamiques sociales, qui lui permet de conjuguer rigueur analytique, sensibilité culturelle et profondeur stratégique dans l'ensemble de ses interventions."
      ],
      achievements: [
        { icon: Stethoscope, title: "Experte EEDI", description: "Experte internationale en égalité des genres, équité, diversité et inclusion" },
        { icon: GraduationCap, title: "Anthropologue", description: "Formation en anthropologie et développement international" },
        { icon: Globe, title: "Leadership International", description: "Plus de 15 années d'expérience au sein d'institutions gouvernementales et académiques" },
        { icon: Sparkles, title: "Fondatrice", description: "Fondatrice de l'International Mandjara Heritage" }
      ],
      quote: "Œuvrer à la décolonisation des savoirs et au dialogue entre les communautés africaines et diasporiques."
    },
    {
      slug: "lili-stephanie-dondjio",
      name: "Lili Stéphanie Dondjio O.",
      role: "Assistante exécutive de la Présidente",
      portrait: liliStephaniePortrait,
      bio: [
        "Lili Stéphanie Dondjio O. est une professionnelle bilingue (français–anglais) chevronnée en administration et en coordination stratégique, comptant plus de huit années d'expérience dans des environnements institutionnels, corporatifs et multiculturels. Elle occupe actuellement le poste d'assistante exécutive de la Présidente au sein de International Mandjara Heritage, où elle contribue activement à la structuration et au rayonnement des initiatives de l'organisation.",
        "Titulaire d'un Master en traduction anglais/français de l'Université de Buea, elle possède une solide expertise en communication, en gestion administrative et en appui aux hautes instances décisionnelles. Son parcours professionnel inclut des fonctions clés au sein du Ministère de la Santé Publique du Cameroun, où elle a assuré la coordination administrative et la traduction de documents stratégiques pour des partenaires internationaux tels que l'OMS et l'UNICEF. Elle a également occupé des postes d'assistante exécutive et d'assistante de direction dans le secteur privé, où elle s'est distinguée par sa capacité à optimiser les processus, réduire les coûts et améliorer la performance organisationnelle.",
        "Dans son rôle actuel, Lili Stéphanie assure la gestion de l'agenda présidentiel, la préparation et le suivi des réunions stratégiques, ainsi que la coordination des communications internes et externes. Elle agit comme point de liaison avec le Conseil d'administration et les partenaires institutionnels, tout en apportant un soutien direct aux dossiers stratégiques de la Présidence. Son sens aigu de la confidentialité, sa rigueur organisationnelle et sa capacité à évoluer dans des environnements complexes font d'elle un pilier essentiel au fonctionnement exécutif de l'organisation.",
        "Engagée à titre bénévole, elle incarne pleinement les valeurs de International Mandjara Heritage, notamment la valorisation du patrimoine, la transmission intergénérationnelle, la décolonisation des savoirs et l'engagement communautaire et international. Son leadership collaboratif, son intelligence émotionnelle et son orientation vers l'excellence du service renforcent sa contribution à la mission et à la vision de l'organisation.",
        "Parallèlement à ses fonctions, elle poursuit un perfectionnement en gestion des ressources humaines et de la paie au Canada, témoignant de sa volonté constante d'évolution professionnelle et de renforcement de ses compétences."
      ],
      achievements: [
        { icon: Briefcase, title: "Assistante exécutive", description: "Assistante exécutive de la Présidente d'International Mandjara Heritage" },
        { icon: GraduationCap, title: "Master en traduction", description: "Master en traduction anglais/français de l'Université de Buea" },
        { icon: Globe, title: "Expérience internationale", description: "Plus de 8 ans d'expérience en coordination avec l'OMS, l'UNICEF et le secteur privé" },
        { icon: ScrollText, title: "Coordination stratégique", description: "Gestion de l'agenda présidentiel et liaison avec le Conseil d'administration" }
      ],
      quote: "Servir avec rigueur, discrétion et excellence pour faire rayonner la mission de l'organisation."
    },
    {
      slug: "eveline-kinyuy",
      name: "Reine Mère Eveline Kinyuy",
      role: "Vice-Présidente • Chargée de la liaison avec la Communauté Nso'",
      portrait: evelinePortrait,
      portraitPosition: 'center 20%',
      bio: [
        "La Reine Mère Eveline Kinyuy est une leader communautaire respectée et une figure culturelle engagée, établie à Brampton, en Ontario (Canada). Elle œuvre activement dans les domaines de l'éducation, du soutien communautaire, de la préservation du patrimoine culturel et de la transmission intergénérationnelle des valeurs au sein des communautés africaines et de la diaspora.",
        "Titulaire d'un Master en sciences de l'éducation et d'un diplôme en sociologie, elle possède une formation en tant que conseillère d'orientation et préposée aux services de soutien à la personne. Au sein du Bureau exécutif, elle joue un rôle clé dans la préservation du patrimoine culturel, le renforcement des liens communautaires et la transmission intergénérationnelle des savoirs, tout en favorisant le dialogue et la collaboration entre l'organisation et la communauté Nso'.",
        "Elle est également membre active de plusieurs associations communautaires et culturelles, notamment Bongkisheri Douala, Nso Family Union Canada, Catholic Women League of Canada et Mandjara du Canada."
      ],
      achievements: [
        { icon: Crown, title: "Reine Mère", description: "Leader communautaire respectée et figure culturelle engagée" },
        { icon: Briefcase, title: "Vice-Présidente Bureau Exécutif", description: "Chargée de la liaison avec la communauté Nso'" },
        { icon: GraduationCap, title: "Master Éducation", description: "Master en sciences de l'éducation et diplôme en sociologie" },
        { icon: HandHeart, title: "Engagement Communautaire", description: "Membre active de Bongkisheri Douala, Nso Family Union Canada et Mandjara du Canada" }
      ],
      quote: "Un parcours dédié à la préservation du patrimoine, à la transmission intergénérationnelle, à la mémoire collective et au service communautaire."
    },
    {
      slug: "nathalie-kouotou",
      name: "Nathalie Sandrine Kouotou",
      role: "Secrétaire Générale",
      portrait: nathaliePortrait,
      bio: [
        "Nathalie Sandrine Kouotou occupe le poste de Secrétaire Générale au sein du Bureau exécutif de l'International Mandjara Heritage. Elle contribue à la coordination administrative et organisationnelle des activités de l'organisation."
      ],
      achievements: [
        { icon: ScrollText, title: "Secrétaire Générale", description: "Coordination administrative et organisationnelle du Bureau exécutif" },
        { icon: Building2, title: "Gestion Administrative", description: "Suivi des dossiers et organisation des réunions" }
      ],
      quote: "Contribuer à la coordination et au bon fonctionnement de l'organisation pour mieux servir notre mission."
    },
    {
      slug: "aichetou-pouyona",
      name: "Madame Aïchetou Fafa Pouyona",
      role: "Trésorière",
      portrait: aichetouPortrait,
      portraitPosition: 'center',
      bio: [
        "Entrepreneure engagée et leader innovante, Madame Aïchetou est spécialisée dans la valorisation durable des ressources naturelles africaines, avec plus de quinze années d'expérience dans l'agroalimentaire, le bien-être, la formation et le développement d'entreprises.",
        "Au sein du Bureau exécutif, elle assure la gestion financière et la transparence budgétaire de l'organisation, mettant son expertise entrepreneuriale au service de la mission patrimoniale de Mandjara Heritage."
      ],
      achievements: [
        { icon: Award, title: "Trésorière", description: "Gestion financière et transparence budgétaire de l'organisation" },
        { icon: Leaf, title: "Entrepreneure", description: "Plus de 15 ans d'expérience dans la valorisation des ressources naturelles africaines" },
        { icon: Heart, title: "Communauté Bamoun", description: "Représentante de la communauté Bamoun au sein du Bureau exécutif" }
      ],
      quote: "Mettre l'entrepreneuriat au service de la préservation du patrimoine culturel africain."
    },
    {
      slug: "henri-leyam-tolale",
      name: "Henri Leyam Tolale",
      role: "Responsable de la Communication",
      portrait: henriLeyamPortrait,
      bio: [
        "Leyam Tolale est un entrepreneur visionnaire, bâtisseur de communautés et promoteur du patrimoine culturel, dont le parcours se distingue par une profonde volonté de créer des espaces porteurs d'identité, de mémoire et de transmission intergénérationnelle. Il est le moteur derrière Batack Hills Estates, une destination résidentielle de premier plan définie par l'excellence architecturale, la sérénité des paysages et une vision profondément enracinée dans l'héritage culturel africain.",
        "Doté d'un œil averti pour la conception résidentielle et animé par une passion pour le développement communautaire, il s'est forgé une réputation en alliant le luxe moderne aux valeurs du patrimoine culturel, de l'authenticité et du vivre-ensemble. Sa philosophie de conception s'inspire de la tradition architecturale Bamiléké, reconnue pour son intégrité structurelle, sa richesse symbolique et sa forte dimension communautaire. Pour lui, l'architecture est un langage de mémoire, un outil de transmission intergénérationnelle et un pont entre héritage ancestral et modernité.",
        "Fondateur de Leyam Tolale & Co. — Gestion Immobilière & Services Résidentiels, il a bâti une entreprise dédiée aux normes les plus élevées en matière d'architecture résidentielle, de gestion immobilière haut de gamme et d'expansion internationale, notamment vers les marchés émergents du Cameroun.",
        "Au sein d'International Mandjara Heritage, où il occupe le rôle de Responsable de la Communication, Leyam Tolale contribue activement au rayonnement de la mission de l'organisation à travers des stratégies de communication porteuses de sens, centrées sur la valorisation du patrimoine culturel, l'identité africaine, la mémoire collective et l'engagement communautaire. Son approche humaine et rassembleuse vise à créer des ponts entre les générations, les cultures et les communautés."
      ],
      achievements: [
        { icon: Sparkles, title: "Responsable Communication", description: "Stratégie de communication d'International Mandjara Heritage" },
        { icon: Building2, title: "Fondateur & Directeur Principal", description: "Leyam Tolale & Co. — Gestion Immobilière & Services Résidentiels" },
        { icon: Globe, title: "Bâtisseur de communautés", description: "Promoteur du patrimoine culturel et de l'architecture Bamiléké" }
      ],
      quote: "L'architecture est un langage de mémoire, un pont entre héritage ancestral et modernité."
    },
    {
      slug: "waly-faye",
      name: "Waly Faye",
      role: "Coordonnateur de projet",
      portrait: walyPortrait,
      portraitPosition: 'center',
      bio: [
        "Waly Faye est un professionnel du développement international dont le parcours s'est construit à la croisée de la recherche, de l'éducation et de l'action communautaire. Fort de plus de quinze ans d'expérience en coordination de projets complexes à travers l'Afrique de l'Ouest et du Centre, il a développé une maîtrise rare de la gestion multisite, multiculturelle et multi-acteurs dans des contextes institutionnels aussi bien locaux qu'internationaux. À cette expertise opérationnelle s'ajoute une capacité stratégique à faire dialoguer savoirs locaux et dynamiques globales, dans une perspective de transformation durable et de valorisation des patrimoines humains et culturels.",
        "Directeur de la Recherche et de l'Innovation à Radio Workshop, formateur certifié au sein du Young African Leadership Initiative (YALI) et ancien coordinateur pays pour le Minnesota Studies in International Development, Waly a piloté des projets alliant documentation de terrain, élaboration curriculaire, animation communautaire et plaidoyer institutionnel. Il a notamment conduit des recherches sur la santé communautaire, les dynamiques de genre, la gouvernance des ressources naturelles et les pratiques de communication au sein de communautés rurales africaines. À travers ces engagements, il s'est affirmé comme un acteur de savoir et d'action, capable de traduire les réalités du terrain en leviers d'influence et de changement à l'échelle systémique.",
        "Coordonnateur de projet au sein d'International Mandjara Heritage, Waly Faye contribue activement à la mise en œuvre d'une vision ambitieuse : celle d'un monde où les héritages culturels, les savoirs ancestraux et les structures traditionnelles sont reconnus comme des piliers essentiels du développement, de la dignité et de la souveraineté des peuples. À ce titre, il participe à la conception, à la structuration et au déploiement d'initiatives porteuses de mémoire, de transmission intergénérationnelle et de rayonnement international, en étroite collaboration avec des autorités traditionnelles, des institutions et des communautés.",
        "Son rôle s'inscrit dans une dynamique de réhabilitation des récits, de consolidation des identités collectives et de valorisation des patrimoines immatériels, en cohérence avec la mission d'International Mandjara Heritage de relier passé, présent et avenir dans une continuité vivante et assumée. Par son engagement, il contribue à faire émerger une parole légitime, enracinée et tournée vers l'avenir, au service des générations actuelles et futures.",
        "Multilingue (français, anglais, wolof, sérère), Waly incarne cette capacité à traverser les frontières culturelles avec finesse, intelligence et respect, sans jamais perdre de vue l'essentiel : que derrière chaque patrimoine, il y a des femmes et des hommes dont l'histoire, la dignité et la mémoire méritent d'être reconnues, honorées et transmises avec justesse et profondeur."
      ],
      achievements: [
        { icon: Globe, title: "Développement International", description: "Plus de 15 ans d'expérience en coordination de projets en Afrique de l'Ouest et du Centre" },
        { icon: GraduationCap, title: "Recherche & Innovation", description: "Directeur de la Recherche et de l'Innovation à Radio Workshop" },
        { icon: HandHeart, title: "Coordonnateur de projet", description: "Coordination de projets au sein d'International Mandjara Heritage" }
      ],
      quote: "Derrière chaque patrimoine, il y a des femmes et des hommes dont l'histoire, la dignité et la mémoire méritent d'être reconnues, honorées et transmises."
    }
  ],
  en: [
    {
      slug: "laurentine-mouchingam",
      name: "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
      role: "President",
      portrait: lauretinePortrait,
      bio: [
        "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju' is an international expert in equality, equity, diversity and inclusion (EEDI), specializing in the transformation of public policies, inclusive governance and international development. An anthropologist by training and a committed leader, she has over fifteen years of experience within governmental institutions, international organizations, academic bodies and community organizations, both in Canada and internationally.",
        "She currently holds a leadership position within the Government of Canada, where she plays a strategic role in the development, implementation and monitoring of institutional frameworks aimed at integrating the principles of equity, inclusion and intersectional analysis at the heart of public policies. She has notably contributed to the design and deployment of major EEDI action plans, as well as the integration of Gender-Based Analysis Plus (GBA+) into governmental decision-making processes. Her approach is distinguished by a rigorous articulation between public policies, academic knowledge and community realities, fostering sustainable institutional transformations.",
        "Dr. Laurentine possesses recognized expertise at the intersection of gender, peace and security issues, with a significant contribution to the implementation of the international 'Women, Peace and Security' agenda, particularly within the framework of United Nations Security Council Resolution 1325 and its related resolutions. In this capacity, she has played a strategic role in the development, coordination and monitoring of policies and programs integrating the principles of participation, protection and prevention. Her action contributes to strengthening gender integration in peace, security and governance initiatives, within a dynamic of institutional influence aimed at sustainably transforming approaches to inclusive security and women's leadership.",
        "She also possesses solid experience in strategic governance and organizational development. Founder of the organization International Mandjara Heritage, she ensures its strategic direction, governance and international outreach. She sits on both the Board of Directors and the Executive Board, actively contributing to the structuring and consolidation of the organization. She is also a member of the Executive Board of Mandjara Douala, of which she was a key player from the founding phases, participating in the establishment of the first strategic and operational directions.",
        "Long committed to community dynamics, Dr. Laurentine is an influential figure in the Franco-Ontarian community, in which she has been invested for over a decade. She has held several leadership positions, notably as an ambassador parent, as well as on boards of directors and school councils, in positions of chair and representation. Through these commitments, she actively contributes to strengthening school-family partnerships, promoting educational success and anchoring inclusive and participatory approaches.",
        "Speaker, author and committed voice, she develops strategic thinking rooted in the decolonization of knowledge, intergenerational transmission, collective memory and dialogue between African, diasporic and Western societies. Her work aims to create lasting bridges between institutions, communities and knowledge systems, in order to foster equitable and sustainable transformations at local and international levels.",
        "Her leadership lies at the crossroads of public action, community engagement, cultural governance and international influence.",
        "Beyond her institutional career, Dr. Laurentine embodies a leadership deeply rooted in family, cultural and community dynamics. Wife of a patriarch from a historical succession spanning several generations, and mother of four children, she mobilizes this experience as a living space of leadership, transmission and mediation between cultural heritages and contemporary realities. This singular posture nourishes her approach to public policies and international development, by integrating the logics of traditional governance, intergenerational transmission issues and the social structures that durably shape societies. She thus brings a fine understanding, rooted in an anthropological reading of social dynamics, which allows her to combine analytical rigor, cultural sensitivity and strategic depth in all her interventions."
      ],
      achievements: [
        { icon: Stethoscope, title: "EEDI Expert", description: "International expert in gender equality, equity, diversity and inclusion" },
        { icon: GraduationCap, title: "Anthropologist", description: "Training in anthropology and international development" },
        { icon: Globe, title: "International Leadership", description: "Over 15 years of experience within governmental and academic institutions" },
        { icon: Sparkles, title: "Founder", description: "Founder of International Mandjara Heritage" }
      ],
      quote: "Working toward the decolonization of knowledge and dialogue between African and diasporic communities."
    },
    {
      slug: "lili-stephanie-dondjio",
      name: "Lili Stéphanie Dondjio O.",
      role: "Executive Assistant to the President",
      portrait: liliStephaniePortrait,
      bio: [
        "Lili Stéphanie Dondjio O. is a seasoned bilingual (French–English) administrative and strategic coordination professional with over eight years of experience in institutional, corporate, and multicultural environments. She currently serves as Executive Assistant to the President at International Mandjara Heritage, where she plays a key role in strengthening the organization's structure and advancing its strategic initiatives.",
        "She holds a Master's degree in English/French Translation from the University of Buea and brings strong expertise in communication, administrative management, and executive support. Her professional background includes key roles within the Ministry of Public Health in Cameroon, where she coordinated administrative operations and translated strategic documents for international partners such as the World Health Organization (WHO) and UNICEF. She has also held executive and senior administrative support positions in the private sector, where she distinguished herself by optimizing processes, reducing operational costs, and improving organizational performance.",
        "In her current role, Lili Stéphanie manages the President's schedule, prepares and follows up on strategic meetings, and coordinates internal and external communications. She serves as a liaison with the Board of Directors and institutional partners while providing direct support on executive and strategic matters. Her strong sense of confidentiality, organizational rigor, and ability to navigate complex environments make her an essential pillar of the organization's executive operations.",
        "Serving in a volunteer capacity, she fully embodies the values of International Mandjara Heritage, including heritage preservation, intergenerational knowledge transfer, the decolonization of knowledge, and community and international engagement. Her collaborative leadership style, emotional intelligence, and commitment to service excellence significantly contribute to advancing the organization's mission and vision.",
        "Alongside her professional responsibilities, she is currently pursuing further training in Human Resources and Payroll Management in Canada, reflecting her continuous commitment to professional growth and skills development."
      ],
      achievements: [
        { icon: Briefcase, title: "Executive Assistant", description: "Executive Assistant to the President of International Mandjara Heritage" },
        { icon: GraduationCap, title: "Master's in Translation", description: "Master's in English/French Translation from the University of Buea" },
        { icon: Globe, title: "International Experience", description: "Over 8 years of coordination experience with WHO, UNICEF and the private sector" },
        { icon: ScrollText, title: "Strategic Coordination", description: "Managing the President's schedule and liaising with the Board of Directors" }
      ],
      quote: "Serving with rigor, discretion and excellence to advance the organization's mission."
    },
    {
      slug: "eveline-kinyuy",
      name: "Queen Mother Eveline Kinyuy",
      role: "Vice-President • Nso' Community Liaison",
      portrait: evelinePortrait,
      portraitPosition: 'center 20%',
      bio: [
        "Queen Mother Eveline Kinyuy is a respected community leader and committed cultural figure, based in Brampton, Ontario (Canada). She is actively involved in education, community support, cultural heritage preservation and intergenerational transmission of values within African and diaspora communities.",
        "Holder of a Master's in Education and a diploma in Sociology, she is trained as a guidance counselor and personal support worker. Within the Executive Board, she plays a key role in cultural heritage preservation, strengthening community bonds and intergenerational knowledge transmission, while fostering dialogue and collaboration between the organization and the Nso' community.",
        "She is also an active member of several community and cultural associations, including Bongkisheri Douala, Nso Family Union Canada, Catholic Women League of Canada and Mandjara du Canada."
      ],
      achievements: [
        { icon: Crown, title: "Queen Mother", description: "Respected community leader and committed cultural figure" },
        { icon: Briefcase, title: "Executive Vice-President", description: "Responsible for liaison with the Nso' community" },
        { icon: GraduationCap, title: "Master's in Education", description: "Master's in Education and diploma in Sociology" },
        { icon: HandHeart, title: "Community Engagement", description: "Active member of Bongkisheri Douala, Nso Family Union Canada and Mandjara du Canada" }
      ],
      quote: "A journey dedicated to heritage preservation, intergenerational transmission, collective memory and community service."
    },
    {
      slug: "nathalie-kouotou",
      name: "Nathalie Sandrine Kouotou",
      role: "Secretary General",
      portrait: nathaliePortrait,
      bio: [
        "Nathalie Sandrine Kouotou serves as Secretary General of the Executive Board of International Mandjara Heritage. She contributes to the administrative and organizational coordination of the organization's activities."
      ],
      achievements: [
        { icon: ScrollText, title: "Secretary General", description: "Administrative and organizational coordination of the Executive Board" },
        { icon: Building2, title: "Administrative Management", description: "File management and meeting organization" }
      ],
      quote: "Contributing to the coordination and smooth functioning of the organization to better serve our mission."
    },
    {
      slug: "aichetou-pouyona",
      name: "Mrs. Aïchetou Fafa Pouyona",
      role: "Treasurer",
      portrait: aichetouPortrait,
      portraitPosition: 'center',
      bio: [
        "A committed entrepreneur and innovative leader, Mrs. Aïchetou specializes in the sustainable valorization of African natural resources, with over fifteen years of experience in agri-food, wellness, training and business development.",
        "Within the Executive Board, she manages the organization's finances and budgetary transparency, putting her entrepreneurial expertise at the service of Mandjara Heritage's cultural mission."
      ],
      achievements: [
        { icon: Award, title: "Treasurer", description: "Financial management and budgetary transparency of the organization" },
        { icon: Leaf, title: "Entrepreneur", description: "Over 15 years of experience in valorizing African natural resources" },
        { icon: Heart, title: "Bamoun Community", description: "Representative of the Bamoun community within the Executive Board" }
      ],
      quote: "Putting entrepreneurship at the service of African cultural heritage preservation."
    },
    {
      slug: "henri-leyam-tolale",
      name: "Henri Leyam Tolale",
      role: "Communications Lead",
      portrait: henriLeyamPortrait,
      bio: [
        "Leyam Tolale is a visionary entrepreneur, community builder, and advocate for cultural heritage, whose journey is distinguished by a deep commitment to creating spaces that embody identity, memory, and intergenerational transmission. He is the driving force behind Batack Hills Estates, a premier residential destination defined by architectural excellence, serene landscapes, and a vision deeply rooted in African cultural heritage.",
        "With a discerning eye for residential design and a passion for community development, he has built a reputation for blending modern luxury with the values of cultural heritage, authenticity, and collective living. His design philosophy draws inspiration from Bamiléké architectural tradition, recognized for its structural integrity, symbolic richness, and strong sense of community. For him, architecture is a language of memory, a tool for intergenerational transmission, and a bridge between ancestral heritage and modernity.",
        "As founder of Leyam Tolale & Co. — Property Management & Residential Services, he has built a company dedicated to the highest standards in residential architecture, high-end property management, and international expansion, particularly into emerging markets in Cameroon.",
        "Within International Mandjara Heritage, where he serves as Communications Lead, Leyam Tolale actively contributes to advancing the organization's mission through meaningful communication strategies centered on the promotion of cultural heritage, African identity, collective memory, and community engagement. His human-centered and unifying approach aims to build bridges between generations, cultures, and communities."
      ],
      achievements: [
        { icon: Sparkles, title: "Communications Lead", description: "Communications strategy for International Mandjara Heritage" },
        { icon: Building2, title: "Founder & Principal Director", description: "Leyam Tolale & Co. — Property Management & Residential Services" },
        { icon: Globe, title: "Community Builder", description: "Advocate for cultural heritage and Bamiléké architecture" }
      ],
      quote: "Architecture is a language of memory, a bridge between ancestral heritage and modernity."
    },
    {
      slug: "waly-faye",
      name: "Waly Faye",
      role: "Project Coordinator",
      portrait: walyPortrait,
      portraitPosition: 'center',
      bio: [
        "Waly Faye is an international development professional whose career has been shaped at the intersection of research, education, and community action. With over fifteen years of experience coordinating complex projects across West and Central Africa, he has developed a rare expertise in managing multi-site, multicultural, and multi-stakeholder initiatives within both local and international institutional environments. This operational strength is complemented by a strategic ability to bridge local knowledge systems with global dynamics, fostering sustainable transformation and the recognition of human and cultural heritage.",
        "As Director of Research and Innovation at Radio Workshop, a certified trainer with the Young African Leadership Initiative (YALI), and former Country Coordinator for the Minnesota Studies in International Development, Waly has led projects combining field-based documentation, curriculum development, community engagement, and institutional advocacy. His work includes research on community health, gender dynamics, natural resource governance, and communication practices within rural African communities. Through these engagements, he has established himself as both a knowledge producer and a practitioner, capable of translating grassroots realities into levers for systemic change and influence.",
        "As Project Coordinator at International Mandjara Heritage, Waly Faye actively contributes to advancing a bold and transformative vision: a world in which cultural heritage, ancestral knowledge, and traditional institutions are recognized as essential pillars of development, dignity, and the sovereignty of peoples. In this capacity, he plays a key role in the design, structuring, and implementation of initiatives that promote memory preservation, intergenerational transmission, and international visibility, in close collaboration with traditional authorities, institutions, and communities.",
        "His work is deeply aligned with a broader mission of restoring narratives, strengthening collective identities, and elevating intangible heritage as a living force that connects past, present, and future. Through his commitment, he contributes to amplifying legitimate, rooted, and forward-looking voices, serving both present and future generations.",
        "Multilingual (French, English, Wolof, Serer), Waly embodies a remarkable ability to navigate cultural boundaries with nuance, intelligence, and respect, while remaining grounded in a fundamental conviction: behind every heritage lies the story of men and women whose dignity, memory, and legacy deserve to be recognized, honored, and faithfully transmitted."
      ],
      achievements: [
        { icon: Globe, title: "International Development", description: "Over 15 years of experience coordinating projects across West and Central Africa" },
        { icon: GraduationCap, title: "Research & Innovation", description: "Director of Research and Innovation at Radio Workshop" },
        { icon: HandHeart, title: "Project Coordinator", description: "Project coordination at International Mandjara Heritage" }
      ],
      quote: "Behind every heritage lies the story of men and women whose dignity, memory, and legacy deserve to be recognized, honored, and faithfully transmitted."
    }
  ]
};
