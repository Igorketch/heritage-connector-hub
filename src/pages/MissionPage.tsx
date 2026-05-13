import { motion } from 'framer-motion';
import { Target, Eye, Compass, Leaf, BookOpen, Users2, Globe, Handshake, GraduationCap, Heart, Building } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';

const MissionPage = () => {
  const { t } = useLanguage();

  const missionPoints = [
    { icon: BookOpen, title: t('mission.point.research'), text: t('mission.point.research_text') },
    { icon: Users2, title: t('mission.point.links'), text: t('mission.point.links_text') },
    { icon: Globe, title: t('mission.point.collab'), text: t('mission.point.collab_text') },
    { icon: Compass, title: t('mission.point.education'), text: t('mission.point.education_text') },
  ];

  const objectives = [
    { icon: GraduationCap, title: t('mission.obj.education'), description: t('mission.obj.education_desc') },
    { icon: Handshake, title: t('mission.obj.partnerships'), description: t('mission.obj.partnerships_desc') },
    { icon: Heart, title: t('mission.obj.social'), description: t('mission.obj.social_desc') },
    { icon: Building, title: t('mission.obj.preservation'), description: t('mission.obj.preservation_desc') },
  ];

  return (
    <PageLayout>
      <SEO title={"Notre mission | International Mandjara Heritage"} description={"La mission de Mandjara Heritage : préservation, transmission et rayonnement du patrimoine culturel africain."} />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-heritage-earth">
        <div className="absolute inset-0 heritage-pattern opacity-10" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-heritage-terracotta/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-heritage-forest/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-terracotta/20 border border-heritage-terracotta/30 backdrop-blur-sm mb-8">
              <Target className="w-4 h-4 text-heritage-terracotta" />
              <span className="text-heritage-terracotta text-sm font-medium">{t('mission.badge')}</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-cream mb-6">
              {t('mission.title')} <span className="text-gradient-gold">{t('mission.title_highlight')}</span>
            </h1>
            <p className="text-heritage-cream/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('mission.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-heritage-terracotta/10 flex items-center justify-center">
                    <Target className="w-7 h-7 text-heritage-terracotta" />
                  </div>
                  <span className="text-heritage-terracotta font-medium tracking-widest uppercase text-sm">{t('mission.label')}</span>
                </div>
                
                <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8">
                  {t('mission.heading')} <span className="text-heritage-terracotta">{t('mission.heading_highlight')}</span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t('mission.text')}
                </p>

                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-heritage-terracotta/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-6 h-6 text-heritage-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                        <p className="text-muted-foreground">{point.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-heritage-forest/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-heritage-forest" />
                  </div>
                  <span className="text-heritage-forest font-medium tracking-widest uppercase text-sm">{t('mission.vision_label')}</span>
                </div>

                <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8">
                  {t('mission.vision_heading')} <span className="text-heritage-forest">{t('mission.vision_heading_highlight')}</span>
                </h2>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-heritage-forest/10 to-heritage-gold/10 rounded-3xl blur-2xl" />
                  <div className="relative bg-card rounded-2xl p-8 lg:p-10 shadow-card-heritage border border-heritage-forest/10">
                    <p className="text-xl lg:text-2xl font-serif text-foreground leading-relaxed mb-8">
                      {t('mission.vision_text')}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-heritage-forest/5">
                        <Leaf className="w-6 h-6 text-heritage-forest" />
                        <span className="font-medium text-foreground">{t('mission.vision.sustainability')}</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-heritage-gold/5">
                        <Globe className="w-6 h-6 text-heritage-gold" />
                        <span className="font-medium text-foreground">{t('mission.vision.international')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 text-muted-foreground leading-relaxed italic border-l-4 border-heritage-gold/30 pl-6"
                >
                  {t('mission.vision_quote')}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 lg:py-32 bg-heritage-sand/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-6">
                {t('mission.objectives_title')} <span className="text-heritage-terracotta">{t('mission.objectives_highlight')}</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t('mission.objectives_subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-heritage group p-8 flex gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-heritage-terracotta/10 text-heritage-terracotta flex items-center justify-center flex-shrink-0 group-hover:bg-heritage-terracotta group-hover:text-white transition-all duration-300">
                    <objective.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{objective.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MissionPage;
