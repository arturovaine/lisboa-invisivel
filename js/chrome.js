/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · chrome
   - li-navbar · li-footer · li-newsletter · li-partners
   Page scaffolding shared by every page.
   ══════════════════════════════════════════════════════════════════ */

class LiNavbar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';
    const shadow = this.attachShadow({ mode: 'open' });
    const link = (href, label, key) =>
      `<li><a href="${href}" class="${active === key ? 'active' : ''}">${label}</a></li>`;
    shadow.innerHTML = `
      <style>
        ${baseStyles}
        :host { position: sticky; top: 0; z-index: 100; }
        nav { background: var(--purple-dark); padding: .9rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,.08); }
        .logo { display: flex; align-items: center; gap: .75rem; cursor: pointer; }
        .logo img { height: 32px; width: auto; display: block; }
        .nav-links { display: flex; gap: 2.2rem; list-style: none; }
        .nav-links a { font-family: var(--font-display); font-weight: 700; font-size: .85rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.75); transition: color .2s; position: relative; padding-bottom: .3rem; }
        .nav-links a:hover, .nav-links a.active { color: var(--yellow); }
        .nav-links a.active::after { content:''; position:absolute; left:0; right:0; bottom:-4px; height:2px; background: var(--yellow); }
        .nav-actions { display: flex; align-items: center; gap: 1rem; }
        .btn-cta { font-family: var(--font-display); font-weight: 800; font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; background: var(--yellow); color: var(--purple-dark); border: none; padding: .55rem 1.2rem; cursor: pointer; transition: background .2s; }
        .btn-cta:hover { background: var(--yellow-dark); }
        .menu-icon { color: #fff; font-size: 1.3rem; cursor: pointer; border: 1px solid rgba(255,255,255,.3); padding: .3rem .5rem; line-height: 1; }
        @media (max-width: 860px) { .nav-links { display: none; } }
      </style>
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
          <span class="menu-icon">☰</span>
        </div>
      </nav>
    `;
  }
}
customElements.define('li-navbar', LiNavbar);

class LiNewsletter extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const title = this.getAttribute('title') || 'Receba Atualizações Mensais do Observatório.';
    shadow.innerHTML = `
      <style>
        ${baseStyles}
        section { background: var(--cream); padding: 6rem 2rem; border-top: 8px solid var(--section-divider); }
        .inner { max-width: 800px; margin: 0 auto; text-align: center; }
        h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 5vw, 4rem); text-transform: uppercase; color: var(--text-dark); line-height: 1.0; letter-spacing: -.03em; margin-bottom: 2.5rem; }
        .form { display: flex; gap: 0; max-width: 560px; margin: 0 auto; border-bottom: 2px solid var(--text-dark); }
        input { flex: 1; background: none; border: none; outline: none; padding: .9rem .5rem; font-family: var(--font-body); font-size: .95rem; color: var(--text-dark); }
        input::placeholder { color: rgba(28,27,27,.35); }
        .btn-sub { font-family: var(--font-display); font-weight: 800; font-size: .85rem; letter-spacing: .1em; text-transform: uppercase; background: var(--purple-dark); color: #fff; border: none; padding: .9rem 1.8rem; cursor: pointer; transition: background .2s; white-space: nowrap; }
        .btn-sub:hover { background: var(--purple-light); }
        .legal { margin-top: 1rem; font-size: .65rem; letter-spacing: .12em; text-transform: uppercase; color: rgba(28,27,27,.4); }
      </style>
      <section>
        <div class="inner">
          <h2>${title}</h2>
          <div class="form">
            <input type="email" placeholder="O seu e-mail">
            <button class="btn-sub">Subscrever</button>
          </div>
          <p class="legal">Ao subscrever, aceita a nossa política de dados e privacidade.</p>
        </div>
      </section>
    `;
  }
}
customElements.define('li-newsletter', LiNewsletter);

class LiPartners extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
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
      <style>
        ${baseStyles}
        section { background: var(--cream); padding: 5rem 2rem; border-top: 1px solid rgba(28,27,27,.1); border-bottom: 1px solid rgba(28,27,27,.1); }
        .inner { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 2.5rem; text-align: center; }
        .label { font-family: var(--font-display); font-weight: 700; font-size: .65rem; letter-spacing: .18em; text-transform: uppercase; color: rgba(28,27,27,.4); }
        .partners { display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap; }
        .partner { display: flex; align-items: center; opacity: .55; transition: opacity .2s; cursor: pointer; }
        .partner:hover { opacity: 1; }
        .partner img { display: block; height: var(--h, 36px); width: auto; }
        .partner img.invert { filter: invert(1); }
      </style>
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
    shadow.innerHTML = `
      <style>
        ${baseStyles}
        footer { background: var(--purple-dark); padding: 4rem 2rem 2rem; border-top: 8px solid var(--section-divider); }
        .inner { max-width: 1200px; margin: 0 auto; }
        .top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,.08); }
        .brand-logo { margin-bottom: 1rem; display: block; }
        .brand-logo img { height: 40px; width: auto; display: block; }
        .brand-desc { font-size: .9rem; color: rgba(255,255,255,.5); line-height: 1.65; max-width: 34ch; }
        .col-title { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .18em; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 1.2rem; }
        .col-links { display: flex; flex-direction: column; gap: .65rem; list-style: none; }
        .col-links a { font-size: .9rem; color: rgba(255,255,255,.6); transition: color .2s; }
        .col-links a:hover { color: var(--yellow); }
        .bottom { padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .copyright, .tagline { font-family: var(--font-display); font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; }
        .copyright { color: rgba(255,255,255,.3); }
        .tagline { font-weight: 700; color: rgba(255,255,255,.25); }
        @media (max-width: 760px) { .top { grid-template-columns: 1fr; } }
      </style>
      <footer>
        <div class="inner">
          <div class="top">
            <div>
              <div class="brand-logo" aria-label="Lisboa Invisível">${LOGO_SVG}</div>
              <p class="brand-desc">Um projeto de dados aberto para dar dignidade e visibilidade a quem vive à margem da capital portuguesa.</p>
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
