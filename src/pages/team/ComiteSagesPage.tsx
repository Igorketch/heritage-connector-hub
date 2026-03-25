// Council of Elders page
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollText, Crown, Languages, BookOpen, Plane, Palette, Users, Building2, GraduationCap, HandHeart, Briefcase } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import ncharePortrait from '@/assets/nchare-portrait.png';
import yohanaPortrait from '@/assets/yohana-portrait.png';
import sylviePortrait from '@/assets/sylvie-portrait.jpg';
import ousmanouPortrait from '@/assets/ousmanou-portrait.jpg';
import adamuPortrait from '@/assets/adamu-portrait.jpg';
import raoulPortrait from '@/assets/raoul-portrait.jpg';

interface SubCategory {
  id: string;
  label: string;
  members: TeamMember[];
}

const sagesData: Record<Language, SubCategory[]> = {
  fr: [
    {
      id: 'bamoun',
      label: 'Bamoun',
      members: [
        {
          name: "Titamfon Nji Ncharé Oumarou",
          role: "Titamfon, Vice Premier Ministre, Notable du Royaume — Conseiller",
          portrait: ncharePortrait,
          bio: [
            "Figure majeure de la préservation et de la transmission du patrimoine culturel Bamoun, Monsieur Ncharé Oumarou occupe le poste de Directeur des Affaires administratives et culturelles du Palais des Rois Bamoun, où il œuvre depuis plusieurs décennies à la sauvegarde et à la diffusion de l'héritage historique du Royaume Bamoun.",
            "Linguiste, archiviste et muséologue, il est reconnu comme spécialiste de l'écriture Shu-Mom et des langues inventées par le Roi Njoya. Co-traducteur du Saint Coran en langue bamoun, il contribue à la transmission intergénérationnelle des savoirs Bamoun."
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
          name: "Nji Ousmanou NGAM",
          role: "Conseiller",
          portrait: ousmanouPortrait,
          bio: [
            "Ousmanou NGAM est titulaire d'un Executive MBA de l'Université du Québec à Montréal et d'un Advanced Management Programme de l'ESSEC de Paris. En tant que Président de Global Trade Logistics Canada Inc, il a notamment orchestré l'acquisition du laboratoire de Cosmétique Capillaire KARILISS Inc, parmi d'autres réalisations notables.",
            "Avant son installation au Canada, il a dirigé plusieurs entreprises en Afrique, en Europe et en Chine. Son engagement actif en tant qu'administrateur au sein de la fondation MMS (mère du monde pour la santé), ainsi que ses interventions comme éducateur à l'école TEFLER de l'Université d'Ottawa, soulignent son dévouement envers des causes philanthropiques et éducatives.",
            "Ousmanou NGAM est membre de plusieurs organisations patronales Québécoises, notamment MMS, la Chambre de Commerce de Montréal Métropolitain, de Laval, Sainte-Thérèse-Blainville et du Conseil des Relations Internationales de Montréal."
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
        }
      ]
    },
    {
      id: 'bafia',
      label: 'Bafia',
      members: []
    },
    {
      id: 'special',
      label: 'Conseil consultatif spécial international',
      members: [
        {
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
          name: "Titamfon Nji Ncharé Oumarou",
          role: "Titamfon, Vice Prime Minister, Kingdom Notable — Advisor",
          portrait: ncharePortrait,
          bio: [
            "A major figure in the preservation and transmission of Bamoun cultural heritage, Mr. Ncharé Oumarou serves as Director of Administrative and Cultural Affairs at the Palace of Bamoun Kings, where he has worked for several decades to safeguard and disseminate the historical heritage of the Bamoun Kingdom.",
            "A linguist, archivist and museologist, he is recognized as a specialist in Shu-Mom writing and the languages invented by King Njoya. Co-translator of the Holy Quran into the Bamoun language, he contributes to the intergenerational transmission of Bamoun knowledge."
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
          name: "Nji Ousmanou NGAM",
          role: "Advisor",
          portrait: ousmanouPortrait,
          bio: [
            "Ousmanou NGAM holds an Executive MBA from the Université du Québec à Montréal and an Advanced Management Programme from ESSEC Paris. As President of Global Trade Logistics Canada Inc, he notably orchestrated the acquisition of the KARILISS Inc hair cosmetics laboratory, among other notable achievements.",
            "Before settling in Canada, he led several companies in Africa, Europe and China. His active involvement as a board member of the MMS Foundation (Mother of the World for Health), as well as his contributions as an educator at the Telfer School of the University of Ottawa, highlight his dedication to philanthropic and educational causes.",
            "Ousmanou NGAM is a member of several Quebec business organizations, including MMS, the Chamber of Commerce of Metropolitan Montreal, Laval, Sainte-Thérèse-Blainville and the Council of International Relations of Montreal."
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
        }
      ]
    },
    {
      id: 'bafia',
      label: 'Bafia',
      members: []
    },
    {
      id: 'special',
      label: 'International Special Advisory Council',
      members: [
        {
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
        }
      ]
    }
  ]
};

const ComiteSagesPage = () => {
  const { language, t } = useLanguage();
  const categories = sagesData[language];
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
                  <ScrollText className="w-8 h-8 text-heritage-gold/40" />
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

export default ComiteSagesPage;
