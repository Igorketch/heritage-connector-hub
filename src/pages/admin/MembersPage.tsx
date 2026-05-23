import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown, Upload, Loader2, Download, X } from 'lucide-react';
import { toast } from 'sonner';
import { ICON_NAMES } from '@/lib/teamIcons';
import { importStaticTeamData } from '@/lib/importTeamData';

type Category = 'bureau' | 'conseil' | 'sages' | 'representants' | 'parrains' | 'honneur';
type Ethnic = 'bamoun' | 'nso' | 'bafia' | 'autre';

interface AchievementItem {
  icon: string;
  title_fr?: string;
  title_en?: string;
  description_fr?: string;
  description_en?: string;
}

const CATEGORY_LABELS: Record<Category, string> = {
  bureau: 'Bureau exécutif',
  conseil: "Conseil d'administration",
  sages: 'Comité des sages',
  representants: 'Représentants nationaux',
  parrains: 'Parrains',
  honneur: "Membres d'honneur",
};

interface TeamMember {
  id: string;
  category: Category;
  ethnic_group: Ethnic;
  slug: string;
  name: string;
  role_fr: string | null;
  role_en: string | null;
  bio_fr: string[];
  bio_en: string[];
  quote_fr: string | null;
  quote_en: string | null;
  achievements: AchievementItem[];
  portrait_url: string | null;
  portrait_position: string | null;
  display_order: number;
  is_visible: boolean;
}

const emptyMember = (category: Category): Partial<TeamMember> => ({
  category,
  ethnic_group: 'autre',
  slug: '',
  name: '',
  role_fr: '',
  role_en: '',
  bio_fr: [],
  bio_en: [],
  quote_fr: '',
  quote_en: '',
  achievements: [],
  portrait_url: '',
  portrait_position: 'top',
  display_order: 0,
  is_visible: true,
});

