import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-heritage.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Heritage culturel Mandjara — Bamoun, Nso' et Bafia" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-heritage-earth/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-heritage-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-heritage-terracotta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-gold/20 border border-heritage-gold/30 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-heritage-gold" />
            <span className="text-heritage-gold text-sm font-medium tracking-wide">
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-heritage-cream mb-6 leading-tight">
            {t('hero.title1')}{' '}
            <span className="text-gradient-gold">{t('hero.title2')}</span>{' '}
            <span className="block mt-2">{t('hero.title3')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="text-heritage-cream/80 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            {t('hero.subtitle')}{' '}
            <strong className="text-heritage-gold">Bamoun</strong>, <strong className="text-heritage-gold">Nso'</strong> et <strong className="text-heritage-gold">Bafia</strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/mission">
              <Button variant="gold" size="xl">
                {t('hero.cta1')}
              </Button>
            </a>
            <a href="/peoples">
              <Button variant="outline-light" size="xl">
                {t('hero.cta2')}
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="/context" className="flex flex-col items-center gap-2 text-heritage-cream/60 hover:text-heritage-gold transition-colors">
            <span className="text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
