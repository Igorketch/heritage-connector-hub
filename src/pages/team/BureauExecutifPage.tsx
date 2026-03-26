import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { bureauData } from '@/data/bureauExecutifData';

const BureauExecutifPage = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const bureauExecutif = bureauData[language];

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
              <Briefcase className="w-4 h-4 text-heritage-gold" />
              <span className="text-heritage-gold text-sm font-medium">{t('team.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heritage-cream mb-6">
              {t('team.cat.bureau')}
            </h1>
            <p className="text-xl text-heritage-cream/70 max-w-2xl mx-auto">
              {t('team.cat.bureau_sub')}
            </p>
          </motion.div>

          {/* Circular Thumbnails Grid */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {bureauExecutif.map((member, index) => (
              <motion.button
                key={member.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onClick={() => navigate(`/team/bureau-executif/${member.slug}`)}
                className="group text-center focus:outline-none"
              >
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto mb-4 rounded-full overflow-hidden border-3 border-heritage-gold/30 transition-all duration-500 shadow-lg group-hover:border-heritage-gold group-hover:shadow-heritage-gold/30 group-hover:shadow-xl">
                  <img
                    src={member.portrait}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: member.portraitPosition || 'top' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-earth/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="font-display font-semibold text-heritage-cream text-sm md:text-base leading-tight max-w-[160px] mx-auto">
                  {member.name}
                </h4>
                <p className="text-heritage-gold/70 text-xs md:text-sm mt-1 max-w-[150px] mx-auto">{member.role}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BureauExecutifPage;
