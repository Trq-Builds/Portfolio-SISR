/*-----------------------------------*\
  #MAIN.JS — v2.0
  Architecture : init critique → lazy render on nav click
  Delta v1→v2 :
    - Rendu initial limité à navbar + profil + about (above-fold uniquement)
    - SECTION_RENDERERS map + RENDERED Set → lazy inject au 1er clic
    - Avatar quotes : lazy init (allocation zéro si jamais cliqué)
    - Boucles for remplacées par .forEach / .map / .toggle
    - rel="noopener" ajouté sur tous les liens target="_blank"
    - width/height sur les <img> projet (fix CLS)
\*-----------------------------------*/

import {
  profileData, aboutData, resumeData,
  outilsData, certificationsData, materielData,
  portfolioData, stageData, veilleData
} from './data.js';

/*-----------------------------------*\
  #UTILITAIRES DOM
  $ / $$ : raccourcis querySelector.
  setHTML : injection sécurisée avec guard d'existence.
\*-----------------------------------*/

const $      = (sel) => document.querySelector(sel);
const $$     = (sel) => document.querySelectorAll(sel);
const setHTML = (sel, html) => {
  const el = $(sel);
  if (el) el.innerHTML = html;
  else console.warn(`[main.js] Sélecteur introuvable : "${sel}"`);
};

/*-----------------------------------*\
  #RENDERERS CRITIQUES
  Exécutés une seule fois au DOMContentLoaded.
  Aucune donnée secondaire chargée ici.
\*-----------------------------------*/

/** Génère les boutons de navigation depuis une config statique. */
function renderNavbar() {
  const pages = [
    { label: 'À propos',       id: 'about'          },
    { label: 'Parcours',       id: 'resume'         },
    { label: 'Stage',          id: 'stage'          },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Veille',         id: 'veille'         },
    { label: 'Outils',         id: 'outils'         },
    { label: 'Matériel',       id: 'materiel'       },
    { label: 'Portfolio',      id: 'portfolio'      },
  ];

  setHTML('.navbar-list', pages.map((p, i) => `
    <li class="navbar-item">
      <button class="navbar-link ${i === 0 ? 'active' : ''}" data-nav-link="${p.id}">
        ${p.label}
      </button>
    </li>
  `).join(''));
}

/** Injecte nom, rôle, avatar, email et liens sociaux dans la sidebar. */
function renderProfile() {
  // Ne réassigne le src que si le HTML ne l'a pas déjà défini (évite un flash)
  const img = $('.avatar-box img');
  if (img && !img.getAttribute('src')) {
    img.src = document.body.classList.contains('dark-mode')
      ? profileData.avatar
      : profileData.avatarLight;
  }

  const name = $('.info-content .name');
  const role = $('.info-content .title');
  if (name) name.textContent = profileData.name;
  if (role) role.textContent = profileData.role;

  setHTML('.contacts-list', `
    <li class="contact-item">
      <div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
      <div class="contact-info">
        <p class="contact-title">Email</p>
        <a href="mailto:${profileData.email}" class="contact-link">${profileData.email}</a>
      </div>
    </li>
  `);

  setHTML('.social-list', profileData.socials.map(s => `
    <li class="social-item">
      <a href="${s.link}" class="social-link" target="_blank" rel="noopener noreferrer">
        <ion-icon name="${s.icon}"></ion-icon>
      </a>
    </li>
  `).join(''));
}

/*-----------------------------------*\
  #RENDERERS DE SECTIONS (lazy)
  Chaque fonction injecte le HTML d'une section.
  Elles ne sont JAMAIS appelées au load — uniquement
  via renderSection() au premier clic sur la nav.
\*-----------------------------------*/

function renderAbout() {
  setHTML('.about-text', aboutData.text);
}

function renderResume() {
  setHTML('.education-list', resumeData.education.map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.school}</h4>
      <span>${item.date}</span>
      <p class="timeline-text">${item.desc}</p>
    </li>
  `).join(''));

  setHTML('.experience-list', resumeData.experience.map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.title}</h4>
      <span>${item.date}</span>
      <p class="timeline-text">${item.desc}</p>
    </li>
  `).join(''));

  setHTML('.skills-list', resumeData.skills.map(s => `
    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5">${s.name}</h5>
        <data value="${s.percent}">${s.percent}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${s.percent}%;"></div>
      </div>
    </li>
  `).join(''));
}

/**
 * renderStage — Injecte les cartes de stage.
 * Comportement accordéon activé uniquement sur les entrées avec s.expandable === true (Eursocan).
 * Autres cartes : rendu standard, 0 markup superflu.
 */
