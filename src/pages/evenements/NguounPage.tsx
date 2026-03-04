import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { PartyPopper, Calendar, MapPin, Users, Film } from 'lucide-react';

const NguounPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-heritage-earth overflow-hidden">
        <div className="absolute inset-0 heritage-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-heritage-earth/50 to-heritage-earth" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-heritage-gold/20 text-heritage-gold text-sm font-medium tracking-wide mb-6">
              {t('nguoun.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-cream mb-6">
              Nguoun{' '}
              <span className="text-gradient-gold">2024</span>
            </h1>
            <p className="text-lg text-heritage-cream/70 leading-relaxed">
              {t('nguoun.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-heritage-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-heritage p-8 lg:p-10"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <PartyPopper className="w-6 h-6 text-heritage-gold" />
                {t('nguoun.about_title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('nguoun.about_text')}
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="card-heritage p-6 text-center">
                <Calendar className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-1">{t('nguoun.date_label')}</h3>
                <p className="text-muted-foreground text-sm">2024</p>
              </div>
              <div className="card-heritage p-6 text-center">
                <MapPin className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-1">{t('nguoun.location_label')}</h3>
                <p className="text-muted-foreground text-sm">Foumban, Cameroun</p>
              </div>
              <div className="card-heritage p-6 text-center">
                <Users className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-1">{t('nguoun.people_label')}</h3>
                <p className="text-muted-foreground text-sm">{t('nguoun.people_value')}</p>
              </div>
            </motion.div>

            {/* Significance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-heritage p-8 lg:p-10"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                {t('nguoun.significance_title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('nguoun.significance_text')}
              </p>
            </motion.div>

            {/* Videos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Film className="w-6 h-6 text-heritage-gold" />
                {t('nguoun.videos_title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-heritage overflow-hidden rounded-xl">
                  <video
                    controls
                    className="w-full aspect-video object-cover"
                    preload="metadata"
                  >
                    <source src="/videos/nguoun-2024-video-1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="card-heritage overflow-hidden rounded-xl">
                  <video
                    controls
                    className="w-full aspect-video object-cover"
                    preload="metadata"
                  >
                    <source src="/videos/nguoun-2024-video-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NguounPage;
