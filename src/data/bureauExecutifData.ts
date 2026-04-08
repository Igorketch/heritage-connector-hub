import { Briefcase, Crown, GraduationCap, Building2, HandHeart, Globe, Stethoscope, Sparkles, Heart, Leaf, Award, ScrollText } from 'lucide-react';
import { TeamMember } from '@/components/team/TeamMemberCard';
import { Language } from '@/contexts/LanguageContext';
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait-2.png';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import nathaliePortrait from '@/assets/nathalie-kouotou-portrait.jpg';
import walyPortrait from '@/assets/waly-faye-portrait.jpg';

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
      slug: "waly-faye",
      name: "Waly Faye",
      role: "Coordonnateur de projet",
      portrait: walyPortrait,
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
      role: "Treasurer (Bamoun)",
      portrait: aichetouPortrait,
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
      slug: "waly-faye",
      name: "Waly Faye",
      role: "Project Coordinator",
      portrait: walyPortrait,
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
