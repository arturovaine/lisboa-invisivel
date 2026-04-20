/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · histórias (stories) page sections
   - li-stories-filter · li-stories-grid
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

class LiStoriesFilter extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 0 2rem; }
    .bar { max-width: 1216px; margin: 0 auto; background: var(--section-divider); padding: 2rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .tags { display: flex; gap: .5rem; flex-wrap: wrap; }
    .tag { font-family: var(--font-ui); font-weight: 700; font-size: 12px; line-height: 16px; text-align: center; text-transform: uppercase; padding: 9px 16px; background: transparent; color: var(--text-light); border: none; cursor: pointer; transition: background .15s, color .15s; }
    .tag:hover { background: rgba(244,197,66,.15); }
    .tag.active { background: var(--yellow); color: var(--purple-dark); }
    .count { font-family: var(--font-ui); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: rgba(250,248,242,.55); }
  `;}
  render() {
    const tags = ['Todos','Habitação','Saúde Mental','Emprego','Migração','Apoio Social','Mulheres'];
    return `
      <section>
        <div class="bar">
          <div class="tags">
            ${tags.map((t,i) => `<button class="tag ${i===0?'active':''}">${t}</button>`).join('')}
          </div>
          <span class="count">06 histórias</span>
        </div>
      </section>`;
  }
  afterRender(shadow) {
    shadow.querySelectorAll('.tag').forEach(el => {
      el.addEventListener('click', () => {
        shadow.querySelectorAll('.tag').forEach(x => x.classList.remove('active'));
        el.classList.add('active');
      });
    });
  }
}
customElements.define('li-stories-filter', LiStoriesFilter);


class LiStoriesGrid extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 4rem 2rem; }
    .grid { max-width: 1216px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 48px; row-gap: 48px; }

    /* ── Small card (positions 1, 3, 5, 6) ───────────────────────── */
    .card-small { display: flex; flex-direction: column; gap: 16px; background: transparent; }
    .card-small .photo { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: #ddd; }
    .card-small .cat { align-self: flex-start; font-family: var(--font-ui); font-weight: 700; font-size: 12px; line-height: 16px; letter-spacing: .08em; text-transform: uppercase; color: var(--label-category); border: 1px solid var(--label-category); padding: 4px 8px; background: transparent; }
    .card-small .info-row { display: flex; justify-content: space-between; align-items: baseline; padding-top: 8px; }
    .card-small h3 { font-family: var(--font-display); font-weight: 800; font-size: 36px; line-height: 40px; color: var(--text-dark); }
    .card-small .loc { font-family: var(--font-ui); font-weight: 400; font-size: 12px; line-height: 16px; color: var(--text-mid); }
    .card-small .desc { font-family: var(--font-body); font-weight: 400; font-size: 16px; line-height: 1.625; color: var(--text-mid); padding-bottom: 8px; }
    .card-small .cta { font-family: var(--font-ui); font-weight: 700; font-size: 14px; line-height: 20px; letter-spacing: .04em; text-transform: uppercase; color: var(--text-dark); border-bottom: 2px solid var(--yellow); padding-bottom: 2px; align-self: flex-start; }

    /* ── Feature card (position 2, bento, spans 2 cols) ──────────── */
    .card-feature { grid-column: 2 / span 2; grid-row: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; background: var(--card-bg); padding: 32px; }
    .card-feature .photo { display: block; width: 100%; height: 100%; min-height: 400px; object-fit: cover; }
    .card-feature .content { display: flex; flex-direction: column; gap: 16px; }
    .card-feature .cat { align-self: flex-start; font-family: var(--font-ui); font-weight: 700; font-size: 12px; line-height: 16px; letter-spacing: .08em; text-transform: uppercase; color: var(--label-category); border: 1px solid var(--label-category); padding: 4px 8px; }
    .card-feature .info-row { display: flex; justify-content: space-between; align-items: baseline; padding-top: 8px; padding-bottom: 24px; }
    .card-feature h3 { font-family: var(--font-display); font-weight: 800; font-size: 48px; line-height: 52px; color: var(--text-dark); }
    .card-feature .loc { font-family: var(--font-ui); font-weight: 400; font-size: 12px; line-height: 16px; color: var(--text-mid); }
    .card-feature .desc { font-family: var(--font-body); font-weight: 400; font-size: 18px; line-height: 1.65; color: var(--text-mid); flex: 1; }
    .card-feature .cta { font-family: var(--font-ui); font-weight: 700; font-size: 14px; line-height: 20px; letter-spacing: .04em; text-transform: uppercase; color: var(--text-dark); border-bottom: 2px solid var(--yellow); padding-bottom: 2px; align-self: flex-start; }

    /* ── Structural card (position 4, full width) ────────────────── */
    .card-structural { grid-column: 1 / span 3; grid-row: 2; background: var(--purple-dark); color: var(--text-light); padding: 2.5rem 3rem; min-height: 216px; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 2.5rem; border-left: 4px solid var(--yellow); }
    .card-structural .n { font-family: var(--font-display); font-weight: 900; font-size: clamp(3.5rem, 7vw, 5.5rem); line-height: 1; color: var(--yellow); }
    .card-structural .t { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.2rem, 2vw, 1.6rem); text-transform: uppercase; line-height: 1.1; margin-bottom: .6rem; }
    .card-structural .d { font-family: var(--font-body); font-size: .95rem; line-height: 1.55; color: rgba(250,248,242,.75); max-width: 58ch; }
    .card-structural .link { font-family: var(--font-ui); font-weight: 700; font-size: 14px; letter-spacing: .08em; text-transform: uppercase; color: var(--yellow); border-bottom: 2px solid var(--yellow); padding-bottom: 2px; white-space: nowrap; }

    /* Grid positioning: cards 1/3/5/6 occupy col 1 row 1, col 1/2/3 row 3 */
    .card-small.p1 { grid-column: 1; grid-row: 1; }
    .card-small.p3 { grid-column: 1; grid-row: 3; }
    .card-small.p5 { grid-column: 2; grid-row: 3; }
    .card-small.p6 { grid-column: 3; grid-row: 3; }

    @media (max-width: 960px) {
      .grid { grid-template-columns: 1fr; }
      .card-feature, .card-structural, .card-small.p1, .card-small.p3, .card-small.p5, .card-small.p6 { grid-column: 1; grid-row: auto; }
      .card-feature { grid-template-columns: 1fr; }
      .card-structural { grid-template-columns: 1fr; text-align: left; }
    }
  `;}
  render() {
    const small = [
      { pos: 'p1', name: 'António, 54',  loc: 'Anjos, LX',      cat: 'Saúde Mental', img: IMG.antonio, quote: 'Sete anos numa praça — e ninguém me parava. Com licença ou sem, ninguém me via até me atravessarem à frente.' },
      { pos: 'p3', name: 'Ricardo, 41',   loc: 'Marvila, LX',    cat: 'Emprego',      img: IMG.mattress, quote: 'Trabalhei 22 horas por dia sobre uma estrutura precária. O corpo não aguenta, a cabeça também não.' },
      { pos: 'p5', name: 'Inês, 29',      loc: 'Arroios, LX',    cat: 'Habitação',    img: IMG.tentFlag, quote: 'Mãe de dois. A renda subiu, o ordenado não. O centro histórico fechou-nos as portas.' },
      { pos: 'p6', name: 'João, 38',      loc: 'Martim Moniz, LX', cat: 'Migração',   img: IMG.praca, quote: 'Os papéis ficaram na última morada. Desde aí, a cidade diz que não existo — e cada esquina confirma.' },
    ];
    const feature = { name: 'Maria do Carmo', loc: 'Chelas, LX', cat: 'Habitação', img: IMG.vizinhanca, quote: 'Às vezes esquecemo-nos que uma vida cabe numa mala. A Maria partilha connosco o dia em que a sua vida se tornou portátil.' };

    const altFor = (s) => `Retrato de ${s.name}, ${s.loc} — testemunho sobre ${s.cat.toLowerCase()}`;

    const smallCard = (s) => `
      <article class="card-small ${s.pos}">
        <img class="photo" src="${s.img}" alt="${altFor(s)}" loading="lazy" decoding="async">
        <span class="cat">${s.cat}</span>
        <div class="info-row">
          <h3>${s.name}</h3>
          <span class="loc">${s.loc}</span>
        </div>
        <p class="desc">${s.quote}</p>
        <a class="cta" href="#">Ler história →</a>
      </article>`;

    return `
      <section>
        <div class="grid">
          ${smallCard(small[0])}

          <article class="card-feature">
            <img class="photo" src="${feature.img}" alt="${altFor(feature)}" loading="lazy" decoding="async">
            <div class="content">
              <span class="cat">${feature.cat}</span>
              <div class="info-row">
                <h3>${feature.name}</h3>
                <span class="loc">${feature.loc}</span>
              </div>
              <p class="desc">${feature.quote}</p>
              <a class="cta" href="#">Ler história →</a>
            </div>
          </article>

          <article class="card-structural">
            <div class="n">60%</div>
            <div>
              <div class="t">O Contexto Estrutural</div>
              <p class="d">Não é apenas um problema de urgência. É um sistema de desvantagem social acumulada pelas instituições responsáveis pela integração e pela justiça pública.</p>
            </div>
            <a class="link" href="dados.html">Explorar Dados →</a>
          </article>

          ${small.slice(1).map(smallCard).join('')}
        </div>
      </section>`;
  }
}
customElements.define('li-stories-grid', LiStoriesGrid);
