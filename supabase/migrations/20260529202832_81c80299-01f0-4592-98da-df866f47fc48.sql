
CREATE TABLE public.content_overrides (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL,
  lang TEXT NOT NULL CHECK (lang IN ('fr','en')),
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (key, lang)
);

GRANT SELECT ON public.content_overrides TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.content_overrides TO authenticated;
GRANT ALL ON public.content_overrides TO service_role;

ALTER TABLE public.content_overrides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read overrides"
  ON public.content_overrides FOR SELECT
  USING (true);

CREATE POLICY "Admins insert overrides"
  ON public.content_overrides FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update overrides"
  ON public.content_overrides FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete overrides"
  ON public.content_overrides FOR DELETE
  USING (has_role(auth.uid(), 'admin'));

CREATE TRIGGER content_overrides_set_updated_at
  BEFORE UPDATE ON public.content_overrides
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
