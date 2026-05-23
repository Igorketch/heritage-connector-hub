import { Card } from '@/components/ui/card';
import { FileText, Users, BookOpen, Calendar, Image, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  { title: 'Pages', desc: 'Contenus des pages publiques', url: '/admin/pages', icon: FileText },
  { title: 'Membres', desc: 'Équipe, parrains, conseil…', url: '/admin/members', icon: Users },
  { title: 'Publications', desc: 'Articles, thèses, documents', url: '/admin/publications', icon: BookOpen },
  { title: 'Événements', desc: 'Manifestations et rencontres', url: '/admin/events', icon: Calendar },
  { title: 'Médias', desc: 'Galerie photo et vidéos', url: '/admin/media', icon: Image },
  { title: 'Rôles utilisateurs', desc: 'Gestion des accès admin', url: '/admin/users', icon: ShieldCheck },
];

const AdminDashboard = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl font-bold mb-2">Bienvenue</h2>
      <p className="text-muted-foreground mb-8">Choisissez un module à gérer.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link key={s.url} to={s.url}>
            <Card className="p-6 hover:border-heritage-gold transition-colors h-full">
              <s.icon className="w-8 h-8 text-heritage-gold mb-3" />
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
