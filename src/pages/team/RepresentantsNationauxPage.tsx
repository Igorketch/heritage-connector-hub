import { motion } from 'framer-motion';
import { Globe, Stethoscope, Crown, Users, Sparkles, HandHeart, MapPin, Award, BookOpen } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import reginaPortrait from '@/assets/regina-portrait.png';
import persidePortrait from '@/assets/perside-portrait.png';
import pepertuaPortrait from '@/assets/pepertua-portrait-refined.jpeg';

const representantsData: Record<Language, TeamMember[]> = {
  fr: [
    {
      name: "Reine mère Regina Fonyuy Wirba",
      role: "Représentante Pays • Cameroun • Communauté Nso'",
      portrait: reginaPortrait,
      portraitPosition: 'center 20%',
      bio: [
        "L'honorable Reine mère Regina Fonyuy Wirba est une infirmière anesthésiste engagée et une figure communautaire respectée, originaire de Jakiri, au sein de la communauté Nso'. Elle conjugue expertise professionnelle en santé et engagement communautaire au service du bien-être et de l'autonomisation des femmes.",
        "En reconnaissance de son dévouement et de son rôle fédérateur, elle a été honorée du titre de « Reine Mère de Bongkisheri Douala », une distinction symbolisant sa sagesse, son sens du service et son influence positive au sein de la communauté."
      ],
      achievements: [
        { icon: Stethoscope, title: "Infirmière Anesthésiste", description: "Expertise professionnelle en santé au service du bien-être communautaire" },
        { icon: Crown, title: "Reine Mère Mbinkar", description: "Titre honorifique de Reine Mère de Bongkisheri Douala pour son leadership" },
        { icon: Users, title: "Association Femmes Nso'", description: "Présidente 2015-2021 de l'Association des Femmes Nso' de Bongkisheri Douala" },
        { icon: Sparkles, title: "ASMADLA", description: "Membre du Bureau exécutif de l'Association Mandjara de Douala" }
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
        { icon: Globe, title: "Représentante Pays", description: "International Mandjara Heritage au Cameroun, développement d'initiatives culturelles" },
        { icon: Users, title: "ASMADLA", description: "Membre fondatrice de l'Association Mandjara de Douala pour la cohésion communautaire" },
        { icon: HandHeart, title: "Leadership Social", description: "Présidente d'associations caritatives pour l'autonomisation des femmes" },
        { icon: MapPin, title: "Engagement Commonwealth", description: "Participation aux dynamiques de collaboration et renforcement des capacités" }
      ],
      quote: "Promouvoir l'amour du prochain, la solidarité et les échanges d'expériences culturelles pour un impact social durable."
    },
    {
      name: "Professeure Perpetua K. Nkamanyang Lola",
      role: "Représentante Pays • Cameroun/Nigeria",
      portrait: pepertuaPortrait,
      bio: [
        "La professeure Perpetua K. Nkamanyang Lola est une universitaire, écrivaine et intellectuelle publique de renom, spécialisée en études littéraires et culturelles anglophones. Elle cumule plus de vingt-cinq années d'expérience dans l'enseignement supérieur, la recherche académique et le leadership institutionnel, avec des engagements professionnels au Cameroun, au Nigeria et à l'international.",
        "Autrice primée, poétesse et romancière, elle a reçu en 2014 un prix littéraire pour son ouvrage The Lock on My Lips. Au sein d'International Mandjara Heritage, elle met son expertise académique, son leadership intellectuel et son engagement culturel au service de la promotion du dialogue interculturel, du patrimoine africain et de la transmission intergénérationnelle des savoirs."
      ],
      achievements: [
        { icon: Award, title: "Prix Littéraire 2014", description: "Lauréate pour son ouvrage 'The Lock on My Lips' sur l'égalité des genres" },
        { icon: BookOpen, title: "Universitaire & Chercheuse", description: "Plus de 25 ans d'expérience en études littéraires et culturelles anglophones" },
        { icon: Globe, title: "Représentante Pays", description: "International Mandjara Heritage au Cameroun et au Nigeria" },
        { icon: Users, title: "Engagement Culturel", description: "Promotion du dialogue interculturel et valorisation des voix africaines" }
      ],
      quote: "Un engagement constant en faveur de l'éducation, de la préservation culturelle et de la valorisation des voix africaines."
    }
  ],
  en: [
    {
      name: "Queen Mother Regina Fonyuy Wirba",
      role: "Country Representative • Cameroon • Nso' Community",
      portrait: reginaPortrait,
      portraitPosition: 'center 20%',
      bio: [
        "The Honorable Queen Mother Regina Fonyuy Wirba is a committed nurse anesthetist and a respected community figure, originally from Jakiri within the Nso' community. She combines professional healthcare expertise with community engagement in the service of well-being and women's empowerment.",
        "In recognition of her dedication and unifying role, she was honored with the title of 'Queen Mother of Bongkisheri Douala,' a distinction symbolizing her wisdom, sense of service and positive influence within the community."
      ],
      achievements: [
        { icon: Stethoscope, title: "Nurse Anesthetist", description: "Professional healthcare expertise serving community well-being" },
        { icon: Crown, title: "Queen Mother Mbinkar", description: "Honorary title of Queen Mother of Bongkisheri Douala for her leadership" },
        { icon: Users, title: "Nso' Women's Association", description: "President 2015-2021 of the Nso' Women's Association of Bongkisheri Douala" },
        { icon: Sparkles, title: "ASMADLA", description: "Executive Board member of the Mandjara Association of Douala" }
      ],
      quote: "A deep commitment to health, human dignity and the transmission of cultural values."
    },
    {
      name: "Mrs. Ngameyet née Mouliom Perside",
      role: "Country Representative • Cameroon",
      portrait: persidePortrait,
      bio: [
        "A committed social and community leader, Mrs. Perside works actively in Cameroon promoting solidarity, social inclusion and women's empowerment. She contributes to the development and implementation of cultural and social initiatives fostering intercultural dialogue and community cohesion.",
        "President of several charitable and social associations, she works primarily to improve living conditions for girls, women and their families. A founding member of the Mandjara Association of Douala (ASMADLA), she promotes community cohesion among the three sister peoples — Bamoun, Bafia and Nso'."
      ],
      achievements: [
        { icon: Globe, title: "Country Representative", description: "International Mandjara Heritage in Cameroon, development of cultural initiatives" },
        { icon: Users, title: "ASMADLA", description: "Founding member of the Mandjara Association of Douala for community cohesion" },
        { icon: HandHeart, title: "Social Leadership", description: "President of charitable associations for women's empowerment" },
        { icon: MapPin, title: "Commonwealth Engagement", description: "Participation in collaborative dynamics and capacity building" }
      ],
      quote: "Promoting love of neighbor, solidarity and cultural exchange for lasting social impact."
    },
    {
      name: "Professor Perpetua K. Nkamanyang Lola",
      role: "Country Representative • Cameroon/Nigeria",
      portrait: pepertuaPortrait,
      bio: [
        "Professor Perpetua K. Nkamanyang Lola is a renowned academic, writer and public intellectual, specializing in Anglophone literary and cultural studies. She has over twenty-five years of experience in higher education, academic research and institutional leadership, with professional engagements in Cameroon, Nigeria and internationally.",
        "An award-winning author, poet and novelist, she received a literary prize in 2014 for her work The Lock on My Lips. Within International Mandjara Heritage, she brings her academic expertise, intellectual leadership and cultural commitment to promoting intercultural dialogue, African heritage and intergenerational knowledge transmission."
      ],
      achievements: [
        { icon: Award, title: "Literary Prize 2014", description: "Laureate for her work 'The Lock on My Lips' on gender equality" },
        { icon: BookOpen, title: "Academic & Researcher", description: "Over 25 years of experience in Anglophone literary and cultural studies" },
        { icon: Globe, title: "Country Representative", description: "International Mandjara Heritage in Cameroon and Nigeria" },
        { icon: Users, title: "Cultural Engagement", description: "Promotion of intercultural dialogue and valorization of African voices" }
      ],
      quote: "A constant commitment to education, cultural preservation and the valorization of African voices."
    }
  ]
};

const RepresentantsNationauxPage = () => {
  const { language, t } = useLanguage();
  const representantsNationaux = representantsData[language];

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
              <Globe className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.representants')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.representants_sub')}
            </p>
          </motion.div>

          <div className="space-y-20">
            {representantsNationaux.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RepresentantsNationauxPage;
