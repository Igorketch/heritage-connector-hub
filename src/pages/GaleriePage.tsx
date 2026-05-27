import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { PageLayout } from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Loader2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { supabase } from '@/integrations/supabase/client';

import symboleBamoun from '@/assets/galerie/symbole-bamoun.jpg';
import iconeFondatriceNso from '@/assets/galerie/icone-fondatrice-nso.jpg';
import iconeMbam from '@/assets/galerie/icone-mbam.png';
import charlotte from '@/assets/galerie/charlotte.jpg';
import mamanAbiroko from '@/assets/galerie/maman-abiroko.png';
import njiNchare from '@/assets/galerie/nji-nchare-oumarou.jpg';
import queenFlorence from '@/assets/galerie/queen-florence.png';
import queenMotherEveline from '@/assets/galerie/queen-mother-eveline.png';
import symboleBafia from '@/assets/galerie/symbole-bafia.png';
import nguonSpecial from '@/assets/galerie/nguon-special-event.jpg';

// Fallback map for legacy entries that reference bundled assets under /src/assets/galerie/
const BUNDLED_FALLBACKS: Record<string, string> = {
  'symbole-bamoun.jpg': symboleBamoun,
  'icone-fondatrice-nso.jpg': iconeFondatriceNso,
  'icone-mbam.png': iconeMbam,
  'charlotte.jpg': charlotte,
  'maman-abiroko.png': mamanAbiroko,
  'nji-nchare-oumarou.jpg': njiNchare,
  'queen-florence.png': queenFlorence,
  'queen-mother-eveline.png': queenMotherEveline,
  'symbole-bafia.png': symboleBafia,
  'nguon-special-event.jpg': nguonSpecial,
};

const resolveUrl = (url: string): string => {
  if (!url) return url;
  if (url.startsWith('/src/assets/')) {
    const name = url.split('/').pop() || '';
    return BUNDLED_FALLBACKS[name] || url;
  }
  return url;
};

type MediaType = 'image' | 'video';

interface MediaRow {
  id: string;
  title_fr: string | null;
  title_en: string | null;
  caption_fr: string | null;
  caption_en: string | null;
  file_url: string;
  thumbnail_url: string | null;
  media_type: MediaType;
}

// Symboles culturels keywords (used to derive category since DB has no category column)
const SYMBOL_KEYWORDS = ['symbole', 'icône', 'icone', 'nguon'];
const inferCategory = (label: string): 'portraits' | 'symboles' => {
  const l = label.toLowerCase();
  return SYMBOL_KEYWORDS.some(k => l.includes(k)) ? 'symboles' : 'portraits';
};

const GaleriePage = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'portraits' | 'symboles'>('all');

  const { data: items = [], isLoading } = useQuery({
    queryKey: ['public-media'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('media_items')
        .select('id,title_fr,title_en,caption_fr,caption_en,file_url,thumbnail_url,media_type')
        .eq('is_visible', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return (data ?? []) as MediaRow[];
    },
  });

  const enriched = items.map((m) => {
    const label = (language === 'en' ? m.title_en : m.title_fr) || m.title_fr || m.title_en || '';
    return {
      id: m.id,
      src: resolveUrl(m.file_url),
      alt: label,
      category: inferCategory(label),
      type: m.media_type,
    };
  });

  const filtered = filter === 'all' ? enriched : enriched.filter(i => i.category === filter);

  return (
    <PageLayout>
      <SEO title={"Galerie photo | International Mandjara Heritage"} description={"Galerie photo : moments forts, rencontres et traditions Mandjara."} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-heritage-earth overflow-hidden">
        <div className="absolute inset-0 heritage-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-heritage-earth/50 to-heritage-earth" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-heritage-gold/20 text-heritage-gold text-sm font-medium tracking-wide mb-6">
              {t('galerie.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-cream mb-6">
              {t('galerie.title')}{' '}
              <span className="text-gradient-gold">{t('galerie.title_highlight')}</span>
            </h1>
            <p className="text-lg text-heritage-cream/70 leading-relaxed">
              {t('galerie.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-heritage-sand">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {(['all', 'portraits', 'symboles'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-heritage-gold text-heritage-earth shadow-lg'
                    : 'bg-heritage-sand/60 text-muted-foreground hover:bg-heritage-gold/20'
                }`}
              >
                {cat === 'all' ? 'Tout' : cat === 'portraits' ? 'Portraits' : 'Symboles culturels'}
              </button>
            ))}
          </div>

          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-heritage-gold" />
            </div>
          )}

          {!isLoading && filtered.length === 0 && (
            <p className="text-center text-muted-foreground italic py-12">
              {t('publications.coming_soon')}
            </p>
          )}

          {/* Masonry grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-heritage-sand/40 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-earth/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-heritage-cream text-sm font-medium">{item.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default GaleriePage;
