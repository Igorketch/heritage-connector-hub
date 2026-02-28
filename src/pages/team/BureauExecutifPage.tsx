import { motion } from 'framer-motion';
import { Briefcase, Crown, GraduationCap, Building2, HandHeart, Users, Globe, Stethoscope, Sparkles, Heart, Leaf, Award, ScrollText } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait.jpg';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import nathaliePortrait from '@/assets/nathalie-kouotou-portrait.jpg';

const bureauData: Record<Language, TeamMember[]> = {
  fr: [
    {
      name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
      role: "Présidente",
      portrait: lauretinePortrait,
      bio: [
        "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju' est une experte internationale en égalité des genres, équité, diversité et inclusion (EEDI), anthropologue de formation et leader engagée en développement international, justice sociale et leadership inclusif. Elle cumule plus de quinze années d'expérience au sein d'institutions gouvernementales, académiques et communautaires.",
        "Fondatrice de l'International Mandjara Heritage, elle siège à la fois au Conseil d'administration et au Bureau exécutif, assurant l'orientation stratégique, la gouvernance et le rayonnement international de l'organisation. Conférencière, auteure et activiste communautaire, elle œuvre à la décolonisation des savoirs et au dialogue entre les communautés africaines et diasporiques."
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
      name: "Reine Mère Eveline Kinyuy",
      role: "Vice-Présidente • Liaison Communauté Nso'",
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
      name: "Madame Aïchetou Fafa Pouyona",
      role: "Trésorière (Bamoun)",
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
    }
  ],
  en: [
    {
      name: "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
      role: "President",
      portrait: lauretinePortrait,
      bio: [
        "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju' is an international expert in gender equality, equity, diversity and inclusion (EEDI), an anthropologist by training and a committed leader in international development, social justice and inclusive leadership. She has over fifteen years of experience within governmental, academic and community institutions.",
        "Founder of International Mandjara Heritage, she serves on both the Board of Directors and the Executive Board, ensuring strategic direction, governance and international outreach. As a speaker, author and community activist, she works toward the decolonization of knowledge and dialogue between African and diasporic communities."
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
    }
  ]
};

const BureauExecutifPage = () => {
  const { language, t } = useLanguage();
  const bureauExecutif = bureauData[language];

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
              <Briefcase className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.bureau')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.bureau_sub')}
            </p>
          </motion.div>

          <div className="space-y-20">
            {bureauExecutif.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BureauExecutifPage;
