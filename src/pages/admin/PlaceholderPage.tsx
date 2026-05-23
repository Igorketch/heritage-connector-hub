import { Card } from '@/components/ui/card';
import { Construction } from 'lucide-react';

export const PlaceholderPage = ({ title, description }: { title: string; description: string }) => (
  <div className="max-w-3xl mx-auto">
    <h2 className="font-serif text-3xl font-bold mb-2">{title}</h2>
    <p className="text-muted-foreground mb-6">{description}</p>
    <Card className="p-8 text-center">
      <Construction className="w-12 h-12 text-heritage-gold mx-auto mb-4" />
      <h3 className="font-semibold mb-2">Module en préparation</h3>
      <p className="text-sm text-muted-foreground">
        Ce module sera activé dans une prochaine phase, avec migration des données existantes depuis le code
        et édition complète (création, modification, suppression, ordre d'affichage, upload d'images).
      </p>
    </Card>
  </div>
);
