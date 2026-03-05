// ============================================
// CONTACT PAGE
// ============================================

export function renderContact() {
  return `
    <div class="page-enter" style="padding-top: 100px;">
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Entre em Contato</p>
            <h1 class="section-title reveal">Vamos <span class="gradient-text">Conversar</span></h1>
            <p class="section-subtitle reveal">Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você.</p>
          </div>

          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="glass-card reveal" id="contact-form-card">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 24px;">Envie uma Mensagem</h3>
              <form class="contact-form" id="contact-form">
                <div class="form-group">
                  <label class="form-label" for="contact-name">Nome</label>
                  <input type="text" class="form-input" id="contact-name" name="name" placeholder="Seu nome" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-email">Email</label>
                  <input type="email" class="form-input" id="contact-email" name="email" placeholder="seu@email.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-subject">Assunto</label>
                  <input type="text" class="form-input" id="contact-subject" name="subject" placeholder="Sobre o que é?" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-message">Mensagem</label>
                  <textarea class="form-textarea" id="contact-message" name="message" placeholder="Conte sobre seu projeto..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="contact-submit" style="width: 100%; justify-content: center;">
                  Enviar Mensagem
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="contact-info">
              <div class="glass-card contact-card reveal reveal-delay-1">
                <div class="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent-purple);"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </div>
                <div>
                  <p class="contact-card-label">GitHub</p>
                  <a href="https://github.com/silasneto" target="_blank" rel="noopener" class="contact-card-value" style="color: var(--text-primary);">github.com/silasneto</a>
                </div>
              </div>

              <div class="glass-card contact-card reveal reveal-delay-2">
                <div class="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent-blue);"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <p class="contact-card-label">LinkedIn</p>
                  <a href="https://linkedin.com/in/silasneto" target="_blank" rel="noopener" class="contact-card-value" style="color: var(--text-primary);">linkedin.com/in/silasneto</a>
                </div>
              </div>

              <div class="glass-card contact-card reveal reveal-delay-3">
                <div class="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="color: #34d399;"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p class="contact-card-label">Email</p>
                  <a href="mailto:silas@example.com" class="contact-card-value" style="color: var(--text-primary);">silas@example.com</a>
                </div>
              </div>

              <div class="glass-card reveal reveal-delay-4" style="padding: 24px; text-align: center; margin-top: 8px;">
                <div class="icon-box" style="margin: 0 auto 12px; font-size: 1.5rem; width: 56px; height: 56px;">🤝</div>
                <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 8px;">Aberto para Oportunidades</h3>
                <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                  Disponível para consultoria, parcerias e oportunidades em IA, engenharia de dados e automação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initContact() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('contact-submit');
      submitBtn.innerHTML = `
        <span>Mensagem Enviada!</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
      `;
      submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      submitBtn.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)';

      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = `
          Enviar Mensagem
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        `;
        submitBtn.style.background = '';
        submitBtn.style.boxShadow = '';
      }, 3000);
    });
  }
}
