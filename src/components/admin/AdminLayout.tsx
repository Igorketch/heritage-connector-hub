import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from './AdminSidebar';
import { RequireAdmin } from './RequireAdmin';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

const RESET_FLAG = 'admin_session_reset_v1';

export const AdminLayout = () => {
  const [resetting, setResetting] = useState(() => !localStorage.getItem(RESET_FLAG));
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!resetting) return;
    (async () => {
      try {
        await supabase.auth.signOut();
        Object.keys(localStorage)
          .filter((k) => k.startsWith('sb-') || k.includes('supabase'))
          .forEach((k) => localStorage.removeItem(k));
      } catch {}
      localStorage.setItem(RESET_FLAG, '1');
      setResetting(false);
      setDone(true);
    })();
  }, [resetting]);

  if (resetting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-heritage-gold" />
      </div>
    );
  }

  if (done) return <Navigate to="/auth" replace />;

  return (
    <RequireAdmin>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AdminSidebar />
          <div className="flex-1 flex flex-col">
            <header className="h-14 flex items-center border-b bg-card px-4 gap-3">
              <SidebarTrigger />
              <h1 className="font-serif font-semibold">Dashboard administrateur</h1>
            </header>
            <main className="flex-1 p-6 overflow-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </RequireAdmin>
  );
};
