import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ScrollText } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import sultanNabilImg from '@/assets/team/sultan-nabil.jpg';
import fonMbingloImg from '@/assets/team/fon-mbinglo.jpg';
import camilleMouteImg from '@/assets/team/camille-moute.jpg';
import { SEO } from '@/components/SEO';

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
      patrons: [],
    },
    {
      id: 'nso',
      label: "Nso'",
      patrons: [
        {
          name: "Son Altesse Royale Sehm Mbinglo I",
          role: "Fon Suprême des Nso'",
          image: fonMbingloImg,
        }
      ],
      message: {
        title: "Message de Son Altesse Royale",
        paragraphs: [
          "Parrain de International Mandjara Heritage\nHaut Patronage Royal et Traditionnel",
          "C'est avec une immense fierté, une profonde gratitude et une sincère appréciation pour la continuité historique de notre héritage commun, que j'accepte d'accorder mon Haut Patronage Royal et Traditionnel à l'organisation International Mandjara Heritage, et de m'y associer en qualité de Parrain, aux côtés de Sa Majesté Mforifoum Mbombo Njoya Mouhammad-Nabil, Sultan Roi des Bamoun, et de Sa Majesté Moute à Bidias Camille, Patriarche des Bafia.",
          "Depuis de nombreuses années, j'observe avec attention et estime les efforts entrepris pour préserver et raviver l'héritage Mandjara. Je garde en mémoire les premiers élans qui ont conduit aux festivals Mandjara de 2009 et 2011, ainsi qu'à l'initiative Les Grandes Retrouvailles organisée à Douala, dont j'avais salué l'esprit de rassemblement et la force symbolique. Ces moments ont rappelé à nos peuples la profondeur de nos liens ancestraux et la responsabilité qui nous incombe de les transmettre.",
          "Les peuples Bamoun, Nso' et Bafia partagent une histoire façonnée par la parenté, la solidarité et une mémoire commune. Cette fraternité ancienne constitue un socle précieux, et c'est dans cette continuité que je reconnais la pertinence de la démarche portée aujourd'hui par International Mandjara Heritage. En inscrivant notre héritage dans un cadre structuré, contemporain et ouvert au monde, tout en demeurant fidèle aux fondements traditionnels, cette organisation contribue à renforcer l'unité, la dignité et la visibilité de notre identité collective.",
          "Je tiens également à saluer l'engagement remarquable des dignes filles Mandjara, à l'origine de cette initiative, dont la détermination s'inscrit dans la lignée des femmes qui, depuis toujours, portent la vie, la mémoire et la cohésion de nos communautés. Comme je l'ai rappelé par le passé, la force d'une société repose sur ses femmes, piliers de l'unité, de la culture et du développement. Leur rôle dans la transmission des valeurs et dans l'éducation des générations futures demeure essentiel pour l'avenir de nos royaumes.",
          "En accordant ce Haut Patronage Royal et Traditionnel, j'exprime mon attachement à toute initiative qui œuvre à :\n• Préserver et promouvoir notre héritage culturel ;\n• Renforcer les liens entre nos communautés et leurs diasporas ;\n• Encourager la transmission intergénérationnelle ;\n• Soutenir des actions éducatives et culturelles porteuses d'unité et de cohésion.",
          "J'encourage toutes celles et ceux qui portent cette vision à poursuivre leur engagement avec constance, humilité et fidélité aux valeurs qui fondent notre identité. Que cette initiative contribue à inspirer, rassembler et guider les générations présentes et futures, au-delà des frontières et des distances.",
          "En ma qualité de Fon Suprême des Nso', je bénis cette démarche et la confie à la sagesse de nos ancêtres, afin qu'elle continue de servir la mémoire, l'unité et l'honneur du peuple Mandjara, et qu'elle éclaire le chemin de celles et ceux qui œuvrent pour la continuité de notre héritage."
        ],
        signature: [
          "Son Altesse Royale Sehm Mbinglo I,",
          "Fon Suprême des Nso',",
          "Parrain de International Mandjara Heritage",
          "Haut Patronage Royal et Traditionnel"
        ]
      }
    },
    {
      id: 'bafia',
      label: 'Bafia',
      patrons: [
        {
          name: "Sa Majesté Moute à Bidias Camille",
          role: "Patriarche des Bafia",
          image: camilleMouteImg,
        }
      ],
      message: {
        title: "Message de Sa Majesté",
        paragraphs: [
          "Parrain de International Mandjara Heritage\nHaut Patronage Royal et Traditionnel",
          "C'est avec honneur et satisfaction que j'accepte d'accorder mon Haut Patronage Royal et Traditionnel à l'organisation International Mandjara Heritage, et d'y servir comme Parrain, aux côtés de Sa Majesté le Sultan Roi des Bamoun, Mforifoum Mbombo Njoya Mouhammad-Nabil, et de Son Altesse Royale Sehm Mbinglo I, Fon Suprême des Nso'.",
          "Dans cet esprit de fraternité et d'unité des autorités traditionnelles, j'exprime mon profond attachement à mes frères, Sa Majesté le Sultan Roi Nabil et Son Altesse Royale Sehm Mbinglo I, avec lesquels je partage une vision commune de préservation et de rayonnement de notre héritage. C'est avec leur soutien et dans cette synergie fraternelle que nous apporterons pleinement notre contribution à la réussite de cette initiative.",
          "La mémoire d'un peuple constitue l'un de ses plus grands trésors. Elle doit être préservée, protégée et transmise de génération en génération afin que les racines demeurent vivantes et que les générations futures connaissent l'histoire, les valeurs et la dignité de leurs ancêtres. Cette transmission intergénérationnelle représente un fondement essentiel de la continuité de nos cultures et de nos royaumes.",
          "Je salue avec estime l'initiative portée par une fille Mandjara, fondatrice de cette organisation, dont l'engagement contribue à consolider les liens de fraternité, à préserver notre patrimoine culturel commun, et à promouvoir la transmission des valeurs qui fondent notre identité.",
          "En accordant ce Haut Patronage Royal et Traditionnel, j'exprime mon attachement à la sauvegarde de notre héritage culturel, et j'encourage celles et ceux qui portent cette initiative à poursuivre leurs efforts afin que notre héritage commun continue d'inspirer et de rassembler les générations présentes et futures.",
          "J'adresse également mes remerciements à toutes les personnes qui soutiennent cette cause de ralliement, et j'invite tous les enfants Mandjara de la diaspora à demeurer attachés à leurs racines, à leur histoire et aux valeurs qui fondent notre identité commune.",
          "En ma qualité de Patriarche des Bafia, je bénis cette initiative et la confie à la sagesse de nos ancêtres et à la lumière du Dieu suprême. Puisse-t-elle continuer à grandir et à servir la mémoire, l'unité et l'honneur du peuple Mandjara."
        ],
        signature: [
          "Sa Majesté Moute à Bidias Camille",
          "Patriarche des Bafia",
          "Parrain de International Mandjara Heritage",
          "Haut Patronage Royal et Traditionnel"
        ]
      }
    }
  ],
  en: [
    {
      id: 'bamoun',
      label: 'Bamoun',
      patrons: [],
    },
    {
      id: 'nso',
      label: "Nso'",
      patrons: [
        {
          name: "His Royal Highness Sehm Mbinglo I",
          role: "Supreme Fon of the Nso'",
          image: fonMbingloImg,
        }
      ],
      message: {
        title: "Message from His Royal Highness",
        paragraphs: [
          "Patron of International Mandjara Heritage\nHigh Royal and Traditional Patronage",
          "It is with immense pride, deep gratitude and sincere appreciation for the historical continuity of our shared heritage, that I accept to grant my High Royal and Traditional Patronage to the organization International Mandjara Heritage, and to be associated with it as Patron, alongside His Majesty Mforifoum Mbombo Njoya Mouhammad-Nabil, Sultan King of the Bamoun, and His Majesty Moute à Bidias Camille, Patriarch of the Bafia.",
          "For many years, I have observed with attention and esteem the efforts undertaken to preserve and revive the Mandjara heritage. I remember the early impulses that led to the Mandjara festivals of 2009 and 2011, as well as the initiative Les Grandes Retrouvailles organized in Douala, whose spirit of gathering and symbolic strength I had commended. These moments reminded our peoples of the depth of our ancestral bonds and the responsibility that falls upon us to transmit them.",
          "The Bamoun, Nso' and Bafia peoples share a history shaped by kinship, solidarity and a common memory. This ancient brotherhood constitutes a precious foundation, and it is in this continuity that I recognize the relevance of the approach carried today by International Mandjara Heritage. By inscribing our heritage in a structured, contemporary and globally open framework, while remaining faithful to traditional foundations, this organization contributes to strengthening the unity, dignity and visibility of our collective identity.",
          "I also wish to commend the remarkable commitment of the worthy Mandjara daughters behind this initiative, whose determination follows in the footsteps of the women who have always carried life, memory and the cohesion of our communities. As I have recalled in the past, the strength of a society rests on its women, pillars of unity, culture and development. Their role in transmitting values and in educating future generations remains essential for the future of our kingdoms.",
          "By granting this High Royal and Traditional Patronage, I express my attachment to any initiative that works to:\n• Preserve and promote our cultural heritage;\n• Strengthen the bonds between our communities and their diasporas;\n• Encourage intergenerational transmission;\n• Support educational and cultural actions that foster unity and cohesion.",
          "I encourage all those who carry this vision to pursue their commitment with constancy, humility and faithfulness to the values that underpin our identity. May this initiative contribute to inspiring, uniting and guiding present and future generations, beyond borders and distances.",
          "In my capacity as Supreme Fon of the Nso', I bless this initiative and entrust it to the wisdom of our ancestors, so that it may continue to serve the memory, unity and honour of the Mandjara people, and illuminate the path of those who work for the continuity of our heritage."
        ],
        signature: [
          "His Royal Highness Sehm Mbinglo I,",
          "Supreme Fon of the Nso',",
          "Patron of International Mandjara Heritage",
          "High Royal and Traditional Patronage"
        ]
      }
    },
    {
      id: 'bafia',
      label: 'Bafia',
      patrons: [
        {
          name: "His Majesty Moute à Bidias Camille",
          role: "Patriarch of the Bafia",
          image: camilleMouteImg,
        }
      ],
      message: {
        title: "Message from His Majesty",
        paragraphs: [
          "Patron of International Mandjara Heritage\nHigh Royal and Traditional Patronage",
          "It is with honour and satisfaction that I accept to grant my High Royal and Traditional Patronage to the organization International Mandjara Heritage, and to serve as Patron, alongside His Majesty the Sultan King of the Bamoun, Mforifoum Mbombo Njoya Mouhammad-Nabil, and His Royal Highness Sehm Mbinglo I, Supreme Fon of the Nso'.",
          "In this spirit of fraternity and unity among traditional authorities, I express my deep attachment to my brothers, His Majesty the Sultan King Nabil and His Royal Highness Sehm Mbinglo I, with whom I share a common vision of preservation and promotion of our heritage. It is with their support and in this fraternal synergy that we will fully contribute to the success of this initiative.",
          "The memory of a people constitutes one of its greatest treasures. It must be preserved, protected and transmitted from generation to generation so that roots remain alive and future generations know the history, values and dignity of their ancestors. This intergenerational transmission represents an essential foundation for the continuity of our cultures and our kingdoms.",
          "I commend with esteem the initiative carried by a Mandjara daughter, founder of this organization, whose commitment contributes to consolidating the bonds of fraternity, preserving our common cultural heritage, and promoting the transmission of the values that underpin our identity.",
          "By granting this High Royal and Traditional Patronage, I express my attachment to the safeguarding of our cultural heritage, and I encourage those who carry this initiative to pursue their efforts so that our common heritage continues to inspire and unite present and future generations.",
          "I also extend my thanks to all those who support this rallying cause, and I invite all Mandjara children of the diaspora to remain attached to their roots, their history and the values that underpin our common identity.",
          "In my capacity as Patriarch of the Bafia, I bless this initiative and entrust it to the wisdom of our ancestors and to the light of the Supreme God. May it continue to grow and serve the memory, unity and honour of the Mandjara people."
        ],
        signature: [
          "His Majesty Moute à Bidias Camille",
          "Patriarch of the Bafia",
          "Patron of International Mandjara Heritage",
          "High Royal and Traditional Patronage"
        ]
      }
    }
  ]
};

