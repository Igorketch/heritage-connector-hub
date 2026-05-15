import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TeamMember } from '@/components/team/TeamMemberCard';
import { Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export interface SluggedMember extends TeamMember {
  slug: string;
}

interface TeamThumbnailGridProps {
  members: SluggedMember[];
  basePath: string;
}

export const TeamThumbnailGrid = ({ members, basePath }: TeamThumbnailGridProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  if (members.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-full bg-heritage-gold/10 border border-heritage-gold/20 flex items-center justify-center mx-auto mb-6">
          <Users className="w-8 h-8 text-heritage-gold/40" />
        </div>
        <p className="text-heritage-cream/50 text-lg italic">
          {language === 'fr' ? 'Membres à venir...' : 'Members coming soon...'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 lg:gap-10">
      {members.map((member, index) => (
        <motion.button
          key={member.slug}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          onClick={() => navigate(`${basePath}/${member.slug}`)}
          className="group text-center focus:outline-none flex flex-col items-center"
        >
          <div className="relative w-44 h-44 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto mb-4 rounded-full overflow-hidden border-[3px] border-heritage-gold/30 transition-all duration-500 shadow-lg group-hover:border-heritage-gold group-hover:shadow-heritage-gold/30 group-hover:shadow-xl">
            {member.portrait ? (
              <img
                src={member.portrait}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: member.portraitPosition || 'top' }}
              />
            ) : (
              <div className="w-full h-full bg-heritage-earth/80 flex items-center justify-center">
                <span className="text-5xl font-display text-heritage-gold/40">{member.name.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-heritage-earth/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <h4 className="font-display font-semibold text-heritage-cream text-base sm:text-sm md:text-base leading-tight max-w-[220px] sm:max-w-[160px] mx-auto">
            {member.name}
          </h4>
          <p className="text-heritage-gold/70 text-sm sm:text-xs md:text-sm mt-1 max-w-[220px] sm:max-w-[150px] mx-auto">{member.role}</p>
        </motion.button>
      ))}
    </div>
  );
};
