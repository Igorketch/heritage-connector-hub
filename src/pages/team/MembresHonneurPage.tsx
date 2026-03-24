import { motion } from 'framer-motion';
import { Award, Globe, Users, HandHeart } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import elizabethPortrait from '@/assets/elizabeth-mbanka.png';
import massanPortrait from '@/assets/massan-abiroko-portrait.png';

const membresHonneurData: Record<Language, TeamMember[]> = {
  fr: [
    {
      name: "Madame Banka Liza Bernsa",
      role: "Représentante Pays • États-Unis",
      portrait: elizabethPortrait,
      bio: [
        "Madame Banka Liza Bernsa est une actrice communautaire engagée et une leader associative reconnue, œuvrant activement à la promotion de la culture, de la solidarité et du vivre-ensemble au sein des communautés de la diaspora.",
        "Elle occupe un rôle honorifique et représentatif au sein de l'International Mandjara Heritage, en tant que membre d'honneur et représentante pays des États-Unis. À ce titre, elle contribue au rayonnement international de l'organisation et agit comme mémoire institutionnelle et corporative du mouvement Mandjara au Cameroun.",
        "Ancienne présidente de l'association Bongkisheri Littoral, elle a également été vice-présidente pionnière de l'Association Mandjara de Douala (ASMADLA), jouant un rôle déterminant dans les premières étapes de son organisation et de son ancrage institutionnel."
      ],
      achievements: [
        { icon: Award, title: "Membre d'honneur IMH", description: "Reconnaissance pour sa contribution exceptionnelle au mouvement Mandjara" },
        { icon: Globe, title: "Représentante Pays • États-Unis", description: "Rayonnement international et liens entre diaspora et Cameroun" },
        { icon: Users, title: "ASMADLA", description: "Vice-présidente pionnière de l'Association Mandjara de Douala" },
        { icon: HandHeart, title: "Bongkisheri Littoral", description: "Ancienne présidente, structuration communautaire et valorisation culturelle" }
      ],
      quote: "Un engagement constant au service de la culture, de la mémoire collective et de l'unité des peuples."
    },
    {
      name: "Maman Massan A Biroko",
      role: "",
      portrait: massanPortrait,
      bio: [
        "Maman Massan A Biroko est une figure respectée et une gardienne des traditions au sein de la communauté Mandjara.",
        "Son dévouement à la préservation du patrimoine culturel et à la transmission des valeurs ancestrales lui vaut une reconnaissance unanime au sein de l'International Mandjara Heritage."
      ],
      achievements: [
        { icon: Award, title: "Membre d'honneur IMH", description: "Reconnaissance pour sa contribution à la préservation du patrimoine Mandjara" },
        { icon: HandHeart, title: "Gardienne des traditions", description: "Transmission des savoirs et valeurs ancestrales aux générations futures" }
      ],
      quote: "La mémoire d'un peuple vit à travers celles et ceux qui la transmettent avec amour."
    }
  ],
  en: [
    {
      name: "Mrs. Banka Liza Bernsa",
      role: "Country Representative • United States",
      portrait: elizabethPortrait,
      bio: [
        "Mrs. Banka Liza Bernsa is a committed community activist and recognized association leader, actively working to promote culture, solidarity and community cohesion within diaspora communities.",
        "She holds an honorary and representative role within International Mandjara Heritage as an honorary member and country representative for the United States. In this capacity, she contributes to the international outreach of the organization and serves as the institutional and corporate memory of the Mandjara movement in Cameroon.",
        "Former president of the Bongkisheri Littoral association, she was also a pioneering vice-president of the Mandjara Association of Douala (ASMADLA), playing a decisive role in its early organization and institutional anchoring."
      ],
      achievements: [
        { icon: Award, title: "IMH Honorary Member", description: "Recognition for outstanding contribution to the Mandjara movement" },
        { icon: Globe, title: "Country Representative • USA", description: "International outreach and links between diaspora and Cameroon" },
        { icon: Users, title: "ASMADLA", description: "Pioneering vice-president of the Mandjara Association of Douala" },
        { icon: HandHeart, title: "Bongkisheri Littoral", description: "Former president, community structuring and cultural promotion" }
      ],
      quote: "A constant commitment to culture, collective memory and the unity of peoples."
    },
    {
      name: "Maman Massan A Biroko",
      role: "",
      portrait: massanPortrait,
      bio: [
        "Maman Massan A Biroko is a respected figure and guardian of traditions within the Mandjara community.",
        "Her dedication to preserving cultural heritage and transmitting ancestral values has earned her unanimous recognition within International Mandjara Heritage."
      ],
      achievements: [
        { icon: Award, title: "IMH Honorary Member", description: "Recognition for her contribution to preserving Mandjara heritage" },
        { icon: HandHeart, title: "Guardian of Traditions", description: "Transmitting knowledge and ancestral values to future generations" }
      ],
      quote: "A people's memory lives through those who transmit it with love."
    }
  ]
};

const MembresHonneurPage = () => {
  const { language, t } = useLanguage();
  const membresHonneur = membresHonneurData[language];

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
              <Award className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.honneur')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.honneur_sub')}
            </p>
          </motion.div>

          <div className="space-y-20">
            {membresHonneur.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MembresHonneurPage;
