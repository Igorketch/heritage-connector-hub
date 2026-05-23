import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, FileText, Users, BookOpen, Calendar, Image, Settings, ShieldCheck, LogOut,
} from 'lucide-react';
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from '@/components/ui/sidebar';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const items = [
  { title: 'Tableau de bord', url: '/admin', icon: LayoutDashboard, end: true },
  { title: 'Pages', url: '/admin/pages', icon: FileText },
  { title: 'Membres', url: '/admin/members', icon: Users },
  { title: 'Publications', url: '/admin/publications', icon: BookOpen },
  { title: 'Événements', url: '/admin/events', icon: Calendar },
  { title: 'Médias', url: '/admin/media', icon: Image },
  { title: 'Rôles utilisateurs', url: '/admin/users', icon: ShieldCheck },
  { title: 'Paramètres', url: '/admin/settings', icon: Settings },
];

export const AdminSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const { pathname } = useLocation();
  const { signOut, user } = useAuth();

  const isActive = (url: string, end?: boolean) =>
    end ? pathname === url : pathname === url || pathname.startsWith(url + '/');

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url, item.end)}>
                    <NavLink to={item.url} end={item.end} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2">
        {!collapsed && user && (
          <p className="text-xs text-muted-foreground truncate px-2 mb-2">{user.email}</p>
        )}
        <Button variant="ghost" size="sm" onClick={signOut} className="w-full justify-start">
          <LogOut className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Déconnexion</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
