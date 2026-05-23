import { supabase } from '@/integrations/supabase/client';
import { getIconName } from '@/lib/teamIcons';
import { bureauData } from '@/data/bureauExecutifData';
import { conseilMembers } from '@/data/conseilAdministrationData';
import { sagesData } from '@/data/comiteSagesData';
import { representantsData } from '@/data/representantsNationauxData';
import { membresHonneurData } from '@/data/membresHonneurData';
import type { SluggedMember } from '@/components/team/TeamThumbnailGrid';

type Category = 'bureau' | 'conseil' | 'sages' | 'representants' | 'honneur';
type Ethnic = 'bamoun' | 'nso' | 'bafia' | 'autre';

function buildRow(
  fr: SluggedMember,
  en: SluggedMember | undefined,
  category: Category,
  ethnic_group: Ethnic,
  display_order: number,
) {
  const achievementsFr = fr.achievements || [];
  const achievementsEn = en?.achievements || [];
  const achievements = achievementsFr.map((a, i) => ({
    icon: getIconName(a.icon),
    title_fr: a.title,
    title_en: achievementsEn[i]?.title || a.title,
    description_fr: a.description,
    description_en: achievementsEn[i]?.description || a.description,
  }));
  return {
    category,
    ethnic_group,
    slug: fr.slug,
    name: fr.name,
    role_fr: fr.role || null,
    role_en: en?.role || fr.role || null,
    bio_fr: fr.bio || [],
    bio_en: en?.bio || fr.bio || [],
    quote_fr: fr.quote || null,
    quote_en: en?.quote || fr.quote || null,
    achievements,
    portrait_url: fr.portrait || null,
    portrait_position: fr.portraitPosition || 'top',
    display_order,
    is_visible: true,
  };
}

function pairByCategory(category: Category) {
  const map: Record<Category, { fr: SluggedMember[]; en: SluggedMember[]; ethnicOf: (m: SluggedMember) => Ethnic }> = {
    bureau: {
      fr: bureauData.fr,
      en: bureauData.en,
      ethnicOf: () => 'autre',
    },
    conseil: {
      fr: conseilMembers.fr,
      en: conseilMembers.en,
      ethnicOf: () => 'autre',
    },
    sages: {
      fr: sagesData.fr.flatMap(c => c.members.map(m => Object.assign(m, { __eg: c.id }))),
      en: sagesData.en.flatMap(c => c.members.map(m => Object.assign(m, { __eg: c.id }))),
      ethnicOf: (m: any) => (m.__eg === 'special' ? 'autre' : (m.__eg as Ethnic)),
    },
    representants: {
      fr: representantsData.fr.flatMap(c => c.members.map(m => Object.assign(m, { __eg: c.id }))),
      en: representantsData.en.flatMap(c => c.members.map(m => Object.assign(m, { __eg: c.id }))),
      ethnicOf: (m: any) => m.__eg as Ethnic,
    },
    honneur: {
      fr: membresHonneurData.fr,
      en: membresHonneurData.en,
      ethnicOf: () => 'autre',
    },
  };
  return map[category];
}

export async function importStaticTeamData(): Promise<{ inserted: number; skipped: number; errors: string[] }> {
  const errors: string[] = [];
  let inserted = 0;
  let skipped = 0;
  const categories: Category[] = ['bureau', 'conseil', 'sages', 'representants', 'honneur'];

  // Existing slugs to avoid duplicates
  const { data: existing } = await supabase.from('team_members').select('slug, category');
  const existingSet = new Set((existing || []).map((r: any) => `${r.category}:${r.slug}`));

  for (const cat of categories) {
    const { fr, en, ethnicOf } = pairByCategory(cat);
    for (let i = 0; i < fr.length; i++) {
      const memberFr = fr[i];
      const memberEn = en[i] || en.find(m => m.slug === memberFr.slug);
      const key = `${cat}:${memberFr.slug}`;
      if (existingSet.has(key)) { skipped++; continue; }
      const row = buildRow(memberFr, memberEn, cat, ethnicOf(memberFr), i * 10);
      const { error } = await supabase.from('team_members').insert(row);
      if (error) errors.push(`${cat}/${memberFr.slug}: ${error.message}`);
      else inserted++;
    }
  }
  return { inserted, skipped, errors };
}
