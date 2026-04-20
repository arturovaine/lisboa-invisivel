/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · sections-common
   Reusable sections used by 2+ pages:
   - li-page-hero · li-stats · li-mission · li-services-cta · li-data-filter
   Requires: core.js (LiSection)
   ══════════════════════════════════════════════════════════════════ */

class LiPageHero extends LiSection {
  styles() { return `
    .hero { position: relative; min-height: 62vh; display: flex; align-items: center; overflow: hidden; background: var(--purple-dark); }
    .hero.tall { min-height: 92vh; }
    .bg { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: .35; filter: grayscale(.3) contrast(1.1); }
    .overlay { position: absolute; inset: 0; background: linear-gradient(110deg, rgba(22,12,48,.97) 0%, rgba(22,12,48,.82) 45%, rgba(22,12,48,.4) 100%); }
    .content { position: relative; z-index: 2; padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; width: 100%; }
    .kicker { font-family: var(--font-display); font-weight: 800; font-size: .75rem; letter-spacing: .18em; text-transform: uppercase; color: var(--yellow); margin-bottom: 1.2rem; display: inline-block; }
    h1 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.5rem, 7vw, 6rem); line-height: .95; color: #fff; letter-spacing: -.03em; max-width: 16ch; animation: in .9s cubic-bezier(.16,1,.3,1) both; }
    h1 mark { background: var(--yellow); color: var(--purple-dark); padding: 0 .12em; display: inline; }
    h1 .accent { color: var(--yellow); }
    .sub { margin-top: 1.5rem; font-size: 1.05rem; color: rgba(255,255,255,.72); max-width: 54ch; line-height: 1.6; animation: in .9s .15s cubic-bezier(.16,1,.3,1) both; }
    .actions { margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap; animation: in .9s .28s cubic-bezier(.16,1,.3,1) both; }
    .btn-primary, .btn-outline, .btn-text { font-family: var(--font-display); font-weight: 800; font-size: .85rem; letter-spacing: .1em; text-transform: uppercase; padding: 1rem 1.8rem; cursor: pointer; transition: all .2s; border: 2px solid transparent; }
    .btn-primary { background: var(--yellow); color: var(--purple-dark); }
    .btn-primary:hover { background: #d4a52d; transform: translateY(-1px); }
    .btn-outline { background: transparent; color: #fff; border-color: rgba(255,255,255,.7); }
    .btn-outline:hover { border-color: #fff; transform: translateY(-1px); }
    .btn-text { background: none; border: none; color: rgba(255,255,255,.7); text-decoration: underline; text-underline-offset: 4px; padding: 1rem 0; }
    .btn-text:hover { color: #fff; }
    @keyframes in { from { opacity:0; transform: translateY(40px);} to {opacity:1; transform:translateY(0);} }
  `;}
  render() {
    const bg = this.getAttribute('bg') || IMG.heroStreet;
    const kicker = this.getAttribute('kicker') || '';
    const tall = this.hasAttribute('tall') ? 'tall' : '';
    const title = this.innerHTML || 'Tornar <mark>visível</mark> o que a cidade insiste em não ver.';
    const sub = this.getAttribute('sub') || '';
    const actions = this.getAttribute('actions') || '';
    return `
      <section class="hero ${tall}">
        <div class="bg" style="background-image:url('${bg}')"></div>
        <div class="overlay"></div>
        <div class="content">
          ${kicker ? `<span class="kicker">${kicker}</span>` : ''}
          <h1>${title}</h1>
          ${sub ? `<p class="sub">${sub}</p>` : ''}
          ${actions ? `<div class="actions">${actions}</div>` : ''}
        </div>
      </section>
    `;
  }
}
customElements.define('li-page-hero', LiPageHero);

