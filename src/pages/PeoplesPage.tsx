import { motion } from 'framer-motion';
import { MapPin, Scroll, Users, Crown, Music, Palette, BookOpen, Languages } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import bamounImage from '@/assets/bamoun-culture.jpg';
import bafiaImage from '@/assets/bafia-culture.jpg';
import nsoImage from '@/assets/nso-culture.jpg';

const PeoplesPage = () => {
  const { t } = useLanguage();

  const peoples = [
    {
      name: t('peoples.bamoun.name'),
      region: t('peoples.bamoun.region'),
      image: bamounImage,
      description: t('peoples.bamoun.desc'),
      longDescription: t('peoples.bamoun.long_desc'),
      highlights: [
        { icon: Scroll, text: t('peoples.bamoun.h1') },
        { icon: Crown, text: t('peoples.bamoun.h2') },
        { icon: Palette, text: t('peoples.bamoun.h3') },
        { icon: Music, text: t('peoples.bamoun.h4') },
      ],
      color: 'heritage-gold',
    },
    {
      name: t('peoples.nso.name'),
      region: t('peoples.nso.region'),
      image: nsoImage,
      description: t('peoples.nso.desc'),
      longDescription: t('peoples.nso.long_desc'),
      highlights: [
        { icon: Crown, text: t('peoples.nso.h1') },
        { icon: Users, text: t('peoples.nso.h2') },
        { icon: BookOpen, text: t('peoples.nso.h3') },
        { icon: Languages, text: t('peoples.nso.h4') },
      ],
      color: 'heritage-forest',
    },
    {
      name: t('peoples.bafia.name'),
      region: t('peoples.bafia.region'),
      image: bafiaImage,
      description: t('peoples.bafia.desc'),
      longDescription: t('peoples.bafia.long_desc'),
      highlights: [
        { icon: Users, text: t('peoples.bafia.h1') },
        { icon: Music, text: t('peoples.bafia.h2') },
        { icon: Palette, text: t('peoples.bafia.h3') },
        { icon: BookOpen, text: t('peoples.bafia.h4') },
      ],
      color: 'heritage-terracotta',
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-heritage-earth">
        <div className="absolute inset-0 heritage-pattern opacity-10" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-heritage-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-heritage-terracotta/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-gold/20 border border-heritage-gold/30 backdrop-blur-sm mb-8">
              <Users className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('peoples.badge')}</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-cream mb-6">
              {t('peoples.title')} <span className="text-gradient-gold">{t('peoples.title_highlight')}</span>
            </h1>
            <p className="text-heritage-cream/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('peoples.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Peoples Sections */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-32">
            {peoples.map((people, index) => (
              <motion.div
                key={people.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className={`absolute -inset-4 bg-${people.color}/20 rounded-3xl blur-2xl`} />
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={people.image}
                        alt={people.name}
                        className="w-full h-[400px] lg:h-[500px] object-contain bg-heritage-sand/40 p-8"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-heritage-earth/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className={`inline-block text-${people.color} font-medium tracking-widest uppercase text-sm mb-4`}>
                    {t('peoples.founding')}
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">{people.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{people.longDescription}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {people.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: hIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-heritage-gold/30 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-${people.color}/10 flex items-center justify-center flex-shrink-0`}>
                          <highlight.icon className={`w-5 h-5 text-${people.color}`} />
                        </div>
                        <p className="text-muted-foreground text-sm pt-2">{highlight.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unity Section */}
      <section className="py-24 bg-heritage-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-heritage-cream mb-8">
              {t('peoples.unity_title')} <span className="text-heritage-gold">{t('peoples.unity_highlight')}</span>
            </h2>
            <p className="text-heritage-cream/80 text-lg leading-relaxed mb-8">
              {t('peoples.unity_text')}
            </p>
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-heritage-gold/10 border border-heritage-gold/20">
              <Users className="w-6 h-6 text-heritage-gold" />
              <span className="text-heritage-cream font-medium">{t('peoples.unity_badge')}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PeoplesPage;
