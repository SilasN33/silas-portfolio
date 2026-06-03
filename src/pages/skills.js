// ============================================
// SKILLS PAGE
// ============================================

import { mountSkillsExperience, unmountSkillsExperience } from '../components/skills/mount.jsx';

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
    <div class="page-enter" style="padding-top: 100px;">
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Capacidades</p>
            <h1 class="section-title reveal">Habilidades & <span class="gradient-text">Expertise</span></h1>
            <p class="section-subtitle reveal">Um mapa interativo das áreas em que atuo — clique numa categoria para explorar</p>
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

          <!-- React Island: Skills Radar Experience -->
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

  // Cleanup when leaving the route (hash change)
  const cleanup = () => {
    unmountSkillsExperience();
    window.removeEventListener('hashchange', cleanup);
  };
  window.addEventListener('hashchange', cleanup);
}