const ParrainsPage = () => {
  const { language, t } = useLanguage();
  const categories = parrainsData[language];
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const activeCategory = categories.find(c => c.id === activeTab);

  return (
    <PageLayout>
      <SEO title={"Parrains et marraines | Mandjara Heritage"} description={"Les Hauts Patronages d'International Mandjara Heritage — Bamoun, Nso' et Bafia."} />
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
          </motion.div>

          {/* Descriptive Text - hidden when a tab is active */}
          {!activeTab && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 space-y-6 text-heritage-cream/85 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-heritage-gold text-center mb-8">
              {language === 'fr'
                ? "Deux frères – Une sœur - Trois Royaumes – Un héritage"
                : "Two Brothers – One Sister - Three Kingdoms – One Heritage"}
            </h2>


            <p>
              International Mandjara Heritage est né d'une conviction profonde : les peuples se projettent dans l'avenir lorsqu'ils savent d'où ils viennent. La mémoire, les traditions et les institutions qui les portent constituent le socle vivant de l'identité collective.
            </p>

            <p>
              Dans cet esprit, International Mandjara Heritage opère sous le Haut Patronage Royal et Traditionnel de trois éminentes autorités traditionnelles dont l'engagement symbolise l'unité, la continuité et la dignité des héritages culturels africains:
            </p>

            <ul className="space-y-4 pl-4">
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">·</span>
                <span><strong className="text-heritage-cream">Sa Majesté Mforifoum Mbombo Njoya Mouhammad-Nabil</strong>, le Sultan Roi des Bamoun, souverain du Royaume de Foumban, héritier d'une dynastie prestigieuse dont l'influence culturelle, artistique et politique marque l'histoire de l'Afrique centrale depuis des siècles.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">·</span>
                <span><strong className="text-heritage-cream">Son Altesse Royale Sehm Mbinglo I</strong>, Fon Suprême des Nso', gardien d'une institution traditionnelle majeure des Grassfields, reconnue pour son rôle dans la préservation des valeurs sociales, spirituelles et culturelles de son peuple.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-heritage-gold font-bold">·</span>
                <span><strong className="text-heritage-cream">Sa Majesté Moute à Bidias Camille</strong>, Patriarche des Bafia, autorité traditionnelle respectée et dépositaire d'une mémoire historique et culturelle essentielle pour les générations présentes et futures.</span>
              </li>
            </ul>

            <p>
              Par leur acceptation du rôle de Parrains Royaux et Traditionnel de International Mandjara Heritage, ces trois souverains et autorités traditionnelles offrent à l'organisation une bénédiction morale et symbolique qui dépasse les frontières géographiques et générationnelles. Leur présence rappelle une vérité fondamentale: les institutions traditionnelles ne sont pas seulement des héritages du passé, elles sont aussi des piliers de continuité, de sagesse et d'équilibre pour l'avenir.
            </p>

            <p>
              Sous leur haute bienveillance, International Mandjara Heritage poursuit sa mission de préserver, transmettre et faire rayonner l'héritage Mandjara et les traditions africaines à travers le monde, en renforçant les liens entre les communautés locales et les diasporas.
            </p>

            <p className="text-heritage-gold/90 italic text-center border-t border-heritage-gold/20 pt-6 mt-8">
              Ainsi se tisse un pont entre mémoire et modernité, entre royaumes et diaspora, entre héritage ancestral et responsabilité contemporaine, car lorsque les traditions parlent d'une seule voix, les peuples se souviennent de ce qui les unit.
            </p>
          </motion.div>
          )}

          {/* Sub-category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(activeTab === cat.id ? null : cat.id)}
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
          {activeTab && activeCategory && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeCategory.patrons.length > 0 ? (
                <div className="space-y-16">
                  {/* Patron portraits */}
                  {activeCategory.patrons.map((patron) => (
                    <div key={patron.name} className="text-center">
                      <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-heritage-gold/40 shadow-xl mb-6">
                        <img
                          src={patron.image}
                          alt={patron.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-heritage-cream mb-2">
                        {patron.name}
                      </h3>
                      <p className="text-heritage-gold text-lg">{patron.role}</p>
                    </div>
                  ))}

                  {/* Official Message */}
                  {activeCategory.message && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="max-w-4xl mx-auto bg-heritage-earth/80 border border-heritage-gold/20 rounded-xl p-8 md:p-12"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <ScrollText className="w-6 h-6 text-heritage-gold" />
                        <h4 className="text-xl font-display font-bold text-heritage-gold">
                          {activeCategory.message.title}
                        </h4>
                      </div>
                      <div className="space-y-4 text-heritage-cream/85 leading-relaxed">
                        {activeCategory.message.paragraphs.map((p, i) => (
                          <p key={i} className={i === 0 ? "font-semibold text-heritage-gold/90" : ""}>
                            {p.split('\n').map((line, j) => (
                              <span key={j}>
                                {line}
                                {j < p.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        ))}
                      </div>
                      <div className="mt-8 pt-6 border-t border-heritage-gold/20">
                        {activeCategory.message.signature.map((line, i) => (
                          <p key={i} className={`text-heritage-cream/90 ${i === 0 ? 'font-bold text-heritage-gold' : 'text-sm'}`}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Users className="w-16 h-16 text-heritage-gold/30 mx-auto mb-4" />
                  <p className="text-heritage-cream/50 text-lg">
                    {language === 'fr' ? 'À venir' : 'Coming soon'}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default ParrainsPage;
