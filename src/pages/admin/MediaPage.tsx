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
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown, Upload, Loader2, Image as ImageIcon, Video } from 'lucide-react';
import { toast } from 'sonner';

type MediaType = 'image' | 'video';

interface MediaItem {
  id: string;
  title_fr: string | null;
  title_en: string | null;
  caption_fr: string | null;
  caption_en: string | null;
  media_type: MediaType;
  file_url: string;
  thumbnail_url: string | null;
  display_order: number;
  is_visible: boolean;
}

const empty = (): Partial<MediaItem> => ({
  title_fr: '', title_en: '', caption_fr: '', caption_en: '',
  media_type: 'image', file_url: '', thumbnail_url: '',
  display_order: 0, is_visible: true,
});

const slugify = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const MediaPage = () => {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<MediaItem> | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [uploadingThumb, setUploadingThumb] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('media_items').select('*').order('display_order', { ascending: true });
    if (error) toast.error(error.message);
    else setItems((data as any) || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    if (!editing.file_url) { toast.error('Fichier requis'); return; }
    setSaving(true);
    const { id, ...rest } = editing as any;
    const { error } = id
      ? await supabase.from('media_items').update(rest).eq('id', id)
      : await supabase.from('media_items').insert(rest);
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success(id ? 'Média modifié' : 'Média ajouté');
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer ce média ?')) return;
    const { error } = await supabase.from('media_items').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Supprimé'); fetchItems(); }
  };

  const move = async (m: MediaItem, dir: -1 | 1) => {
    const i = items.findIndex(x => x.id === m.id);
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const other = items[j];
    await supabase.from('media_items').update({ display_order: other.display_order }).eq('id', m.id);
    await supabase.from('media_items').update({ display_order: m.display_order }).eq('id', other.id);
    fetchItems();
  };

  const upload = async (file: File, kind: 'file' | 'thumb') => {
    const setter = kind === 'file' ? setUploadingFile : setUploadingThumb;
    setter(true);
    const ext = file.name.split('.').pop();
    const base = slugify(editing?.title_fr || 'media');
    const folder = kind === 'thumb' ? 'thumbnails' : (editing?.media_type === 'video' ? 'videos' : 'images');
    const path = `${folder}/${Date.now()}-${base}.${ext}`;
    const { error } = await supabase.storage.from('media-files').upload(path, file, { upsert: true });
    if (error) { toast.error(error.message); setter(false); return; }
    const { data } = supabase.storage.from('media-files').getPublicUrl(path);
    setEditing(prev => prev ? {
      ...prev,
      ...(kind === 'file' ? { file_url: data.publicUrl } : { thumbnail_url: data.publicUrl }),
    } : prev);
    setter(false);
    toast.success('Fichier téléversé');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h2 className="font-serif text-3xl font-bold">Médias</h2>
          <p className="text-muted-foreground">Galerie photo et vidéos.</p>
        </div>
        <Button onClick={() => setEditing(empty())}>
          <Plus className="w-4 h-4 mr-2" /> Nouveau média
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin" /></div>
      ) : items.length === 0 ? (
        <Card className="p-12 text-center text-muted-foreground">Aucun média.</Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((m, i) => {
            const thumb = m.thumbnail_url || (m.media_type === 'image' ? m.file_url : null);
            return (
              <Card key={m.id} className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  {thumb ? (
                    <img src={thumb} alt={m.title_fr || ''} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {m.media_type === 'video' ? <Video className="w-8 h-8 text-muted-foreground" /> : <ImageIcon className="w-8 h-8 text-muted-foreground" />}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur px-2 py-1 rounded text-xs font-medium">
                    {m.media_type === 'video' ? 'Vidéo' : 'Image'}
                  </div>
                </div>
                <div className="p-3">
                  <div className="font-semibold truncate text-sm">{m.title_fr || '(sans titre)'}</div>
                  <div className="text-xs text-muted-foreground">ordre {m.display_order} {!m.is_visible && '· masqué'}</div>
                  <div className="flex items-center gap-1 mt-2">
                    <Button variant="ghost" size="icon" disabled={i === 0} onClick={() => move(m, -1)}><ArrowUp className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" disabled={i === items.length - 1} onClick={() => move(m, 1)}><ArrowDown className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => setEditing(m)}><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(m.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing?.id ? 'Modifier le média' : 'Nouveau média'}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Type</Label>
                  <Select value={editing.media_type} onValueChange={(v) => setEditing({ ...editing, media_type: v as MediaType })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="image">Image</SelectItem>
                      <SelectItem value="video">Vidéo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Ordre d'affichage</Label>
                  <Input type="number" value={editing.display_order ?? 0}
                    onChange={(e) => setEditing({ ...editing, display_order: parseInt(e.target.value) || 0 })} />
                </div>
                <div>
                  <Label>Titre FR</Label>
                  <Input value={editing.title_fr || ''} onChange={(e) => setEditing({ ...editing, title_fr: e.target.value })} />
                </div>
                <div>
                  <Label>Titre EN</Label>
                  <Input value={editing.title_en || ''} onChange={(e) => setEditing({ ...editing, title_en: e.target.value })} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Légende FR</Label>
                  <Textarea rows={3} value={editing.caption_fr || ''} onChange={(e) => setEditing({ ...editing, caption_fr: e.target.value })} />
                </div>
                <div>
                  <Label>Légende EN</Label>
                  <Textarea rows={3} value={editing.caption_en || ''} onChange={(e) => setEditing({ ...editing, caption_en: e.target.value })} />
                </div>
              </div>

              <div>
                <Label>Fichier *</Label>
                <div className="flex items-center gap-3 mt-2">
                  <label className="cursor-pointer">
                    <input type="file" accept={editing.media_type === 'video' ? 'video/*' : 'image/*'} className="hidden"
                      onChange={(e) => e.target.files?.[0] && upload(e.target.files[0], 'file')} />
                    <Button type="button" variant="outline" disabled={uploadingFile} asChild>
                      <span>
                        {uploadingFile ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
                        Téléverser
                      </span>
                    </Button>
                  </label>
                  <Input placeholder="ou URL" value={editing.file_url || ''}
                    onChange={(e) => setEditing({ ...editing, file_url: e.target.value })} />
                </div>
              </div>

              {editing.media_type === 'video' && (
                <div>
                  <Label>Miniature (recommandée pour les vidéos)</Label>
                  <div className="flex items-center gap-3 mt-2">
                    {editing.thumbnail_url && <img src={editing.thumbnail_url} alt="" className="w-20 h-20 object-cover rounded border" />}
                    <label className="cursor-pointer">
                      <input type="file" accept="image/*" className="hidden"
                        onChange={(e) => e.target.files?.[0] && upload(e.target.files[0], 'thumb')} />
                      <Button type="button" variant="outline" disabled={uploadingThumb} asChild>
                        <span>
                          {uploadingThumb ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
                          Téléverser
                        </span>
                      </Button>
                    </label>
                    <Input placeholder="ou URL" value={editing.thumbnail_url || ''}
                      onChange={(e) => setEditing({ ...editing, thumbnail_url: e.target.value })} />
                  </div>
                </div>
              )}

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

export default MediaPage;
