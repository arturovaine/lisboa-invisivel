/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · chrome
   - li-navbar · li-footer · li-newsletter · li-partners
   Page scaffolding shared by every page.
   ══════════════════════════════════════════════════════════════════ */

import { baseStyles, LOGO_SVG } from './core.js';
import navbarCSS from '../css/chrome/navbar.css?inline';
import newsletterCSS from '../css/chrome/newsletter.css?inline';
import partnersCSS from '../css/chrome/partners.css?inline';
import footerCSS from '../css/chrome/footer.css?inline';

class LiNavbar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';
    const shadow = this.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(baseStyles + navbarCSS);
    shadow.adoptedStyleSheets = [sheet];
    const link = (href, label, key) =>
      `<li><a href="${href}" class="${active === key ? 'active' : ''}">${label}</a></li>`;
    shadow.innerHTML = `
      <nav>
        <a class="logo" href="index.html" aria-label="Lisboa Invisível — Início">
          ${LOGO_SVG}
        </a>
        <ul class="nav-links">
          ${link('sobre.html', 'Sobre', 'sobre')}
          ${link('dados.html', 'Dados', 'dados')}
          ${link('historias.html', 'Histórias', 'historias')}
          ${link('#', 'Blog', 'blog')}
          ${link('sobre.html#participar', 'Participar', 'participar')}
        </ul>
        <div class="nav-actions">
          <a href="servicos.html"><button class="btn-cta">Encontrar Serviços</button></a>
          <span class="menu-icon">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="18" height="2" fill="white"/>
              <rect y="5" width="18" height="2" fill="white"/>
              <rect y="10" width="18" height="2" fill="white"/>
            </svg>
          </span>
        </div>
      </nav>
    `;
  }
}
customElements.define('li-navbar', LiNavbar);

class LiNewsletter extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(baseStyles + newsletterCSS);
    shadow.adoptedStyleSheets = [sheet];
    const title = this.getAttribute('title') || 'Receba Atualizações Mensais do Observatório.';
    const desc  = this.getAttribute('desc')  || '';
    shadow.innerHTML = `
      <section>
        <div class="inner">
          <div class="left">
            <h2>${title}</h2>
            ${desc ? `<p class="desc">${desc}</p>` : ''}
          </div>
          <div class="right">
            <div class="form">
              <input type="email" placeholder="O seu e-mail">
              <button class="btn-sub">Subscrever</button>
            </div>
            <p class="legal">Ao subscrever, aceita a nossa política de privacidade e o compromisso ético de Lisboa Invisível.</p>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('li-newsletter', LiNewsletter);

class LiPartners extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(baseStyles + partnersCSS);
    shadow.adoptedStyleSheets = [sheet];
    const partners = [
      { name: 'CRIA',                    src: './assets/logos/logotipo-cria.svg',                    h: 60, url: 'https://cria.org.pt/pt' },
      { name: 'FCT',                     src: './assets/logos/logotipo-fct-black.svg',               h: 56, url: 'https://www.fct.pt/' },
      { name: 'ISCTE-IUL',               src: './assets/logos/logotipo_ISCTE-white.svg',             h: 48, invert: true, url: 'https://www.iscte-iul.pt/' },
      { name: 'Câmara Municipal Lisboa', src: './assets/logos/logotipo_camara-municipal-lisboa.png', h: 64, url: 'https://www.cm-lisboa.pt/pt' },
    ];
    const items = partners.map(p => `
      <a class="partner" href="${p.url}" target="_blank" rel="noopener" style="--h:${p.h}px">
        <img src="${p.src}" alt="${p.name}"${p.invert ? ' class="invert"' : ''}>
      </a>
    `).join('');
    shadow.innerHTML = `
      <section>
        <div class="inner">
          <span class="label">Apoio Institucional &amp; Científico</span>
          <div class="partners">${items}</div>
        </div>
      </section>
    `;
  }
}
customElements.define('li-partners', LiPartners);

class LiFooter extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(baseStyles + footerCSS);
    shadow.adoptedStyleSheets = [sheet];
    shadow.innerHTML = `
      <footer>
        <div class="inner">
          <div class="top">
            <div>
              <div class="brand-logo" aria-label="Lisboa Invisível">${LOGO_SVG}</div>
              <p class="brand-desc">Um observatório social independente que utiliza o design e o jornalismo de dados para combater a marginalização estrutural.</p>
            </div>
            <div>
              <p class="col-title">Navegação</p>
              <ul class="col-links">
                <li><a href="index.html">Início</a></li>
                <li><a href="sobre.html">Sobre</a></li>
                <li><a href="dados.html">Dados</a></li>
                <li><a href="historias.html">Histórias</a></li>
                <li><a href="servicos.html">Serviços</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <p class="col-title">Legal &amp; Apoio</p>
              <ul class="col-links">
                <li><a href="#" style="display:flex;align-items:center;gap:.4rem"><img src="./assets/icons/envelope-yellow.svg" alt="" aria-hidden="true" width="14" height="11" style="opacity:.6">Newsletter</a></li>
                <li><a href="#">Acessibilidade</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="sobre.html#participar">Participar</a></li>
              </ul>
            </div>
          </div>
          <div class="bottom">
            <span class="copyright">© ${new Date().getFullYear()} Lisboa Invisível · O Testemunho Brutalista.</span>
            <span class="tagline">Dados abertos · Acesso livre</span>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('li-footer', LiFooter);
