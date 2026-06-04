// ============================================
// SKILLS PAGE — Terminal-as-OS reskin
// ============================================

import { mountSkillsExperience, unmountSkillsExperience } from '../components/skills/mount.jsx';
import { renderPageHeader } from '../components/page-header.js';

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

export function renderSkills() {
  return `
    <div class="page-enter">
      <section class="section" style="padding-top: 56px; padding-bottom: 32px;">
        <div class="container">
          ${renderPageHeader({
            file: 'skills',
            ext: 'json',
            label: '03 — capacidades',
            title: 'Habilidades & <span class="gradient-text">expertise</span>',
            sub: 'Mapa interativo das áreas em que atuo. Clique numa categoria pra explorar.',
            cmd: 'cat skills.json | jq .',
          })}
        </div>
      </section>

      <!-- Tech stack chips (mono) -->
      <section class="section" style="padding-top: 0; padding-bottom: 32px;">
        <div class="container">
          <div class="skills-stack-row reveal">
            ${TECH_STACK.map(t => `
              <div class="skills-stack-chip">
                <span class="skills-stack-chip-icon">${t.icon}</span>
                <span class="skills-stack-chip-name">${t.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- React Island: Skills Radar Experience -->
      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div id="skills-react-root" class="reveal" aria-label="Mapa interativo de habilidades"></div>
        </div>
      </section>
    </div>
  `;
}

export function initSkills() {
  const el = document.getElementById('skills-react-root');
  if (!el) return;
  mountSkillsExperience(el);

  const cleanup = () => {
    unmountSkillsExperience();
    window.removeEventListener('hashchange', cleanup);
  };
  window.addEventListener('hashchange', cleanup);
}
