# SNCI — Site vitrine

Site web de **SNCI SARL** (Société des Nouvelles Constructions Industrielles), entreprise de soudure, chaudronnerie, tuyauterie, charpentes métalliques et fourniture d'équipements, basée à Cotonou (Bénin).

Application React (Vite + TypeScript), multilingue (i18next), avec routage côté client.

## Stack technique

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Vite 7](https://vite.dev/) — build & dev server
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [i18next](https://www.i18next.com/) / [react-i18next](https://react.i18next.com/) — internationalisation
- [lucide-react](https://lucide.dev/) — icônes

## Structure du projet

```
index.html              Point d'entrée HTML
public/                  Assets statiques (images, robots.txt, sitemap.xml, .htaccess, _redirects)
src/
  main.tsx               Point d'entrée de l'application
  App.tsx                Déclaration des routes
  i18n.ts                Configuration et traductions (FR)
  index.css              Styles globaux
  components/             Composants réutilisables (Header, Footer, Layout, Reveal, WhatsAppCTA, ...)
  pages/                  Pages du site (Accueil, Prestations, Équipe, Engins, À propos, Contact, ...)
  data/                   Données du site (coordonnées, prestations, engins, projets, galerie)
  hooks/                  Hooks personnalisés (usePageMeta pour le SEO par page)
vercel.json              Configuration de déploiement Vercel
```

## Pages / routes

| Route | Page |
| --- | --- |
| `/` | Accueil |
| `/prestations` | Liste des prestations (métiers) |
| `/prestations/:slug` | Détail d'une prestation |
| `/equipe` | Notre équipe |
| `/engins` | Location & vente d'engins |
| `/engins/:slug` | Détail d'un engin |
| `/a-propos` | À propos de l'entreprise |
| `/contact` | Contact |
| `/mentions-legales` | Mentions légales |

## Développement

```bash
npm install       # installe les dépendances
npm run dev       # lance le serveur de développement
npm run build     # build de production (type-check + build Vite)
npm run preview   # prévisualise le build de production
npm run lint      # vérifie le code avec ESLint
```

## Déploiement

Le projet est configuré pour un déploiement sur [Vercel](https://vercel.com/) (`vercel.json`). Le dossier `public/` contient aussi un `.htaccess` et un `_redirects` pour un hébergement Apache ou Netlify le cas échéant.
