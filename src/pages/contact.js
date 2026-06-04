// ============================================
// CONTACT PAGE — Terminal-as-OS reskin (form as POST preview)
// ============================================

import { renderPageHeader } from '../components/page-header.js';

export function renderContact() {
  return `
    <div class="page-enter">
      <section class="section" style="padding-top: 56px; padding-bottom: 32px;">
        <div class="container">
          ${renderPageHeader({
            file: 'contact',
            ext: 'md',
            label: '04 — fale comigo',
            title: 'Vamos <span class="gradient-text">conversar</span>',
            sub: 'Tem projeto, colab ou ideia maluca? Manda — abro praticamente tudo.',
            cmd: 'curl -X POST silas.dev/contact',
          })}
        </div>
      </section>

      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div class="contact-grid-v2">

            <!-- Form (as request body preview) -->
            <div class="contact-form-card reveal">
              <div class="contact-form-card-head">
                <span class="contact-form-card-head-method">POST</span>
                <span class="contact-form-card-head-url">/api/contact</span>
                <span class="contact-form-card-head-spacer"></span>
                <span class="contact-form-card-head-type">json</span>
              </div>
              <form class="contact-form-v2" id="contact-form">
                <div class="contact-form-row">
                  <label for="contact-name" class="contact-form-key">"name"<span class="syn-punct">:</span></label>
                  <input type="text" id="contact-name" name="name" class="contact-form-input" placeholder='"seu nome"' required />
                </div>
                <div class="contact-form-row">
                  <label for="contact-email" class="contact-form-key">"email"<span class="syn-punct">:</span></label>
                  <input type="email" id="contact-email" name="email" class="contact-form-input" placeholder='"seu@email.com"' required />
                </div>
                <div class="contact-form-row">
                  <label for="contact-subject" class="contact-form-key">"subject"<span class="syn-punct">:</span></label>
                  <input type="text" id="contact-subject" name="subject" class="contact-form-input" placeholder='"sobre o quê?"' />
                </div>
                <div class="contact-form-row contact-form-row--textarea">
                  <label for="contact-message" class="contact-form-key">"message"<span class="syn-punct">:</span></label>
                  <textarea id="contact-message" name="message" class="contact-form-textarea" placeholder='"conta sobre seu projeto..."' required></textarea>
                </div>
                <button type="submit" id="contact-submit" class="btn btn-mint contact-form-submit">
                  <span class="contact-form-submit-arrow">❯</span>
                  <span>send_request()</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </form>
            </div>

            <!-- Contact info (channels) -->
            <aside class="contact-info-v2">
              <div class="contact-info-card reveal">
                <div class="contact-info-card-meta">channel.github</div>
                <a href="https://github.com/silasneto" target="_blank" rel="noopener" class="contact-info-card-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>github.com/silasneto</span>
                </a>
              </div>

              <div class="contact-info-card reveal reveal-delay-1">
                <div class="contact-info-card-meta">channel.linkedin</div>
                <a href="https://linkedin.com/in/silasneto" target="_blank" rel="noopener" class="contact-info-card-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
                  <span>linkedin.com/in/silasneto</span>
                </a>
              </div>

              <div class="contact-info-card reveal reveal-delay-2">
                <div class="contact-info-card-meta">channel.email</div>
                <a href="mailto:silasbortneto@gmail.com" class="contact-info-card-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <span>silasbortneto@gmail.com</span>
                </a>
              </div>

              <div class="contact-info-card contact-info-card--mint reveal reveal-delay-3">
                <div class="contact-info-card-meta">status</div>
                <div class="contact-info-status">
                  <span class="contact-info-status-pulse"></span>
                  <span>aberto pra oportunidades</span>
                </div>
                <p class="contact-info-status-desc">
                  Consultoria, parcerias e roles em IA, engenharia de dados, automação e cripto.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('contact-submit');
    if (!btn) return;
    const orig = btn.innerHTML;
    btn.innerHTML = `
      <span class="contact-form-submit-arrow">✓</span>
      <span>200 ok · message sent</span>
    `;
    setTimeout(() => {
      form.reset();
      btn.innerHTML = orig;
    }, 3000);
  });
}
