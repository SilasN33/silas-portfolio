// ============================================
// ABOUT PAGE — Terminal-as-OS reskin
// ============================================

import { mountProcess, unmountProcess } from '../components/process/processMount.jsx';
import { renderPageHeader } from '../components/page-header.js';

const TIMELINE = [
  {
    range: '2021.08 → 2022.02',
    role: 'Estagiário de Infraestrutura',
    company: 'Ardagh Group',
    desc: 'Primeira experiência profissional. Dashboards de monitoramento em Python+SQL, inventário de TI, fundamentos de automação e análise de dados.',
  },
  {
    range: '2022.08 → 2023.11',
    role: 'Estagiário de Desenvolvimento de Software',
    company: 'Celcoin',
    desc: 'Automações em Python+Selenium, dashboards de faturamento em PHP, migração de scripts legados PHP→Python. Foco em reduzir trabalho operacional repetitivo.',
  },
  {
    range: '2023.11 → 2025.01',
    role: 'Engenheiro de Dados JR',
    company: 'XP Asset',
    desc: 'Automação de processos financeiros (renda fixa). Ferramentas em Python+FastAPI, integrações com Azure Blob, pipelines de dados para processamento operacional.',
  },
  {
    range: '2025.03 → 2025.06',
    role: 'Engenheiro de Dados PL',
    company: 'GranaTech',
    desc: 'Dashboards estratégicos em Power BI, arquitetura de dados corporativa, planejamento e implementação de Data Lake com Azure Data Factory.',
  },
  {
    range: '2025 → now',
    role: 'Engenheiro de Software · Dados & Automação',
    company: 'Artesanal Investimentos',
    desc: 'Sistemas de automação em Python pra gestão e monitoramento de fundos estruturados. Pipelines, integrações Excel+Python, PostgreSQL, APIs externas, ferramentas de relatório.',
  },
];

export function renderAbout() {
  return `
    <div class="page-enter">
      <!-- File header -->
      <section class="section" style="padding-top: 56px; padding-bottom: 48px;">
        <div class="container">
          ${renderPageHeader({
            file: 'about',
            ext: 'md',
            label: '00 — readme',
            title: 'Sobre <span class="gradient-text">mim</span>',
            sub: 'Engenheiro de Software · Dados × IA × Cripto · construindo sistemas que rodam em produção e geram impacto real.',
            cmd: 'cat about.md',
          })}
        </div>
      </section>

      <!-- Quem sou eu -->
      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div class="about-blocks">
            <article class="about-block reveal">
              <h2 class="about-block-title">
                <span class="syn-comment">## </span>quem sou eu
              </h2>
              <p>
                Silas Neto, brasileiro, Full Stack e Engenheiro de Software AI.
                Construo plataformas de dados, sistemas de automação e produtos assistidos por IA que resolvem
                problemas reais em escala.
              </p>
              <p>
                Comecei curioso sobre como dados fluem entre sistemas e como software pode automatizar processos complexos.
                Evoluí de dashboards e APIs pra desenhar arquiteturas inteiras de inteligência de dados com IA.
              </p>
            </article>

            <article class="about-block reveal">
              <h2 class="about-block-title">
                <span class="syn-comment">## </span>o que me move
              </h2>
              <p>
                Software bem arquitetado transforma negócio. Pipeline ETL processando milhões de registros,
                agente de IA automatizando tarefas, dashboard em tempo real guiando decisão —
                sou apaixonado por construir sistemas que entregam.
              </p>
            </article>

            <article class="about-block reveal">
              <h2 class="about-block-title">
                <span class="syn-comment">## </span>minha abordagem
              </h2>
              <p>
                Rigor de engenharia + pensamento empreendedor. Não só escrevo código — penso no produto,
                no usuário e no problema de negócio.
                Stack: Python, Node, React, PostgreSQL, ferramentas modernas de IA, e cripto on-chain.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="section" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">// 01 — git log --reverse</p>
            <h2 class="section-title reveal">Linha do <span class="gradient-text">tempo</span></h2>
            <p class="section-subtitle reveal">Cada role moldou um pedaço diferente do que eu construo hoje.</p>
          </div>

          <div class="about-timeline">
            ${TIMELINE.map(item => `
              <div class="about-timeline-item reveal">
                <div class="about-timeline-meta">
                  <span class="about-timeline-range">${item.range}</span>
                </div>
                <div class="about-timeline-card">
                  <div class="about-timeline-card-head">
                    <h3 class="about-timeline-role">${item.role}</h3>
                    <span class="about-timeline-company">@ ${item.company}</span>
                  </div>
                  <p class="about-timeline-desc">${item.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Processo de engenharia (React island) -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">// 02 — metodologia</p>
            <h2 class="section-title reveal">Processo de <span class="gradient-text">engenharia</span></h2>
            <p class="section-subtitle reveal">Abordagem sistemática pra construir sistemas confiáveis e escaláveis.</p>
          </div>
          <div id="process-react-root" class="reveal" aria-label="Pipeline do processo de engenharia"></div>
        </div>
      </section>
    </div>
  `;
}

export function initAbout() {
  const el = document.getElementById('process-react-root');
  if (!el) return;
  mountProcess(el);

  const cleanup = () => {
    unmountProcess();
    window.removeEventListener('hashchange', cleanup);
  };
  window.addEventListener('hashchange', cleanup);
}
