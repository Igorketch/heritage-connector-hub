import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ScrollText } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import sultanNabilImg from '@/assets/team/sultan-nabil.jpg';

interface Patron {
  name: string;
  role: string;
  image: string;
}

interface PatronMessage {
  title: string;
  paragraphs: string[];
  signature: string[];
}

interface SubCategory {
  id: string;
  label: string;
  patrons: Patron[];
  message?: PatronMessage;
}

const parrainsData: Record<Language, SubCategory[]> = {
  fr: [
    {
      id: 'bamoun',
      label: 'Bamoun',
      patrons: [
        {
          name: "Sa Majesté Nfonrifoum Mbombo Njoya Mouhamed Nabil",
          role: "Sultan Roi des Bamoun",
          image: sultanNabilImg,
        }
      ],
      message: {
        title: "Message de Sa Majesté le Sultan Roi des Bamoun, Nfonrifoum Mbombo Njoya Mouhamed Nabil",
        paragraphs: [
          "Parrain de International Mandjara Heritage\nHaut Patronage Royal et Traditionnel",
          "C'est avec une fierté incommensurable et une considération toute particulière pour cette initiative portée par de dignes filles du terroir profondément attachées à notre héritage, que j'accueille cette distinction avec honneur.",
          "Je salue grandement l'initiative visant à placer l'organisation International Mandjara Heritage sous un Haut Patronage Royal et Traditionnel, et j'accepte d'y être associé en qualité de Parrain, aux côtés de Sa Majesté Moute à Bidias Camille, Patriarche des Bafia, et de Son Altesse Royale Sehm Mbinglo I, Fon Suprême des Nso'.",
          "Dans la continuité de l'héritage transmis par nos prédécesseurs, et fidèle à la vision portée par mon feu père Sa Majesté le Sultan Roi Ibrahim Mbombo Njoya, qui a soutenu avec engagement les premières initiatives du mouvement Mandjara au Cameroun, je reconnais dans cette démarche une volonté noble de consolidation des liens historiques et fraternels qui unissent nos peuples, à savoir les Bamoun, les Nso', et les Bafia.",
          "Les relations entre les Bamoun, les Nso' et les Bafia ne relèvent pas uniquement d'une proximité culturelle, mais s'inscrivent dans une mémoire ancienne, forgée par des liens de parenté, de solidarité et de destin commun. Cette réalité constitue un socle précieux sur lequel reposent notre identité collective et notre responsabilité envers les générations à venir.",
          "Je reconnais également, dans la démarche portée par International Mandjara Heritage, une vision claire et structurée, fidèle aux fondements traditionnels tout en s'inscrivant résolument dans une dynamique contemporaine. Les actions menées pour préserver et promouvoir l'héritage Mandjara, renforcer les liens entre les communautés et leurs diasporas, encourager la transmission intergénérationnelle et soutenir des initiatives culturelles et éducatives, témoignent d'un engagement profond envers l'unité et la cohésion de nos peuples, ainsi qu'à la valorisation d'une histoire commune appelée à rayonner au-delà des frontières.",
          "Je salue en particulier cette orientation, qui allie mémoire, modernité et responsabilité collective, s'inscrivant ainsi dans la continuité naturelle des efforts entrepris depuis plusieurs décennies pour structurer et faire rayonner le mouvement Mandjara. Elle traduit une volonté affirmée de consolider les bases d'un héritage commun appelé à inspirer durablement les générations présentes et futures. Cette fidélité à la mémoire, à la tradition et à l'esprit de rassemblement renforce la légitimité et la portée de cette nouvelle étape qui s'inscrit à l'échelle internationale.",
          "En accordant mon Haut Patronage Royal et Traditionnel à cette organisation, j'exprime mon attachement à toute action qui contribue à raviver la conscience de notre unité, à promouvoir la transmission intergénérationnelle, et à inscrire notre héritage dans une perspective durable, structurée et porteuse d'avenir.",
          "J'encourage celles et ceux qui portent cette vision à poursuivre leur engagement avec rigueur et fidélité aux valeurs fondamentales qui fondent notre identité, afin que cet héritage commun continue d'inspirer, de rassembler et de guider les générations présentes et futures.",
          "J'adresse également mes salutations à l'ensemble des fils et filles des communautés concernées, tant sur le continent qu'au sein de la diaspora, et les exhorte à demeurer profondément attachés à leurs racines, à leur histoire et aux liens qui les unissent.",
          "En ma qualité de Sultan Roi des Bamoun, je formule des bénédictions pour cette initiative, et je la confie à la sagesse de nos ancêtres, afin qu'elle contribue durablement à l'unité, à la dignité et au rayonnement de nos peuples."
        ],
        signature: [
          "Sa Majesté Nfonrifoum Mbombo Njoya Mouhamed Nabil,",
          "Sultan Roi des Bamoun,",
          "Parrain de International Mandjara Heritage",
          "Haut Patronage Royal et Traditionnel"
        ]
      }
    },
    {
      id: 'nso',
      label: "Nso'",
      patrons: []
    },
    {
      id: 'bafia',
      label: 'Bafia',
      patrons: []
    }
  ],
  en: [
    {
      id: 'bamoun',
      label: 'Bamoun',
      patrons: [
        {
          name: "His Majesty Nfonrifoum Mbombo Njoya Mouhamed Nabil",
          role: "Sultan King of Bamoun",
          image: sultanNabilImg,
        }
      ],
      message: {
        title: "Message from His Majesty the Sultan King of Bamoun, Nfonrifoum Mbombo Njoya Mouhamed Nabil",
        paragraphs: [
          "Patron of International Mandjara Heritage\nHigh Royal and Traditional Patronage",
          "It is with immeasurable pride and particular consideration for this initiative carried by worthy daughters of the homeland deeply attached to our heritage, that I welcome this distinction with honour.",
          "I greatly commend the initiative to place the organization International Mandjara Heritage under a High Royal and Traditional Patronage, and I accept to be associated with it as Patron, alongside His Majesty Moute à Bidias Camille, Patriarch of the Bafia, and His Royal Highness Sehm Mbinglo I, Supreme Fon of the Nso'.",
          "In continuity with the legacy transmitted by our predecessors, and faithful to the vision carried by my late father His Majesty Sultan King Ibrahim Mbombo Njoya, who supported with commitment the early initiatives of the Mandjara movement in Cameroon, I recognize in this approach a noble will to consolidate the historical and fraternal bonds that unite our peoples, namely the Bamoun, the Nso', and the Bafia.",
          "The relations between the Bamoun, the Nso' and the Bafia are not merely a matter of cultural proximity, but are rooted in an ancient memory, forged through bonds of kinship, solidarity and common destiny. This reality constitutes a precious foundation upon which rest our collective identity and our responsibility towards future generations.",
          "I also recognize, in the approach carried by International Mandjara Heritage, a clear and structured vision, faithful to traditional foundations while resolutely embracing a contemporary dynamic. The actions undertaken to preserve and promote the Mandjara heritage, strengthen the bonds between communities and their diasporas, encourage intergenerational transmission and support cultural and educational initiatives, bear witness to a deep commitment to the unity and cohesion of our peoples, as well as to the enhancement of a shared history destined to shine beyond borders.",
          "I particularly commend this orientation, which combines memory, modernity and collective responsibility, thus fitting naturally into the continuity of efforts undertaken over several decades to structure and promote the Mandjara movement. It reflects a firm will to consolidate the foundations of a common heritage destined to lastingly inspire present and future generations. This faithfulness to memory, tradition and the spirit of gathering strengthens the legitimacy and scope of this new stage at the international level.",
          "By granting my High Royal and Traditional Patronage to this organization, I express my attachment to any action that contributes to reviving the consciousness of our unity, promoting intergenerational transmission, and inscribing our heritage in a sustainable, structured and forward-looking perspective.",
          "I encourage those who carry this vision to pursue their commitment with rigour and faithfulness to the fundamental values that underpin our identity, so that this common heritage continues to inspire, unite and guide present and future generations.",
          "I also extend my greetings to all the sons and daughters of the communities concerned, both on the continent and within the diaspora, and urge them to remain deeply attached to their roots, their history and the bonds that unite them.",
          "In my capacity as Sultan King of the Bamoun, I offer blessings for this initiative, and I entrust it to the wisdom of our ancestors, so that it may durably contribute to the unity, dignity and influence of our peoples."
        ],
        signature: [
          "His Majesty Nfonrifoum Mbombo Njoya Mouhamed Nabil,",
          "Sultan King of Bamoun,",
          "Patron of International Mandjara Heritage",
          "High Royal and Traditional Patronage"
        ]
      }
    },
    {
      id: 'nso',
      label: "Nso'",
      patrons: []
    },
    {
      id: 'bafia',
      label: 'Bafia',
      patrons: []
    }
  ]
};

