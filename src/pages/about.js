// ============================================
// ABOUT PAGE
// ============================================

export function renderAbout() {
  return `
    <div class="page-enter" style="padding-top: 100px;">
      <!-- About Header -->
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header" style="margin-bottom: 48px;">
            <p class="section-label reveal">Me Conheça</p>
            <h1 class="section-title reveal">Sobre <span class="gradient-text">Mim</span></h1>
          </div>
          <div class="section-divider"></div>

          <div class="about-grid">
            <div class="about-image-wrapper reveal">
              <div class="about-image">
                <div class="about-image-gradient"></div>
                <div class="about-image-icon">👨‍💻</div>
              </div>
            </div>
            <div class="about-text">
              <h3 class="reveal">Quem Sou Eu</h3>
              <p class="reveal">
                Sou Silas Neto, Desenvolvedor Full Stack e Engenheiro de Software AI baseado no Brasil. 
                Sou especializado em construir plataformas de dados, sistemas de automação e produtos 
                assistidos por IA que resolvem problemas reais em escala.
              </p>
              <p class="reveal">
                Minha jornada começou com uma profunda curiosidade sobre como os dados fluem através dos 
                sistemas e como o software pode automatizar processos complexos. Ao longo dos anos, evolui 
                de construir dashboards e APIs para projetar arquiteturas completas de inteligência de dados 
                alimentadas por IA.
              </p>

              <h3 class="reveal">O Que Me Motiva</h3>
              <p class="reveal">
                Acredito no poder do software bem arquitetado para transformar negócios. Seja um pipeline 
                ETL processando milhões de registros, um agente de IA automatizando tarefas repetitivas ou 
                um dashboard analítico em tempo real orientando decisões — sou apaixonado por construir 
                sistemas que geram impacto real.
              </p>

              <h3 class="reveal">Minha Abordagem</h3>
              <p class="reveal">
                Combino rigor de engenharia com pensamento empreendedor. Não apenas escrevo código — 
                penso no produto, no usuário e no problema de negócio. Meu stack abrange Python, Node.js, 
                React, PostgreSQL e ferramentas modernas de IA, permitindo que eu atue em todo o espectro, 
                desde engenharia de dados até entrega frontend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="section" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Minha Jornada</p>
            <h2 class="section-title reveal">Linha do <span class="gradient-text">Tempo</span></h2>
          </div>
          <div class="timeline">
            <div class="timeline-item reveal">
              <div class="timeline-dot"></div>
              <p class="timeline-date">Ago 2021 – Fev 2022</p>
              <h3 class="timeline-title">Ardagh Group — Estagiário de Infraestrutura</h3>
              <p class="timeline-desc">
                Primeira experiência profissional voltada para infraestrutura de TI e monitoramento de sistemas corporativos. 
                Desenvolvi dashboards internos para monitoramento de linhas telefônicas e indicadores operacionais utilizando Python e SQL. 
                Realizei manutenção de inventário de equipamentos de TI e apoiei operações de infraestrutura corporativa. 
                Essa experiência introduziu conceitos fundamentais de automação, análise de dados e monitoramento que direcionaram minha carreira.
              </p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-dot"></div>
              <p class="timeline-date">Ago 2022 – Nov 2023</p>
              <h3 class="timeline-title">Celcoin — Estagiário de Desenvolvimento de Software</h3>
              <p class="timeline-desc">
                Atuação focada em automação de processos e ferramentas de análise de dados para equipes operacionais. 
                Construí automações com Python e Selenium, criei dashboards de faturamento em PHP 
                e migrei scripts legados de PHP para Python, melhorando a manutenção. 
                Alcancei redução significativa de tarefas operacionais repetitivas e melhorei a confiabilidade dos processos internos.
              </p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-dot"></div>
              <p class="timeline-date">Nov 2023 – Jan 2025</p>
              <h3 class="timeline-title">XP Asset — Engenheiro de Dados JR</h3>
              <p class="timeline-desc">
                Atuação focada em automação de processos financeiros, engenharia de dados e integração de sistemas para operações de renda fixa. 
                Construí ferramentas de automação com Python e FastAPI para processamento de dados financeiros. 
                Implementei integrações de dados utilizando Azure Blob Storage para ingestão automática 
                e desenvolvi pipelines de dados para processamento e armazenamento operacional. 
                Melhorei significativamente a eficiência operacional e a confiabilidade no processamento de dados financeiros.
              </p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-dot"></div>
              <p class="timeline-date">Mar 2025 – Jun 2025</p>
              <h3 class="timeline-title">GranaTech — Engenheiro de Dados PL</h3>
              <p class="timeline-desc">
                Liderei o desenvolvimento de dashboards estratégicos em Power BI conectados às áreas de negócio e comercial. 
                Construí ferramentas de análise e processamento de dados em Python, estruturei a arquitetura de dados corporativa 
                e planejei/implementei um Data Lake utilizando Azure Data Factory. 
                Apoiei diretamente a tomada de decisão estratégica através de dashboards analíticos e evolui a arquitetura de dados para escalabilidade.
              </p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-dot"></div>
              <p class="timeline-date">Atual</p>
              <h3 class="timeline-title">Artesanal Investimentos — Engenheiro de Software / Especialista em Dados & Automação</h3>
              <p class="timeline-desc">
                Construindo soluções de automação e análise de dados para o setor financeiro, 
                focado na gestão e monitoramento de fundos estruturados. 
                Desenvolvendo sistemas de automação em Python para processos operacionais críticos, 
                pipelines de dados, ferramentas de análise financeira e integrações avançadas Excel + Python. 
                Integrando com bancos de dados PostgreSQL, APIs externas e construindo ferramentas automatizadas 
                de relatórios e monitoramento operacional em escala.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Engineering Process -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Metodologia</p>
            <h2 class="section-title reveal">Processo de <span class="gradient-text">Engenharia</span></h2>
            <p class="section-subtitle reveal">Uma abordagem sistemática para construir sistemas confiáveis e escaláveis</p>
          </div>
          <div class="process-grid">
            <div class="glass-card process-step reveal" style="text-align: center; padding: 32px 24px;">
              <div class="icon-box" style="margin: 0 auto 16px; font-size: 1.8rem; width: 64px; height: 64px;">🔍</div>
              <h3 class="process-step-title">Análise do Problema</h3>
              <p class="process-step-desc">Entender requisitos, identificar restrições e definir métricas de sucesso antes de escrever qualquer código</p>
            </div>
            <div class="glass-card process-step reveal reveal-delay-1" style="text-align: center; padding: 32px 24px;">
              <div class="icon-box" style="margin: 0 auto 16px; font-size: 1.8rem; width: 64px; height: 64px;">📐</div>
              <h3 class="process-step-title">Design do Sistema</h3>
              <p class="process-step-desc">Planejamento da arquitetura, modelagem de dados, contratos de API e seleção de tecnologias alinhadas aos objetivos</p>
            </div>
            <div class="glass-card process-step reveal reveal-delay-2" style="text-align: center; padding: 32px 24px;">
              <div class="icon-box" style="margin: 0 auto 16px; font-size: 1.8rem; width: 64px; height: 64px;">💻</div>
              <h3 class="process-step-title">Implementação</h3>
              <p class="process-step-desc">Práticas de código limpo, desenvolvimento iterativo, testes automatizados e integração CI/CD</p>
            </div>
            <div class="glass-card process-step reveal reveal-delay-3" style="text-align: center; padding: 32px 24px;">
              <div class="icon-box" style="margin: 0 auto 16px; font-size: 1.8rem; width: 64px; height: 64px;">🚀</div>
              <h3 class="process-step-title">Otimização</h3>
              <p class="process-step-desc">Análise de performance, estratégias de escalabilidade, setup de monitoramento e melhoria contínua</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
