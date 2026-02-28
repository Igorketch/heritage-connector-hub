// Council of Elders page
import { motion } from 'framer-motion';
import { ScrollText, Crown, Languages, BookOpen, Plane, Palette, Users, Building2, GraduationCap, HandHeart, Briefcase } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import ncharePortrait from '@/assets/nchare-portrait.png';
import sylviePortrait from '@/assets/sylvie-portrait.jpg';
import ousmanouPortrait from '@/assets/ousmanou-portrait.jpg';

const sagesData: Record<Language, TeamMember[]> = {
  fr: [
    {
      name: "Nji Ncharé Oumarou",
      role: "Conseiller",
      portrait: ncharePortrait,
      bio: [
        "Figure majeure de la préservation et de la transmission du patrimoine culturel Bamoun, Monsieur Ncharé Oumarou occupe le poste de Directeur des Affaires administratives et culturelles du Palais des Rois Bamoun, où il œuvre depuis plusieurs décennies à la sauvegarde et à la diffusion de l'héritage historique du Royaume Bamoun.",
        "Linguiste, archiviste et muséologue, il est reconnu comme spécialiste de l'écriture Shu-Mom et des langues inventées par le Roi Njoya. Co-traducteur du Saint Coran en langue bamoun, il contribue à la transmission intergénérationnelle des savoirs Bamoun."
      ],
      achievements: [
        { icon: Crown, title: "Palais des Rois Bamoun", description: "Directeur des Affaires administratives et culturelles depuis plusieurs décennies" },
        { icon: Languages, title: "Écriture Shu-Mom", description: "Spécialiste des langues inventées par le Roi Njoya et traducteur du Coran en bamoun" },
        { icon: BookOpen, title: "Archiviste & Muséologue", description: "Conservation et interprétation des manuscrits royaux du Royaume Bamoun" },
        { icon: ScrollText, title: "Comité des Sages", description: "Conseiller apportant expertise historique et sagesse aux orientations de l'organisation" }
      ],
      quote: "Une mémoire vivante au service de la culture, de l'histoire et de l'identité des peuples."
    },
    {
      name: "Sylvie Mouchingam épouse TABUE",
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
        { icon: Building2, title: "Global Trade Logistics Canada", description: "Président et acquisition du laboratoire KARILISS Inc" },
        { icon: GraduationCap, title: "Formation d'Excellence", description: "Executive MBA (UQÀM) et Advanced Management Programme (ESSEC Paris)" },
        { icon: HandHeart, title: "Fondation MMS", description: "Administrateur de la fondation Mère du Monde pour la Santé" },
        { icon: Briefcase, title: "Réseaux d'Affaires", description: "Membre des Chambres de Commerce de Montréal, Laval et Sainte-Thérèse-Blainville" }
      ],
      quote: "Un dévouement envers des causes philanthropiques, éducatives et le développement des échanges internationaux."
    }
  ],
  en: [
    {
      name: "Nji Ncharé Oumarou",
      role: "Advisor",
      portrait: ncharePortrait,
      bio: [
        "A major figure in the preservation and transmission of Bamoun cultural heritage, Mr. Ncharé Oumarou serves as Director of Administrative and Cultural Affairs at the Palace of Bamoun Kings, where he has worked for several decades to safeguard and disseminate the historical heritage of the Bamoun Kingdom.",
        "A linguist, archivist and museologist, he is recognized as a specialist in Shu-Mom writing and the languages invented by King Njoya. Co-translator of the Holy Quran into the Bamoun language, he contributes to the intergenerational transmission of Bamoun knowledge."
      ],
      achievements: [
        { icon: Crown, title: "Palace of Bamoun Kings", description: "Director of Administrative and Cultural Affairs for several decades" },
        { icon: Languages, title: "Shu-Mom Writing", description: "Specialist in languages invented by King Njoya and translator of the Quran into Bamoun" },
        { icon: BookOpen, title: "Archivist & Museologist", description: "Conservation and interpretation of royal manuscripts of the Bamoun Kingdom" },
        { icon: ScrollText, title: "Council of Elders", description: "Advisor bringing historical expertise and wisdom to the organization's direction" }
      ],
      quote: "A living memory in the service of culture, history and the identity of peoples."
    },
    {
      name: "Sylvie Mouchingam née TABUE",
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
    },
    {
      name: "Nji Ousmanou NGAM",
      role: "Advisor",
      portrait: ousmanouPortrait,
      bio: [
        "Ousmanou NGAM holds an Executive MBA from the Université du Québec à Montréal and an Advanced Management Programme from ESSEC Paris. As President of Global Trade Logistics Canada Inc, he notably orchestrated the acquisition of the KARILISS Inc hair cosmetics laboratory.",
        "Before settling in Canada, he led several companies in Africa, Europe and China. His active involvement as a board member of the MMS Foundation, as well as his contributions as an educator at the Telfer School of the University of Ottawa, highlight his dedication to philanthropic and educational causes."
      ],
      achievements: [
        { icon: Building2, title: "Global Trade Logistics Canada", description: "President and acquisition of KARILISS Inc laboratory" },
        { icon: GraduationCap, title: "Excellence in Education", description: "Executive MBA (UQÀM) and Advanced Management Programme (ESSEC Paris)" },
        { icon: HandHeart, title: "MMS Foundation", description: "Board member of the Mother of the World for Health Foundation" },
        { icon: Briefcase, title: "Business Networks", description: "Member of Chambers of Commerce of Montreal, Laval and Sainte-Thérèse-Blainville" }
      ],
      quote: "A dedication to philanthropic, educational causes and the development of international exchanges."
    }
  ]
};

const ComiteSagesPage = () => {
  const { language, t } = useLanguage();
  const comiteSages = sagesData[language];

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

          <div className="space-y-20">
            {comiteSages.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ComiteSagesPage;
