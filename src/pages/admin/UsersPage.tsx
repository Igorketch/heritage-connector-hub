import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Loader2, ShieldCheck, ShieldOff } from 'lucide-react';

type Profile = {
  id: string;
  email: string | null;
  full_name: string | null;
  created_at: string;
};

type UserWithRoles = Profile & { roles: string[] };

const UsersPage = () => {
  const [users, setUsers] = useState<UserWithRoles[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const [{ data: profiles }, { data: roles }] = await Promise.all([
      supabase.from('profiles').select('id, email, full_name, created_at').order('created_at', { ascending: false }),
      supabase.from('user_roles').select('user_id, role'),
    ]);
    const rolesByUser = new Map<string, string[]>();
    (roles ?? []).forEach((r: any) => {
      const arr = rolesByUser.get(r.user_id) ?? [];
      arr.push(r.role);
      rolesByUser.set(r.user_id, arr);
    });
    setUsers((profiles ?? []).map((p) => ({ ...p, roles: rolesByUser.get(p.id) ?? [] })));
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const toggleRole = async (userId: string, role: 'admin' | 'editor', has: boolean) => {
    if (has) {
      const { error } = await supabase.from('user_roles').delete().eq('user_id', userId).eq('role', role);
      if (error) return toast.error(error.message);
      toast.success(`Rôle ${role} retiré`);
    } else {
      const { error } = await supabase.from('user_roles').insert({ user_id: userId, role });
      if (error) return toast.error(error.message);
      toast.success(`Rôle ${role} ajouté`);
    }
    load();
  };

  if (loading) return <Loader2 className="w-6 h-6 animate-spin text-heritage-gold" />;

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl font-bold mb-2">Rôles utilisateurs</h2>
      <p className="text-muted-foreground mb-6">Promouvez ou rétrogradez les administrateurs et éditeurs.</p>

      <div className="space-y-3">
        {users.map((u) => {
          const isAdmin = u.roles.includes('admin');
          const isEditor = u.roles.includes('editor');
          return (
            <Card key={u.id} className="p-4 flex items-center justify-between gap-4 flex-wrap">
              <div className="min-w-0">
                <p className="font-medium truncate">{u.full_name || '—'}</p>
                <p className="text-sm text-muted-foreground truncate">{u.email}</p>
                <div className="flex gap-1 mt-2">
                  {isAdmin && <Badge>admin</Badge>}
                  {isEditor && <Badge variant="secondary">editor</Badge>}
                  {!isAdmin && !isEditor && <Badge variant="outline">user</Badge>}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant={isAdmin ? 'destructive' : 'default'} onClick={() => toggleRole(u.id, 'admin', isAdmin)}>
                  {isAdmin ? <ShieldOff className="w-4 h-4 mr-1" /> : <ShieldCheck className="w-4 h-4 mr-1" />}
                  {isAdmin ? 'Retirer admin' : 'Promouvoir admin'}
                </Button>
                <Button size="sm" variant={isEditor ? 'outline' : 'secondary'} onClick={() => toggleRole(u.id, 'editor', isEditor)}>
                  {isEditor ? 'Retirer editor' : 'Éditeur'}
                </Button>
              </div>
            </Card>
          );
        })}
        {users.length === 0 && <p className="text-muted-foreground">Aucun utilisateur.</p>}
      </div>
    </div>
  );
};

export default UsersPage;
