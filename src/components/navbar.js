// ============================================
// NAVBAR COMPONENT
// ============================================

const NAV_ITEMS = [
  { label: 'Início', hash: '#/' },
  { label: 'Sobre', hash: '#/about' },
  { label: 'Projetos', hash: '#/projects' },
  { label: 'Habilidades', hash: '#/skills' },
  { label: 'Contato', hash: '#/contact' },
];

export function renderNavbar() {
  const currentHash = window.location.hash || '#/';
  return `
    <div class="navbar" id="main-navbar">
      <div class="container">
        <a href="#/" class="nav-logo">SN</a>
        <div class="nav-links" id="nav-desktop-links">
          ${NAV_ITEMS.map(item => `
            <a href="${item.hash}" class="${currentHash === item.hash ? 'active' : ''}">${item.label}</a>
          `).join('')}
        </div>
        <div class="nav-hamburger" id="nav-hamburger" aria-label="Alternar menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="nav-mobile" id="nav-mobile">
        ${NAV_ITEMS.map(item => `
          <a href="${item.hash}" class="${currentHash === item.hash ? 'active' : ''}">${item.label}</a>
        `).join('')}
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

  // Close mobile menu on link click
  if (mobile) {
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobile.classList.remove('open');
      });
    });
  }

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }
    lastScroll = scrollY;
  });

  // Update active state
  updateNavActive();
}

export function updateNavActive() {
  const currentHash = window.location.hash || '#/';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === currentHash);
  });
}