function renderStage() {
  setHTML('.stage-list', stageData.map(s => {
    const exp = !!s.expandable;

    return `
      <li class="stage-card" ${exp ? 'data-expandable' : ''}>
        <div class="stage-card-header">
          <span class="stage-company">${s.company}</span>
          <div class="stage-header-actions">
            <span class="stage-date">${s.date}</span>
            ${exp ? `
              <button class="expand-btn"
                      data-expand-btn
                      aria-expanded="false"
                      aria-label="Voir les détails — ${s.company}">
                <span class="expand-icon"></span>
              </button>` : ''}
          </div>
        </div>
        <p class="stage-role">${s.role}</p>
        <ul class="stage-missions">
          ${s.missions.map(m => `<li>${m}</li>`).join('')}
        </ul>
        ${exp ? `
          <div class="expandable-separator"></div>
          <div class="expandable-body" aria-hidden="true">
            <div class="expandable-inner">
              <!--
                PLACEHOLDER: Photos terrain — Eursocan
                Insérer ici une grille de 2 à 4 photos (accueil client, atelier, etc.)
                Structure suggérée :
                  <div class="photo-grid" style="display:grid; grid-template-columns:repeat(2,1fr); gap:8px; margin-top:12px;">
                    <figure>
                      <img src="./assets/images/stage/eursocan-01.webp"
                           alt="Accueil client Eursocan"
                           loading="lazy" width="400" height="300">
                    </figure>
                  </div>
                Format recommandé : 400×300px, border-radius var(--radius-card).
              -->
              <div class="expandable-placeholder">
                <ion-icon name="images-outline"></ion-icon>
                <span>Photos terrain Eursocan — à insérer ici</span>
              </div>
            </div>
          </div>` : ''}
      </li>`;
  }).join(''));

  // Attache le listener uniquement si au moins une carte est expandable
  if (stageData.some(s => s.expandable)) {
    setupExpandableCards($('.stage-list'));
  }
}

function renderVeille() {
  setHTML('.veille-list', veilleData.map(cat => `
    <li class="tools-category">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="${cat.icon}"></ion-icon></div>
        <h3 class="h3">${cat.title}</h3>
        <span class="category-count">${cat.items.length}</span>
      </div>
      <ul class="tools-items">
        ${cat.items.map(item => `
          <li class="tool-item">
            <div class="tool-content">
              <h4>${item.name}</h4>
              <p class="tool-description">${item.description}</p>
              ${item.link
                ? `<a href="${item.link}" class="tool-link" target="_blank" rel="noopener noreferrer">
                     Voir la source <ion-icon name="open-outline"></ion-icon>
                   </a>`
                : ''}
            </div>
          </li>
        `).join('')}
      </ul>
    </li>
  `).join(''));
}


/**
 * _bentoCardHTML — Template standard (aucun accordéon).
 * Utilisé par : renderMateriel, et par renderBento en mode section-expandable
 *               (les cartes internes restent statiques).
 */
function _bentoCardHTML(item, linkLabel) {
  return `
    <li class="bento-card">
      <h4>${item.name}</h4>
      ${item.issuer ? `
        <p class="bento-meta">
          <ion-icon name="business-outline"></ion-icon>
          ${item.issuer}${item.date ? ` — ${item.date}` : ''}
        </p>` : ''}
      <p class="bento-desc">${item.description}</p>
      ${item.link ? `
        <a href="${item.link}" class="tool-link" target="_blank" rel="noopener noreferrer">
          ${linkLabel} <ion-icon name="open-outline"></ion-icon>
        </a>` : ''}
    </li>`;
}

/**
 * _expandableBentoCardHTML — Template avec accordéon (Certifications).
 * Expandable au niveau de la carte individuelle.
 * PLACEHOLDER : zone d'insertion du certificat image.
 */
function _expandableBentoCardHTML(item, linkLabel) {
  return `
    <li class="bento-card" data-expandable>
      <div class="bento-card-header">
        <h4>${item.name}</h4>
        <button class="expand-btn"
                data-expand-btn
                aria-expanded="false"
                aria-label="Déplier — ${item.name}">
          <span class="expand-icon"></span>
        </button>
      </div>
      ${item.issuer ? `
        <p class="bento-meta">
          <ion-icon name="business-outline"></ion-icon>
          ${item.issuer}${item.date ? ` — ${item.date}` : ''}
        </p>` : ''}
      <p class="bento-desc">${item.description}</p>
      ${item.link ? `
        <a href="${item.link}" class="tool-link" target="_blank" rel="noopener noreferrer">
          ${linkLabel} <ion-icon name="open-outline"></ion-icon>
        </a>` : ''}
      <div class="expandable-separator"></div>
      <div class="expandable-body" aria-hidden="true">
        <div class="expandable-inner">
          <!--
            PLACEHOLDER: Certificat — ${item.name}
            Insérer : <img src="./assets/images/certs/nom-cert.webp"
                           alt="Certificat ${item.name}"
                           loading="lazy" width="800" height="566">
            Format recommandé : 800×566px, border-radius var(--radius-card).
          -->
          <div class="expandable-placeholder">
            <ion-icon name="ribbon-outline"></ion-icon>
            <span>Certificat — à insérer ici</span>
          </div>
        </div>
      </div>
    </li>`;
}

