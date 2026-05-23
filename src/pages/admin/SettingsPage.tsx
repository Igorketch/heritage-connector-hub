import { useAuth } from '@/hooks/useAuth';
import { Card } from '@/components/ui/card';

const SettingsPage = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-serif text-3xl font-bold mb-6">Paramètres</h2>
      <Card className="p-6 space-y-3">
        <h3 className="font-semibold">Compte</h3>
        <p className="text-sm"><span className="text-muted-foreground">Email :</span> {user?.email}</p>
        <p className="text-sm"><span className="text-muted-foreground">ID :</span> <code className="text-xs">{user?.id}</code></p>
      </Card>
      <Card className="p-6 mt-4">
        <h3 className="font-semibold mb-2">Informations</h3>
        <p className="text-sm text-muted-foreground">
          Les modules Pages, Membres, Publications, Événements et Médias seront enrichis dans les phases suivantes
          avec édition complète et migration des données depuis le code.
        </p>
      </Card>
    </div>
  );
};

export default SettingsPage;
