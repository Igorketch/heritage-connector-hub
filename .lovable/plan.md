# Plan : Dashboard Administrateur

Ce dashboard est un projet conséquent. Je propose une construction en **4 phases livrables**, chacune fonctionnelle, plutôt qu'un mega-commit. Vous validez chaque phase avant la suivante.

## Phase 1 — Fondations (cette itération)
- Activer **Lovable Cloud**
- Schéma : `profiles`, `user_roles` (enum `app_role`: admin, editor), fonction `has_role()`
- Auth email/password + Google, page `/auth` et `/reset-password`
- Layout dashboard `/admin` (sidebar + 7 sections, route protégée admin)
- Page **Paramètres** + **Rôles utilisateurs** (lister users, promouvoir admin/editor)
- Premier super-admin : promotion manuelle via SQL après votre inscription

## Phase 2 — Membres
- Tables `team_categories`, `team_members` (avec ethnic_group, photo storage, bio FR/EN, ordre)
- Seed depuis les 5 fichiers `*Data.ts` existants
- CRUD complet (create/edit/delete, upload photo, réorder)
- Refactor des pages publiques `/team/*` pour lire depuis la DB

## Phase 3 — Publications & Événements & Médias
- Tables `publications`, `events`, `media_items`
- Storage bucket pour PDF, images, vidéos
- CRUD + migration des données existantes
- Refactor `PublicationsPage`, `EvenementsPage`, `GaleriePage`

## Phase 4 — Gestion des pages
- Table `page_content` (key/value JSON par section : hero, mission, valeurs, contexte…)
- Éditeur de contenu riche par page
- Refactor pages statiques pour lire depuis la DB
- Système de versions / draft optionnel

## Détails techniques

**Stack** : Lovable Cloud (Supabase), RLS strict, `user_roles` séparé (jamais sur profiles), `has_role()` security definer.

**Routes admin** :
```
/auth                    public
/admin                   dashboard home (stats)
/admin/pages             gestion pages
/admin/members           gestion membres
/admin/publications      gestion publications
/admin/events            gestion événements
/admin/media             gestion médias
/admin/users             rôles utilisateurs
/admin/settings          paramètres
```

**Protection** : `<RequireAdmin>` wrapper vérifie `has_role(auth.uid(), 'admin')` côté client + RLS côté DB.

**Premier admin** : après votre signup, je vous fournirai la requête SQL pour vous promouvoir admin (ou je l'exécuterai si vous me donnez votre email).

---

Je commence par la **Phase 1** dès votre validation. Voulez-vous démarrer ?