const slugify = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const MembersPage = () => {
  const [category, setCategory] = useState<Category>('bureau');
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<TeamMember> | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [importing, setImporting] = useState(false);

  const fetchMembers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('category', category)
      .order('display_order', { ascending: true });
    if (error) toast.error(error.message);
    else setMembers((data as any) || []);
    setLoading(false);
  };

  useEffect(() => { fetchMembers(); }, [category]);

  const handleSave = async () => {
    if (!editing) return;
    if (!editing.name) { toast.error('Nom requis'); return; }
    const slug = editing.slug || slugify(editing.name);
    setSaving(true);
    const payload = { ...editing, slug, category };
    const { id, ...rest } = payload as any;
    const { error } = id
      ? await supabase.from('team_members').update(rest).eq('id', id)
      : await supabase.from('team_members').insert(rest);
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success(id ? 'Membre modifié' : 'Membre ajouté');
    setEditing(null);
    fetchMembers();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer ce membre ?')) return;
    const { error } = await supabase.from('team_members').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Supprimé'); fetchMembers(); }
  };

  const move = async (m: TeamMember, dir: -1 | 1) => {
    const i = members.findIndex(x => x.id === m.id);
    const j = i + dir;
    if (j < 0 || j >= members.length) return;
    const other = members[j];
    await supabase.from('team_members').update({ display_order: other.display_order }).eq('id', m.id);
    await supabase.from('team_members').update({ display_order: m.display_order }).eq('id', other.id);
    fetchMembers();
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split('.').pop();
    const path = `${category}/${Date.now()}-${slugify(editing?.name || 'photo')}.${ext}`;
    const { error } = await supabase.storage.from('team-photos').upload(path, file, { upsert: true });
    if (error) { toast.error(error.message); setUploading(false); return; }
    const { data } = supabase.storage.from('team-photos').getPublicUrl(path);
    setEditing(prev => prev ? { ...prev, portrait_url: data.publicUrl } : prev);
    setUploading(false);
    toast.success('Photo téléversée');
  };

  const handleImport = async () => {
    if (!confirm('Importer toutes les données existantes (Bureau, Conseil, Sages, Représentants, Honneur) dans la base ? Les membres existants seront ignorés.')) return;
    setImporting(true);
    try {
      const result = await importStaticTeamData();
      toast.success(`${result.inserted} membres importés, ${result.skipped} ignorés.`);
      if (result.errors.length) {
        console.warn('Erreurs d\'import:', result.errors);
        toast.warning(`${result.errors.length} erreurs (voir console)`);
      }
      fetchMembers();
    } catch (e: any) {
      toast.error(e?.message || 'Erreur d\'import');
    } finally {
      setImporting(false);
    }
  };

  const updateAchievement = (idx: number, patch: Partial<AchievementItem>) => {
    setEditing(prev => {
      if (!prev) return prev;
      const list = [...(prev.achievements || [])];
      list[idx] = { ...list[idx], ...patch };
      return { ...prev, achievements: list };
    });
  };

  const addAchievement = () => {
    setEditing(prev => prev ? {
      ...prev,
      achievements: [...(prev.achievements || []), { icon: 'Award', title_fr: '', title_en: '', description_fr: '', description_en: '' }],
    } : prev);
  };

  const removeAchievement = (idx: number) => {
    setEditing(prev => {
      if (!prev) return prev;
      const list = [...(prev.achievements || [])];
      list.splice(idx, 1);
      return { ...prev, achievements: list };
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h2 className="font-serif text-3xl font-bold">Gestion des membres</h2>
          <p className="text-muted-foreground">Créez et organisez les membres par catégorie.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleImport} disabled={importing}>
            {importing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
            Importer les données existantes
          </Button>
          <Button onClick={() => setEditing(emptyMember(category))}>
            <Plus className="w-4 h-4 mr-2" /> Nouveau membre
          </Button>
        </div>
      </div>

      <Tabs value={category} onValueChange={(v) => setCategory(v as Category)}>
        <TabsList className="flex flex-wrap h-auto">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((c) => (
            <TabsTrigger key={c} value={c}>{CATEGORY_LABELS[c]}</TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(CATEGORY_LABELS) as Category[]).map((c) => (
          <TabsContent key={c} value={c} className="mt-6">
            {loading ? (
              <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin" /></div>
            ) : members.length === 0 ? (
              <Card className="p-12 text-center text-muted-foreground">Aucun membre dans cette catégorie.</Card>
            ) : (
              <div className="space-y-3">
                {members.map((m, i) => (
                  <Card key={m.id} className="p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      {m.portrait_url && <img src={m.portrait_url} alt={m.name} className="w-full h-full object-cover" style={{ objectPosition: m.portrait_position || 'top' }} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{m.name}</div>
                      <div className="text-sm text-muted-foreground truncate">{m.role_fr}</div>
                      <div className="text-xs text-muted-foreground">
                        {m.ethnic_group} · ordre {m.display_order} {!m.is_visible && '· masqué'}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" disabled={i === 0} onClick={() => move(m, -1)}><ArrowUp className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon" disabled={i === members.length - 1} onClick={() => move(m, 1)}><ArrowDown className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => setEditing(m)}><Pencil className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(m.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing?.id ? 'Modifier le membre' : 'Nouveau membre'}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Nom complet *</Label>
                  <Input value={editing.name || ''} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
                </div>
                <div>
                  <Label>Slug (URL)</Label>
                  <Input value={editing.slug || ''} placeholder={slugify(editing.name || '')}
                    onChange={(e) => setEditing({ ...editing, slug: e.target.value })} />
                </div>
                <div>
                  <Label>Groupe ethnique</Label>
                  <Select value={editing.ethnic_group} onValueChange={(v) => setEditing({ ...editing, ethnic_group: v as Ethnic })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bamoun">Bamoun</SelectItem>
                      <SelectItem value="nso">Nso'</SelectItem>
                      <SelectItem value="bafia">Bafia</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Ordre d'affichage</Label>
                  <Input type="number" value={editing.display_order ?? 0}
                    onChange={(e) => setEditing({ ...editing, display_order: parseInt(e.target.value) || 0 })} />
                </div>
                <div>
                  <Label>Rôle (FR)</Label>
                  <Input value={editing.role_fr || ''} onChange={(e) => setEditing({ ...editing, role_fr: e.target.value })} />
                </div>
                <div>
                  <Label>Rôle (EN)</Label>
                  <Input value={editing.role_en || ''} onChange={(e) => setEditing({ ...editing, role_en: e.target.value })} />
                </div>
              </div>

              <div>
                <Label>Photo</Label>
                <div className="flex items-center gap-4 mt-2">
                  {editing.portrait_url && (
                    <img src={editing.portrait_url} alt="" className="w-20 h-20 rounded-full object-cover border" style={{ objectPosition: editing.portrait_position || 'top' }} />
                  )}
                  <label className="cursor-pointer">
                    <input type="file" accept="image/*" className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])} />
                    <Button type="button" variant="outline" disabled={uploading} asChild>
                      <span>
                        {uploading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
                        Téléverser
                      </span>
                    </Button>
                  </label>
                  <Input placeholder="ou URL" value={editing.portrait_url || ''}
                    onChange={(e) => setEditing({ ...editing, portrait_url: e.target.value })} />
                </div>
                <Input className="mt-2" placeholder="Position (ex: top, center, 'center 20%')"
                  value={editing.portrait_position || ''}
                  onChange={(e) => setEditing({ ...editing, portrait_position: e.target.value })} />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Biographie FR (un paragraphe par ligne vide)</Label>
                  <Textarea rows={8} value={(editing.bio_fr || []).join('\n\n')}
                    onChange={(e) => setEditing({ ...editing, bio_fr: e.target.value.split(/\n\s*\n/).filter(Boolean) })} />
                </div>
                <div>
                  <Label>Biographie EN</Label>
                  <Textarea rows={8} value={(editing.bio_en || []).join('\n\n')}
                    onChange={(e) => setEditing({ ...editing, bio_en: e.target.value.split(/\n\s*\n/).filter(Boolean) })} />
                </div>
                <div>
                  <Label>Citation FR</Label>
                  <Textarea rows={2} value={editing.quote_fr || ''} onChange={(e) => setEditing({ ...editing, quote_fr: e.target.value })} />
                </div>
                <div>
                  <Label>Citation EN</Label>
                  <Textarea rows={2} value={editing.quote_en || ''} onChange={(e) => setEditing({ ...editing, quote_en: e.target.value })} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Réalisations / Achievements</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addAchievement}>
                    <Plus className="w-3 h-3 mr-1" /> Ajouter
                  </Button>
                </div>
                <div className="space-y-3">
                  {(editing.achievements || []).map((a, idx) => (
                    <Card key={idx} className="p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <Select value={a.icon} onValueChange={(v) => updateAchievement(idx, { icon: v })}>
                          <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                          <SelectContent className="max-h-60">
                            {ICON_NAMES.map(n => <SelectItem key={n} value={n}>{n}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <div className="flex-1" />
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeAchievement(idx)}>
                          <X className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Titre FR" value={a.title_fr || ''} onChange={e => updateAchievement(idx, { title_fr: e.target.value })} />
                        <Input placeholder="Title EN" value={a.title_en || ''} onChange={e => updateAchievement(idx, { title_en: e.target.value })} />
                        <Textarea rows={2} placeholder="Description FR" value={a.description_fr || ''} onChange={e => updateAchievement(idx, { description_fr: e.target.value })} />
                        <Textarea rows={2} placeholder="Description EN" value={a.description_en || ''} onChange={e => updateAchievement(idx, { description_en: e.target.value })} />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Switch checked={editing.is_visible ?? true} onCheckedChange={(v) => setEditing({ ...editing, is_visible: v })} />
                <Label>Visible publiquement</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditing(null)}>Annuler</Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MembersPage;