const ParrainsPage = () => {
  const { language, t } = useLanguage();
  const categories = parrainsData[language];
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
              <Star className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.parrains')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.parrains_sub')}
            </p>
          </motion.div>

          {/* Descriptive Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 space-y-6 text-heritage-cream/85 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-heritage-gold text-center mb-8">
              {language === 'fr'
                ? "Un Père, Trois Royaumes, Une Mémoire : Les Parrains d'International Mandjara Heritage"
                : "One Father, Three Kingdoms, One Memory: The Patrons of International Mandjara Heritage"}
            </h2>

            <p className="text-center italic text-heritage-cream/70">
              International Mandjara Heritage opère sous le Haut Patronage Royal et Traditionnel de trois éminentes autorités traditionnelles.
            </p>
            <p className="text-center italic text-heritage-cream/70">
              International Mandjara Heritage operates under the High Royal and Official Patronage of three eminent traditional authorities.
            </p>

            <p>
              International Mandjara Heritage est né d'une conviction profonde : les peuples se projettent dans l'avenir lorsqu'ils savent d'où ils viennent. La mémoire, les traditions et les institutions qui les portent constituent le socle vivant de l'identité collective. Dans cet esprit, l'organisation a l'immense honneur de compter parmi ses Parrains royaux et officiels trois éminentes autorités traditionnelles dont l'engagement symbolise l'unité, la continuité et la dignité des héritages culturels africains. Ces Hautes Autorités sont :
            </p>

            <ul className="space-y-4 pl-4">
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">—</span>
                <span><strong className="text-heritage-cream">Sa Majesté Nabil Mbombo Njoya</strong>, Sultan Roi des Bamoun, souverain du Royaume de Foumban, héritier d'une dynastie prestigieuse dont l'influence culturelle, artistique et politique marque l'histoire de l'Afrique centrale depuis des siècles.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">—</span>
                <span><strong className="text-heritage-cream">Son Altesse Royale Sehm Mbinglo I</strong>, Fon Suprême du Royaume de Nso, gardien d'une institution traditionnelle majeure des Grassfields, reconnue pour son rôle dans la préservation des valeurs sociales, spirituelles et culturelles de son peuple.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">—</span>
                <span><strong className="text-heritage-cream">Sa Majesté Mouthe à Bidias Camille</strong>, Patriarche de Bafia, autorité traditionnelle respectée et dépositaire d'une mémoire historique et culturelle essentielle pour les générations présentes et futures.</span>
              </li>
            </ul>

            <p>
              Par leur acceptation de ce rôle de Parrains Royaux et Officiels de International Mandjara Heritage, ces trois souverains et autorités traditionnelles offrent à l'organisation une bénédiction morale et symbolique qui dépasse les frontières géographiques et générationnelles. Leur présence rappelle une vérité fondamentale : les institutions traditionnelles ne sont pas seulement des héritages du passé, elles sont aussi des piliers de continuité, de sagesse et d'équilibre pour l'avenir.
            </p>

            <p>
              Sous leur haute bienveillance, International Mandjara Heritage poursuit sa mission : <em>préserver, transmettre et faire rayonner l'héritage Mandjara et les traditions africaines à travers le monde, en renforçant les liens entre les communautés locales et les diasporas.</em>
            </p>

            <p className="text-heritage-gold/90 italic text-center border-t border-heritage-gold/20 pt-6 mt-8">
              Ainsi se tisse un pont entre mémoire et modernité, entre royaumes et diaspora, entre héritage ancestral et responsabilité contemporaine. Car lorsque les traditions parlent d'une seule voix, les peuples se souviennent de ce qui les unit.
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

          {/* Patrons Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeCategory && activeCategory.patrons.length > 0 ? (
              <div className="space-y-16">
                {/* Patron portraits */}
                {activeCategory.patrons.map((patron) => (
                  <div key={patron.name} className="flex flex-col items-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-heritage-gold/40 shadow-xl shadow-heritage-gold/10 mb-6">
                      <img
                        src={patron.image}
                        alt={patron.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-heritage-cream text-center">
                      {patron.name}
                    </h3>
                    <p className="text-heritage-gold text-lg mt-2">{patron.role}</p>
                  </div>
                ))}

                {/* Message */}
                {activeCategory.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-4xl mx-auto bg-heritage-earth/60 border border-heritage-gold/20 rounded-2xl p-8 md:p-12"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <ScrollText className="w-6 h-6 text-heritage-gold" />
                      <h3 className="text-xl md:text-2xl font-display font-bold text-heritage-gold">
                        {activeCategory.message.title}
                      </h3>
                    </div>

                    <div className="space-y-5 text-heritage-cream/85 leading-relaxed">
                      {activeCategory.message.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className={idx === 0 ? "text-heritage-gold/90 font-semibold text-center whitespace-pre-line" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-10 pt-6 border-t border-heritage-gold/20 text-right">
                      {activeCategory.message.signature.map((line, idx) => (
                        <p key={idx} className={`${idx === 0 ? 'font-bold text-heritage-cream' : 'text-heritage-cream/70'} ${idx === 0 ? 'text-lg' : 'text-sm'}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-heritage-gold/10 border border-heritage-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-heritage-gold/40" />
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

export default ParrainsPage;
