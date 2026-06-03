import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from './data.js';
import SkillRadar from './SkillRadar.jsx';
import SkillsPanel from './SkillsPanel.jsx';

function readPreselect() {
  try {
    const id = sessionStorage.getItem('skills-preselect');
    if (id && SKILL_CATEGORIES.some((c) => c.id === id)) {
      sessionStorage.removeItem('skills-preselect');
      return id;
    }
  } catch {}
  return null;
}

export default function SkillsExperience() {
  const [activeId, setActiveId] = useState(
    () => readPreselect() || SKILL_CATEGORIES[0].id
  );

  useEffect(() => {
    const handler = (e) => {
      const id = e.detail;
      if (id && SKILL_CATEGORIES.some((c) => c.id === id)) {
        setActiveId(id);
      }
    };
    window.addEventListener('skills:preselect', handler);
    return () => window.removeEventListener('skills:preselect', handler);
  }, []);

  const activeCategory =
    SKILL_CATEGORIES.find((c) => c.id === activeId) || SKILL_CATEGORIES[0];

  return (
    <motion.div
      className="skills-experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="skills-experience-grid">
        <div className="skills-experience-radar-wrap">
          <div className="skills-experience-radar-glow" aria-hidden="true" />
          <SkillRadar activeId={activeId} onSelect={setActiveId} />
        </div>

        <SkillsPanel category={activeCategory} />
      </div>
    </motion.div>
  );
}