/**
 * renderBento — Renderer générique bento.
 * Partagé par Outils, Certifications, Matériel.
 *
 * @param {Array}  data           - Tableau de catégories (data.js)
 * @param {string} targetSelector - Sélecteur du conteneur cible
 * @param {string} linkLabel      - Libellé du lien externe
 * @param {Object} options
 * @param {boolean} options.expandable  - Active le comportement accordéon
 * @param {string}  options.expandLevel - 'section' (Outils) | 'card' (Certifications)
 */
function renderBento(data, targetSelector, linkLabel = 'Voir le site', options = {}) {
  const { expandable = false, expandLevel = 'card' } = options;

  setHTML(targetSelector, data.map(cat => {

    // ── Mode section-expandable (Outils) ──────────────────────────────────────
    // Le bento-grid complet + placeholder constituent le corps déplié.
    // La section est repliée par défaut : l'utilisateur déplie ce qui l'intéresse.
    if (expandable && expandLevel === 'section') {
      return `
        <section class="bento-section" data-expandable>
          <h3 class="bento-heading">
            <div class="icon-box"><ion-icon name="${cat.icon}"></ion-icon></div>
            ${cat.title}
            <span class="bento-count">${cat.items.length}</span>
            <button class="expand-btn"
                    data-expand-btn
                    aria-expanded="false"
                    aria-label="Déplier — ${cat.title}"
                    style="margin-left: auto;">
              <span class="expand-icon"></span>
            </button>
          </h3>
          <div class="expandable-separator"></div>
          <div class="expandable-body" aria-hidden="true">
            <div class="expandable-inner">
              <ul class="bento-grid">
                ${cat.items.map(item => _bentoCardHTML(item, linkLabel)).join('')}
              </ul>
              <!--
                PLACEHOLDER: Logos & captures — ${cat.title}
                Insérer ici une grille d'images/logos représentant les outils.
                Structure suggérée :
                  <ul class="logo-grid" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
                    <li><img src="./assets/images/logos/outil.webp" alt="Outil" loading="lazy" width="48" height="48"></li>
                  </ul>
              -->
              <div class="expandable-placeholder">
                <ion-icon name="images-outline"></ion-icon>
                <span>Logos & captures — ${cat.title}</span>
              </div>
            </div>
          </div>
        </section>`;
    }

    // ── Mode card-expandable (Certifications) ou standard (Matériel) ──────────
    return `
      <section class="bento-section">
        <h3 class="bento-heading">
          <div class="icon-box"><ion-icon name="${cat.icon}"></ion-icon></div>
          ${cat.title}
          <span class="bento-count">${cat.items.length}</span>
        </h3>
        <ul class="bento-grid">
          ${cat.items.map(item =>
            expandable
              ? _expandableBentoCardHTML(item, linkLabel)
              : _bentoCardHTML(item, linkLabel)
          ).join('')}
        </ul>
      </section>`;

  }).join(''));

  // Attache le listener accordéon uniquement si nécessaire
  if (expandable) {
    setupExpandableCards($(targetSelector));
  }
}

const renderOutils         = () => renderBento(outilsData,         '.outils-target',         'Voir le site',          { expandable: true, expandLevel: 'section' });
const renderCertifications = () => renderBento(certificationsData, '.certifications-target', 'Voir la certification', { expandable: true, expandLevel: 'card'    });
const renderMateriel       = () => renderBento(materielData,       '.materiel-target',       'Voir le produit');
// Matériel : 0 changement, signature identique.

/**
 * setupExpandableCards — Accordéon générique via délégation d'événement.
 *
 * Pattern : un seul listener sur le conteneur parent → O(1) peu importe le nombre de cartes.
 * Scalabilité : fonctionne sur des nœuds injectés dynamiquement (lazy render).
 * Accessibilité : aria-expanded + aria-hidden synchronisés à chaque toggle.
 *
 * @param {HTMLElement|null} container - Nœud parent des [data-expandable].
 */
