-- Enums
CREATE TYPE public.publication_type AS ENUM ('article', 'thesis', 'book', 'report', 'other');
CREATE TYPE public.media_type AS ENUM ('image', 'video');

-- Publications
CREATE TABLE public.publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text,
  year text,
  pub_type public.publication_type NOT NULL DEFAULT 'article',
  institution text,
  description_fr text,
  description_en text,
  file_url text,
  file_name text,
  cover_url text,
  display_order integer NOT NULL DEFAULT 0,
  is_visible boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view visible publications" ON public.publications
  FOR SELECT USING (is_visible = true OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins insert publications" ON public.publications
  FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update publications" ON public.publications
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete publications" ON public.publications
  FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER set_publications_updated_at
  BEFORE UPDATE ON public.publications
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Events
CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title_fr text NOT NULL,
  title_en text,
  description_fr text,
  description_en text,
  start_date date,
  end_date date,
  location text,
  cover_url text,
  external_url text,
  display_order integer NOT NULL DEFAULT 0,
  is_visible boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view visible events" ON public.events
  FOR SELECT USING (is_visible = true OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins insert events" ON public.events
  FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update events" ON public.events
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete events" ON public.events
  FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER set_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Media items
CREATE TABLE public.media_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_fr text,
  title_en text,
  caption_fr text,
  caption_en text,
  media_type public.media_type NOT NULL DEFAULT 'image',
  file_url text NOT NULL,
  thumbnail_url text,
  display_order integer NOT NULL DEFAULT 0,
  is_visible boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view visible media" ON public.media_items
  FOR SELECT USING (is_visible = true OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins insert media" ON public.media_items
  FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update media" ON public.media_items
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete media" ON public.media_items
  FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER set_media_items_updated_at
  BEFORE UPDATE ON public.media_items
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES
  ('publications-files', 'publications-files', true),
  ('events-images', 'events-images', true),
  ('media-files', 'media-files', true)
ON CONFLICT (id) DO NOTHING;

-- Public read for all three buckets
CREATE POLICY "Public read publications files" ON storage.objects
  FOR SELECT USING (bucket_id = 'publications-files');
CREATE POLICY "Public read events images" ON storage.objects
  FOR SELECT USING (bucket_id = 'events-images');
CREATE POLICY "Public read media files" ON storage.objects
  FOR SELECT USING (bucket_id = 'media-files');

-- Admin write/update/delete
CREATE POLICY "Admins upload publications files" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'publications-files' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update publications files" ON storage.objects
  FOR UPDATE USING (bucket_id = 'publications-files' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete publications files" ON storage.objects
  FOR DELETE USING (bucket_id = 'publications-files' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins upload events images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'events-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update events images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'events-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete events images" ON storage.objects
  FOR DELETE USING (bucket_id = 'events-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins upload media files" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'media-files' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update media files" ON storage.objects
  FOR UPDATE USING (bucket_id = 'media-files' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete media files" ON storage.objects
  FOR DELETE USING (bucket_id = 'media-files' AND public.has_role(auth.uid(), 'admin'));