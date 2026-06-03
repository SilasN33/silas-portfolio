import { createRoot } from 'react-dom/client';
import SkillsPreview from './SkillsPreview.jsx';

let root = null;
let currentEl = null;

export function mountSkillsPreview(el) {
  if (!el) return;
  if (root && currentEl !== el) {
    root.unmount();
    root = null;
  }
  if (!root) {
    root = createRoot(el);
    currentEl = el;
  }
  root.render(<SkillsPreview />);
}

export function unmountSkillsPreview() {
  if (root) {
    root.unmount();
    root = null;
    currentEl = null;
  }
}