function setupExpandableCards(container) {
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn  = e.target.closest('[data-expand-btn]');
    if (!btn) return;

    const card = btn.closest('[data-expandable]');
    if (!card) return;

    const next = !card.classList.contains('is-open');
    card.classList.toggle('is-open', next);

    btn.setAttribute('aria-expanded', String(next));

    // Sync aria-hidden sur le corps déplié
    const body = card.querySelector('.expandable-body');
    if (body) body.setAttribute('aria-hidden', String(!next));
  });
}

function renderPortfolio() {
  // Déduplique les catégories et insère "Tout" en premier
  const categories = ['Tout', ...new Set(portfolioData.map(p => p.category))];

  setHTML('.filter-list', categories.map((cat, i) => `
    <li class="filter-item">
      <button class="${i === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>
    </li>
  `).join(''));

  // width/height explicites → prévient le CLS (Cumulative Layout Shift)
  setHTML('.project-list', portfolioData.map(p => `
    <li class="project-item active" data-category="${p.category}">
      <a href="${p.link}" target="_blank" rel="noopener noreferrer">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img
            src="${p.image}"
            alt="${p.title}"
            loading="lazy"
            width="600"
            height="400"
            onerror="this.src='https://placehold.co/600x400?text=Projet'"
          >
        </figure>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-category">${p.category}</p>
      </a>
    </li>
  `).join(''));

  setupFilters();
}

/*-----------------------------------*\
  #LAZY RENDER — Dispatcher central
  SECTION_RENDERERS : map id → fonction de rendu.
  RENDERED : Set des sections déjà injectées.
  renderSection() garantit qu'une section n'est rendue qu'une seule fois.
\*-----------------------------------*/

const SECTION_RENDERERS = {
  about:          renderAbout,
  resume:         renderResume,
  stage:          renderStage,
  outils:         renderOutils,
  certifications: renderCertifications,
  materiel:       renderMateriel,
  veille:         renderVeille,
  portfolio:      renderPortfolio,
};

const RENDERED = new Set();

/**
 * Appelle le renderer d'une section si et seulement si elle n'a pas encore été injectée.
 * Pattern : guard early-return + Set membership check = O(1).
 */
function renderSection(id) {
  if (RENDERED.has(id)) return;
  RENDERED.add(id);
  SECTION_RENDERERS[id]?.();
}

/*-----------------------------------*\
  #INTERACTIONS
\*-----------------------------------*/

/**
 * Navigation SPA : active l'article cible, déclenche son lazy render,
 * désactive les autres. classList.toggle(class, bool) remplace les if/else.
 */
function setupNavigation() {
  const navLinks = $$('[data-nav-link]');
  const pages    = $$('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const target = this.dataset.navLink;

      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      pages.forEach(page => {
        page.classList.toggle('active', page.dataset.page === target);
      });

      renderSection(target);
      window.scrollTo(0, 0);
    });
  });
}

/** Filtre portfolio : toggle .active sur les items selon la catégorie sélectionnée. */
function setupFilters() {
  const filterBtns = $$('[data-filter]');
  const projects   = $$('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const cat = this.dataset.filter;
      projects.forEach(p => {
        p.classList.toggle('active', cat === 'Tout' || p.dataset.category === cat);
      });
    });
  });
}

/** Toggle accordéon sidebar (mobile). */
function setupSidebar() {
  const sidebar = $('.sidebar');
  const btn     = $('[data-sidebar-btn]');
  btn?.addEventListener('click', () => sidebar?.classList.toggle('active'));
}

/**
 * Easter egg avatar — citations aléatoires au clic.
 * LAZY INIT : le tableau `quotes` est null jusqu'au premier clic.
 * Si l'utilisateur ne clique jamais, aucune mémoire n'est allouée.
 */
