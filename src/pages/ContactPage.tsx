import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin, Phone, MessageCircle, Clock, Globe } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';

const ContactPage = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t('contact.form.success_title'), description: t('contact.form.success_desc') });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageLayout>
      <SEO title={"Contact | International Mandjara Heritage"} description={"Contactez International Mandjara Heritage : info@internationalmandjaraheritage.org."} />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-heritage-earth">
        <div className="absolute inset-0 heritage-pattern opacity-10" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-heritage-gold/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-heritage-terracotta/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-heritage-gold/20 border border-heritage-gold/30 backdrop-blur-sm mb-8">
              <MessageCircle className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('contact.badge')}</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage-cream mb-6">
              {t('contact.title')} <span className="text-gradient-gold">{t('contact.title_highlight')}</span>
            </h1>
            <p className="text-heritage-cream/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6">{t('contact.info_title')}</h2>
                  <p className="text-muted-foreground mb-8">{t('contact.info_text')}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t('contact.email')}</h4>
                      <p className="text-muted-foreground text-sm">info@internationalmandjaraheritage.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t('contact.location')}</h4>
                      <p className="text-muted-foreground text-sm">Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t('contact.phone')}</h4>
                      <p className="text-muted-foreground text-sm">+1 (343) 322-0908</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t('contact.presence')}</h4>
                      <p className="text-muted-foreground text-sm">Canada • International</p>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="p-6 rounded-2xl bg-heritage-earth/5 border border-heritage-gold/20">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">{t('contact.newsletter_title')}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{t('contact.newsletter_text')}</p>
                  <div className="flex gap-2">
                    <Input type="email" placeholder={t('contact.newsletter_placeholder')} className="flex-1" />
                    <Button variant="gold" size="icon"><Send className="w-4 h-4" /></Button>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="lg:col-span-3">
                <div className="card-heritage p-8 lg:p-10">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">{t('contact.form_title')}</h2>
                  <p className="text-muted-foreground mb-8">{t('contact.form_text')}</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-foreground text-sm font-medium mb-2">{t('contact.form.name')}</label>
                        <Input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder={t('contact.form.name_placeholder')} required />
                      </div>
                      <div>
                        <label className="block text-foreground text-sm font-medium mb-2">{t('contact.form.email')}</label>
                        <Input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder={t('contact.form.email_placeholder')} required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">{t('contact.form.subject')}</label>
                      <Input type="text" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} placeholder={t('contact.form.subject_placeholder')} />
                    </div>
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">{t('contact.form.message')}</label>
                      <Textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder={t('contact.form.message_placeholder')} required rows={6} className="resize-none" />
                    </div>
                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.form.send')}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-heritage-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-heritage-cream mb-6">
              {t('contact.cta_title')} <span className="text-heritage-gold">{t('contact.cta_highlight')}</span>
            </h2>
            <p className="text-heritage-cream/80 text-lg leading-relaxed mb-8">{t('contact.cta_text')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg">{t('contact.cta.member')}</Button>
              <Button variant="outline-light" size="lg">{t('contact.cta.donate')}</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
