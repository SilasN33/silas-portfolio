// ============================================
// MAIN ROUTER & APP INITIALIZATION
// ============================================

import { renderNavbar, initNavbar, updateNavActive } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { initParticles } from './components/particles.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderProjects, initProjects } from './pages/projects.js';
import { renderSkills, initSkills } from './pages/skills.js';
import { renderContact, initContact } from './pages/contact.js';

// --- Route Definitions ---
const routes = {
  '#/': { render: renderHome, init: null, title: 'Silas Neto — Engenheiro de Software AI' },
  '#/about': { render: renderAbout, init: null, title: 'Sobre — Silas Neto' },
  '#/projects': { render: renderProjects, init: initProjects, title: 'Projetos — Silas Neto' },
  '#/skills': { render: renderSkills, init: initSkills, title: 'Habilidades — Silas Neto' },
  '#/contact': { render: renderContact, init: initContact, title: 'Contato — Silas Neto' },
};

// --- Router ---
function navigateTo(hash) {
  const route = routes[hash] || routes['#/'];
  const pageContent = document.getElementById('page-content');

  // Update page title
  document.title = route.title;

  // Render page content
  pageContent.innerHTML = route.render();

  // Update navbar active state
  updateNavActive();

  // Initialize page-specific JS
  if (route.init) {
    route.init();
  }

  // Initialize scroll reveal
  initScrollReveal();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// --- Scroll Reveal (IntersectionObserver) ---
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

// --- App Init ---
function init() {
  // Render persistent components
  const navbar = document.getElementById('navbar');
  const footer = document.getElementById('footer');

  navbar.outerHTML = renderNavbar();
  footer.outerHTML = renderFooter();

  // Initialize navbar
  initNavbar();

  // Initialize particles
  initParticles();

  // Navigate to current hash or default
  const currentHash = window.location.hash || '#/';
  navigateTo(currentHash);

  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash || '#/';
    navigateTo(hash);
  });
}

// Start the app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
