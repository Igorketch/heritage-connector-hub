-- Enums
CREATE TYPE public.team_category AS ENUM ('bureau', 'conseil', 'sages', 'representants', 'parrains', 'honneur');
CREATE TYPE public.ethnic_group AS ENUM ('bamoun', 'nso', 'bafia', 'autre');

-- Team members table
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category public.team_category NOT NULL,
  ethnic_group public.ethnic_group NOT NULL DEFAULT 'autre',
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  role_fr TEXT,
  role_en TEXT,
  bio_fr JSONB NOT NULL DEFAULT '[]'::jsonb,
  bio_en JSONB NOT NULL DEFAULT '[]'::jsonb,
  quote_fr TEXT,
  quote_en TEXT,
  achievements JSONB NOT NULL DEFAULT '[]'::jsonb,
  portrait_url TEXT,
  portrait_position TEXT DEFAULT 'top',
  display_order INTEGER NOT NULL DEFAULT 0,
  is_visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (category, slug)
);

CREATE INDEX idx_team_members_category ON public.team_members(category, display_order);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view visible members"
  ON public.team_members FOR SELECT
  USING (is_visible = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins insert members"
  ON public.team_members FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update members"
  ON public.team_members FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete members"
  ON public.team_members FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_team_members_updated
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Storage bucket for photos
INSERT INTO storage.buckets (id, name, public) VALUES ('team-photos', 'team-photos', true);

CREATE POLICY "Public read team photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'team-photos');

CREATE POLICY "Admins upload team photos"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'team-photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update team photos"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'team-photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete team photos"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'team-photos' AND public.has_role(auth.uid(), 'admin'));