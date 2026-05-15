import { Crown, Languages, BookOpen, Plane, Palette, Users, Building2, GraduationCap, HandHeart, Briefcase, ScrollText } from 'lucide-react';
import { Language } from '@/contexts/LanguageContext';
import { SluggedMember } from '@/components/team/TeamThumbnailGrid';
import ncharePortrait from '@/assets/nchare-portrait.png';
import yohanaPortrait from '@/assets/yohana-portrait.png';
import sylviePortrait from '@/assets/sylvie-portrait.jpg';
import ousmanouPortrait from '@/assets/ousmanou-portrait.jpg';
import adamuPortrait from '@/assets/adamu-portrait.jpg';
import raoulPortrait from '@/assets/raoul-portrait.jpg';
import geraldPortrait from '@/assets/team/gerald-wirmvem.jpg';

export interface SagesSubCategory {
  id: string;
  label: string;
  members: SluggedMember[];
}

export const sagesData: Record<Language, SagesSubCategory[]> = {
  fr: [
    {
      id: 'bamoun',
      label: 'Bamoun',
      members: [
        {
          slug: "nchare-oumarou",
          name: "Titamfon Nji Ncharé Oumarou",
          role: "Vice-Premier Ministre, Notable du Royaume, Conseiller",
          portrait: ncharePortrait,
          bio: [
            "Titamfon Nji Ncharé Oumarou est une figure majeure de la préservation et de la transmission du patrimoine culturel Bamoun. Il occupe actuellement le poste de Directeur des Affaires administratives et culturelles du Palais des Rois Bamoun, où il œuvre depuis plusieurs décennies à la sauvegarde, à la valorisation et à la diffusion de l'héritage historique et intellectuel du Royaume Bamoun. Il est également Directeur général du Musée des Rois Bamoun, contribuant activement à la conservation et à la mise en lumière des trésors matériels et immatériels du royaume.",
            "Titamfon, Vice-Premier Ministre et notable du Royaume Bamoun, incarne une autorité traditionnelle et institutionnelle dont la parole et l'action s'inscrivent dans la continuité des hautes charges de gouvernance et de transmission.",
            "Linguiste de formation, archiviste et muséologue, il est reconnu comme spécialiste de l'écriture Shu-Mom et des langues inventées par le Roi Njoya. Il a consacré une part essentielle de son parcours à la traduction, à l'interprétation et à la conservation des manuscrits royaux, contribuant ainsi à la transmission intergénérationnelle des savoirs Bamoun. Il est également co-traducteur du Saint Coran en langue bamoun, une œuvre majeure de médiation linguistique et culturelle.",
            "Au sein de l'International Mandjara Heritage, Monsieur Ncharé Oumarou a gracieusement accepté d'assumer un rôle éminent et significatif de Conseiller au sein du Comité des sages, apportant son expertise, sa mémoire historique et sa sagesse aux orientations stratégiques, culturelles et éthiques de l'organisation.",
            "À travers ses fonctions institutionnelles, ses publications et son engagement associatif, il participe activement à la valorisation du patrimoine Bamoun aux niveaux national et international, notamment à travers le Nguon et les initiatives de mémoire collective.",
            "Originaire de Foumban, dans la région de l'Ouest (département du Noun – Bamoun), il incarne une mémoire vivante au service de la culture, de l'histoire et de l'identité des peuples."
          ],
          achievements: [
            { icon: Crown, title: "Palais des Rois Bamoun", description: "Directeur des Affaires administratives et culturelles du Palais" },
            { icon: Building2, title: "Musée des Rois Bamoun", description: "Directeur général du musée des Rois Bamoun" },
            { icon: Languages, title: "Écriture Shu-Mom", description: "Spécialiste des langues inventées par le Roi Njoya et traducteur du Coran en bamoun" },
            { icon: BookOpen, title: "Archiviste & Muséologue", description: "Conservation et interprétation des manuscrits royaux du Royaume Bamoun" },
            { icon: ScrollText, title: "Comité des Sages", description: "Conseiller apportant expertise historique et sagesse aux orientations de l'organisation" }
          ],
          quote: "Une mémoire vivante au service de la culture, de l'histoire et de l'identité des peuples."
        },
        {
          slug: "yohana-kimoun",
          name: "Dre Yohana Kimoun",
          role: "Conseillère",
          portrait: yohanaPortrait,
          bio: [
            "Dre Yohana Kimoun est une pharmacienne propriétaire, biologiste et clinicienne dont le parcours professionnel et personnel reflète un engagement profond envers le soin, le savoir et la communauté. Éducatrice agréée en diabète et en cessation de tabagisme, elle allie expertise clinique et dévouement à l'autonomisation des patients ainsi qu'à la prévention en santé.",
            "Elle est également professeure associée à l'Université d'Ottawa, où elle contribue à la formation de la relève en pharmacie en offrant au sein de sa pharmacie un milieu de stage aux étudiants du programme PharmD.",
            "Son engagement au sein de l'organisation Internationale Mandjara Heritage, où elle siège à titre de conseillère au sein du Comité des sages, s'inscrit dans une démarche vivante, évolutive et tournée vers l'avenir, où la mémoire collective devient un moteur d'innovation et de cohésion."
          ],
          achievements: [
            { icon: Building2, title: "Pharmacienne propriétaire", description: "Biologiste et clinicienne engagée dans le soin et la communauté" },
            { icon: GraduationCap, title: "Professeure associée", description: "Université d'Ottawa, formation de la relève en pharmacie (PharmD)" },
            { icon: HandHeart, title: "Éducatrice en santé", description: "Agréée en diabète et en cessation de tabagisme, prévention en santé" },
            { icon: ScrollText, title: "Comité des Sages", description: "Conseillère, vision stratégique à la croisée des sciences, de l'éducation et de la culture" }
          ],
          quote: "Quels que soient nos exploits, nos racines demeurent le socle indéniable qui a rendu tout cela possible."
        },
        {
          slug: "ousmanou-ngam",
          name: "Nji Ousmanou NGAM",
          role: "Conseiller",
          portrait: ousmanouPortrait,
          bio: [
            "Nji Ousmanou NGAM est titulaire d'un Executive MBA de l'Université du Québec à Montréal et d'un Advanced Management Programme de l'ESSEC de Paris.",
            "En tant que Président de Global Trade Logistics Canada Inc, il a notamment orchestré l'acquisition du laboratoire de Cosmétique Capillaire KARILISS Inc, parmi d'autres réalisations notables.",
            "Avant son installation au Canada, il a dirigé plusieurs entreprises en Afrique, en Europe et en Chine.",
            "Son engagement actif en tant qu'administrateur au sein de la fondation MMS (mère du monde pour la santé), ainsi que ses interventions comme éducateur à l'école TEFLER de l'Université d'Ottawa, soulignent son dévouement envers des causes philanthropiques et éducatives.",
            "Ousmanou NGAM est membre de plusieurs organisations patronales québécoises, notamment MMS, la Chambre de Commerce de Montréal Métropolitain, de Laval, Sainte-Thérèse-Blainville et du Conseil des Relations Internationales de Montréal.",
            "Dans le cadre de son rôle de Conseiller au sein du Comité des Sages de l'International Mandjara Heritage, il apporte son autorité morale et stratégique, sa vision éclairée sur la préservation du patrimoine culturel, et son expertise internationale en gouvernance et leadership. Sa contribution renforce la mission de l'organisation en matière de transmission des savoirs traditionnels, d'accompagnement des initiatives communautaires et d'encadrement des projets culturels d'envergure. Reconnu pour sa capacité à conjuguer expérience entrepreneuriale, sensibilité culturelle et engagement philanthropique, il joue un rôle central en tant que mentor et guide pour les jeunes leaders et les dignes filles et fils du terroir investis dans la valorisation du patrimoine commun."
          ],
          achievements: [
            { icon: Building2, title: "Global Trade Logistics Canada", description: "Président et acquisition du laboratoire KARILISS Inc" },
            { icon: GraduationCap, title: "Formation d'Excellence", description: "Executive MBA (UQÀM) et Advanced Management Programme (ESSEC Paris)" },
            { icon: HandHeart, title: "Fondation MMS", description: "Administrateur de la fondation Mère du Monde pour la Santé" },
            { icon: Briefcase, title: "Réseaux d'Affaires", description: "Chambres de Commerce de Montréal, Laval, Sainte-Thérèse-Blainville et Conseil des Relations Internationales de Montréal" }
          ],
          quote: "Un dévouement envers des causes philanthropiques, éducatives et le développement des échanges internationaux."
        },
        {
          slug: "sylvie-mouchingam",
          name: "Nji Nfût Sylvie Mouchingam épouse TABUE",
          role: "Conseillère",
          portrait: sylviePortrait,
          bio: [
            "Sylvie Mouchingam épouse Tabue est une entrepreneure, dirigeante et actrice communautaire engagée, reconnue pour sa capacité à articuler leadership stratégique, engagement socioculturel et sens profond du service.",
            "Fondatrice et PDG de Mandjara Travel et Mandjara Arts, elle contribue à la promotion des arts, de la culture et à la valorisation du patrimoine. Au sein d'International Mandjara Heritage, elle siège comme conseillère au Comité des sages, accompagnant la vision, l'orientation éthique et la transmission des valeurs fondamentales de l'institution."
          ],
          achievements: [
            { icon: Plane, title: "Mandjara Travel", description: "Fondatrice et PDG, services de transport aérien et mobilité internationale" },
            { icon: Palette, title: "Mandjara Arts", description: "Fondatrice et PDG, promotion des arts et valorisation du patrimoine culturel" },
            { icon: Users, title: "Bureau Exécutif", description: "Membre du Bureau exécutif de Mandjara Douala, coordination des initiatives" },
            { icon: ScrollText, title: "Comité des Sages", description: "Conseillère pour la vision éthique et la transmission intergénérationnelle" }
          ],
          quote: "Un leadership fondé sur le service, la foi, la responsabilité sociale et l'impact durable."
        }
      ]
    },
    {
      id: 'nso',
      label: "Nso'",
      members: [
        {
          slug: "adamu-mbiydzela",
          name: "Shey Tadze Adamu Mbiydzela",
          role: "Président Général de NSODA — Conseiller",
          portrait: adamuPortrait,
          bio: [
            "Shey Tadze Adamu est un leader culturel camerounais de premier plan et un professionnel largement reconnu pour sa direction de la Nso Development & Cultural Association (NSODA). Il est également technologue en radiologie médicale avec plus de 25 ans d'expérience. Sa vie et sa carrière se définissent par un engagement envers la préservation de la culture Nso, l'avancement socio-économique du peuple Nso au Cameroun et dans la diaspora, et le service à l'humanité.",
            "Né dans le village de Mah, dans la division de Bui au Nord-Ouest du Cameroun, il a été profondément influencé par la vie communautaire de ses grands-parents et les valeurs traditionnelles du peuple Nso. Sous sa direction, NSODA a mené diverses initiatives communautaires, notamment en matière d'infrastructures, d'éducation, de santé et de sports dans la division de Bui.",
            "En reconnaissance de son dévouement à la conservation culturelle, à la cohésion communautaire et à la transmission de la sagesse ancestrale, Shey Tadze Adamu Mbiydzela siège également comme Conseiller au sein du Comité des Sages d'International Mandjara Heritage."
          ],
          achievements: [
            { icon: Crown, title: "Président Général NSODA", description: "Leader de la Nso Development & Cultural Association depuis décembre 2021" },
            { icon: Building2, title: "Technologue en radiologie", description: "Plus de 25 ans d'expérience en imagerie médicale" },
            { icon: Users, title: "Unificateur communautaire", description: "Médiation de crises et plaidoyer pour les intérêts du peuple Nso" },
            { icon: ScrollText, title: "Comité des Sages", description: "Conseiller apportant sagesse traditionnelle et leadership communautaire" }
          ],
          quote: "L'identité culturelle est le socle du développement durable, et le bonheur est à la portée de ceux qui vont au-delà d'eux-mêmes."
        },
        {
          slug: "gerald-wirmvem",
          name: "Mfoome Nso, Wirmvem Gerald Nyuywir",
          role: "Conseiller",
          portrait: geraldPortrait,
          bio: [
            "Né le 3 mai 1967 à Mbamsong, subdivision de Nkum (département du Bui), Mfoome Nso, Wirmvem Gerald Nyuywir incarne une autorité morale, culturelle et stratégique distinguée, profondément enracinée dans l'histoire et les dynamiques évolutives du peuple Nso.",
            "Titulaire d'un diplôme en comptabilité financière et bancaire, il a bâti une solide carrière professionnelle en tant qu'assistant administratif à la Sous-préfecture de Douala IV (Bonabéri), où il a développé une expertise reconnue en gestion administrative et coordination organisationnelle.",
            "Au-delà de sa trajectoire professionnelle, Mfoome Nso est largement reconnu pour son engagement exceptionnel au service de la communauté et de la préservation du patrimoine culturel. Il a occupé des postes de direction clés au sein de grandes organisations communautaires, servant comme Secrétaire financier puis Secrétaire général de la Communauté Nso à Douala (Bongnavti) de 2005 à 2016, où il fut l'un des principaux acteurs du Festival culturel Mandjara en 2011. Il a également servi comme chargé des relations publiques de la Nso Cultural and Development Association (NSODA) de 2009 à 2024.",
            "Son leadership s'est étendu à la Mbam Valley Development Association (MBAVDA), où il a servi comme Secrétaire général pendant près de deux décennies (2007–2025) avant d'assumer le rôle de Président. La Vallée du Mbam, composée de huit villages dont Kovvifem — historiquement significatif comme lieu où Ngonnso arriva en 1394 pour établir la dynastie Nso avec le Clan Mntar — demeure un site central de patrimoine et de transmission culturelle auquel il est profondément attaché.",
            "Par son dévouement de toute une vie, Mfoome Nso se dresse comme un véritable gardien de la sagesse, de la tradition et de la transmission, travaillant constamment à préserver les héritages culturels et à renforcer la cohésion communautaire. Ses contributions lui ont valu de multiples reconnaissances d'institutions telles que la Mah Area Development Association (MADA), la Nkum Area Development Union (NADU) et NSODA.",
            "En 2014, il a reçu le prestigieux Ngonnso Excellence Award pour la promotion de la culture et du développement, une distinction approuvée par Sa Majesté Royale Sehm Mbinglo I, Fon Suprême des Nso. En 2023, lors de l'Assemblée générale annuelle de NSODA, il a été davantage honoré par cette autorité traditionnelle suprême, recevant une plume rouge et se voyant conférer le titre de « Mfoome Nso », affirmant ainsi sa légitimité, sa dignité et sa sagesse au sein de la communauté.",
            "Aujourd'hui, en tant que conseiller de haut niveau au sein du Comité des Sages de l'organisation International Mandjara Heritage, il met son expérience, sa vision et son profond ancrage culturel au service de la transmission intergénérationnelle, de la promotion du patrimoine africain et de l'orientation stratégique de l'organisation."
          ],
          achievements: [
            { icon: Crown, title: "Mfoome Nso", description: "Titre conféré par Sa Majesté Sehm Mbinglo I, Fon Suprême des Nso" },
            { icon: Users, title: "Leader communautaire", description: "Secrétaire général puis Président de MBAVDA, acteur clé du Festival Mandjara 2011" },
            { icon: Building2, title: "Assistant administratif", description: "Sous-préfecture de Douala IV, expertise en gestion et coordination" },
            { icon: ScrollText, title: "Comité des Sages", description: "Conseiller apportant sagesse traditionnelle et vision stratégique" }
          ],
          quote: "Un véritable gardien de la sagesse, de la tradition et de la transmission, au service de la cohésion communautaire."
        }
      ]
    },
    { id: 'bafia', label: 'Bafia', members: [] },
    {
      id: 'special',
      label: 'Conseil consultatif spécial international',
      members: [
        {
          slug: "raoul-tamekou",
          name: "Dr. Raoul Tamekou Tsowa",
          role: "Conseiller",
          portrait: raoulPortrait,
          bio: [
            "Dr. Raoul Tamekou Tsowa est un analyste des politiques publiques, chercheur et entrepreneur social basé à Montréal. Titulaire d'un doctorat en science politique, il travaille au sein de Ressources naturelles Canada dans le domaine de la mesure du rendement et de l'analyse stratégique des politiques publiques.",
            "Il est également le fondateur et président-directeur général d'IDÉES-AFRIQUE, un organisme canadien engagé dans la promotion du dialogue interculturel, de la recherche appliquée et de l'innovation sociale entre le Canada et l'Afrique. À travers cette plateforme, il développe et pilote plusieurs initiatives structurantes, notamment le Festival de l'Afrique à Beauharnois – \"Beauharnois s'enjaille!\", des projets de recherche, des publications spécialisées et des programmes éducatifs portant sur les enjeux de diversité, de gouvernance et de développement.",
            "À ce parcours déjà riche s'ajoute son engagement au sein de l'organisation Internationale Mandjara Heritage, où il siège à titre de conseiller au sein du Comité des sages. Cette fonction s'inscrit dans une dynamique de préservation et de transmission du patrimoine culturel et des savoirs, dans une approche résolument intergénérationnelle."
          ],
          achievements: [
            { icon: Building2, title: "Ressources naturelles Canada", description: "Analyste des politiques publiques, mesure du rendement et analyse stratégique" },
            { icon: GraduationCap, title: "Doctorat en science politique", description: "Chercheur spécialisé en évaluation des politiques publiques et diplomatie culturelle" },
            { icon: HandHeart, title: "IDÉES-AFRIQUE", description: "Fondateur et PDG, promotion du dialogue interculturel et de l'innovation sociale Canada-Afrique" },
            { icon: ScrollText, title: "Comité des Sages", description: "Conseiller, convergence stratégique entre recherche, patrimoine et coopération internationale" }
          ],
          quote: "À l'intersection de la recherche, de l'action publique et de l'entrepreneuriat social, au service du patrimoine et du dialogue interculturel."
        },
        {
          slug: "jean-michel-vidal",
          name: "Dr Jean-Michel Vidal (M.D., Ph.D.)",
          role: "Conseiller",
          portrait: "",
          bio: [
            "Médecin généraliste et anthropologue médical basé à Montréal, le Docteur Jean-Michel Vidal est une figure reconnue à l'intersection de la médecine, des sciences sociales et de la santé transculturelle. Tout au long de sa carrière, il a contribué à faire dialoguer savoirs cliniques et réalités sociales, en portant une attention particulière aux expériences vécues par les personnes issues de l'immigration et des communautés afro-caribéennes.",
            "Professeur associé au Département d'anthropologie de l'Université de Montréal et co-thérapeute à la clinique de psychiatrie transculturelle de l'Hôpital Jean-Talon, il a consacré ses recherches à l'adolescence, aux trajectoires migratoires et aux dynamiques psychosociales des communautés afrodescendantes. Son travail met en lumière l'importance des récits de vie, des espaces communautaires, et des ancrages culturels dans les processus de résilience, d'identité et d'intégration.",
            "Auteur de nombreuses publications scientifiques en anthropologie médicale, ainsi que d'ouvrages tels que Voyage dans le monde de l'adolescence et le roman Mémoires d'outre-«mère», le Docteur Vidal se distingue par une approche profondément humaine, sensible et engagée. Son excellence en enseignement a également été reconnue par un prix d'excellence de l'Université de Montréal, témoignant de son impact auprès de plusieurs générations d'étudiants.",
            "Au sein d'International Mandjara Heritage, le Docteur Jean-Michel Vidal agit à titre de Conseiller au Comité des Sages, où il apporte une contribution stratégique essentielle. Son expertise en santé transculturelle et en anthropologie médicale nourrit directement la mission de l'organisation : promouvoir des approches inclusives, décolonisées et ancrées dans les réalités des communautés d'ascendance africaine. Il contribue à orienter les réflexions et les actions de l'organisation vers une meilleure compréhension des enjeux identitaires, éducatifs et sociaux liés à l'héritage, à la transmission et à l'équité.",
            "Son engagement auprès de la fondatrice de l'organisation, la Dre Laurentine Mouchingam Mefire, s'inscrit également dans une relation académique et intellectuelle profonde. En tant que co-directeur de sa thèse de doctorat en anthropologie — aux côtés du professeur émérite Gilles Bibeau — le Docteur Jean-Michel Vidal a joué un rôle déterminant dans l'élaboration d'une pensée critique ancrée dans les réalités diasporiques. Ensemble, ils ont contribué à un processus de transformation intellectuelle et personnelle, ce dont elle fait aujourd'hui un témoignage de vie, le qualifiant comme une décolonisation de son esprit et l'ultime aboutissement de son immigration au Canada — une étape essentielle dans le parcours migratoire et identitaire.",
            "À travers son rôle au sein du Comité des Sages, le Docteur Jean-Michel Vidal incarne ainsi une mémoire vivante, une rigueur intellectuelle et une capacité rare à relier savoirs académiques et expériences humaines. Plus que de simples « moteurs », lui et ses pairs agissent comme des passeurs de conscience, accompagnant les trajectoires individuelles et collectives vers une compréhension plus juste, plus libre et plus ancrée de soi et du monde."
          ],
          achievements: [
            { icon: GraduationCap, title: "Université de Montréal", description: "Professeur associé au Département d'anthropologie, prix d'excellence en enseignement" },
            { icon: HandHeart, title: "Hôpital Jean-Talon", description: "Co-thérapeute à la clinique de psychiatrie transculturelle" },
            { icon: BookOpen, title: "Auteur & chercheur", description: "Publications en anthropologie médicale et ouvrages dont Voyage dans le monde de l'adolescence" },
            { icon: ScrollText, title: "Comité des Sages", description: "Conseiller, expertise en santé transculturelle et anthropologie médicale" }
          ],
          quote: "Un passeur de conscience, reliant savoirs académiques et expériences humaines au service d'une compréhension plus juste de soi et du monde."
        }
      ]
    }
  ],
  en: [
    {
      id: 'bamoun',
      label: 'Bamoun',
      members: [
        {
          slug: "nchare-oumarou",
          name: "Titamfon Nji Ncharé Oumarou",
          role: "Vice Prime Minister, Kingdom Notable — Advisor",
          portrait: ncharePortrait,
          bio: [
            "Titamfon Nji Ncharé Oumarou is a major figure in the preservation and transmission of Bamoun cultural heritage. He currently serves as Director of Administrative and Cultural Affairs at the Palace of Bamoun Kings, where he has worked for several decades to safeguard, promote, and disseminate the historical and intellectual legacy of the Bamoun Kingdom. He is also Director General of the Museum of Bamoun Kings, actively contributing to the conservation and highlighting of the kingdom's tangible and intangible treasures.",
            "Titamfon, Vice Prime Minister and notable of the Bamoun Kingdom, embodies a traditional and institutional authority whose words and actions are rooted in the continuity of the highest offices of governance and transmission.",
            "A linguist by training, archivist and museologist, he is recognized as a specialist in Shu-Mom writing and the languages invented by King Njoya. He has devoted a significant part of his career to the translation, interpretation, and conservation of royal manuscripts, thereby contributing to the intergenerational transmission of Bamoun knowledge. He is also co-translator of the Holy Quran into the Bamoun language, a major work of linguistic and cultural mediation.",
            "Within International Mandjara Heritage, Mr. Ncharé Oumarou has graciously accepted to assume an eminent and significant role as Advisor within the Council of Elders, bringing his expertise, historical memory, and wisdom to the strategic, cultural, and ethical orientations of the organization.",
            "Through his institutional functions, publications, and community involvement, he actively participates in the promotion of Bamoun heritage at national and international levels, particularly through the Nguon and collective memory initiatives.",
            "Originally from Foumban, in the West Region (Noun Division – Bamoun), he embodies a living memory in the service of culture, history, and the identity of peoples."
          ],
          achievements: [
            { icon: Crown, title: "Palace of Bamoun Kings", description: "Director of Administrative and Cultural Affairs of the Palace" },
            { icon: Building2, title: "Museum of Bamoun Kings", description: "Director General of the Museum of Bamoun Kings" },
            { icon: Languages, title: "Shu-Mom Writing", description: "Specialist in languages invented by King Njoya and translator of the Quran into Bamoun" },
            { icon: BookOpen, title: "Archivist & Museologist", description: "Conservation and interpretation of royal manuscripts of the Bamoun Kingdom" },
            { icon: ScrollText, title: "Council of Elders", description: "Advisor bringing historical expertise and wisdom to the organization's direction" }
          ],
          quote: "A living memory in the service of culture, history and the identity of peoples."
        },
        {
          slug: "yohana-kimoun",
          name: "Dr. Yohana Kimoun",
          role: "Advisor",
          portrait: yohanaPortrait,
          bio: [
            "Dr. Yohana Kimoun is a pharmacist-owner, biologist, and clinician whose professional and personal journey reflects a deep commitment to care, knowledge, and community. A certified diabetes educator and smoking cessation counselor, she combines clinical expertise with a dedication to patient empowerment and health prevention.",
            "She is also an Associate Professor at the University of Ottawa, where she contributes to training the next generation of pharmacists by offering, within her pharmacy, a practicum environment for PharmD students.",
            "Her involvement within the International Mandjara Heritage organization, where she serves as a member of the Council of Elders, is part of a living, evolving, and forward-looking approach in which collective memory becomes a driving force for innovation and cohesion."
          ],
          achievements: [
            { icon: Building2, title: "Pharmacist-Owner", description: "Biologist and clinician committed to care and community" },
            { icon: GraduationCap, title: "Associate Professor", description: "University of Ottawa, training the next generation of pharmacists (PharmD)" },
            { icon: HandHeart, title: "Health Educator", description: "Certified diabetes educator and smoking cessation counselor" },
            { icon: ScrollText, title: "Council of Elders", description: "Advisor, strategic vision at the crossroads of science, education and culture" }
          ],
          quote: "Whatever our exploits, our roots remain the undeniable foundation that made them possible."
        },
        {
          slug: "ousmanou-ngam",
          name: "Nji Ousmanou NGAM",
          role: "Advisor",
          portrait: ousmanouPortrait,
          bio: [
            "Nji Ousmanou NGAM holds an Executive MBA from the Université du Québec à Montréal and an Advanced Management Programme from ESSEC Paris.",
            "As President of Global Trade Logistics Canada Inc, he notably orchestrated the acquisition of the KARILISS Inc hair cosmetics laboratory, among other notable achievements.",
            "Before settling in Canada, he led several companies in Africa, Europe and China.",
            "His active involvement as a board member of the MMS Foundation (Mother of the World for Health), as well as his contributions as an educator at the Telfer School of the University of Ottawa, highlight his dedication to philanthropic and educational causes.",
            "Ousmanou NGAM is a member of several Quebec business organizations, including MMS, the Chamber of Commerce of Metropolitan Montreal, Laval, Sainte-Thérèse-Blainville and the Council of International Relations of Montreal.",
            "In his role as Advisor on the Council of Elders of International Mandjara Heritage, he brings his moral and strategic authority, his enlightened vision for cultural heritage preservation, and his international expertise in governance and leadership. His contribution strengthens the organization's mission in transmitting traditional knowledge, supporting community initiatives, and overseeing large-scale cultural projects. Recognized for his ability to combine entrepreneurial experience, cultural sensitivity and philanthropic commitment, he plays a central role as a mentor and guide for young leaders and the worthy sons and daughters of the homeland invested in the valorization of their shared heritage."
          ],
          achievements: [
            { icon: Building2, title: "Global Trade Logistics Canada", description: "President and acquisition of KARILISS Inc laboratory" },
            { icon: GraduationCap, title: "Excellence in Education", description: "Executive MBA (UQÀM) and Advanced Management Programme (ESSEC Paris)" },
            { icon: HandHeart, title: "MMS Foundation", description: "Board member of the Mother of the World for Health Foundation" },
            { icon: Briefcase, title: "Business Networks", description: "Chambers of Commerce of Montreal, Laval, Sainte-Thérèse-Blainville and Council of International Relations of Montreal" }
          ],
          quote: "A dedication to philanthropic, educational causes and the development of international exchanges."
        },
        {
          slug: "sylvie-mouchingam",
          name: "Nji Nfût Sylvie Mouchingam née TABUE",
          role: "Advisor",
          portrait: sylviePortrait,
          bio: [
            "Sylvie Mouchingam née Tabue is an entrepreneur, executive and committed community activist, recognized for her ability to articulate strategic leadership, sociocultural engagement and a deep sense of service.",
            "Founder and CEO of Mandjara Travel and Mandjara Arts, she contributes to the promotion of arts, culture and heritage valorization. Within International Mandjara Heritage, she serves as an advisor on the Council of Elders, supporting the vision, ethical direction and transmission of the institution's core values."
          ],
          achievements: [
            { icon: Plane, title: "Mandjara Travel", description: "Founder and CEO, air transport and international mobility services" },
            { icon: Palette, title: "Mandjara Arts", description: "Founder and CEO, arts promotion and cultural heritage valorization" },
            { icon: Users, title: "Executive Board", description: "Member of the Executive Board of Mandjara Douala, initiative coordination" },
            { icon: ScrollText, title: "Council of Elders", description: "Advisor for ethical vision and intergenerational transmission" }
          ],
          quote: "Leadership founded on service, faith, social responsibility and lasting impact."
        }
      ]
    },
    {
      id: 'nso',
      label: "Nso'",
      members: [
        {
          slug: "adamu-mbiydzela",
          name: "Shey Tadze Adamu Mbiydzela",
          role: "President General of NSODA — Advisor",
          portrait: adamuPortrait,
          bio: [
            "Shey Tadze Adamu is a prominent Cameroonian cultural leader and professional widely recognized for his leadership of the Nso Development & Cultural Association (NSODA). He is also a Senior Radiologic Technologist with more than 25 years of experience. His life and career are defined by a commitment to the preservation of Nso culture, the socio-economic advancement of the Nso people both within Cameroon and in the diaspora, and service to humanity.",
            "Born in the village of Mah in Nso, Bui Division of the Northwest region of Cameroon, he was deeply influenced by the community life of his grandparents and the traditional values of the Nso people. Under his leadership, NSODA has spearheaded various community initiatives, including improvements in local infrastructure, education, healthcare, and sports within the Bui Division.",
            "In recognition of his lifelong dedication to cultural stewardship, community cohesion, and the transmission of ancestral wisdom, Shey Tadze Adamu Mbiydzela also serves as a Counselor within the Council of Elders of International Mandjara Heritage."
          ],
          achievements: [
            { icon: Crown, title: "President General NSODA", description: "Leader of the Nso Development & Cultural Association since December 2021" },
            { icon: Building2, title: "Radiologic Technologist", description: "Over 25 years of experience in medical imaging" },
            { icon: Users, title: "Community Unifier", description: "Crisis mediation and advocacy for the interests of the Nso people" },
            { icon: ScrollText, title: "Council of Elders", description: "Advisor bringing traditional wisdom and community leadership" }
          ],
          quote: "Cultural identity is the bedrock of sustainable development, and happiness lies within the reach of those who reach beyond themselves."
        },
        {
          slug: "gerald-wirmvem",
          name: "Mfoome Nso, Wirmvem Gerald Nyuywir",
          role: "Advisor",
          portrait: geraldPortrait,
          bio: [
            "Born on May 3, 1967, in Mbamsong, Nkum Subdivision (Bui Division), Mfoome Nso, Wirmvem Gerald Nyuywir embodies a distinguished moral, cultural, and strategic authority, deeply rooted in the history and evolving dynamics of the Nso people.",
            "He holds a Diploma in Financial Accounting and Banking and has built a solid professional career as an Administrative Assistant at the Divisional Office of Douala IV Subdivision (Bonaberi), where he has developed recognized expertise in administrative management and organizational coordination.",
            "Beyond his professional trajectory, Mfoome Nso is widely recognized for his outstanding commitment to community service and the preservation of cultural heritage. He held key leadership roles within major community organizations, serving as Financial Secretary and later Secretary General of the Nso Community in Douala (Bongnavti) from 2005 to 2016, where he was one of the principal actors of the Mandjara Cultural Festival in 2011. He also served as Public Relations Officer for the Nso Cultural and Development Association (NSODA) from 2009 to 2024.",
            "His leadership further extended to the Mbam Valley Development Association (MBAVDA), where he served as Secretary General for nearly two decades (2007–2025) before assuming the role of President. The Mbam Valley, composed of eight villages including Kovvifem—historically significant as the place where Ngonnso arrived in 1394 to establish the Nso dynasty with the Mntar Clan—remains a central site of heritage and cultural transmission to which he is deeply committed.",
            "Through his lifelong dedication, Mfoome Nso stands as a true guardian of wisdom, tradition, and transmission, consistently working to preserve cultural legacies and strengthen community cohesion. His contributions have earned him multiple recognitions from institutions such as the Mah Area Development Association (MADA), the Nkum Area Development Union (NADU), and NSODA.",
            "In 2014, he was awarded the prestigious Ngonnso Excellence Award for the promotion of culture and development, a distinction endorsed by His Royal Majesty Sehm Mbinglo I, Paramount Fon of Nso. In 2023, during the NSODA Annual General Assembly, he was further honored by this supreme traditional authority, receiving a red feather and being conferred the title of \"Mfoome Nso,\" thus affirming his legitimacy, dignity, and wisdom within the community.",
            "Today, as a high-level advisor to the Council of Elders of the International Mandjara Heritage Organization, he brings his experience, vision, and deep cultural grounding to the service of intergenerational transmission, the promotion of African heritage, and the strategic guidance of the organization's direction."
          ],
          achievements: [
            { icon: Crown, title: "Mfoome Nso", description: "Title conferred by His Royal Majesty Sehm Mbinglo I, Paramount Fon of Nso" },
            { icon: Users, title: "Community Leader", description: "Secretary General then President of MBAVDA, key actor of the 2011 Mandjara Festival" },
            { icon: Building2, title: "Administrative Assistant", description: "Divisional Office of Douala IV, expertise in management and coordination" },
            { icon: ScrollText, title: "Council of Elders", description: "Advisor bringing traditional wisdom and strategic vision" }
          ],
          quote: "A true guardian of wisdom, tradition, and transmission, in service of community cohesion."
        }
      ]
    },
    { id: 'bafia', label: 'Bafia', members: [] },
    {
      id: 'special',
      label: 'International Special Advisory Council',
      members: [
        {
          slug: "raoul-tamekou",
          name: "Dr. Raoul Tamekou Tsowa",
          role: "Advisor",
          portrait: raoulPortrait,
          bio: [
            "Dr. Raoul Tamekou Tsowa is a public policy analyst, researcher, and social entrepreneur based in Montreal. He holds a Ph.D. in Political Science and works at Natural Resources Canada in the field of performance measurement and strategic public policy analysis.",
            "He is also the Founder and Chief Executive Officer of IDÉES-AFRIQUE, a Canadian organization dedicated to promoting intercultural dialogue, applied research, and social innovation between Canada and Africa. Through this platform, he develops and leads several structuring initiatives, including the Festival of Africa in Beauharnois – \"Beauharnois s'enjaille!\", research projects, specialized publications, and educational programs addressing issues related to diversity, governance, and development.",
            "Complementing this already distinguished career is his engagement with the organization Internationale Mandjara Heritage, where he serves as an advisor within the Council of Elders. This role is rooted in a commitment to the preservation and transmission of cultural heritage and knowledge, through a distinctly intergenerational approach."
          ],
          achievements: [
            { icon: Building2, title: "Natural Resources Canada", description: "Public policy analyst, performance measurement and strategic analysis" },
            { icon: GraduationCap, title: "Ph.D. in Political Science", description: "Researcher specializing in public policy evaluation and cultural diplomacy" },
            { icon: HandHeart, title: "IDÉES-AFRIQUE", description: "Founder and CEO, promoting intercultural dialogue and social innovation between Canada and Africa" },
            { icon: ScrollText, title: "Council of Elders", description: "Advisor, strategic convergence between research, heritage and international cooperation" }
          ],
          quote: "At the intersection of research, public action and social entrepreneurship, in service of heritage and intercultural dialogue."
        },
        {
          slug: "jean-michel-vidal",
          name: "Dr. Jean-Michel Vidal (M.D., Ph.D.)",
          role: "Advisor",
          portrait: "",
          bio: [
            "A general practitioner and medical anthropologist based in Montreal, Dr. Jean-Michel Vidal is a recognized figure at the intersection of medicine, social sciences, and transcultural health. Throughout his career, he has worked to bridge clinical knowledge and social realities, with particular attention to the lived experiences of immigrant populations and Afro-Caribbean communities.",
            "An Associate Professor in the Department of Anthropology at the Université de Montréal and co-therapist at the Transcultural Psychiatry Clinic of Hôpital Jean-Talon, he has dedicated his research to adolescence, migratory trajectories, and the psychosocial dynamics of Afro-descendant communities. His work highlights the importance of life narratives, community spaces, and cultural grounding in processes of resilience, identity, and integration.",
            "Author of numerous scientific publications in medical anthropology, as well as works such as Voyage dans le monde de l'adolescence and the novel Mémoires d'outre-«mère», Dr. Vidal is distinguished by a deeply human, sensitive, and committed approach. His excellence in teaching has also been recognized by an excellence award from the Université de Montréal, reflecting his impact on several generations of students.",
            "Within International Mandjara Heritage, Dr. Jean-Michel Vidal serves as an Advisor to the Council of Elders, where he provides essential strategic guidance. His expertise in transcultural health and medical anthropology directly supports the organization's mission: to promote inclusive, decolonized approaches grounded in the realities of communities of African descent. He contributes to guiding the organization's reflections and actions toward a deeper understanding of identity, education, and social issues related to heritage, transmission, and equity.",
            "His engagement with the organization's founder, Dr. Laurentine Mouchingam Mefire, is also rooted in a profound academic and intellectual relationship. As co-supervisor of her doctoral thesis in anthropology — alongside Professor Emeritus Gilles Bibeau — Dr. Jean-Michel Vidal played a decisive role in shaping a critical perspective grounded in diasporic realities. Together, they contributed to a process of intellectual and personal transformation, which she now shares as a life testimony, describing it as a decolonization of her mind and the ultimate culmination of her immigration journey to Canada — a defining stage in her migratory and identity pathway.",
            "Through his role within the Council of Elders, Dr. Jean-Michel Vidal embodies a living memory, intellectual rigor, and a rare ability to connect academic knowledge with human experience. More than simple \"drivers,\" he and his peers act as conveyors of consciousness, accompanying individual and collective journeys toward a more just, freer, and more grounded understanding of self and the world."
          ],
          achievements: [
            { icon: GraduationCap, title: "Université de Montréal", description: "Associate Professor of Anthropology, recipient of an excellence in teaching award" },
            { icon: HandHeart, title: "Hôpital Jean-Talon", description: "Co-therapist at the Transcultural Psychiatry Clinic" },
            { icon: BookOpen, title: "Author & Researcher", description: "Publications in medical anthropology and books including Voyage dans le monde de l'adolescence" },
            { icon: ScrollText, title: "Council of Elders", description: "Advisor, expertise in transcultural health and medical anthropology" }
          ],
          quote: "A conveyor of consciousness, connecting academic knowledge and human experience in service of a more just understanding of self and the world."
        }
      ]
    }
  ]
};

export const getAllSagesMembers = (language: Language): SluggedMember[] => {
  return sagesData[language].flatMap(cat => cat.members);
};
