# ⚫ ︲ ⚪ Portfolio Tariq LAABOUDI

<p align="center">
  <img src="https://img.shields.io/website?url=https://tariq-laab.netlify.app&label=deploy&style=for-the-badge">
  <img src="https://img.shields.io/badge/stack-HTML5%2FCSS3%2FJS_ES6+_Vanilla-informational?style=for-the-badge">
  <img src="https://img.shields.io/badge/hosting-Netlify_CDN-00C7B7?style=for-the-badge&logo=netlify">
  <img src="https://img.shields.io/badge/BTS_SIO-SISR_2026-8E95E1?style=for-the-badge">
  <img src="https://img.shields.io/badge/open--source-MIT-lightgrey?style=for-the-badge">
</p>

**Live :** https://tariq-laab.netlify.app

---

## Présentation Générale

Portfolio personnel d'un étudiant BTS SIO option SISR. SPA (Single-Page Application) statique construite sans aucun framework ni dépendance runtime. Le HTML est un shell vide — l'intégralité du contenu est injectée dynamiquement depuis `data.js` au `DOMContentLoaded`.

Huit sections : **À propos**, **Parcours** (formation, expériences, compétences), **Stage** (Eursocan 2025, RPM Multimédia 2023), **Certifications**, **Veille informatique**, **Outils**, **Matériel**, **Portfolio** (projets GitHub filtrables).

Aucun `package.json`. Aucun build step. Aucun transpileur. Un navigateur suffit.

---

## Technologies Utilisées

| Couche | Détail |
|---|---|
| Markup | HTML5 sémantique — `<article>`, `<aside>`, `<nav>`, `<figure>`, `<section>` |
| Style | CSS3 — Custom Properties (tokens `:root`), Flexbox, CSS Grid (`auto-fill / minmax`), `clamp()` fluide, `@keyframes` GPU-safe, `backdrop-filter` |
| Scripting | JavaScript Vanilla ES6+ — modules natifs `import / export`, `Set`, `Map`, délégation d'événement, `classList.toggle` |
| Icônes | Ionicons 5.5.2 (ESM via `unpkg` CDN) |
| Fonts | Google Fonts — Poppins 300 / 400 / 500 / 600 |
| Persistance | `localStorage` (thème dark/light) |
| Hébergement | Netlify — déploiement manuel drag & drop, HTTPS Let's Encrypt, CDN Edge |
| Versioning | Git / GitHub |

---

## Fonctionnalités Clés

### Routage SPA (main.js — `setupNavigation`)

Huit `<article data-page="...">` cohabitent dans le DOM. Un seul porte la classe `.active` à la fois, contrôlée par `classList.toggle('active', condition)`. Aucun rechargement de page, aucun `history.pushState`.

### Lazy Rendering (main.js — `SECTION_RENDERERS` + `RENDERED`)

`SECTION_RENDERERS` est un objet littéral faisant correspondre chaque id de section à sa fonction de rendu. `RENDERED` est un `Set`. Au premier clic sur un lien de navigation, `renderSection(id)` vérifie l'appartenance au `Set` en O(1) avant d'injecter le HTML. Seule la section `about` est rendue au chargement (above-fold uniquement).

```js
function renderSection(id) {
  if (RENDERED.has(id)) return;
  RENDERED.add(id);
  SECTION_RENDERERS[id]?.();
}
```

### Système de thème dual-mode (index.html inline + theme-toggle.js)

- Persistance via `localStorage` (clé `theme`).
- Au clic : `body.classList.toggle('dark-mode')`.
- Swap simultané : palette CSS (variables `:root` redéfinies sous `body.dark-mode`), src de l'avatar (`avatar-light.webp` ↔ `avatar-dark.webp`), `href` du favicon (`logo-light.ico` ↔ `logo-dark.ico`).
- Animation bouton : `opacity` + `rotate` sur `.sun` / `.moon` — GPU-safe, zéro reflow.

