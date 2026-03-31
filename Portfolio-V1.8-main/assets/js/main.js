/*-----------------------------------*\
  #MAIN.JS
\*-----------------------------------*/

import {
  profileData, aboutData, resumeData,
  outilsData, certificationsData, materielData,
  portfolioData, stageData, veilleData
} from './data.js';

// --- UTILITAIRES ---
const getElement = (selector) => document.querySelector(selector);
const getAllElements = (selector) => document.querySelectorAll(selector);

const render = (selector, html) => {
  const el = getElement(selector);
  if (el) {
    el.innerHTML = html;
  } else {
    console.warn(`Attention: "${selector}" introuvable dans le HTML.`);
  }
};

// --- NAVBAR ---
function loadNavbar() {
  const pages = [
    { label: "À propos", id: "about" },
    { label: "Parcours", id: "resume" },
    { label: "Stage", id: "stage" },
    { label: "Certifications", id: "certifications" },
    { label: "Veille", id: "veille" },
    { label: "Outils", id: "outils" },
    { label: "Matériel", id: "materiel" },
    { label: "Portfolio", id: "portfolio" }
  ];

  const navHTML = pages.map((page, index) => `
    <li class="navbar-item">
      <button class="navbar-link ${index === 0 ? 'active' : ''}" data-nav-link="${page.id}">
        ${page.label}
      </button>
    </li>
  `).join('');

  render('.navbar-list', navHTML);
}

// --- PROFIL ---
function loadProfile() {
  const imgEl = getElement('.avatar-box img');
  if (imgEl) {
    const isDark = document.body.classList.contains('dark-mode');
    imgEl.src = isDark ? profileData.avatar : profileData.avatarLight;
  }

  const nameEl = getElement('.info-content .name');
  if (nameEl) nameEl.textContent = profileData.name;

  const roleEl = getElement('.info-content .title');
  if (roleEl) roleEl.textContent = profileData.role;

  const contactHTML = `
    <li class="contact-item">
      <div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
      <div class="contact-info">
        <p class="contact-title">Email</p>
        <a href="mailto:${profileData.email}" class="contact-link">${profileData.email}</a>
      </div>
    </li>
  `;
  render('.contacts-list', contactHTML);

  const socialHTML = profileData.socials.map(social => `
    <li class="social-item">
      <a href="${social.link}" class="social-link" target="_blank">
        <ion-icon name="${social.icon}"></ion-icon>
      </a>
    </li>
  `).join('');
  render('.social-list', socialHTML);
}

// --- À PROPOS ---
function loadAbout() {
  render('.about-text', aboutData.text);
}

// --- PARCOURS ---
function loadResume() {
  const eduHTML = resumeData.education.map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.school}</h4>
      <span>${item.date}</span>
      <p class="timeline-text">${item.desc}</p>
    </li>
  `).join('');
  render('.education-list', eduHTML);

  const expHTML = resumeData.experience.map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.title}</h4>
      <span>${item.date}</span>
      <p class="timeline-text">${item.desc}</p>
    </li>
  `).join('');
  render('.experience-list', expHTML);

  const skillsHTML = resumeData.skills.map(skill => `
    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5">${skill.name}</h5>
        <data value="${skill.percent}">${skill.percent}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${skill.percent}%;"></div>
      </div>
    </li>
  `).join('');
  render('.skills-list', skillsHTML);
}

// --- STAGE ---
function loadStage() {
  const html = stageData.map(s => `
    <li class="stage-card">
      <div class="stage-card-header">
        <span class="stage-company">${s.company}</span>
        <span class="stage-date">${s.date}</span>
      </div>
      <p class="stage-role">${s.role}</p>
      <ul class="stage-missions">
        ${s.missions.map(m => `<li>${m}</li>`).join('')}
      </ul>
    </li>
  `).join('');
  render('.stage-list', html);
}

