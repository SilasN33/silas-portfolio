import { motion, useReducedMotion } from 'framer-motion';
import { SKILL_CATEGORIES } from './data.js';
import { GLYPHS } from './glyphs.jsx';

const SPANS = {
  frontend: 'span-6',
  backend: 'span-6',
  data: 'span-4',
  ai: 'span-4',
  cloud: 'span-4',
};

function goToCategory(id) {
  try {
    sessionStorage.setItem('skills-preselect', id);
  } catch {}
  if (window.location.hash === '#/skills') {
    window.dispatchEvent(new CustomEvent('skills:preselect', { detail: id }));
  } else {
    window.location.hash = '#/skills';
  }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

function CompetencyCard({ cat }) {
  const prefersReducedMotion = useReducedMotion();
  const Glyph = GLYPHS[cat.id];
  const span = SPANS[cat.id] || 'span-4';
  const topSkills = cat.skills.slice(0, 3);

  return (
    <motion.button
      type="button"
      onClick={() => goToCategory(cat.id)}
      className={`competency-card ${span}`}
      variants={item}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      style={{
        '--card-accent': cat.accent,
        '--card-soft': cat.accentSoft,
      }}
      aria-label={`Explorar ${cat.label} no radar de skills`}
    >
      <span className="competency-card-line" aria-hidden="true" />

      <div className="competency-card-head">
        <span className="competency-card-glyph" aria-hidden="true">
          {Glyph && <Glyph color={cat.accent} />}
        </span>
        <div className="competency-card-score">
          <span className="competency-card-score-value">{cat.score}</span>
          <span className="competency-card-score-suffix">/100</span>
        </div>
      </div>

      <div className="competency-card-body">
        <h3 className="competency-card-title">{cat.label}</h3>
        <p className="competency-card-summary">{cat.summary}</p>
      </div>

      <div className="competency-card-chips">
        {topSkills.map((skill) => (
          <span key={skill.name} className="competency-card-chip">
            {skill.name}
          </span>
        ))}
      </div>

      <div className="competency-card-footer">
        <span className="competency-card-cta">
          Ver no radar
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </span>
      </div>
    </motion.button>
  );
}

export default function SkillsPreview() {
  return (
    <motion.div
      className="competencies-grid"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {SKILL_CATEGORIES.map((cat) => (
        <CompetencyCard key={cat.id} cat={cat} />
      ))}
    </motion.div>
  );
}