function setupAvatarEasterEgg() {
  const trigger = document.getElementById('avatarTrigger');
  const bubble  = document.getElementById('avatarBubble');
  if (!trigger || !bubble) return;

  let quotes       = null; // alloué uniquement au premier clic
  let index        = 0;
  let dismissTimer = null;

  const show = () => {
    // Premier clic : initialisation unique du tableau
    if (!quotes) {
      quotes = [
        "Tu as trouvé le Secret. Bien joué.",
        "…?",
        "Médite dessus si t'a envie.",
        "Alors...",
        "Pensées circulaires.",
        "Le peu de lumière.",
        "La bougie s'est pas éteinte dans la plus vide des chambres.",
        "Chat Generative Pre-Trained Transformer V5.1.",
        "SAVILE ROW.",
        "P***** D* C****.",
        "j'répare les fissures au mastic.",
        "Démonstration.",
        "C'est une façon de voir les choses.",
        "Un courant de pensées.",
        "OFF ROAD.",
        "D'étranges couleurs dans ma tête.",
        "Jour De Plus",
        "Loving Machine - TV Girl.",
        "Holy.",
        "One Wayne G.",
        "20200228 - Mac Demarco.",
        "20200229 2 - Mac Demarco.",
        "Phantom - Mac Demarco.",
        "Sweater - Mac DeMarco.",
        "20201203 - Mac DeMarco.",
        "Ce jour-là, le bruit s'était arrêté.",
        "Le Gris, la Perte et la Reconstruction.",
        "Fisures",
        "Altération",
        "Merci pour les couleurs.",
        "Mon monde a perdu ses couleurs.",
        "Le vent souffle fort ce soir.",
        "La Lune me regarde froidement ce soir.",
        "Le monde est moche...",
        "Ambiance Grise.",
        "Mon cœur est Froid.",
        "Ambiance Vandale.",
        "Jardin Pâle.",
        "UN AUTRE JOUR.",
        "C'est juste un autre jour.",
        "Heavy - The Marías.",
        "1OO O0O LUMENS",
        "I Don't Wanna Be Me - Type 0 Negative.",
        "Le soldat Rouge et la libellule.",
        "Numb - Linkin Park.",
        "Papercut - Linkin Park.",
        "It's like a whirlwind inside of my head.",
        "I hate when you say you don't understand.",
        "I wanna be in another place.",
        "Figure.09 - Linkin Park.",
        "Chen Laden",
        "J'sais pas c'qui cloche chez moi.",
        "X3F200C.",
        "Pour toutes ces fois où j'en ai eu la gorge nouée.",
        "Les mots sont durs mais ils sont c'qu'ils sont.",
        "Si personne n'en parle, comment on va faire ?",
        "Tu sais, pas grand-chose a changé.",
        "La main tendue dans les abysses.",
        "Ils ont scellé l'môme dans une tombe.",
        "Pourtant dehors, le ciel est bleu...",
        "Mais c'est bizarre, j'ai toujours l'blues.",
        "Procédure habituelle chez moi.",
        "Nasty comme si j'sortais d'Ace Chemicals",
        "l'esprit, le corps, tout est cassé.",
        "Je sais qu'l'amour peut réparer",
        "j'le vois dans les yeux de...",
        "Tears Don't Fall",
        "Moi, j'pardonne tous les humains.",
        "si les humains savent parler",
        "J'en veux au monde, j'en veux au môme, chaque jour",
        "chaque jour, j'paye le prix d'ces bêtises",
        "Même si je réfléchis un peu moins...",
        "je porte encore le poids de ces cicatrices.",
        "j'le jure, ces chiens, ils m'mettront pas K.O.",
        "Who Really Cares…?",
        "Dehors, il pleut des cordes, sur mon seum, j'fais un billet.",
        "La Bougie ne s'est pas éteinte.",
        "Be Quiet and Drive.",
        "Y'a du brouillard partout.",
        "Le ciel pleure, et moi aussi.",
        "Y a pas d'plus beau sourire que celui de ceux qu'j'aime.",
        "C'est juste un autre jour, demain, tout ira mieux.",
        "Clément m'aurait dit : Fait toi Confiance.",
      ];
    }

    bubble.textContent = quotes[index % quotes.length];
    index++;
    bubble.classList.add('visible');
    clearTimeout(dismissTimer);
    dismissTimer = setTimeout(() => bubble.classList.remove('visible'), 4000);
  };

  const hide = (e) => {
    if (!trigger.contains(e.target) && !bubble.contains(e.target)) {
      bubble.classList.remove('visible');
      clearTimeout(dismissTimer);
    }
  };

  trigger.addEventListener('click', show);
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') show();
  });
  document.addEventListener('pointerdown', hide);
}

/*-----------------------------------*\
  #INIT — DOMContentLoaded
  Critique uniquement : navbar + profil + about.
  Le reste est injecté lazily via renderSection() au clic.
  Ordre d'exécution intentionnel : structure → contenu → interactions.
\*-----------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();       // structure de navigation (DOM requis pour setupNavigation)
  renderProfile();      // sidebar : nom, avatar, contacts (above-fold)
  renderSection('about'); // contenu de la page active par défaut

  setupNavigation();    // attache les listeners nav (doit suivre renderNavbar)
  setupSidebar();       // toggle accordéon mobile
  setupAvatarEasterEgg(); // easter egg (lazy, 0 coût si inutilisé)
});