### Accordéon expandable — CSS Grid Trick (style.css + main.js — `setupExpandableCards`)

Révélation de contenu à hauteur variable sans valeur hardcodée et sans `getBoundingClientRect` :

```css
.expandable-body {
  display: grid;
  grid-template-rows: 0fr; /* fermé */
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
[data-expandable].is-open .expandable-body {
  grid-template-rows: 1fr; /* ouvert */
}
```

Un unique listener en délégation sur le conteneur parent (`container.addEventListener('click', ...)`) gère tous les boutons `[data-expand-btn]` — O(1) indépendamment du nombre de cartes. `aria-expanded` et `aria-hidden` sont synchronisés à chaque toggle.

### Filtres Portfolio (main.js — `setupFilters`)

Chaque projet porte un attribut `data-category`. Les boutons filtres portent `data-filter`. Au clic : `classList.toggle('active', cat === 'Tout' || p.dataset.category === cat)`. Animation `scaleUp` à l'apparition : `transform` + `opacity` exclusivement.

### Bento Grid responsive (style.css)

Grille `auto-fill` avec `minmax(200px, 1fr)` — responsive sans media query dédiée. Utilisée pour Outils, Certifications et Matériel.

### Sidebar accordéon mobile (script.js + main.js — `setupSidebar`)

`max-height: 112px` au repos → `max-height: 500px` via classe `.active`. Transition `cubic-bezier`. Au breakpoint ≥ 1250px : sidebar en `position: sticky; top: 60px`, `max-height: none`, bouton toggle masqué via `display: none`.

---

## Structure du Projet

```
/
├── index.html                        ← Shell HTML — aucun contenu statique
├── README.md
│
└── assets/
    ├── css/
    │   └── style.css                 ← Unique feuille de style (tokens → reset → layout → composants → responsive)
    │
    ├── js/
    │   ├── data.js                   ← Source de vérité unique (profileData, aboutData, resumeData,
    │   │                                stageData, outilsData, certificationsData, materielData,
    │   │                                veilleData, portfolioData)
    │   ├── main.js                   ← Controller SPA (renderers, lazy loading, navigation, filtres)
    │   ├── script.js                 ← Event handlers secondaires (sidebar toggle, filtres mobile)
    │   └── theme-toggle.js           ← Gestionnaire de thème (localStorage, favicon swap)
    │
    └── images/
        ├── avatar-light.webp
        ├── avatar-dark.webp
        ├── logo-light.ico
        ├── logo-dark.ico
        └── [assets projets / outils / certifications .webp]
```

**Séparation des responsabilités :**

| Fichier | Rôle |
|---|---|
| `data.js` | Model — données uniquement, zéro logique DOM |
| `main.js` | Controller — rendu, routage, lazy rendering, filtres portfolio |
| `script.js` | Event handling secondaire (filtres mobile, sidebar) |
| `theme-toggle.js` | State manager thème |
| `style.css` | View — présentation, tokens, responsive |

---

## `  ⚫  `︲Stack & Outils

```
Frontend    : HTML5 · CSS3 Custom Properties · JS ES6+ Modules (import/export natif)
Animations  : CSS @keyframes (transform + opacity  GPU-safe uniquement)
Icons       : Ionicons 5.5.2 (ESM, chargé via unpkg CDN)
Fonts       : Google Fonts  Poppins (300/400/500/600)
Hosting     : Netlify (Manual Deploy  HTTPS  CDN Edge)
Versioning  : GitHub
IDE         : VSCodium (thème : Monochromator Dark Plain)
Live Server : Extension VSCodium · Serveur local de développement (Hot Reload synchrone)
XnConvert   : Traitement par lots · Encodage WebP (Lossy 75 / Lossless) · Purge des métadonnées (EXIF/ICC)
IAs         : Claude Sonnet · GPT-5.1 · Gemini 3.0 Pro
```
---
