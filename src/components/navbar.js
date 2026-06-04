// ============================================
// IDE-STYLE NAVBAR — editor tabs
// ============================================

const NAV_ITEMS = [
  { label: 'home',     ext: 'md',   hash: '#/' },
  { label: 'about',    ext: 'md',   hash: '#/about' },
  { label: 'projects', ext: 'tsx',  hash: '#/projects' },
  { label: 'skills',   ext: 'json', hash: '#/skills' },
  { label: 'crypto',   ext: 'log',  hash: '#/crypto' },
  { label: 'contact',  ext: 'md',   hash: '#/contact' },
];

const EXT_COLOR = {
  md:   'var(--accent-blue-light)',
  tsx:  'var(--accent-purple-light)',
  json: 'var(--accent-amber)',
  log:  'var(--accent-mint)',
};

function renderTab(item, currentHash) {
  const isActive = currentHash === item.hash;
  const color = EXT_COLOR[item.ext] || 'var(--text-secondary)';
  return `
    <a href="${item.hash}" class="ide-tab${isActive ? ' is-active' : ''}" data-hash="${item.hash}">
      <span class="ide-tab-dot" style="background:${color};box-shadow:0 0 6px ${color}"></span>
      <span class="ide-tab-name">${item.label}</span><span class="ide-tab-ext" style="color:${color}">.${item.ext}</span>
      ${isActive ? '<span class="ide-tab-close" aria-hidden="true">×</span>' : ''}
    </a>
  `;
}

export function renderNavbar() {
  const currentHash = window.location.hash || '#/';
  return `
    <div class="ide-chrome" id="main-navbar">
      <div class="ide-titlebar">
        <div class="ide-titlebar-left">
          <span class="ide-traffic ide-traffic--red"></span>
          <span class="ide-traffic ide-traffic--yellow"></span>
          <span class="ide-traffic ide-traffic--green"></span>
        </div>
        <div class="ide-titlebar-center">
          <span class="ide-titlebar-path">silas@portfolio</span>
          <span class="ide-titlebar-sep">—</span>
          <span class="ide-titlebar-branch">⎇ main</span>
        </div>
        <div class="ide-titlebar-right">
          <a href="#/" class="ide-logo" aria-label="Home">
            <span class="ide-logo-bracket">[</span>SN<span class="ide-logo-bracket">]</span>
          </a>
        </div>
      </div>
      <div class="ide-tabs" id="ide-tabs-desktop">
        ${NAV_ITEMS.map(item => renderTab(item, currentHash)).join('')}
        <div class="ide-tabs-tail"></div>
      </div>
      <div class="ide-hamburger" id="nav-hamburger" aria-label="Alternar menu">
        <span></span><span></span><span></span>
      </div>
      <div class="ide-mobile" id="nav-mobile">
        ${NAV_ITEMS.map(item => renderTab(item, currentHash)).join('')}
      </div>
    </div>
  `;
}

export function initNavbar() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobile = document.getElementById('nav-mobile');
  const navbar = document.getElementById('main-navbar');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobile.classList.toggle('open');
    });
  }

  if (mobile) {
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobile.classList.remove('open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  updateNavActive();
}

export function updateNavActive() {
  const currentHash = window.location.hash || '#/';
  document.querySelectorAll('.ide-tab').forEach(a => {
    a.classList.toggle('is-active', a.getAttribute('href') === currentHash);
  });
}
