import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown, Upload, Loader2, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface EventItem {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string | null;
  description_fr: string | null;
  description_en: string | null;
  start_date: string | null;
  end_date: string | null;
  location: string | null;
  cover_url: string | null;
  external_url: string | null;
  display_order: number;
  is_visible: boolean;
}

const empty = (): Partial<EventItem> => ({
  slug: '', title_fr: '', title_en: '', description_fr: '', description_en: '',
  start_date: '', end_date: '', location: '', cover_url: '', external_url: '',
  display_order: 0, is_visible: true,
});

const slugify = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const EventsPage = () => {
  const [items, setItems] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<EventItem> | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('events').select('*').order('display_order', { ascending: true });
    if (error) toast.error(error.message);
    else setItems((data as any) || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    if (!editing.title_fr) { toast.error('Titre FR requis'); return; }
    const slug = editing.slug || slugify(editing.title_fr);
    setSaving(true);
    const payload: any = { ...editing, slug };
    // Empty string dates -> null
    if (!payload.start_date) payload.start_date = null;
    if (!payload.end_date) payload.end_date = null;
    const { id, ...rest } = payload;
    const { error } = id
      ? await supabase.from('events').update(rest).eq('id', id)
      : await supabase.from('events').insert(rest);
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success(id ? 'Événement modifié' : 'Événement ajouté');
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cet événement ?')) return;
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Supprimé'); fetchItems(); }
  };

  const move = async (m: EventItem, dir: -1 | 1) => {
    const i = items.findIndex(x => x.id === m.id);
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const other = items[j];
    await supabase.from('events').update({ display_order: other.display_order }).eq('id', m.id);
    await supabase.from('events').update({ display_order: m.display_order }).eq('id', other.id);
    fetchItems();
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split('.').pop();
    const base = slugify(editing?.title_fr || 'event');
    const path = `${Date.now()}-${base}.${ext}`;
    const { error } = await supabase.storage.from('events-images').upload(path, file, { upsert: true });
    if (error) { toast.error(error.message); setUploading(false); return; }
    const { data } = supabase.storage.from('events-images').getPublicUrl(path);
    setEditing(prev => prev ? { ...prev, cover_url: data.publicUrl } : prev);
    setUploading(false);
    toast.success('Image téléversée');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h2 className="font-serif text-3xl font-bold">Événements</h2>
          <p className="text-muted-foreground">Événements à venir et passés.</p>
        </div>
        <Button onClick={() => setEditing(empty())}>
          <Plus className="w-4 h-4 mr-2" /> Nouvel événement
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin" /></div>
      ) : items.length === 0 ? (
        <Card className="p-12 text-center text-muted-foreground">Aucun événement.</Card>
      ) : (
        <div className="space-y-3">
          {items.map((m, i) => (
            <Card key={m.id} className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
                {m.cover_url ? <img src={m.cover_url} alt="" className="w-full h-full object-cover" /> : <Calendar className="w-5 h-5 text-muted-foreground" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{m.title_fr}</div>
                <div className="text-sm text-muted-foreground truncate">
                  {[m.start_date, m.location].filter(Boolean).join(' · ')}
                </div>
                <div className="text-xs text-muted-foreground">
                  /{m.slug} · ordre {m.display_order} {!m.is_visible && '· masqué'}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" disabled={i === 0} onClick={() => move(m, -1)}><ArrowUp className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" disabled={i === items.length - 1} onClick={() => move(m, 1)}><ArrowDown className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => setEditing(m)}><Pencil className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(m.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing?.id ? "Modifier l'événement" : 'Nouvel événement'}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Titre FR *</Label>
                  <Input value={editing.title_fr || ''} onChange={(e) => setEditing({ ...editing, title_fr: e.target.value })} />
                </div>
                <div>
                  <Label>Titre EN</Label>
                  <Input value={editing.title_en || ''} onChange={(e) => setEditing({ ...editing, title_en: e.target.value })} />
                </div>
                <div>
                  <Label>Slug (URL)</Label>
                  <Input value={editing.slug || ''} placeholder={slugify(editing.title_fr || '')}
                    onChange={(e) => setEditing({ ...editing, slug: e.target.value })} />
                </div>
                <div>
                  <Label>Ordre d'affichage</Label>
                  <Input type="number" value={editing.display_order ?? 0}
                    onChange={(e) => setEditing({ ...editing, display_order: parseInt(e.target.value) || 0 })} />
                </div>
                <div>
                  <Label>Date de début</Label>
                  <Input type="date" value={editing.start_date || ''} onChange={(e) => setEditing({ ...editing, start_date: e.target.value })} />
                </div>
                <div>
                  <Label>Date de fin</Label>
                  <Input type="date" value={editing.end_date || ''} onChange={(e) => setEditing({ ...editing, end_date: e.target.value })} />
                </div>
                <div className="col-span-2">
                  <Label>Lieu</Label>
                  <Input value={editing.location || ''} onChange={(e) => setEditing({ ...editing, location: e.target.value })} />
                </div>
                <div className="col-span-2">
                  <Label>Lien externe</Label>
                  <Input value={editing.external_url || ''} onChange={(e) => setEditing({ ...editing, external_url: e.target.value })} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Description FR</Label>
                  <Textarea rows={5} value={editing.description_fr || ''} onChange={(e) => setEditing({ ...editing, description_fr: e.target.value })} />
                </div>
                <div>
                  <Label>Description EN</Label>
                  <Textarea rows={5} value={editing.description_en || ''} onChange={(e) => setEditing({ ...editing, description_en: e.target.value })} />
                </div>
              </div>

              <div>
                <Label>Image de couverture</Label>
                <div className="flex items-center gap-3 mt-2">
                  {editing.cover_url && <img src={editing.cover_url} alt="" className="w-20 h-20 object-cover rounded border" />}
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
                  <Input placeholder="ou URL" value={editing.cover_url || ''}
                    onChange={(e) => setEditing({ ...editing, cover_url: e.target.value })} />
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

export default EventsPage;
