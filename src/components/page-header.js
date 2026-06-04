// ============================================
// PAGE FILE HEADER — IDE-style intro for inner pages
// ============================================

const EXT_COLOR = {
  md:   'var(--accent-blue-light)',
  tsx:  'var(--accent-purple-light)',
  json: 'var(--accent-amber)',
  log:  'var(--accent-mint)',
};

/**
 * Render an IDE-style page header.
 * @param {object} opts
 * @param {string} opts.file   - e.g. 'about'
 * @param {string} opts.ext    - e.g. 'md'
 * @param {string} opts.label  - e.g. '01 — me conheça'
 * @param {string} opts.title  - main title (can include <span class="syn-mint">…</span>)
 * @param {string} [opts.sub]  - optional subtitle
 * @param {string} [opts.cmd]  - optional terminal command preview (e.g. `cat about.md`)
 */
export function renderPageHeader({ file, ext, label, title, sub, cmd }) {
  const color = EXT_COLOR[ext] || 'var(--text-secondary)';
  return `
    <header class="page-file-header reveal">
      <div class="page-file-header-bar">
        <span class="page-file-header-dot" style="background:${color};box-shadow:0 0 8px ${color}"></span>
        <span class="page-file-header-path">
          <span class="page-file-header-path-root">silas-portfolio</span>
          <span class="page-file-header-path-sep">›</span>
          <span class="page-file-header-path-file">${file}<span style="color:${color}">.${ext}</span></span>
        </span>
        ${cmd ? `<span class="page-file-header-cmd">❯ ${cmd}</span>` : ''}
      </div>

      <p class="page-file-header-label">// ${label}</p>
      <h1 class="page-file-header-title">${title}</h1>
      ${sub ? `<p class="page-file-header-sub">${sub}</p>` : ''}
    </header>
  `;
}
