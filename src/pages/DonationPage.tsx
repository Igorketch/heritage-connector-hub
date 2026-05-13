import { PageLayout } from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Heart, Gift, Users, Globe, Sparkles, CreditCard, Building2, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';

const DonationPage = () => {
  const { t } = useLanguage();

  const donationOptions = [
    { amount: '25$', label: t('donation.opt1'), description: t('donation.opt1_desc'), icon: Heart },
    { amount: '50$', label: t('donation.opt2'), description: t('donation.opt2_desc'), icon: Gift },
    { amount: '100$', label: t('donation.opt3'), description: t('donation.opt3_desc'), icon: Users },
    { amount: '250$', label: t('donation.opt4'), description: t('donation.opt4_desc'), icon: Globe },
  ];

  const impactAreas = [
    { title: t('donation.impact1'), description: t('donation.impact1_desc'), icon: Building2 },
    { title: t('donation.impact2'), description: t('donation.impact2_desc'), icon: Users },
    { title: t('donation.impact3'), description: t('donation.impact3_desc'), icon: Gift },
  ];

  return (
    <PageLayout>
      <SEO title={"Faire un don | International Mandjara Heritage"} description={"Soutenez la préservation du patrimoine Mandjara — Bamoun, Nso' et Bafia — par un don."} />
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-heritage-earth via-heritage-earth/95 to-heritage-terracotta/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-heritage-gold/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-heritage-terracotta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-heritage-gold/20 text-heritage-gold text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              {t('donation.badge')}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-heritage-cream mb-6">
              {t('donation.title')} <span className="text-heritage-gold">{t('donation.title_highlight')}</span>
            </h1>
            <p className="text-heritage-cream/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {t('donation.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Options */}
      <section id="donation" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-heritage-gold/10 text-heritage-gold text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              {t('donation.choose_badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('donation.levels_title')} <span className="text-heritage-gold">{t('donation.levels_highlight')}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('donation.levels_subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationOptions.map((option, index) => (
              <motion.div key={option.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="group">
                <div className="card-heritage p-8 h-full flex flex-col items-center text-center hover:border-heritage-gold/30 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-heritage-gold/10 text-heritage-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-8 h-8" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-heritage-gold mb-2">{option.amount}</span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{option.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">{option.description}</p>
                  <Button variant="gold" className="w-full">{t('donation.give')} {option.amount}</Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Amount */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <div className="card-heritage p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-heritage-terracotta/10 text-heritage-terracotta mb-6">
                <Wallet className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{t('donation.custom_title')}</h3>
              <p className="text-muted-foreground mb-6">{t('donation.custom_text')}</p>
              <Button variant="outline" size="lg" asChild><a href="/contact">{t('donation.custom_cta')}</a></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-28 bg-heritage-sand/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-heritage-gold/10 text-heritage-gold text-sm font-medium mb-4">
              <Gift className="w-4 h-4" />
              {t('donation.impact_badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('donation.impact_title')} <span className="text-heritage-gold">{t('donation.impact_highlight')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="card-heritage p-8 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-heritage-forest/10 text-heritage-forest mb-6">
                    <area.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Info */}
      <section className="py-20 lg:py-28 bg-heritage-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-heritage-gold/20 text-heritage-gold mb-6">
              <CreditCard className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-cream mb-6">
              {t('donation.payment_title')} <span className="text-heritage-gold">{t('donation.payment_highlight')}</span>
            </h2>
            <p className="text-heritage-cream/80 text-lg mb-8 leading-relaxed">{t('donation.payment_text')}</p>
            <Button variant="gold" size="xl" asChild><a href="/contact">{t('donation.payment_cta')}</a></Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DonationPage;
