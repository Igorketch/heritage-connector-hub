CREATE POLICY "Nobody can update roles"
ON public.user_roles
FOR UPDATE
USING (false)
WITH CHECK (false);