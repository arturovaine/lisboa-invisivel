/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · dados (data) page sections
   - li-data-cards · li-intersection · li-data-export
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

class LiDataCards extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 2rem 2rem 5rem; }
    .inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 1.2rem; }
    .card { background: #fff; padding: 1.8rem; border-top: 3px solid var(--yellow); min-height: 220px; display: flex; flex-direction: column; }
    .card.purple { background: var(--purple-dark); color: #fff; border-top-color: var(--purple-light); }
    .card.yellow { background: var(--yellow); color: var(--purple-dark); border-top-color: var(--yellow-dark); }
    .card.sand { background: #D4BE7A; color: var(--purple-dark); border-top-color: #B89A50; }
    .lbl { font-family: var(--font-display); font-weight: 700; font-size: .62rem; letter-spacing: .18em; text-transform: uppercase; opacity: .65; margin-bottom: .8rem; }
    .num { font-family: var(--font-display); font-weight: 900; font-size: 3.2rem; line-height: .95; letter-spacing: -.03em; margin-bottom: .6rem; }
    .t { font-family: var(--font-display); font-weight: 800; font-size: 1rem; margin-bottom: .4rem; }
    .d { font-size: .82rem; line-height: 1.55; opacity: .75; flex: 1; }
    .chart { height: 80px; margin-top: .8rem; background: linear-gradient(to top, rgba(36,16,58,.15), transparent); display: flex; align-items: flex-end; gap: 4px; padding: 0 .3rem; }
    .bar { flex: 1; background: var(--purple-dark); opacity: .7; }
    .card.purple .bar { background: var(--yellow); }
    .more { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; margin-top: .8rem; }
    @media (max-width: 960px) { .inner { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 560px) { .inner { grid-template-columns: 1fr; } }
  `;}
  render() {
    const bars = (n) => Array.from({length:n}).map(() => `<div class="bar" style="height:${30+Math.random()*70}%"></div>`).join('');
    return `
      <section>
        <div class="inner">
          <div class="card">
            <p class="lbl">Habitação Emergencial</p>
            <div class="t">Ex-Alojamento, Acesso, Saúde</div>
            <div class="num">74<small style="font-size:1.5rem">%</small></div>
            <p class="d">Das habitações emergenciais encontram-se em situação crítica de lotação.</p>
          </div>
          <div class="card purple">
            <p class="lbl">Saúde Mental</p>
            <div class="num">68<small style="font-size:1.5rem">%</small></div>
            <p class="d">Apresentam pelo menos uma condição de saúde mental não tratada.</p>
            <div class="chart">${bars(8)}</div>
          </div>
          <div class="card yellow">
            <p class="lbl">Refeições Servidas</p>
            <div class="num">15K+</div>
            <p class="d">Refeições diárias distribuídas pela rede de apoio urbano.</p>
          </div>
          <div class="card sand">
            <p class="lbl">Foco · Mulheres</p>
            <div class="num">1/4</div>
            <p class="d">Das pessoas em situação de rua são mulheres com filhos a cargo.</p>
          </div>
          <div class="card">
            <p class="lbl">Migração</p>
            <div class="num">42%</div>
            <p class="d">A freguesia com maior concentração de pedidos de apoio.</p>
            <div class="chart">${bars(10)}</div>
          </div>
          <div class="card yellow">
            <p class="lbl">Relatório Anual</p>
            <div class="num">2023</div>
            <p class="d">Síntese integrada de 12 meses de observação e ação na rede.</p>
            <p class="more">Relatório Completo →</p>
          </div>
          <div class="card">
            <p class="lbl">Apoio Social</p>
            <div class="num">3K+</div>
            <p class="d">Pedidos de alojamento emergencial registados em 2023.</p>
          </div>
          <div class="card purple">
            <p class="lbl">Emprego</p>
            <div class="num">28%</div>
            <p class="d">Conseguiram reintegração laboral através da rede.</p>
            <div class="chart">${bars(6)}</div>
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-data-cards', LiDataCards);

class LiIntersection extends LiSection {
  styles() { return `
    section { background: var(--purple-dark); color: #fff; padding: 5rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; }
    .head { display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: end; margin-bottom: 3rem; }
    .kicker { font-family: var(--font-display); font-weight: 800; font-size: .75rem; letter-spacing: .2em; text-transform: uppercase; color: var(--yellow); margin-bottom: 1rem; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4vw, 3rem); text-transform: uppercase; line-height: 1.05; }
    .sub { color: rgba(255,255,255,.65); font-size: .95rem; line-height: 1.6; }
    .grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; }
    .card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); padding: 1.8rem; transition: all .2s; cursor: pointer; }
    .card:hover { border-color: var(--yellow); background: rgba(244,197,66,.06); }
    .ic { width: 32px; height: 32px; display: block; margin-bottom: 1rem; opacity: .85; }
    .t { font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; margin-bottom: .6rem; }
    .d { font-size: .85rem; line-height: 1.55; color: rgba(255,255,255,.6); margin-bottom: .8rem; }
    .link { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; color: var(--yellow); }
    @media (max-width: 860px) { .head, .grid { grid-template-columns: 1fr; } }
  `;}
  render() {
    const items = [
      { svg: 'female-white',      title: 'Mulheres & Género', desc: 'Intersecções entre desigualdade de género e vulnerabilidade urbana.',         cta: '32 Indicadores' },
      { svg: 'globe-search-white', title: 'Migração & Visto',  desc: 'Barreiras burocráticas e documentação na integração social.',                  cta: '18 Indicadores' },
      { svg: 'head-gear-white',   title: 'Saúde Mental',      desc: 'Trauma, dependência e rede pública de saúde mental em Lisboa.',                cta: '24 Indicadores' },
    ];
    return `
      <section>
        <div class="inner">
          <div class="head">
            <div>
              <p class="kicker">Agrupamentos Temáticos</p>
              <h2>Explore por Intersecção</h2>
            </div>
            <p class="sub">Navegue pelas dimensões da exclusão social através de filtros cruzados e análises de impacto.</p>
          </div>
          <div class="grid">
            ${items.map(i => `
              <div class="card">
                <img class="ic" src="./assets/icons/${i.svg}.svg" alt="" aria-hidden="true" width="32" height="32">
                <div class="t">${i.title}</div>
                <p class="d">${i.desc}</p>
                <p class="link">${i.cta} →</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-intersection', LiIntersection);

class LiDataExport extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 5rem 2rem; border-top: 1px solid rgba(28,27,27,.1); }
    .inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 1.5rem; align-items: center; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.5rem, 3vw, 2.2rem); text-transform: uppercase; color: var(--text-dark); line-height: 1.1; margin-bottom: .8rem; }
    .sub { font-size: .9rem; color: rgba(28,27,27,.65); max-width: 44ch; line-height: 1.6; }
    .btn { display: flex; align-items: center; gap: .75rem; justify-content: center; padding: 1.5rem; font-family: var(--font-display); font-weight: 800; font-size: .85rem; letter-spacing: .1em; text-transform: uppercase; cursor: pointer; transition: all .2s; border: 2px solid; }
    .btn img { width: 18px; height: 18px; display: block; flex-shrink: 0; }
    .btn.dark { background: var(--purple-dark); color: #fff; border-color: var(--purple-dark); }
    .btn.dark:hover { background: #fff; color: var(--purple-dark); }
    .btn.light { background: #fff; color: var(--purple-dark); border-color: var(--purple-dark); }
    .btn.light:hover { background: var(--yellow); border-color: var(--yellow); }
    @media (max-width: 860px) { .inner { grid-template-columns: 1fr; } }
  `;}
  render() { return `
    <section>
      <div class="inner">
        <div>
          <h2>Descarregue os Dados Brutos</h2>
          <p class="sub">Para investigadores, jornalistas e decisores políticos. Promovemos a transparência total sobre a realidade social de Lisboa.</p>
        </div>
        <button class="btn dark"><img src="./assets/icons/download-white.svg" alt="" aria-hidden="true"> Relatório Anual PDF</button>
        <button class="btn light"><img src="./assets/icons/database-black.svg" alt="" aria-hidden="true"> Exportar CSV / JSON</button>
      </div>
    </section>`;
  }
}
customElements.define('li-data-export', LiDataExport);
