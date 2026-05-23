import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Language, useLanguage } from '@/contexts/LanguageContext';
import { SluggedMember } from '@/components/team/TeamThumbnailGrid';
import { resolveIcon } from '@/lib/teamIcons';

export type TeamCategory = 'bureau' | 'conseil' | 'sages' | 'representants' | 'parrains' | 'honneur';
export type EthnicGroup = 'bamoun' | 'nso' | 'bafia' | 'autre';

export interface TeamMemberRow {
  id: string;
  category: TeamCategory;
  ethnic_group: EthnicGroup;
  slug: string;
  name: string;
  role_fr: string | null;
  role_en: string | null;
  bio_fr: string[];
  bio_en: string[];
  quote_fr: string | null;
  quote_en: string | null;
  achievements: { icon: string; title_fr?: string; title_en?: string; description_fr?: string; description_en?: string }[];
  portrait_url: string | null;
  portrait_position: string | null;
  display_order: number;
  is_visible: boolean;
}

export function rowToSluggedMember(row: TeamMemberRow, language: Language): SluggedMember & { ethnic_group: EthnicGroup } {
  return {
    slug: row.slug,
    name: row.name,
    role: (language === 'fr' ? row.role_fr : row.role_en) || '',
    portrait: row.portrait_url || '',
    portraitPosition: row.portrait_position || undefined,
    bio: language === 'fr' ? row.bio_fr : row.bio_en,
    quote: (language === 'fr' ? row.quote_fr : row.quote_en) || '',
    achievements: (row.achievements || []).map(a => ({
      icon: resolveIcon(a.icon),
      title: (language === 'fr' ? a.title_fr : a.title_en) || a.title_fr || a.title_en || '',
      description: (language === 'fr' ? a.description_fr : a.description_en) || a.description_fr || a.description_en || '',
    })),
    ethnic_group: row.ethnic_group,
  };
}

export function useTeamMembers(category: TeamCategory) {
  const { language } = useLanguage();
  const [rows, setRows] = useState<TeamMemberRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    supabase
      .from('team_members')
      .select('*')
      .eq('category', category)
      .eq('is_visible', true)
      .order('display_order', { ascending: true })
      .then(({ data }) => {
        if (!cancelled) {
          setRows((data as any) || []);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, [category]);

  const members = rows.map(r => rowToSluggedMember(r, language));
  return { members, rows, loading, hasData: rows.length > 0 };
}
