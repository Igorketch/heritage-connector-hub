import { motion } from 'framer-motion';
import { BookOpen, Globe2, Heart, Scroll, Calendar, MapPin, Crown, Mountain } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';

const ContextPage = () => {
  const { t } = useLanguage();

  const features = [
    { icon: BookOpen, title: t('context.feature.ancestors'), description: t('context.feature.ancestors_desc') },
    { icon: Heart, title: t('context.feature.solidarity'), description: t('context.feature.solidarity_desc') },
    { icon: Globe2, title: t('context.feature.knowledge'), description: t('context.feature.knowledge_desc') },
  ];

  const timeline = [
    { era: t('context.timeline.19th'), title: t('context.timeline.19th_title'), description: t('context.timeline.19th_desc'), icon: Scroll },
    { era: t('context.timeline.2001'), title: t('context.timeline.2001_title'), description: t('context.timeline.2001_desc'), icon: Globe2 },
    { era: t('context.timeline.2005'), title: t('context.timeline.2005_title'), description: t('context.timeline.2005_desc'), icon: Crown },
    { era: t('context.timeline.today'), title: t('context.timeline.today_title'), description: t('context.timeline.today_desc'), icon: Mountain },
  ];

  return (
    <PageLayout>
      <SEO title={"Contexte historique des peuples Mandjara"} description={"Histoire et contexte des peuples Mandjara : Bamoun, Nso' et Bafia, leurs racines et leur trajectoire."} />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-heritage-earth">
        <div className="absolute inset-0 heritage-pattern opacity-10" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-heritage-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-heritage-terracotta/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-gold/20 border border-heritage-gold/30 backdrop-blur-sm mb-8">
              <Calendar className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('context.badge')}</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-cream mb-6">
              {t('context.title')} <span className="text-gradient-gold">{t('context.title_highlight')}</span>
            </h1>
            <p className="text-heritage-cream/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('context.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  {t('context.roots_title')} <span className="text-heritage-terracotta">{t('context.roots_highlight')}</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('context.roots_p1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('context.roots_p2')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('context.roots_p3')}
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-heritage-gold/20 to-heritage-terracotta/20 rounded-3xl blur-2xl" />
                <div className="relative bg-card rounded-2xl p-8 lg:p-10 shadow-elevated border border-heritage-gold/10">
                  <blockquote className="relative">
                    <div className="absolute -top-4 -left-2 text-7xl text-heritage-gold/30 font-serif">"</div>
                    <p className="relative text-xl lg:text-2xl font-serif text-foreground italic leading-relaxed">
                      {t('context.quote')}
                    </p>
                    <footer className="mt-6 flex items-center gap-4">
                      <div className="w-12 h-px bg-heritage-gold" />
                      <cite className="text-muted-foreground not-italic font-medium">{t('context.quote_author')}</cite>
                    </footer>
                  </blockquote>
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-24">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">
                {t('context.timeline_title')} <span className="text-heritage-gold">{t('context.timeline_highlight')}</span>
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-heritage-gold via-heritage-terracotta to-heritage-forest hidden lg:block" />
                <div className="space-y-12 lg:space-y-0">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.era}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`lg:flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    >
                      <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                        <div className="card-heritage p-6">
                          <span className="text-heritage-gold font-bold text-lg">{item.era}</span>
                          <h3 className="font-serif text-xl font-bold text-foreground mt-2">{item.title}</h3>
                          <p className="text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      </div>
                      <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-heritage-gold/20 border-4 border-background z-10">
                        <item.icon className="w-6 h-6 text-heritage-gold" />
                      </div>
                      <div className="lg:w-1/2" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Value Pillars */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="card-heritage group p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-heritage-gold/10 text-heritage-gold mb-6 group-hover:bg-heritage-gold group-hover:text-heritage-earth transition-all duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContextPage;