// --- VEILLE ---
function loadVeille() {
  const html = veilleData.map(cat => `
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
              <h4 class="h4">${item.name}</h4>
              <p class="tool-description">${item.description}</p>
              ${item.link ? `<a href="${item.link}" class="tool-link" target="_blank">Voir la source <ion-icon name="open-outline"></ion-icon></a>` : ''}
            </div>
          </li>
        `).join('')}
      </ul>
    </li>
  `).join('');
  render('.veille-list', html);
}

// --- BENTO — Utilitaire partagé (Outils / Certifications / Matériel) ---
function renderBento(data, targetSelector, linkLabel = 'Voir le site') {
  const html = data.map(cat => `
    <section class="bento-section">
      <h3 class="bento-heading">
        <div class="icon-box"><ion-icon name="${cat.icon}"></ion-icon></div>
        ${cat.title}
        <span class="bento-count">${cat.items.length}</span>
      </h3>
      <ul class="bento-grid">
        ${cat.items.map(item => `
          <li class="bento-card">
            <h4>${item.name}</h4>
            ${item.issuer ? `<p class="bento-meta"><ion-icon name="business-outline"></ion-icon>${item.issuer}${item.date ? ` — ${item.date}` : ''}</p>` : ''}
            <p class="bento-desc">${item.description}</p>
            ${item.link ? `<a href="${item.link}" class="tool-link" target="_blank">${linkLabel} <ion-icon name="open-outline"></ion-icon></a>` : ''}
          </li>
        `).join('')}
      </ul>
    </section>
  `).join('');
  render(targetSelector, html);
}

function loadOutils()         { renderBento(outilsData,         '.outils-target',         'Voir le site');          }
function loadCertifications() { renderBento(certificationsData, '.certifications-target', 'Voir la certification'); }
function loadMateriel()       { renderBento(materielData,       '.materiel-target',       'Voir le produit');       }

// --- PORTFOLIO ---
function loadPortfolio() {
  const projectsHTML = portfolioData.map(project => `
    <li class="project-item active" data-category="${project.category}">
      <a href="${project.link}" target="_blank">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=Projet'">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
      </a>
    </li>
  `).join('');
  render('.project-list', projectsHTML);

  const categories = ["Tout", ...new Set(portfolioData.map(p => p.category))];
  const filterHTML = categories.map((cat, index) => `
    <li class="filter-item">
      <button class="${index === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>
    </li>
  `).join('');
  render('.filter-list', filterHTML);

  setupFilters();
}

// --- INTERACTIONS ---
function setupNavigation() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const target = this.dataset.navLink.toLowerCase();

      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      let pageFound = false;
      pages.forEach(page => {
        if (page.dataset.page.toLowerCase() === target) {
          page.classList.add('active');
          window.scrollTo(0, 0);
          pageFound = true;
        } else {
          page.classList.remove('active');
        }
      });

      if (!pageFound) console.error("Page introuvable pour : " + target);
    });
  });
}

function setupFilters() {
  const filterBtns = getAllElements('[data-filter]');
  const projects = getAllElements('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('data-filter');
      projects.forEach(project => {
        if (category === 'Tout' || project.getAttribute('data-category') === category) {
          project.classList.add('active');
        } else {
          project.classList.remove('active');
        }
      });
    });
  });
}

function setupSidebar() {
  const sidebar = getElement('.sidebar');
  const sidebarBtn = getElement('[data-sidebar-btn]');
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
  }
}

function setupAvatarEasterEgg() {
  const AVATAR_QUOTES = [
    "Tu as trouvé le Secret. Bien joué.",
    "Mais es-tu sûr…?",
    "Ici, on ne fait pas demi-tour.",
    "Alors...",
    "N'oublie jamais : nous avons toujours le choix.",
    "Cela fait longtemps que je t'observe, Chevalier noir.",
    "Tu suis un code.",
    "Ne jamais tuer.",
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
    "20200228 - Mac Demarco.",
    "20200229 2 - Mac Demarco.",
    "Phantom - Mac Demarco.",
    "Sweater - Mac DeMarco.",
    "20201203 - Mac DeMarco.",
    "Ce jour-là, le bruit s'était arrêté.",
    "Le Gris, la Perte et la Reconstruction.",
    "Merci pour les couleurs.",
    "Mon monde a perdu ses couleurs.",
    "Ambiance Grise.",
    "Ambiance Vandale.",
    "Jardin Pâle.",
    "UN AUTRE JOUR.",
    "C'est juste un autre jour.",
    "Heavy - The Marías.",
    "100 000 LUMENS.",
    "I Don't Wanna Be Me - Type O Negative.",
    "Numb - Linkin Park.",
    "Papercut - Linkin Park.",
    "Figure.09 - Linkin Park.",
    "J'sais pas c'qui cloche chez moi.",
    "Pour toutes ces fois où j'en ai eu la gorge nouée.",
    "Les mots sont durs mais ils sont c'qu'ils sont.",
    "Si personne n'en parle, comment on va faire ?",
    "La main tendue dans les abysses.",
    "Ils ont scellé l'môme dans une tombe.",
    "Pourtant dehors, le ciel est bleu, mais c'est bizarre, j'ai toujours l'blues.",
    "l'esprit, le corps, tout est cassé.",
    "Je sais qu'l'amour peut réparer, j'le vois dans les yeux de...",
    "Moi, j'pardonne tous les humains.",
    "si les humains savent parler",
    "J'en veux au monde, j'en veux au môme, chaque jour",
    "chaque jour, j'paye le prix d'ces bêtises",
    "Même si je réfléchis un peu moins, je porte encore le poids de ces cicatrices.",
    "Dehors, il pleut des cordes, sur mon seum, j'fais un billet.",
    "La Bougie ne s'est pas éteinte.",
    "Y a pas d'plus beau sourire que celui de ceux qu'j'aime."
  ];

  const trigger = document.getElementById('avatarTrigger');
  const bubble  = document.getElementById('avatarBubble');
  if (!trigger || !bubble) return;

  let index = 0;
  let dismissTimer = null;

  const show = () => {
    bubble.textContent = AVATAR_QUOTES[index % AVATAR_QUOTES.length];
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

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadProfile();
  loadAbout();
  loadResume();
  loadStage();
  loadOutils();
  loadCertifications();
  loadMateriel();
  loadVeille();
  loadPortfolio();

  setupNavigation();
  setupSidebar();
  setupAvatarEasterEgg();
});