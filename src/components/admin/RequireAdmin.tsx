import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

export const RequireAdmin = ({ children }: { children: ReactNode }) => {
  const { session, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-heritage-gold" />
      </div>
    );
  }

  if (!session) return <Navigate to="/auth" replace />;

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 text-center">
        <div>
          <h1 className="font-serif text-2xl font-bold mb-2">Accès refusé</h1>
          <p className="text-muted-foreground mb-4">
            Votre compte n'a pas les droits administrateur.
          </p>
          <a href="/" className="text-heritage-gold hover:underline">Retour au site</a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
