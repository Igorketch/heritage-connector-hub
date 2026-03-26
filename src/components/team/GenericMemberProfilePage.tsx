import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard } from '@/components/team/TeamMemberCard';
import { SluggedMember } from '@/components/team/TeamThumbnailGrid';

interface GenericMemberProfilePageProps {
  members: SluggedMember[];
  backPath: string;
  backLabel: string;
}

const GenericMemberProfilePage = ({ members, backPath, backLabel }: GenericMemberProfilePageProps) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const member = members.find(m => m.slug === slug);

  if (!member) {
    return (
      <PageLayout>
        <section className="py-20 bg-gradient-to-b from-heritage-earth to-heritage-earth/95">
          <div className="container mx-auto px-4 text-center">
            <p className="text-heritage-cream text-xl">Membre introuvable.</p>
            <button onClick={() => navigate(backPath)} className="mt-4 text-heritage-gold underline">
              ← {backLabel}
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
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate(backPath)}
            className="inline-flex items-center gap-2 text-heritage-gold hover:text-heritage-cream transition-colors mb-10 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">{backLabel}</span>
          </motion.button>

          <TeamMemberCard member={member} index={0} />
        </div>
      </section>
    </PageLayout>
  );
};

export default GenericMemberProfilePage;
