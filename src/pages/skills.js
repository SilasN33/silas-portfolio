// ============================================
// SKILLS PAGE
// ============================================

const TECH_STACK = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Prisma', icon: '◆' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'Power BI', icon: '📊' },
];

const SKILL_CATEGORIES = [
  {
    icon: '⚙️',
    title: 'Engenharia Backend',
    skills: [
      { name: 'Node.js / Express', level: 92 },
      { name: 'Python / FastAPI', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'Design de API REST', level: 95 },
      { name: 'Autenticação & Segurança', level: 85 },
    ],
  },
  {
    icon: '🎨',
    title: 'Desenvolvimento Frontend',
    skills: [
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS Moderno / UI', level: 85 },
      { name: 'Design Responsivo', level: 90 },
      { name: 'Gerenciamento de Estado', level: 82 },
    ],
  },
  {
    icon: '🗄️',
    title: 'Engenharia de Dados',
    skills: [
      { name: 'PostgreSQL / SQL', level: 92 },
      { name: 'Pipelines ETL', level: 88 },
      { name: 'Modelagem de Dados', level: 86 },
      { name: 'Transformação de Dados', level: 90 },
      { name: 'Ingestão de Dados via API', level: 88 },
    ],
  },
  {
    icon: '🤖',
    title: 'Automação',
    skills: [
      { name: 'Automação com Python', level: 92 },
      { name: 'Sistemas de Workflow', level: 85 },
      { name: 'Integrações de API', level: 90 },
      { name: 'Desenvolvimento de Bots', level: 82 },
      { name: 'Agendamento de Tarefas', level: 88 },
    ],
  },
  {
    icon: '🧠',
    title: 'Desenvolvimento IA',
    skills: [
      { name: 'Integrações com LLM', level: 82 },
      { name: 'Agentes de IA', level: 78 },
      { name: 'Ferramentas Assistidas por IA', level: 85 },
      { name: 'Inteligência de Dados', level: 80 },
      { name: 'Engenharia de Prompt', level: 88 },
    ],
  },
  {
    icon: '☁️',
    title: 'Infraestrutura',
    skills: [
      { name: 'Prisma ORM', level: 88 },
      { name: 'Arquitetura de APIs', level: 90 },
      { name: 'Design de Sistemas', level: 82 },
      { name: 'CI/CD Básico', level: 78 },
      { name: 'Docker', level: 75 },
    ],
  },
];

export function renderSkills() {
  return `
    <div class="page-enter" style="padding-top: 100px;">
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Capacidades</p>
            <h1 class="section-title reveal">Habilidades & <span class="gradient-text">Expertise</span></h1>
            <p class="section-subtitle reveal">Tecnologias e ferramentas com as quais trabalho diariamente</p>
          </div>

          <!-- Tech Stack Row -->
          <div class="tech-stack-row reveal">
            ${TECH_STACK.map(t => `
              <div class="tech-item">
                <span class="tech-item-icon">${t.icon}</span>
                <span class="tech-item-name">${t.name}</span>
              </div>
            `).join('')}
          </div>

          <!-- Skill Categories Grid -->
          <div class="skills-grid">
            ${SKILL_CATEGORIES.map((cat, i) => `
              <div class="glass-card skill-card reveal reveal-delay-${(i % 4) + 1}">
                <div class="skill-card-header">
                  <div class="icon-box">${cat.icon}</div>
                  <h3 class="skill-card-title">${cat.title}</h3>
                </div>
                ${cat.skills.map(skill => `
                  <div class="skill-item">
                    <span class="skill-item-name">${skill.name}</span>
                    <div class="progress-bar">
                      <div class="progress-bar-fill" data-width="${skill.level}" style="width: 0%;"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initSkills() {
  // Animate progress bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.progress-bar-fill');
        fills.forEach(fill => {
          const width = fill.getAttribute('data-width');
          setTimeout(() => {
            fill.style.width = width + '%';
          }, 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
  });
}
