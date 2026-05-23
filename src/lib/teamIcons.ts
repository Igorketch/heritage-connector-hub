import {
  Briefcase, Crown, GraduationCap, Building2, HandHeart, Globe,
  Stethoscope, Sparkles, Heart, Leaf, Award, ScrollText, Users,
  MapPin, BookOpen, HeartPulse, Languages, Plane, Palette, UserPlus,
  Star, type LucideIcon,
} from 'lucide-react';

export const TEAM_ICONS: Record<string, LucideIcon> = {
  Briefcase, Crown, GraduationCap, Building2, HandHeart, Globe,
  Stethoscope, Sparkles, Heart, Leaf, Award, ScrollText, Users,
  MapPin, BookOpen, HeartPulse, Languages, Plane, Palette, UserPlus, Star,
};

export const ICON_NAMES = Object.keys(TEAM_ICONS);

export function resolveIcon(name?: string | null): LucideIcon {
  if (!name) return Award;
  return TEAM_ICONS[name] || Award;
}

/** Best-effort: extract icon name from a Lucide React component. */
export function getIconName(component: any): string {
  const n = component?.displayName || component?.render?.displayName || component?.name;
  if (n && TEAM_ICONS[n]) return n;
  // Fallback: scan registry
  for (const [key, val] of Object.entries(TEAM_ICONS)) {
    if (val === component) return key;
  }
  return 'Award';
}
