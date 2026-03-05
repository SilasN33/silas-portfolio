// ============================================
// HOME PAGE
// ============================================

export function renderHome() {
  return `
    <div class="page-enter">
      <!-- Hero Section -->
      <section class="hero" id="hero-section">
        <div class="hero-glow hero-glow--purple"></div>
        <div class="hero-glow hero-glow--blue"></div>
        <div class="container">
          <div class="hero-content">
            <p class="hero-greeting reveal">Olá, eu sou</p>
            <h1 class="hero-name gradient-text reveal reveal-delay-1">Silas Neto</h1>
            <p class="hero-title reveal reveal-delay-2">Engenheiro de Software AI</p>
            <p class="hero-subtitle reveal reveal-delay-3">Especialista em Dados & Automação</p>
            <p class="hero-description reveal reveal-delay-4">
              Construindo sistemas de dados, ferramentas de automação e software assistido por IA. 
              Apaixonado por transformar problemas complexos em soluções elegantes e escaláveis.
            </p>
            <div class="hero-cta reveal reveal-delay-4">
              <a href="#/projects" class="btn btn-primary" id="cta-projects">
                <span>Ver Projetos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </a>
              <a href="#/contact" class="btn btn-secondary" id="cta-contact">Fale Comigo</a>
            </div>
            <div class="social-icons reveal reveal-delay-5">
              <a href="https://github.com/silasneto" target="_blank" rel="noopener" class="social-icon" aria-label="GitHub" id="hero-github">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/silasneto" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn" id="hero-linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:silas@example.com" class="social-icon" aria-label="Email" id="hero-email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-terminal">
              <div class="terminal-header">
                <span class="terminal-dot terminal-dot--red"></span>
                <span class="terminal-dot terminal-dot--yellow"></span>
                <span class="terminal-dot terminal-dot--green"></span>
                <span class="terminal-title">silas@dev ~ /portfolio</span>
              </div>
              <div class="terminal-body">
                <div class="terminal-line"><span class="terminal-prompt">const</span> <span class="terminal-keyword">engenheiro</span> = {</div>
                <div class="terminal-line">&nbsp;&nbsp;nome: <span class="terminal-string">"Silas Neto"</span>,</div>
                <div class="terminal-line">&nbsp;&nbsp;cargo: <span class="terminal-string">"Engenheiro de Software AI"</span>,</div>
                <div class="terminal-line">&nbsp;&nbsp;stack: [<span class="terminal-string">"Python"</span>, <span class="terminal-string">"Node"</span>, <span class="terminal-string">"React"</span>],</div>
                <div class="terminal-line">&nbsp;&nbsp;foco: <span class="terminal-string">"Dados × IA × Automação"</span>,</div>
                <div class="terminal-line">&nbsp;&nbsp;construindo: <span class="terminal-string">"o futuro"</span></div>
                <div class="terminal-line">};<span class="terminal-cursor"></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div class="stats-grid">
            <div class="stat glass-card reveal" style="padding: 24px;">
              <div class="stat-value">5+</div>
              <div class="stat-label">Anos de Experiência</div>
            </div>
            <div class="stat glass-card reveal reveal-delay-1" style="padding: 24px;">
              <div class="stat-value">20+</div>
              <div class="stat-label">Projetos Entregues</div>
            </div>
            <div class="stat glass-card reveal reveal-delay-2" style="padding: 24px;">
              <div class="stat-value">10+</div>
              <div class="stat-label">Tecnologias</div>
            </div>
            <div class="stat glass-card reveal reveal-delay-3" style="padding: 24px;">
              <div class="stat-value">∞</div>
              <div class="stat-label">Linhas de Código</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Preview -->
      <section class="section" id="skills-preview">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">O Que Eu Faço</p>
            <h2 class="section-title reveal">Principais <span class="gradient-text">Competências</span></h2>
            <p class="section-subtitle reveal">Especializado em construir sistemas de dados robustos e soluções com IA</p>
          </div>
          <div class="skills-grid">
            ${renderSkillPreviewCards()}
          </div>
        </div>
      </section>

      <!-- Engineering Process -->
      <section class="section" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Como Eu Trabalho</p>
            <h2 class="section-title reveal">Processo de <span class="gradient-text">Engenharia</span></h2>
          </div>
          <div class="process-grid">
            <div class="process-step reveal">
              <div class="process-number glass-card" style="padding: 0; border-radius: 50%;">01</div>
              <h3 class="process-step-title">Análise do Problema</h3>
              <p class="process-step-desc">Análise profunda dos requisitos, restrições e necessidades dos stakeholders</p>
            </div>
            <div class="process-step reveal reveal-delay-1">
              <div class="process-number glass-card" style="padding: 0; border-radius: 50%;">02</div>
              <h3 class="process-step-title">Design do Sistema</h3>
              <p class="process-step-desc">Planejamento da arquitetura, modelagem de dados e seleção de tecnologias</p>
            </div>
            <div class="process-step reveal reveal-delay-2">
              <div class="process-number glass-card" style="padding: 0; border-radius: 50%;">03</div>
              <h3 class="process-step-title">Implementação</h3>
              <p class="process-step-desc">Código limpo, desenvolvimento iterativo e integração contínua</p>
            </div>
            <div class="process-step reveal reveal-delay-3">
              <div class="process-number glass-card" style="padding: 0; border-radius: 50%;">04</div>
              <h3 class="process-step-title">Otimização</h3>
              <p class="process-step-desc">Ajuste de performance, estratégias de escala e monitoramento</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section" id="home-cta">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Vamos Construir Juntos</p>
            <h2 class="section-title reveal">Tem um projeto em <span class="gradient-text">mente</span>?</h2>
            <p class="section-subtitle reveal">Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.</p>
            <div style="margin-top: 32px;" class="reveal">
              <a href="#/contact" class="btn btn-primary" id="cta-bottom-contact">
                Entre em Contato
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderSkillPreviewCards() {
  const skills = [
    { icon: '⚙️', title: 'Engenharia Backend', desc: 'Node.js, Express, Python, FastAPI — construindo sistemas server-side robustos e APIs' },
    { icon: '🎨', title: 'Desenvolvimento Frontend', desc: 'React, TypeScript — criando interfaces modernas e responsivas' },
    { icon: '🗄️', title: 'Engenharia de Dados', desc: 'PostgreSQL, pipelines ETL, transformações de dados e plataformas analíticas' },
    { icon: '🤖', title: 'Automação', desc: 'Automação com Python, sistemas de workflow, integrações de API e bots' },
    { icon: '🧠', title: 'Desenvolvimento IA', desc: 'Integrações com LLM, agentes de automação, ferramentas assistidas por IA e inteligência de dados' },
    { icon: '☁️', title: 'Infraestrutura', desc: 'Prisma ORM, arquitetura de APIs, design de sistemas e fundamentos de DevOps' },
  ];

  return skills.map((s, i) => `
    <div class="glass-card skill-card reveal reveal-delay-${i % 4 + 1}">
      <div class="skill-card-header">
        <div class="icon-box">${s.icon}</div>
        <h3 class="skill-card-title">${s.title}</h3>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">${s.desc}</p>
    </div>
  `).join('');
}
