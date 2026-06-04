// ============================================
// INTERACTIVE HERO TERMINAL — typewriter + commands
// ============================================

const COMMANDS = {
  help:     { out: 'comandos: about · projects · skills · contact · clear · whoami' },
  whoami:   { out: 'silas neto · profissional de implementações de ai · dados × automação' },
  about:    { route: '#/about',    out: '→ abrindo about.md...' },
  projects: { route: '#/projects', out: '→ abrindo projects.tsx...' },
  skills:   { route: '#/skills',   out: '→ abrindo skills.json...' },
  crypto:   { route: '#/crypto',   out: '→ abrindo crypto.log...' },
  contact:  { route: '#/contact',  out: '→ abrindo contact.md...' },
};

const INTRO_LINES = [
  { type: 'code', text: '<span class="syn-key">const</span> <span class="syn-fn">engenheiro</span> <span class="syn-punct">=</span> <span class="syn-punct">{</span>' },
  { type: 'code', text: '  nome<span class="syn-punct">:</span> <span class="syn-str">"Silas Neto"</span><span class="syn-punct">,</span>' },
  { type: 'code', text: '  cargo<span class="syn-punct">:</span> <span class="syn-str">"Profissional de Implementações de AI"</span><span class="syn-punct">,</span>' },
  { type: 'code', text: '  stack<span class="syn-punct">:</span> <span class="syn-punct">[</span><span class="syn-str">"Python"</span><span class="syn-punct">,</span> <span class="syn-str">"Node"</span><span class="syn-punct">,</span> <span class="syn-str">"React"</span><span class="syn-punct">,</span> <span class="syn-str">"LLMs"</span><span class="syn-punct">],</span>' },
  { type: 'code', text: '  foco<span class="syn-punct">:</span> <span class="syn-str">"<span class="syn-mint">AI</span> × Dados × Automação"</span><span class="syn-punct">,</span>' },
  { type: 'code', text: '  status<span class="syn-punct">:</span> <span class="syn-str">"building..."</span>' },
  { type: 'code', text: '<span class="syn-punct">};</span>' },
  { type: 'spacer' },
  { type: 'sys',  text: '<span class="syn-comment">// digite <span class="syn-mint">help</span> ou clique nos atalhos abaixo</span>' },
];

export function renderHeroTerminal() {
  return `
    <div class="hero-ide reveal">
      <div class="hero-ide-glow hero-ide-glow--purple"></div>
      <div class="hero-ide-glow hero-ide-glow--blue"></div>
      <div class="hero-ide-glow hero-ide-glow--mint"></div>

      <div class="hero-ide-window">
        <div class="hero-ide-sidebar">
          <div class="hero-ide-sidebar-section">EXPLORER</div>
          <ul class="hero-ide-tree">
            <li class="hero-ide-tree-folder">▾ silas-portfolio</li>
            <li class="hero-ide-tree-file" data-route="#/">  ✦ home.md</li>
            <li class="hero-ide-tree-file" data-route="#/about">  ✦ about.md</li>
            <li class="hero-ide-tree-file" data-route="#/projects">  ⌘ projects.tsx</li>
            <li class="hero-ide-tree-file" data-route="#/skills">  ◇ skills.json</li>
            <li class="hero-ide-tree-file is-mint" data-route="#/crypto">  ◉ crypto.log</li>
            <li class="hero-ide-tree-file" data-route="#/contact">  ✦ contact.md</li>
          </ul>
          <div class="hero-ide-sidebar-section" style="margin-top:20px">OUTLINE</div>
          <ul class="hero-ide-outline">
            <li>const engenheiro</li>
            <li style="padding-left:12px">› nome</li>
            <li style="padding-left:12px">› foco</li>
            <li style="padding-left:12px">› status</li>
          </ul>
        </div>

        <div class="hero-ide-main">
          <div class="hero-ide-breadcrumb">
            <span>silas-portfolio</span>
            <span class="hero-ide-breadcrumb-sep">›</span>
            <span class="syn-mint">engenheiro.ts</span>
          </div>
          <div class="hero-ide-editor" id="hero-editor">
            <div class="hero-ide-gutter" id="hero-gutter"></div>
            <div class="hero-ide-lines" id="hero-lines"></div>
          </div>
          <div class="hero-ide-prompt">
            <span class="hero-ide-prompt-tag">silas@dev</span>
            <span class="hero-ide-prompt-sep">~</span>
            <span class="hero-ide-prompt-arrow">❯</span>
            <input id="hero-prompt-input" class="hero-ide-prompt-input" type="text"
              autocomplete="off" spellcheck="false" placeholder="digite 'help' e tecle enter…" />
            <span class="hero-ide-prompt-cursor"></span>
          </div>
          <div class="hero-ide-shortcuts">
            ${Object.keys(COMMANDS).filter(k => COMMANDS[k].route && k !== 'crypto').map(k => `
              <button class="hero-ide-shortcut" data-cmd="${k}">
                <span class="hero-ide-shortcut-key">⌘</span>${k}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="hero-ide-meta">
        <div class="hero-ide-meta-item">
          <span class="hero-ide-meta-dot" style="background:var(--accent-mint)"></span>
          <span>building</span>
        </div>
        <div class="hero-ide-meta-item">
          <span>5+ anos</span> · <span>20+ projetos</span> · <span>∞ commits</span>
        </div>
      </div>
    </div>
  `;
}

export function initHeroTerminal() {
  const linesEl = document.getElementById('hero-lines');
  const gutterEl = document.getElementById('hero-gutter');
  const inputEl = document.getElementById('hero-prompt-input');
  if (!linesEl || !gutterEl) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lineNo = 1;
  let cancelled = false;

  function pushGutter(n) {
    const el = document.createElement('div');
    el.className = 'hero-ide-gutter-line';
    el.textContent = String(n).padStart(2, '0');
    gutterEl.appendChild(el);
  }

  function pushSpacer() {
    pushGutter(lineNo++);
    const el = document.createElement('div');
    el.className = 'hero-ide-line hero-ide-line--spacer';
    linesEl.appendChild(el);
  }

  function pushLine(html, cls = '') {
    pushGutter(lineNo++);
    const el = document.createElement('div');
    el.className = `hero-ide-line ${cls}`;
    el.innerHTML = html;
    linesEl.appendChild(el);
    return el;
  }

  async function typeLine(line, baseSpeed = 14) {
    if (line.type === 'spacer') { pushSpacer(); return; }
    const cls = line.type === 'sys' ? 'hero-ide-line--sys' : '';
    const el = pushLine('', cls);
    if (reduceMotion) { el.innerHTML = line.text; return; }
    // Type out by character — we set innerHTML progressively from a tokenizer-safe split.
    // Strategy: build up plain text first, then swap to full html at the end.
    const tmp = document.createElement('div');
    tmp.innerHTML = line.text;
    const plain = tmp.textContent || '';
    for (let i = 1; i <= plain.length; i++) {
      if (cancelled) return;
      el.textContent = plain.slice(0, i);
      await wait(baseSpeed + Math.random() * 8);
    }
    el.innerHTML = line.text;
  }

  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function playIntro() {
    for (const line of INTRO_LINES) {
      if (cancelled) return;
      await typeLine(line);
    }
  }

  function runCommand(raw) {
    const cmd = (raw || '').trim().toLowerCase();
    if (!cmd) return;
    const def = COMMANDS[cmd];

    // Echo
    pushLine(`<span class="syn-mint">❯</span> <span class="syn-input">${escapeHtml(cmd)}</span>`, 'hero-ide-line--cmd');

    if (cmd === 'clear') {
      linesEl.innerHTML = '';
      gutterEl.innerHTML = '';
      lineNo = 1;
      return;
    }

    if (!def) {
      pushLine(`<span class="syn-err">comando não encontrado:</span> ${escapeHtml(cmd)} <span class="syn-comment">— tente <span class="syn-mint">help</span></span>`, 'hero-ide-line--sys');
      return;
    }

    pushLine(`<span class="syn-comment">${def.out}</span>`, 'hero-ide-line--sys');

    if (def.route) {
      setTimeout(() => { window.location.hash = def.route; }, 480);
    }
    scrollToBottom();
  }

  function scrollToBottom() {
    const editor = document.getElementById('hero-editor');
    if (editor) editor.scrollTop = editor.scrollHeight;
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }

  // Wire shortcuts
  document.querySelectorAll('.hero-ide-shortcut').forEach(btn => {
    btn.addEventListener('click', () => runCommand(btn.dataset.cmd));
  });

  // Wire sidebar file clicks
  document.querySelectorAll('.hero-ide-tree-file').forEach(li => {
    li.addEventListener('click', () => {
      const r = li.dataset.route;
      if (r) window.location.hash = r;
    });
  });

  // Wire input
  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const v = inputEl.value;
        inputEl.value = '';
        runCommand(v);
      }
    });
  }

  // Cleanup if user navigates away mid-animation
  window.addEventListener('hashchange', () => { cancelled = true; }, { once: true });

  playIntro();
}
