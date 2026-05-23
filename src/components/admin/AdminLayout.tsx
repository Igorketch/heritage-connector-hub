import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from './AdminSidebar';
import { RequireAdmin } from './RequireAdmin';

export const AdminLayout = () => {
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
