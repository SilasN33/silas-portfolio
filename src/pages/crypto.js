// ============================================
// CRYPTO PAGE — jornada + tese + projetos
// ============================================

export function renderCrypto() {
  return `
    <div class="page-enter">
      <!-- Hero: vídeo 3D como background imersivo -->
      <section class="crypto-hero crypto-hero--bg">
        <video
          class="crypto-hero-bg-video"
          src="/brand/crypto-3d-loop.mp4"
          poster="/brand/concept-3d-production.webp"
          width="1920" height="1080"
          autoplay muted loop playsinline
          preload="metadata"
          aria-hidden="true"
        ></video>
        <div class="crypto-hero-bg-scrim"></div>
        <div class="container">
          <div class="crypto-hero-tag reveal">
            <span class="crypto-hero-tag-dot"></span>
            crypto.log · tail -f
          </div>
          <h1 class="crypto-hero-title reveal reveal-delay-1">
            <span class="syn-comment">// </span>onde <span class="gradient-text-crypto">engenharia</span> encontra <span class="gradient-text-crypto">capital programável</span>.
          </h1>
          <p class="crypto-hero-sub reveal reveal-delay-2">
            Trajetória, tese atual e projetos técnicos que construí na fronteira entre código, on-chain e mercado.
          </p>
          <div class="crypto-hero-stats reveal reveal-delay-3">
            <div class="crypto-stat">
              <div class="crypto-stat-value">2017</div>
              <div class="crypto-stat-label">primeiro satoshi</div>
            </div>
            <div class="crypto-stat">
              <div class="crypto-stat-value">7+</div>
              <div class="crypto-stat-label">ciclos observados</div>
            </div>
            <div class="crypto-stat">
              <div class="crypto-stat-value">∞</div>
              <div class="crypto-stat-label">teses revisadas</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bloco 1 · Trajetória -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">// 01 — trajetória</p>
            <h2 class="section-title reveal">Como cheguei <span class="gradient-text-crypto">aqui</span></h2>
            <p class="section-subtitle reveal">Os marcos que moldaram minha leitura do mercado.</p>
          </div>

          <div class="crypto-timeline">
            <div class="crypto-timeline-item reveal">
              <div class="crypto-timeline-year">2017</div>
              <div class="crypto-timeline-card">
                <h3>Primeira exposição</h3>
                <p>Descobri Bitcoin via curiosidade técnica — entender como uma rede mantém consenso sem autoridade central virou obsessão de engenheiro.</p>
              </div>
            </div>
            <div class="crypto-timeline-item reveal">
              <div class="crypto-timeline-year">2020</div>
              <div class="crypto-timeline-card">
                <h3>DeFi summer</h3>
                <p>Mergulhei em smart contracts, AMMs e farming. Entendi que a verdadeira inovação não era o preço — era a composabilidade.</p>
              </div>
            </div>
            <div class="crypto-timeline-item reveal">
              <div class="crypto-timeline-year">2022</div>
              <div class="crypto-timeline-card">
                <h3>Bear market &amp; bots</h3>
                <p>Bear me forçou a sair do hype e ir pro técnico: bots de arbitragem, scripts de monitoramento on-chain, análise de fluxo.</p>
              </div>
            </div>
            <div class="crypto-timeline-item reveal">
              <div class="crypto-timeline-year">2024-26</div>
              <div class="crypto-timeline-card">
                <h3>Convergência com IA</h3>
                <p>Hoje meu foco é onde IA, dados e cripto se encontram — agents que negociam, oráculos que aprendem, infraestrutura de dados on-chain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bloco 2 · Tese -->
      <section class="section" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">// 02 — tese atual</p>
            <h2 class="section-title reveal">O que eu <span class="gradient-text-crypto">acredito</span> hoje</h2>
            <p class="section-subtitle reveal">Não é conselho financeiro — é como meu modelo mental tá calibrado em 2026.</p>
          </div>

          <div class="crypto-thesis-grid">
            <div class="crypto-thesis-card reveal">
              <div class="crypto-thesis-num">01</div>
              <h3>Bitcoin é reserva, não plataforma.</h3>
              <p>Continua sendo o ativo monetário base. Tese de longo prazo, baixa rotação, posição estrutural.</p>
            </div>
            <div class="crypto-thesis-card reveal">
              <div class="crypto-thesis-num">02</div>
              <h3>Inovação real está em L2 e infra de dados.</h3>
              <p>Onde a engenharia ainda tem alpha. Latência, custo, UX — problemas resolvíveis com código bom.</p>
            </div>
            <div class="crypto-thesis-card reveal">
              <div class="crypto-thesis-num">03</div>
              <h3>Agents on-chain vão escalar antes do que se imagina.</h3>
              <p>LLMs + carteiras autônomas + APIs DeFi = nova classe de software financeiro. Tô construindo aqui.</p>
            </div>
            <div class="crypto-thesis-card reveal">
              <div class="crypto-thesis-num">04</div>
              <h3>Risco mora no que parece estável.</h3>
              <p>Stablecoins, custódias centralizadas, "yields garantidos" — sempre o que quebra primeiro. Verificar invariantes.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Bloco 3 · Projetos -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">// 03 — projetos técnicos</p>
            <h2 class="section-title reveal">O que eu <span class="gradient-text-crypto">construí</span></h2>
            <p class="section-subtitle reveal">Ferramentas, bots, análises. Código aplicado ao espaço.</p>
          </div>

          <div class="crypto-projects-grid">
            <article class="crypto-project-card reveal">
              <div class="crypto-project-head">
                <span class="crypto-project-tag">on-chain</span>
                <span class="crypto-project-status">live</span>
              </div>
              <h3>Monitor de fluxo on-chain</h3>
              <p>Pipeline em Python que indexa movimentações de carteiras flagged em tempo real e alerta via Telegram.</p>
              <div class="crypto-project-stack">
                <span>Python</span><span>web3.py</span><span>PostgreSQL</span>
              </div>
            </article>
            <article class="crypto-project-card reveal">
              <div class="crypto-project-head">
                <span class="crypto-project-tag">trading</span>
                <span class="crypto-project-status">arquivado</span>
              </div>
              <h3>Bot de arbitragem AMM</h3>
              <p>Identifica diferenças de preço entre DEXs e calcula viabilidade de execução considerando gas e slippage.</p>
              <div class="crypto-project-stack">
                <span>Node.js</span><span>ethers.js</span><span>Redis</span>
              </div>
            </article>
            <article class="crypto-project-card reveal">
              <div class="crypto-project-head">
                <span class="crypto-project-tag">research</span>
                <span class="crypto-project-status">contínuo</span>
              </div>
              <h3>Dashboard de teses</h3>
              <p>Painel próprio que consolida métricas on-chain, sentiment e fundamentos para decisões de alocação.</p>
              <div class="crypto-project-stack">
                <span>Next.js</span><span>Dune</span><span>Defillama API</span>
              </div>
            </article>
          </div>

          <div class="crypto-cta reveal">
            <p>Tem ideia de projeto na fronteira cripto × IA? Bora trocar.</p>
            <a href="#/contact" class="btn btn-mint">
              fale comigo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initCrypto() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.crypto-hero-bg-video').forEach(v => {
      v.removeAttribute('autoplay');
      v.pause();
    });
  }
}
