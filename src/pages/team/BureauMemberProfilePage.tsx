import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard } from '@/components/team/TeamMemberCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { bureauData } from '@/data/bureauExecutifData';

const BureauMemberProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const members = bureauData[language];
  const member = members.find(m => m.slug === slug);

  if (!member) {
    return (
      <PageLayout>
        <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
          <div className="container mx-auto px-4 text-center">
            <p className="text-heritage-cream text-xl">Membre introuvable.</p>
            <button onClick={() => navigate('/team/bureau-executif')} className="mt-4 text-heritage-gold underline">
              ← {t('team.cat.bureau')}
            </button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate('/team/bureau-executif')}
            className="inline-flex items-center gap-2 text-heritage-gold hover:text-heritage-cream transition-colors mb-10 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">{t('team.cat.bureau')}</span>
          </motion.button>

          <TeamMemberCard member={member} index={0} />
        </div>
      </section>
    </PageLayout>
  );
};

export default BureauMemberProfilePage;
