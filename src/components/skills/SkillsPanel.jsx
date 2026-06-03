import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

function Sparkline({ level, color }) {
  const points = [40, 55, 48, 62, 70, level].map((v, i, arr) => {
    const x = (i / (arr.length - 1)) * 80;
    const y = 24 - (v / 100) * 22;
    return `${x},${y}`;
  });
  return (
    <svg width="80" height="24" viewBox="0 0 80 24" aria-hidden="true" className="skill-sparkline">
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
      />
    </svg>
  );
}

export default function SkillsPanel({ category }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="skills-panel" style={{ '--panel-accent': category.accent, '--panel-soft': category.accentSoft }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="skills-panel-inner"
        >
          <header className="skills-panel-header">
            <div className="skills-panel-meta">
              <span className="skills-panel-tag">
                <span className="skills-panel-tag-dot" aria-hidden="true" />
                {category.label}
              </span>
              <h3 className="skills-panel-title">{category.summary}</h3>
            </div>
            <div className="skills-panel-score" aria-label={`Pontuação ${category.score}`}>
              <span className="skills-panel-score-value">{category.score}</span>
              <span className="skills-panel-score-suffix">/100</span>
            </div>
          </header>

          <motion.ul
            className="skills-panel-list"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {category.skills.map((skill) => (
              <motion.li
                key={skill.name}
                className="skills-panel-row"
                variants={item}
                whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              >
                <div className="skills-panel-row-main">
                  <div className="skills-panel-row-head">
                    <span className="skills-panel-row-name">{skill.name}</span>
                    <span className="skills-panel-row-level">{skill.level}%</span>
                  </div>
                  <p className="skills-panel-row-note">{skill.note}</p>
                  <div className="skills-panel-row-bar" aria-hidden="true">
                    <motion.span
                      className="skills-panel-row-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      style={{ background: category.accent }}
                    />
                  </div>
                </div>
                <Sparkline level={skill.level} color={category.accent} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
