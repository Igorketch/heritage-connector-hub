DROP POLICY IF EXISTS "Public can read overrides" ON public.content_overrides;
CREATE POLICY "Public can read site text overrides" ON public.content_overrides
FOR SELECT TO anon, authenticated
USING (lang IN ('fr','en') AND length(value) <= 20000);