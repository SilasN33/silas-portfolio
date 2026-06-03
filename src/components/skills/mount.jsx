import { createRoot } from 'react-dom/client';
import SkillsExperience from './SkillsExperience.jsx';

let root = null;
let currentEl = null;

export function mountSkillsExperience(el) {
  if (!el) return;
  if (root && currentEl !== el) {
    root.unmount();
    root = null;
  }
  if (!root) {
    root = createRoot(el);
    currentEl = el;
  }
  root.render(<SkillsExperience />);
}

export function unmountSkillsExperience() {
  if (root) {
    root.unmount();
    root = null;
    currentEl = null;
  }
}
