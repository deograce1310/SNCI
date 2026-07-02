# Infos projet — Site SNCI

Stack : Node.js 20, React 19, TypeScript, Tailwind CSS 3, Vite 7, React Router 7, i18next.

## Structure réelle du dépôt

```
index.html              Point d'entrée de l'application (Webapp)
public/                  Assets statiques servis tels quels (images, robots.txt, sitemap.xml, .htaccess, _redirects)
src/
  main.tsx               Entrée de rendu de la Webapp
  App.tsx                Route racine (react-router-dom)
  i18n.ts                Configuration i18next + traductions FR
  index.css              Styles globaux
  components/             Header, Footer, Layout, LoadingScreen, ImageSlider, Reveal, WhatsAppCTA/Float, ErrorBoundary, icons/
  pages/                  HomePage, MetiersPage, PrestationDetailPage, EquipePage, EnginsPage, EnginDetailPage, AProposPage, ContactPage, MentionsLegalesPage, NotFoundPage
  data/                   company.ts, services.ts, engins.ts, projects.ts, gallery.ts
  hooks/                  usePageMeta.ts (gestion des balises meta/SEO par page)
tailwind.config.js       Thème Tailwind
vite.config.ts           Build & serveur de dev Vite
postcss.config.js        Post-traitement CSS
vercel.json              Configuration de déploiement Vercel
```

## Scripts

```
npm run dev       Serveur de développement
npm run build     Vérification des types (tsc -b) + build Vite
npm run lint      ESLint
npm run preview   Prévisualisation du build de production
```

## Remarque

Ce fichier remplace un ancien résumé de setup généré automatiquement qui référençait une structure de template générique (composants shadcn, `src/sections/`, `src/types/`) ne correspondant pas au code réel du projet.
