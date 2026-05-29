import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { getAllTranslationKeys, getDefaultTranslations, useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { Loader2, RotateCcw, Save, Search } from 'lucide-react';

const SECTION_LABELS: Record<string, string> = {
  nav: 'Navigation',
  hero: 'Accueil — Hero',
  index: 'Accueil — Sections',
  context: 'Page Contexte',
  peoples: 'Page Peuples',
  values: 'Page Valeurs',
  mission: 'Page Mission',
  contact: 'Page Contact',
  donation: 'Page Don',
  publications: 'Page Publications',
  evenements: 'Page Événements',
  nguoun: 'Événement Nguoun',
  galerie: 'Page Galerie',
  partenaires: 'Page Partenaires',
  team: 'Pages Équipe',
  footer: 'Pied de page',
  common: 'Commun',
};

const sectionOf = (key: string) => key.split('.')[0];

const PagesPage = () => {
  const { overrides, refreshOverrides } = useLanguage();
  const defaults = getDefaultTranslations();
  const allKeys = useMemo(() => getAllTranslationKeys().sort(), []);
  const [draft, setDraft] = useState<Record<string, { fr: string; en: string }>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const getValue = (key: string, lang: 'fr' | 'en') => {
    if (draft[key]?.[lang] !== undefined) return draft[key][lang];
    return overrides[lang][key] ?? defaults[lang][key] ?? '';
  };

  const setDraftValue = (key: string, lang: 'fr' | 'en', value: string) => {
    setDraft((d) => ({ ...d, [key]: { ...(d[key] ?? { fr: getValue(key, 'fr'), en: getValue(key, 'en') }), [lang]: value } }));
  };

  const isOverridden = (key: string, lang: 'fr' | 'en') => overrides[lang][key] !== undefined;
  const isDirty = (key: string) => !!draft[key];

  const save = async (key: string) => {
    setSaving(key);
    const fr = getValue(key, 'fr');
    const en = getValue(key, 'en');
    const rows: any[] = [];
    if (fr !== (defaults.fr[key] ?? '')) rows.push({ key, lang: 'fr', value: fr });
    if (en !== (defaults.en[key] ?? '')) rows.push({ key, lang: 'en', value: en });

    // Delete any override that's been reverted to default
    const toDelete: ('fr' | 'en')[] = [];
    if (fr === (defaults.fr[key] ?? '') && overrides.fr[key] !== undefined) toDelete.push('fr');
    if (en === (defaults.en[key] ?? '') && overrides.en[key] !== undefined) toDelete.push('en');

    try {
      for (const lang of toDelete) {
        await supabase.from('content_overrides').delete().eq('key', key).eq('lang', lang);
      }
      if (rows.length) {
        const { error } = await supabase.from('content_overrides').upsert(rows, { onConflict: 'key,lang' });
        if (error) throw error;
      }
      await refreshOverrides();
      setDraft((d) => { const n = { ...d }; delete n[key]; return n; });
      toast.success('Texte enregistré');
    } catch (e: any) {
      toast.error(e.message ?? 'Erreur');
    } finally {
      setSaving(null);
    }
  };

  const resetKey = async (key: string) => {
    setSaving(key);
    try {
      await supabase.from('content_overrides').delete().eq('key', key);
      await refreshOverrides();
      setDraft((d) => { const n = { ...d }; delete n[key]; return n; });
      toast.success('Réinitialisé');
    } catch (e: any) {
      toast.error(e.message ?? 'Erreur');
    } finally {
      setSaving(null);
    }
  };

  const filtered = filter
    ? allKeys.filter((k) =>
        k.toLowerCase().includes(filter.toLowerCase()) ||
        (defaults.fr[k] ?? '').toLowerCase().includes(filter.toLowerCase()) ||
        (defaults.en[k] ?? '').toLowerCase().includes(filter.toLowerCase())
      )
    : allKeys;

  const grouped = filtered.reduce<Record<string, string[]>>((acc, k) => {
    const s = sectionOf(k);
    (acc[s] ??= []).push(k);
    return acc;
  }, {});

  const sectionKeys = Object.keys(grouped).sort((a, b) =>
    (SECTION_LABELS[a] ?? a).localeCompare(SECTION_LABELS[b] ?? b)
  );

  if (loading) return <Loader2 className="w-6 h-6 animate-spin text-heritage-gold" />;

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl font-bold mb-2">Gestion des pages</h2>
      <p className="text-muted-foreground mb-6">
        Modifiez les textes affichés sur les pages publiques en français et en anglais. Les valeurs par défaut restent disponibles tant qu'aucune modification n'est enregistrée.
      </p>

      <div className="relative mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Rechercher une clé ou un texte…"
          className="pl-9"
        />
      </div>

      <Accordion type="multiple" className="space-y-2">
        {sectionKeys.map((s) => (
          <AccordionItem key={s} value={s} className="border rounded-lg bg-card">
            <AccordionTrigger className="px-4 hover:no-underline">
              <div className="flex items-center gap-3">
                <span className="font-semibold">{SECTION_LABELS[s] ?? s}</span>
                <Badge variant="outline">{grouped[s].length}</Badge>
                {grouped[s].some((k) => isOverridden(k, 'fr') || isOverridden(k, 'en')) && (
                  <Badge variant="secondary">modifié</Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              {grouped[s].map((k) => {
                const frDef = defaults.fr[k] ?? '';
                const enDef = defaults.en[k] ?? '';
                const isLong = frDef.length > 80 || enDef.length > 80;
                const Field: any = isLong ? Textarea : Input;
                return (
                  <Card key={k} className="p-4 space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <code className="text-xs text-muted-foreground">{k}</code>
                      <div className="flex gap-2">
                        {(isOverridden(k, 'fr') || isOverridden(k, 'en')) && (
                          <Button size="sm" variant="ghost" onClick={() => resetKey(k)} disabled={saving === k}>
                            <RotateCcw className="w-3 h-3 mr-1" />Réinitialiser
                          </Button>
                        )}
                        <Button size="sm" onClick={() => save(k)} disabled={!isDirty(k) || saving === k}>
                          {saving === k ? <Loader2 className="w-3 h-3 mr-1 animate-spin" /> : <Save className="w-3 h-3 mr-1" />}
                          Enregistrer
                        </Button>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1 block">
                          Français {isOverridden(k, 'fr') && <Badge variant="secondary" className="ml-1">modifié</Badge>}
                        </label>
                        <Field
                          value={getValue(k, 'fr')}
                          onChange={(e: any) => setDraftValue(k, 'fr', e.target.value)}
                          rows={isLong ? 3 : undefined}
                        />
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">Défaut : {frDef}</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1 block">
                          English {isOverridden(k, 'en') && <Badge variant="secondary" className="ml-1">edited</Badge>}
                        </label>
                        <Field
                          value={getValue(k, 'en')}
                          onChange={(e: any) => setDraftValue(k, 'en', e.target.value)}
                          rows={isLong ? 3 : undefined}
                        />
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">Default: {enDef}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PagesPage;