class LiStats extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 5rem 2rem; }
    .grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; }
    .card { padding: 3rem; position: relative; overflow: hidden; }
    .card.dark { background: var(--purple-dark); color: #fff; }
    .card.yellow { background: var(--yellow); color: var(--purple-dark); }
    .label { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .18em; text-transform: uppercase; opacity: .65; margin-bottom: 1.2rem; }
    .num { font-family: var(--font-display); font-weight: 900; font-size: clamp(4rem, 9vw, 7rem); line-height: .9; letter-spacing: -.04em; }
    .desc { margin-top: 1rem; font-size: 1rem; line-height: 1.55; max-width: 36ch; opacity: .85; }
    .footer { margin-top: 2.5rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,.15); display: flex; justify-content: space-between; align-items: center; }
    .yellow .footer { border-color: rgba(0,0,0,.15); }
    .meta { font-size: .65rem; letter-spacing: .1em; text-transform: uppercase; opacity: .6; font-family: var(--font-display); }
    .share { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; background: none; border: none; color: var(--yellow); display: flex; align-items: center; gap: .4rem; }
    .yellow .share { color: var(--purple-dark); }
    @media (max-width: 760px) { .grid { grid-template-columns: 1fr; } }
  `;}
  render() { return `
    <section>
      <div class="grid">
        <div class="card dark">
          <p class="label">Impacto Real</p>
          <div class="num">3.000+</div>
          <p class="desc">Pessoas em situação de sem-abrigo registadas em Lisboa.</p>
          <div class="footer">
            <span class="meta">Fonte: NPISA Lisboa · Atualizado em Jan 2024</span>
            <button class="share">⟨ Partilhar este Dado</button>
          </div>
        </div>
        <div class="card yellow">
          <p class="label">Resposta Solidária</p>
          <div class="num">15.000+</div>
          <p class="desc">Refeições diárias servidas pela rede de apoio.</p>
          <div class="meta" style="margin-top:2rem;">Fonte: Rede Social LX · 2023</div>
        </div>
      </div>
    </section>
  `;}
}
customElements.define('li-stats', LiStats);

class LiMission extends LiSection {
  styles() { return `
    section { background: var(--cream-dark); padding: 6rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.05; text-transform: uppercase; color: var(--text-dark); max-width: 22ch; margin-bottom: 4rem; }
    .pillars { display: grid; grid-template-columns: repeat(3,1fr); border-top: 2px solid rgba(26,16,48,.15); }
    .pillar { padding: 2.5rem 2rem 2.5rem 0; border-right: 1px solid rgba(26,16,48,.1); }
    .pillar:last-child { border-right: none; padding-right: 0; }
    .pillar:not(:first-child) { padding-left: 2rem; }
    .num { font-family: var(--font-display); font-weight: 900; font-size: 2.5rem; color: var(--yellow); line-height: 1; margin-bottom: .8rem; }
    .t { font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; letter-spacing: .08em; text-transform: uppercase; color: var(--text-dark); margin-bottom: .8rem; }
    .d { font-size: .95rem; line-height: 1.65; color: rgba(26,16,48,.65); }
    @media (max-width: 760px) { .pillars { grid-template-columns: 1fr; } .pillar { border-right: none; border-bottom: 1px solid rgba(26,16,48,.1); padding: 1.5rem 0 !important; } }
  `;}
  render() {
    const pillars = [
      ['01', 'Compreender', 'Analise os dados brutos transformados em informação visual clara e acionável.'],
      ['02', 'Desmistificar', 'Combata o preconceito com factos verificados e narrativas humanizadas.'],
      ['03', 'Mobilizar', 'Encontre formas concretas de ajudar ou receber apoio através da nossa rede.'],
    ];
    return `
      <section>
        <div class="inner">
          <h2>Um observatório social digital para consciencializar, desmistificar e mobilizar.</h2>
          <div class="pillars">
            ${pillars.map(([n,t,d]) => `
              <div class="pillar"><div class="num">${n}</div><div class="t">${t}</div><p class="d">${d}</p></div>
            `).join('')}
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-mission', LiMission);

class LiServicesCta extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 3rem 2rem 5rem; }
    .card { max-width: 1200px; margin: 0 auto; background: var(--yellow); padding: 3.5rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.8rem, 3.5vw, 2.8rem); text-transform: uppercase; line-height: 1.05; color: var(--purple-dark); }
    .desc { font-size: .95rem; color: rgba(22,12,48,.7); margin-top: .5rem; max-width: 38ch; }
    .actions { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-map, .btn-emerg { display: flex; align-items: center; gap: .5rem; font-family: var(--font-display); font-weight: 800; font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; padding: .9rem 1.5rem; cursor: pointer; transition: all .2s; border: 2px solid var(--purple-dark); }
    .btn-map { background: var(--purple-dark); color: #fff; }
    .btn-map:hover { background: var(--purple-light); border-color: var(--purple-light); }
    .btn-emerg { background: transparent; color: var(--purple-dark); }
    .btn-emerg:hover { background: var(--purple-dark); color: #fff; }
  `;}
  render() { return `
    <section>
      <div class="card">
        <div>
          <h2>Precisa de Ajuda<br>ou Quer Ajudar Alguém?</h2>
          <p class="desc">Mapa interativo de serviços de emergência, alimentação e apoio em Lisboa.</p>
        </div>
        <div class="actions">
          <a href="servicos.html"><button class="btn-map">⊞ Ver Mapa</button></a>
          <a href="tel:112"><button class="btn-emerg">☎ Emergência</button></a>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('li-services-cta', LiServicesCta);

class LiDataFilter extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 2rem 2rem 1rem; }
    .inner { max-width: 1200px; margin: 0 auto; }
    .search { display: flex; align-items: center; gap: .75rem; background: #fff; border: 1px solid rgba(26,16,48,.12); padding: .9rem 1.2rem; margin-bottom: 1.5rem; }
    .search input { flex: 1; border: none; outline: none; font-family: var(--font-body); font-size: .95rem; color: var(--text-dark); background: none; }
    .search input::placeholder { color: rgba(26,16,48,.4); }
    .chips { display: flex; gap: .6rem; flex-wrap: wrap; }
    .chip { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; padding: .5rem 1rem; border: 1px solid rgba(26,16,48,.2); background: #fff; color: var(--text-dark); cursor: pointer; transition: all .2s; }
    .chip:hover { background: rgba(232,184,67,.1); }
    .chip.active { background: var(--purple-dark); color: #fff; border-color: var(--purple-dark); }
    .chip.yellow.active { background: var(--yellow); color: var(--purple-dark); border-color: var(--yellow); }
  `;}
  render() {
    const chips = ['Todos', 'Habitação', 'Saúde Mental', 'Refeições', 'Emprego', 'Apoio Social', 'Mulheres', 'Migração'];
    return `
      <section>
        <div class="inner">
          <div class="search">
            <span>🔍</span>
            <input type="text" placeholder="Ex: Alojamento, Almoço, Saúde..."/>
            <button class="chip active yellow">⏷ Filtrar</button>
          </div>
          <div class="chips">
            ${chips.map((c,i) => `<button class="chip ${i===0?'active':''}">${c}</button>`).join('')}
          </div>
        </div>
      </section>`;
  }
  afterRender(shadow) {
    shadow.querySelectorAll('.chips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        shadow.querySelectorAll('.chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  }
}
customElements.define('li-data-filter', LiDataFilter);
