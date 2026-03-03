import { motion } from 'framer-motion';
import { Building2, Crown, GraduationCap, Users, Leaf, Heart, HeartPulse, HandHeart, ScrollText, UserPlus } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard, TeamMember } from '@/components/team/TeamMemberCard';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import lauretinePortrait from '@/assets/lauretine-portrait.jpg';
import aichetouPortrait from '@/assets/aichetou-portrait.png';
import charlottePortrait from '@/assets/charlotte-portrait.jpg';
import evelinePortrait from '@/assets/eveline-kinyuy-portrait.jpg';
import nathaliePortrait from '@/assets/nathalie-kouotou-portrait.jpg';

const conseilData: Record<Language, TeamMember[]> = {
  fr: [
    {
      name: "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
      role: "Fondatrice • Présidente",
      portrait: lauretinePortrait,
      bio: [
        "Dre Laurentine Mouchingam Mefire Nguwuo' Petuenju' est une experte internationale en égalité des genres, équité, diversité et inclusion (EEDI), anthropologue de formation et leader engagée en développement international, justice sociale et leadership inclusif. Elle cumule plus de quinze années d'expérience au sein d'institutions gouvernementales, académiques et communautaires.",
        "Fondatrice de l'International Mandjara Heritage, elle siège à la fois au Conseil d'administration et au Bureau exécutif, assurant l'orientation stratégique, la gouvernance et le rayonnement international de l'organisation. Conférencière, auteure et activiste communautaire, elle œuvre à la décolonisation des savoirs et au dialogue entre les communautés africaines et diasporiques."
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
      name: "Charlotte Wirsiy",
      role: "Administratrice • Liaison avec la communauté Nso'",
      portrait: charlottePortrait,
      portraitPosition: 'center 20%',
      bio: [
        "Madame Charlotte Wirsiy est une professionnelle engagée et une actrice communautaire investie dans les domaines du développement durable, de la résilience communautaire et du soin aux personnes. Née et élevée au Cameroun, elle a grandi dans un environnement marqué par la famille, la solidarité et un fort sentiment d'appartenance communautaire.",
        "Titulaire d'un master en gestion des catastrophes et développement durable, elle s'est ensuite reconvertie vers les sciences infirmières au Canada, alignant son parcours avec sa vocation de service et d'accompagnement humain. Au sein d'International Mandjara Heritage, elle contribue à la promotion du dialogue interculturel et à la valorisation des patrimoines culturels dans une perspective inclusive et intergénérationnelle."
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
      name: "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju'",
      role: "Founder • Chair",
      portrait: lauretinePortrait,
      bio: [
        "Dr. Laurentine Mouchingam Mefire Nguwuo' Petuenju' is an international expert in gender equality, equity, diversity and inclusion (EEDI), an anthropologist by training and a committed leader in international development, social justice and inclusive leadership. She has over fifteen years of experience within governmental, academic and community institutions.",
        "Founder of International Mandjara Heritage, she serves on both the Board of Directors and the Executive Board, ensuring strategic direction, governance and international outreach of the organization. As a speaker, author and community activist, she works toward the decolonization of knowledge and dialogue between African and diasporic communities."
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
      name: "Charlotte Wirsiy",
      role: "Director • Nso' Community Liaison",
      portrait: charlottePortrait,
      portraitPosition: 'center 20%',
      bio: [
        "Mrs. Charlotte Wirsiy is a committed professional and community activist involved in sustainable development, community resilience and personal care. Born and raised in Cameroon, she grew up in an environment marked by family, solidarity and a strong sense of community belonging.",
        "Holder of a master's degree in disaster management and sustainable development, she later transitioned to nursing in Canada, aligning her career with her vocation for service and human support. Within International Mandjara Heritage, she contributes to promoting intercultural dialogue and valorizing cultural heritage in an inclusive and intergenerational perspective."
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

const placeholderData: Record<Language, { role: string; label: string }> = {
  fr: { role: "Administratrice (Bafia)", label: "À venir" },
  en: { role: "Director (Bafia)", label: "Coming soon" }
};

const ConseilAdministrationPage = () => {
  const { language, t } = useLanguage();
  const conseilAdministration = conseilData[language];
  const placeholder = placeholderData[language];

  const membersBeforePlaceholder = conseilAdministration.slice(0, 3);
  const membersAfterPlaceholder = conseilAdministration.slice(3);

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
              <Building2 className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.conseil')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.conseil_sub')}
            </p>
          </motion.div>

          <div className="space-y-20">
            {membersBeforePlaceholder.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <div className="bg-heritage-earth/60 border border-heritage-gold/20 rounded-2xl p-8 text-center max-w-md w-full">
                <UserPlus className="w-12 h-12 text-heritage-gold/40 mx-auto mb-4" />
                <h3 className="text-xl font-display font-semibold text-heritage-cream/80 mb-2">
                  {placeholder.role}
                </h3>
                <p className="text-heritage-cream/50 italic">{placeholder.label}</p>
              </div>
            </motion.div>

            {membersAfterPlaceholder.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index + 4} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConseilAdministrationPage;