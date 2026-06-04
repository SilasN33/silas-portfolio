// ============================================
// IDE-STYLE STATUS BAR (fixed bottom)
// ============================================

const ROUTE_META = {
  '#/':         { file: 'home.md',     lang: 'Markdown',   icon: '✦' },
  '#/about':    { file: 'about.md',    lang: 'Markdown',   icon: '✦' },
  '#/projects': { file: 'projects.tsx',lang: 'TypeScript', icon: '⌘' },
  '#/skills':   { file: 'skills.json', lang: 'JSON',       icon: '◇' },
  '#/crypto':   { file: 'crypto.log',  lang: 'Log',        icon: '◉' },
  '#/contact':  { file: 'contact.md',  lang: 'Markdown',   icon: '✦' },
};

function currentMeta() {
  const hash = window.location.hash || '#/';
  return ROUTE_META[hash] || ROUTE_META['#/'];
}

export function renderStatusBar() {
  const m = currentMeta();
  return `
    <div class="ide-statusbar" id="ide-statusbar">
      <div class="ide-statusbar-left">
        <span class="ide-statusbar-item ide-statusbar-item--mint">
          <span class="ide-statusbar-pulse"></span> online
        </span>
        <span class="ide-statusbar-item">⎇ main</span>
        <span class="ide-statusbar-item" id="status-file">${m.icon} ${m.file}</span>
      </div>
      <div class="ide-statusbar-right">
        <span class="ide-statusbar-item">UTF-8</span>
        <span class="ide-statusbar-item">LF</span>
        <span class="ide-statusbar-item" id="status-lang">${m.lang}</span>
        <span class="ide-statusbar-item ide-statusbar-item--purple">▲ silas.dev</span>
      </div>
    </div>
  `;
}

export function initStatusBar() {
  const update = () => {
    const m = currentMeta();
    const f = document.getElementById('status-file');
    const l = document.getElementById('status-lang');
    if (f) f.innerHTML = `${m.icon} ${m.file}`;
    if (l) l.textContent = m.lang;
  };
  window.addEventListener('hashchange', update);
}
