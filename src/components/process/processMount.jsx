import { createRoot } from 'react-dom/client';
import ProcessExperience from './ProcessExperience.jsx';

let root = null;
let currentEl = null;

export function mountProcess(el) {
  if (!el) return;
  if (root && currentEl !== el) {
    root.unmount();
    root = null;
  }
  if (!root) {
    root = createRoot(el);
    currentEl = el;
  }
  root.render(<ProcessExperience />);
}

export function unmountProcess() {
  if (root) {
    root.unmount();
    root = null;
    currentEl = null;
  }
}
