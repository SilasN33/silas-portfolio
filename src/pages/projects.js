// ============================================
// PROJECTS PAGE
// ============================================

const PROJECTS = [
  {
    title: 'QG APP',
    desc: 'Micro-SaaS para organizar campeonatos de tênis entre amigos. Gerenciamento de torneios, chaves, resultados e ranking em tempo real.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    category: 'saas',
    icon: '🎾',
    github: 'https://github.com/SilasN33/QG_APP',
    demo: 'https://qg-app-rosy.vercel.app',
  },
];

export function renderProjects() {
  return `
    <div class="page-enter" style="padding-top: 100px;">
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Meu Trabalho</p>
            <h1 class="section-title reveal">Projetos em <span class="gradient-text">Destaque</span></h1>
            <p class="section-subtitle reveal">Projetos reais em produção</p>
          </div>

          <div class="projects-grid" id="projects-grid">
            ${renderProjectCards()}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderProjectCards() {
  return PROJECTS.map((p, i) => `
    <div class="glass-card project-card reveal reveal-delay-${(i % 4) + 1}" data-category="${p.category}">
      <div class="project-thumbnail">
        <div class="project-thumbnail-bg"></div>
        <div class="project-thumbnail-icon">${p.icon}</div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-description">${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-link">Ver Demo →</a>
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link project-link-secondary">GitHub →</a>
      </div>
    </div>
  `).join('');
}

export function initProjects() {}
