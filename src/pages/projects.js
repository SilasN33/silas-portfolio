// ============================================
// PROJECTS PAGE
// ============================================

const PROJECTS = [
  {
    title: 'Dashboard de Business Intelligence',
    desc: 'Plataforma completa de BI com visualizações interativas, rastreamento de KPIs e relatórios automatizados para tomada de decisão executiva.',
    tags: ['Power BI', 'SQL', 'ETL', 'Modelagem de Dados'],
    category: 'data',
    icon: '📊',
  },
  {
    title: 'Motor de Pipeline de Dados',
    desc: 'Sistema ETL escalável processando milhões de registros diariamente. Ingestão, transformação e carga automatizadas de dados com monitoramento.',
    tags: ['Python', 'PostgreSQL', 'ETL', 'Airflow'],
    category: 'data',
    icon: '🔄',
  },
  {
    title: 'Plataforma de API REST',
    desc: 'Arquitetura de API de nível produção com autenticação, rate limiting, cache e documentação abrangente.',
    tags: ['Node.js', 'Express', 'Prisma', 'TypeScript'],
    category: 'backend',
    icon: '🔗',
  },
  {
    title: 'Framework de Bot de Automação',
    desc: 'Framework extensível de automação para orquestração de workflows. Automatiza coleta, processamento e distribuição de dados.',
    tags: ['Python', 'Integração API', 'Agendamento', 'Bots'],
    category: 'automation',
    icon: '🤖',
  },
  {
    title: 'Assistente de Conteúdo com IA',
    desc: 'Ferramenta de geração e análise de conteúdo movida por LLM. Integra múltiplos modelos de IA para processamento inteligente de texto.',
    tags: ['FastAPI', 'LLM', 'Python', 'React'],
    category: 'ai',
    icon: '🧠',
  },
  {
    title: 'Ferramenta de Análise Crypto',
    desc: 'Análise de mercado de criptomoedas em tempo real com indicadores técnicos, geração de sinais e rastreamento de portfólio.',
    tags: ['Python', 'APIs de Trading', 'Análise de Dados', 'WebSocket'],
    category: 'saas',
    icon: '📈',
  },
  {
    title: 'Monitor de Qualidade de Dados',
    desc: 'Sistema automatizado de validação de qualidade de dados que verifica anomalias, valores ausentes e mudanças de schema nos pipelines.',
    tags: ['Python', 'PostgreSQL', 'Monitoramento', 'Alertas'],
    category: 'data',
    icon: '✅',
  },
  {
    title: 'Plataforma de Automação de Workflows',
    desc: 'Construtor de automação inspirado em no-code para conectar APIs, agendar tarefas e gerenciar processos de negócio multi-etapas.',
    tags: ['Node.js', 'React', 'TypeScript', 'Webhooks'],
    category: 'automation',
    icon: '⚡',
  },
  {
    title: 'Classificador de Dados com IA',
    desc: 'Pipeline de machine learning para classificação automática de documentos e extração de entidades com treinamento de modelos customizados.',
    tags: ['Python', 'ML', 'FastAPI', 'NLP'],
    category: 'ai',
    icon: '🏷️',
  },
];

const FILTERS = [
  { label: 'Todos', value: 'all' },
  { label: 'Dados & BI', value: 'data' },
  { label: 'APIs Backend', value: 'backend' },
  { label: 'Automação', value: 'automation' },
  { label: 'Ferramentas IA', value: 'ai' },
  { label: 'Micro-SaaS', value: 'saas' },
];

export function renderProjects() {
  return `
    <div class="page-enter" style="padding-top: 100px;">
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Meu Trabalho</p>
            <h1 class="section-title reveal">Projetos em <span class="gradient-text">Destaque</span></h1>
            <p class="section-subtitle reveal">Sistemas de dados, ferramentas de IA e soluções de automação</p>
          </div>

          <div class="filter-bar reveal" id="project-filters">
            ${FILTERS.map(f => `
              <button class="filter-btn ${f.value === 'all' ? 'active' : ''}" data-filter="${f.value}" id="filter-${f.value}">
                ${f.label}
              </button>
            `).join('')}
          </div>

          <div class="projects-grid" id="projects-grid">
            ${renderProjectCards('all')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderProjectCards(filter) {
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  return filtered.map((p, i) => `
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
      <a href="#" class="project-link">Ver Detalhes →</a>
    </div>
  `).join('');
}

export function initProjects() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('projects-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      grid.innerHTML = renderProjectCards(filter);

      // Re-trigger reveal animations
      const reveals = grid.querySelectorAll('.reveal');
      requestAnimationFrame(() => {
        reveals.forEach(el => el.classList.add('visible'));
      });
    });
  });
}
