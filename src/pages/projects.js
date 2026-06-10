// ============================================
// PROJECTS PAGE — Terminal-as-OS reskin
// ============================================

import { renderPageHeader } from '../components/page-header.js';

const PROJECTS = [
  {
    title: 'Aether',
    desc: 'Terminal de IA para análise gráfica de futuros, ações, forex e cripto: sinais automatizados, gráficos em tempo real e análise com inteligência artificial, com estética de hedge fund — entre o Bloomberg Terminal e o Perplexity.',
    tags: ['Next.js 15', 'TypeScript', 'Supabase', 'Stripe', 'Claude API', 'TradingView Charts'],
    category: 'saas',
    icon: '👻',
    logo: '/brand/aether-mascot.webp',
    status: 'building',
    github: 'https://github.com/SilasN33/aether',
    demo: '',
  },
  {
    title: 'Brasa',
    desc: 'Cockpit de delivery para restaurantes com frota própria: a loja despacha pedidos, motoboys puxam da fila em tempo real e confirmam com foto, e o acerto do mês sai automático — sem comissão de marketplace. Landing 3D interativa com cena React Three Fiber e scroll cinematográfico.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'React Three Fiber', 'GSAP', 'PWA'],
    category: 'saas',
    icon: '🔥',
    status: 'live',
    github: 'https://github.com/SilasN33/app-moto-entrega',
    demo: 'https://app-moto-entrega.vercel.app',
  },
  {
    title: 'QG APP',
    desc: 'Micro-SaaS para organizar campeonatos de tênis entre amigos. Gerenciamento de torneios, chaves, resultados e ranking em tempo real.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    category: 'saas',
    icon: '🎾',
    status: 'live',
    github: 'https://github.com/SilasN33/QG_APP',
    demo: 'https://qg-app-rosy.vercel.app',
  },
];

export function renderProjects() {
  return `
    <div class="page-enter">
      <section class="section" style="padding-top: 56px; padding-bottom: 48px;">
        <div class="container">
          ${renderPageHeader({
            file: 'projects',
            ext: 'tsx',
            label: '02 — meu trabalho',
            title: 'Projetos em <span class="gradient-text">produção</span>',
            sub: 'Apps reais, rodando, com gente usando. Sem demo fake.',
            cmd: 'ls -la ./projects',
          })}
        </div>
      </section>

      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div class="projects-grid-v2" id="projects-grid">
            ${PROJECTS.map((p, i) => renderProjectCard(p, i)).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderProjectCard(p, i) {
  const statusColor = p.status === 'live' ? 'var(--accent-mint)' : 'var(--text-muted)';
  return `
    <article class="project-card-v2 reveal reveal-delay-${(i % 4) + 1}" data-category="${p.category}">
      <div class="project-card-v2-head">
        <span class="project-card-v2-file">
          ${p.logo
            ? `<img class="project-card-v2-logo" src="${p.logo}" alt="Logo ${p.title}" width="20" height="20" loading="lazy" />`
            : `<span class="project-card-v2-file-icon">${p.icon}</span>`}
          <span class="project-card-v2-file-name">${slugify(p.title)}<span class="syn-mint">.tsx</span></span>
        </span>
        <span class="project-card-v2-status" style="color:${statusColor}">
          <span class="project-card-v2-status-dot" style="background:${statusColor};box-shadow:0 0 8px ${statusColor}"></span>
          ${p.status}
        </span>
      </div>

      <h3 class="project-card-v2-title">${p.title}</h3>
      <p class="project-card-v2-desc">${p.desc}</p>

      <div class="project-card-v2-stack">
        ${p.tags.map(t => `<span>${t}</span>`).join('')}
      </div>

      <div class="project-card-v2-links">
        ${p.demo ? `
          <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-card-v2-link project-card-v2-link--primary">
            <span>open demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        ` : ''}
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-card-v2-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>source</span>
        </a>
      </div>
    </article>
  `;
}

function slugify(s) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function initProjects() {}
