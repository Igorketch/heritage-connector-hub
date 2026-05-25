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
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown, Upload, Loader2, FileText } from 'lucide-react';
import { toast } from 'sonner';

type PubType = 'article' | 'thesis' | 'book' | 'report' | 'other';

const TYPE_LABELS: Record<PubType, string> = {
  article: 'Article',
  thesis: 'Thèse',
  book: 'Livre',
  report: 'Rapport',
  other: 'Autre',
};

interface Publication {
  id: string;
  title: string;
  author: string | null;
  year: string | null;
  pub_type: PubType;
  institution: string | null;
  description_fr: string | null;
  description_en: string | null;
  file_url: string | null;
  file_name: string | null;
  cover_url: string | null;
  display_order: number;
  is_visible: boolean;
}

const empty = (): Partial<Publication> => ({
  title: '', author: '', year: '', pub_type: 'article', institution: '',
  description_fr: '', description_en: '', file_url: '', file_name: '', cover_url: '',
  display_order: 0, is_visible: true,
});

const slugify = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const PublicationsPage = () => {
  const [items, setItems] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Publication> | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('publications').select('*').order('display_order', { ascending: true });
    if (error) toast.error(error.message);
    else setItems((data as any) || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    if (!editing.title) { toast.error('Titre requis'); return; }
    setSaving(true);
    const { id, ...rest } = editing as any;
    const { error } = id
      ? await supabase.from('publications').update(rest).eq('id', id)
      : await supabase.from('publications').insert(rest);
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success(id ? 'Publication modifiée' : 'Publication ajoutée');
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cette publication ?')) return;
    const { error } = await supabase.from('publications').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Supprimé'); fetchItems(); }
  };

  const move = async (m: Publication, dir: -1 | 1) => {
    const i = items.findIndex(x => x.id === m.id);
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const other = items[j];
    await supabase.from('publications').update({ display_order: other.display_order }).eq('id', m.id);
    await supabase.from('publications').update({ display_order: m.display_order }).eq('id', other.id);
    fetchItems();
  };

  const uploadFile = async (file: File, kind: 'pdf' | 'cover') => {
    const setter = kind === 'pdf' ? setUploadingFile : setUploadingCover;
    setter(true);
    const ext = file.name.split('.').pop();
    const base = slugify(editing?.title || 'document');
    const path = `${kind}/${Date.now()}-${base}.${ext}`;
    const { error } = await supabase.storage.from('publications-files').upload(path, file, { upsert: true });
    if (error) { toast.error(error.message); setter(false); return; }
    const { data } = supabase.storage.from('publications-files').getPublicUrl(path);
    setEditing(prev => prev ? {
      ...prev,
      ...(kind === 'pdf' ? { file_url: data.publicUrl, file_name: file.name } : { cover_url: data.publicUrl }),
    } : prev);
    setter(false);
    toast.success('Fichier téléversé');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h2 className="font-serif text-3xl font-bold">Publications</h2>
          <p className="text-muted-foreground">Articles, thèses, livres et rapports.</p>
        </div>
        <Button onClick={() => setEditing(empty())}>
          <Plus className="w-4 h-4 mr-2" /> Nouvelle publication
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin" /></div>
      ) : items.length === 0 ? (
        <Card className="p-12 text-center text-muted-foreground">Aucune publication.</Card>
      ) : (
        <div className="space-y-3">
          {items.map((m, i) => (
            <Card key={m.id} className="p-4 flex items-center gap-4">
              <div className="w-12 h-16 rounded bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
                {m.cover_url ? <img src={m.cover_url} alt="" className="w-full h-full object-cover" /> : <FileText className="w-5 h-5 text-muted-foreground" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{m.title}</div>
                <div className="text-sm text-muted-foreground truncate">
                  {[m.author, m.year, TYPE_LABELS[m.pub_type]].filter(Boolean).join(' · ')}
                </div>
                <div className="text-xs text-muted-foreground">
                  ordre {m.display_order} {!m.is_visible && '· masqué'} {m.file_url && '· PDF'}
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
            <DialogTitle>{editing?.id ? 'Modifier la publication' : 'Nouvelle publication'}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div>
                <Label>Titre *</Label>
                <Input value={editing.title || ''} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Auteur</Label>
                  <Input value={editing.author || ''} onChange={(e) => setEditing({ ...editing, author: e.target.value })} />
                </div>
                <div>
                  <Label>Année</Label>
                  <Input value={editing.year || ''} onChange={(e) => setEditing({ ...editing, year: e.target.value })} />
                </div>
                <div>
                  <Label>Type</Label>
                  <Select value={editing.pub_type} onValueChange={(v) => setEditing({ ...editing, pub_type: v as PubType })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {(Object.keys(TYPE_LABELS) as PubType[]).map(t => <SelectItem key={t} value={t}>{TYPE_LABELS[t]}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Institution</Label>
                  <Input value={editing.institution || ''} onChange={(e) => setEditing({ ...editing, institution: e.target.value })} />
                </div>
                <div>
                  <Label>Ordre d'affichage</Label>
                  <Input type="number" value={editing.display_order ?? 0}
                    onChange={(e) => setEditing({ ...editing, display_order: parseInt(e.target.value) || 0 })} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Description FR</Label>
                  <Textarea rows={4} value={editing.description_fr || ''} onChange={(e) => setEditing({ ...editing, description_fr: e.target.value })} />
                </div>
                <div>
                  <Label>Description EN</Label>
                  <Textarea rows={4} value={editing.description_en || ''} onChange={(e) => setEditing({ ...editing, description_en: e.target.value })} />
                </div>
              </div>

              <div>
                <Label>Fichier PDF</Label>
                <div className="flex items-center gap-3 mt-2">
                  <label className="cursor-pointer">
                    <input type="file" accept="application/pdf" className="hidden"
                      onChange={(e) => e.target.files?.[0] && uploadFile(e.target.files[0], 'pdf')} />
                    <Button type="button" variant="outline" disabled={uploadingFile} asChild>
                      <span>
                        {uploadingFile ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
                        Téléverser PDF
                      </span>
                    </Button>
                  </label>
                  <Input placeholder="ou URL" value={editing.file_url || ''}
                    onChange={(e) => setEditing({ ...editing, file_url: e.target.value })} />
                </div>
                {editing.file_name && <p className="text-xs text-muted-foreground mt-1">{editing.file_name}</p>}
              </div>

              <div>
                <Label>Couverture (image)</Label>
                <div className="flex items-center gap-3 mt-2">
                  {editing.cover_url && <img src={editing.cover_url} alt="" className="w-16 h-20 object-cover rounded border" />}
                  <label className="cursor-pointer">
                    <input type="file" accept="image/*" className="hidden"
                      onChange={(e) => e.target.files?.[0] && uploadFile(e.target.files[0], 'cover')} />
                    <Button type="button" variant="outline" disabled={uploadingCover} asChild>
                      <span>
                        {uploadingCover ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
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

export default PublicationsPage;
