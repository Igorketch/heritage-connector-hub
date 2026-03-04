import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Calendar, User, BookOpen, PartyPopper, Handshake, GraduationCap, Users, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Publication {
  title: string;
  author: string;
  year: string;
  type: string;
  institution: string;
  description: string;
  fileUrl: string;
  fileName: string;
}

const PublicationsPage = () => {
  const { t } = useLanguage();

  const publications: Publication[] = [
    {
      title: 'Politiques publiques, programmes et projets sensibles au genre : cas de la communauté Mandjara au Cameroun',
      author: 'Laurentine Mouchingam Mefire',
      year: '2016',
      type: t('publications.type_thesis'),
      institution: 'Université de Montréal',
      description: t('publications.thesis_desc'),
      fileUrl: '/documents/these-mouchingam-mefire-laurentine-2016.pdf',
      fileName: 'these-mouchingam-mefire-laurentine-2016.pdf',
    },
  ];

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
              {t('publications.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-cream mb-6">
              {t('publications.title')}{' '}
              <span className="text-gradient-gold">{t('publications.title_highlight')}</span>
            </h1>
            <p className="text-lg text-heritage-cream/70 leading-relaxed">
              {t('publications.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-heritage-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {publications.map((pub, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-heritage p-8 lg:p-10"
              >
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                    <BookOpen size={14} />
                    {pub.type}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-tight">
                  {pub.title}
                </h2>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User size={14} className="text-primary" />
                    {pub.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {pub.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileText size={14} className="text-primary" />
                    {pub.institution}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {pub.description}
                </p>

                {/* Actions - Only Read button */}
                <div className="flex flex-wrap gap-3">
                  <a href={pub.fileUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="heritage" size="default">
                      <FileText size={16} />
                      {t('publications.read')}
                    </Button>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Événements Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <PartyPopper className="w-7 h-7 text-heritage-gold" />
                {t('publications.events_title')}
              </h2>
              <div className="card-heritage p-8 lg:p-10">
                <h3 className="text-xl font-bold text-foreground mb-2">Nguoun 2024</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('publications.nguoun_desc')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Partenaires Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Handshake className="w-7 h-7 text-heritage-gold" />
                {t('publications.partners_title')}
              </h2>
              <div className="card-heritage p-8 lg:p-10">
                <h3 className="text-xl font-bold text-foreground mb-2">ACPHA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Association Canadienne pour la Promotion des Héritages Africains (ACPHA)
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stage 2012 */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-heritage-gold" />
                Stage 2012 des étudiants
              </h2>
              <div className="card-heritage p-8 lg:p-10 flex items-center gap-3 text-muted-foreground">
                <Info size={18} className="text-heritage-gold flex-shrink-0" />
                <p className="italic">{t('publications.coming_soon')}</p>
              </div>
            </motion.div>
          </div>

          {/* Les grandes retrouvailles 2012 */}
          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Users className="w-7 h-7 text-heritage-gold" />
                Les grandes retrouvailles 2012 au Cameroun
              </h2>
              <div className="card-heritage p-8 lg:p-10 flex items-center gap-3 text-muted-foreground">
                <Info size={18} className="text-heritage-gold flex-shrink-0" />
                <p className="italic">{t('publications.coming_soon')}</p>
              </div>
            </motion.div>
          </div>

          {/* Call to contribute */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-16 text-center"
          >
            <div className="card-heritage p-10 bg-heritage-earth text-heritage-cream">
              <BookOpen size={40} className="mx-auto mb-4 text-heritage-gold" />
              <h3 className="text-2xl font-bold mb-3">{t('publications.contribute_title')}</h3>
              <p className="text-heritage-cream/70 mb-6 leading-relaxed">
                {t('publications.contribute_text')}
              </p>
              <a href="/contact">
                <Button variant="gold" size="lg">
                  {t('publications.contribute_cta')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PublicationsPage;
