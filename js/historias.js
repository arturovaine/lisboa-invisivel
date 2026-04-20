/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · histórias (stories) page sections
   - li-stories-grid · li-context-stat
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

class LiStoriesGrid extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 4rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; }
    .featured { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 3rem; }
    .featured .hero-card { position: relative; height: 480px; overflow: hidden; background-size: cover; background-position: center; }
    .featured .hero-card .overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(22,12,48,.9), rgba(22,12,48,.2) 60%, transparent); }
    .featured .hero-card .content { position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem; color: #fff; }
    .tag { display: inline-block; background: var(--yellow); color: var(--purple-dark); font-family: var(--font-display); font-weight: 700; font-size: .65rem; letter-spacing: .12em; text-transform: uppercase; padding: .3rem .7rem; margin-bottom: .8rem; }
    .hero-card h3 { font-family: var(--font-display); font-weight: 900; font-size: 2.4rem; line-height: 1; margin-bottom: .6rem; }
    .hero-card .q { font-size: .9rem; color: rgba(255,255,255,.8); margin-bottom: 1rem; max-width: 35ch; line-height: 1.55; }
    .hero-card .read { font-family: var(--font-display); font-weight: 700; font-size: .75rem; letter-spacing: .1em; text-transform: uppercase; color: var(--yellow); border-bottom: 2px solid var(--yellow); padding-bottom: .2rem; }
    .grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
    .card { background: #fff; overflow: hidden; transition: transform .25s; }
    .card:hover { transform: translateY(-4px); }
    .img { height: 260px; background-size: cover; background-position: center; position: relative; }
    .img .tag { position: absolute; bottom: 1rem; left: 1rem; margin: 0; }
    .body { padding: 1.5rem; }
    .body h3 { font-family: var(--font-display); font-weight: 800; font-size: 1.25rem; color: var(--text-dark); margin-bottom: .5rem; }
    .body .q { font-size: .85rem; line-height: 1.55; color: rgba(26,16,48,.6); margin-bottom: 1rem; }
    .body .read { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; color: var(--text-dark); border-bottom: 2px solid var(--yellow); padding-bottom: .2rem; }
    @media (max-width: 860px) { .featured, .grid { grid-template-columns: 1fr; } .featured .hero-card { height: 360px; } }
  `;}
  render() {
    const featured = [
      { name: 'Maria do Carmo', tag: 'Habitação', img: IMG.vizinhanca, quote: 'Às vezes as pessoas esquecem que uma vida cabe numa mala. A Maria partilha connosco o dia em que a sua vida se tornou portátil.' },
      { name: 'António, 54', tag: 'Saúde Mental', img: IMG.antonio, quote: 'Sete anos numa praça — e ninguém me parava. Com licença. Sem licença: ninguém me via até me atravessarem à frente da Praça.' },
    ];
    const cards = [
      { name: 'Ricardo', tag: 'Emprego', img: IMG.mattress, quote: 'Trabalhei 22 horas por dia sobre uma estrutura precária. O corpo não aguenta, a cabeça também não.' },
      { name: 'Inês, 29', tag: 'Habitação', img: IMG.tentFlag, quote: 'Mãe de dois. A renda subiu, o ordenado não. O centro histórico fechou-nos as portas.' },
      { name: 'João, 38', tag: 'Migração', img: IMG.praca, quote: 'Os papéis ficaram na última morada. Desde aí, a cidade diz que não existo — e cada esquina confirma.' },
    ];
    return `
      <section>
        <div class="inner">
          <div class="featured">
            ${featured.map(f => `
              <article class="hero-card" style="background-image:url('${f.img}')">
                <div class="overlay"></div>
                <div class="content">
                  <span class="tag">${f.tag}</span>
                  <h3>${f.name}</h3>
                  <p class="q">${f.quote}</p>
                  <a class="read" href="#">Ler história →</a>
                </div>
              </article>
            `).join('')}
          </div>
          <div class="grid">
            ${cards.map(c => `
              <article class="card">
                <div class="img" style="background-image:url('${c.img}')"><span class="tag">${c.tag}</span></div>
                <div class="body">
                  <h3>${c.name}</h3>
                  <p class="q">${c.quote}</p>
                  <a class="read" href="#">Ler história →</a>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-stories-grid', LiStoriesGrid);

class LiContextStat extends LiSection {
  styles() { return `
    section { background: var(--purple-dark); color: #fff; padding: 4rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; align-items: center; border-left: 4px solid var(--yellow); padding-left: 2rem; }
    .n { font-family: var(--font-display); font-weight: 900; font-size: clamp(4rem, 8vw, 6.5rem); line-height: .9; color: var(--yellow); }
    .t { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.6rem, 3vw, 2.2rem); text-transform: uppercase; line-height: 1.1; margin-bottom: 1rem; }
    .d { font-size: .95rem; line-height: 1.65; color: rgba(255,255,255,.7); max-width: 64ch; margin-bottom: 1rem; }
    .link { font-family: var(--font-display); font-weight: 700; font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; color: var(--yellow); border-bottom: 2px solid var(--yellow); padding-bottom: .2rem; display: inline-block; }
    @media (max-width: 860px) { .inner { grid-template-columns: 1fr; } }
  `;}
  render() { return `
    <section>
      <div class="inner">
        <div class="n">60%</div>
        <div>
          <div class="t">O Contexto Estrutural</div>
          <p class="d">"Não é apenas um problema de urgência. É um sistema de desvantagem social acumulada pelas diferentes instituições responsáveis pela integração social e pela justiça pública."</p>
          <a class="link" href="dados.html">Explorar Dados de Longo Prazo →</a>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('li-context-stat', LiContextStat);
