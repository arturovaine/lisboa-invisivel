/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · home page sections
   - li-stories-preview · li-myths · li-categories
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

class LiStoriesPreview extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 6rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; }
    .head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4vw, 3.5rem); text-transform: uppercase; line-height: 1.05; color: var(--text-dark); }
    h2 em { font-style: normal; background: var(--yellow); padding: 0 .15em; }
    .see-all { font-family: var(--font-display); font-weight: 700; font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; color: var(--text-dark); white-space: nowrap; border-bottom: 2px solid var(--yellow); padding-bottom: .3rem; }
    .grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
    .card { display: flex; flex-direction: column; background: #fff; overflow: hidden; transition: transform .25s; }
    .card:hover { transform: translateY(-4px); }
    .img { height: 280px; background-size: cover; background-position: center top; position: relative; }
    .tag { position: absolute; bottom: 1rem; left: 1rem; font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; background: var(--yellow); color: var(--purple-dark); padding: .3rem .7rem; }
    .body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; gap: .6rem; }
    h3 { font-family: var(--font-display); font-weight: 800; font-size: 1.3rem; color: var(--text-dark); }
    .q { font-size: .9rem; line-height: 1.6; color: rgba(28,27,27,.65); flex: 1; }
    .read { font-family: var(--font-display); font-weight: 700; font-size: .75rem; letter-spacing: .1em; text-transform: uppercase; color: var(--text-dark); margin-top: .5rem; border-bottom: 2px solid var(--yellow); align-self: flex-start; padding-bottom: .2rem; }
    @media (max-width: 860px) { .grid { grid-template-columns: 1fr; } }
  `;}
  render() {
    const stories = [
      { name: 'António, 58 anos', tag: 'Saúde Mental', quote: '"A rua não é um lugar, é um estado de espera constante por algo que não chega."', img: IMG.antonio },
      { name: 'Elena, 32 anos',   tag: 'Imigração',   quote: '"Atravessar o oceano foi fácil comparado com atravessar a indiferença de quem passa por mim."', img: IMG.tentFlag },
      { name: 'João, 45 anos',    tag: 'Habitação',   quote: '"O trabalho acabou, o teto foi-se a seguir. É um efeito dominó que não para."', img: IMG.manSteps },
    ];
    return `
      <section>
        <div class="inner">
          <div class="head">
            <h2>Antes dos números,<br>vieram as <em>histórias.</em></h2>
            <a class="see-all" href="historias.html">Ver todos os testemunhos →</a>
          </div>
          <div class="grid">
            ${stories.map(s => `
              <article class="card">
                <div class="img" style="background-image:url('${s.img}')"><span class="tag">${s.tag}</span></div>
                <div class="body">
                  <h3>${s.name}</h3>
                  <p class="q">${s.quote}</p>
                  <a class="read" href="historias.html">Ler história →</a>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-stories-preview', LiStoriesPreview);

class LiMyths extends LiSection {
  styles() { return `
    section { background: var(--purple-dark); padding: 6rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .myth { background: var(--cream); color: var(--text-dark); padding: 2.5rem; }
    .badge { display: inline-block; background: var(--yellow); color: var(--purple-dark); font-family: var(--font-display); font-weight: 900; font-size: .85rem; letter-spacing: .12em; text-transform: uppercase; padding: .35rem .9rem; margin-bottom: 1.5rem; }
    .lbl { font-family: var(--font-display); font-weight: 700; font-size: .65rem; letter-spacing: .18em; text-transform: uppercase; color: rgba(28,27,27,.45); margin-bottom: .5rem; }
    .mt { font-family: var(--font-display); font-weight: 700; font-size: 1.35rem; line-height: 1.4; color: var(--text-dark); margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(28,27,27,.12); }
    .fl { text-align: right; }
    .ft { font-size: .95rem; line-height: 1.65; color: rgba(28,27,27,.7); margin-bottom: .5rem; }
    .fn { font-family: var(--font-display); font-weight: 900; font-size: 3rem; color: var(--text-dark); text-align: right; }
    .right h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2.5rem, 4vw, 3.5rem); text-transform: uppercase; color: #fff; line-height: 1.0; margin-bottom: 1rem; }
    .right p { color: rgba(255,255,255,.6); font-size: 1rem; line-height: 1.65; margin-bottom: 2rem; }
    .acc { display: flex; flex-direction: column; }
    .item { border-top: 1px solid rgba(255,255,255,.12); cursor: pointer; }
    .item:last-child { border-bottom: 1px solid rgba(255,255,255,.12); }
    .h { display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 0; font-family: var(--font-display); font-weight: 700; font-size: .85rem; letter-spacing: .1em; text-transform: uppercase; color: #fff; }
    .ic { color: var(--yellow); font-size: 1.1rem; transition: transform .25s; }
    .item.open .ic { transform: rotate(90deg); }
    .b { max-height: 0; overflow: hidden; transition: max-height .35s, padding .35s; color: rgba(255,255,255,.6); font-size: .9rem; line-height: 1.65; }
    .item.open .b { max-height: 260px; padding-bottom: 1rem; }
    @media (max-width: 860px) { .inner { grid-template-columns: 1fr; } }
  `;}
  render() {
    const myths = [
      ['Mito da Toxicodependência', 'Apenas 22% das pessoas sem-abrigo têm problemas de dependência. A maioria enfrenta problemas económicos, familiares e de saúde mental sem qualquer relação com substâncias.'],
      ['Mito da Nacionalidade', '68% das pessoas registadas em situação de sem-abrigo em Lisboa são de nacionalidade portuguesa, contrariando a narrativa migratória dominante.'],
      ['Mito da Escolha', 'Estudos mostram que a esmagadora maioria prefere ter habitação e estabilidade, mas enfrenta barreiras sistémicas que impedem esse acesso.'],
    ];
    return `
      <section>
        <div class="inner">
          <div class="myth">
            <div class="badge">Falso</div>
            <p class="lbl">O Mito</p>
            <p class="mt">"Quem está na rua está lá porque quer ou porque não quer trabalhar."</p>
            <p class="lbl fl">O Facto</p>
            <p class="ft">Mais de 80% das situações decorrem de desemprego inesperado, traumas familiares ou problemas graves de saúde mental sem rede de apoio.</p>
            <div class="fn">82%</div>
          </div>
          <div class="right">
            <h2>Desconstruir o preconceito.</h2>
            <p>A desinformação é a barreira mais alta que as pessoas em situação de sem-abrigo enfrentam todos os dias.</p>
            <div class="acc">
              ${myths.map(([t,d]) => `
                <div class="item"><div class="h">${t}<span class="ic">›</span></div><div class="b">${d}</div></div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>`;
  }
  afterRender(shadow) {
    shadow.querySelectorAll('.item').forEach(item => {
      item.addEventListener('click', () => {
        const open = item.classList.contains('open');
        shadow.querySelectorAll('.item').forEach(i => i.classList.remove('open'));
        if (!open) item.classList.add('open');
      });
    });
  }
}
customElements.define('li-myths', LiMyths);

class LiCategories extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 5rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.5rem, 3vw, 2.2rem); text-transform: uppercase; letter-spacing: .05em; color: var(--text-dark); margin-bottom: 2rem; }
    .grid { display: grid; grid-template-columns: repeat(4,1fr); border: 1px solid rgba(28,27,27,.12); }
    .cat { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .7rem; padding: 2rem 1rem; border-right: 1px solid rgba(28,27,27,.12); border-bottom: 1px solid rgba(28,27,27,.12); cursor: pointer; transition: background .2s; background: #fff; }
    .cat:hover { background: rgba(244,197,66,.12); }
    .cat.active { background: var(--yellow); }
    .cat.dark { background: var(--purple-dark); }
    .cat:nth-child(4n) { border-right: none; }
    .cat:nth-last-child(-n+4) { border-bottom: none; }
    .ic { font-size: 1.5rem; color: var(--text-dark); opacity: .5; }
    .cat.active .ic { color: var(--purple-dark); opacity: 1; }
    .cat.dark .ic { color: var(--yellow); opacity: 1; }
    .l { font-family: var(--font-display); font-weight: 700; font-size: .75rem; letter-spacing: .1em; text-transform: uppercase; color: var(--text-dark); text-align: center; }
    .cat.dark .l { color: var(--yellow); }
    @media (max-width: 760px) { .grid { grid-template-columns: repeat(2,1fr); } .cat { border-right: 1px solid rgba(28,27,27,.12) !important; } .cat:nth-child(2n) { border-right: none !important; } }
  `;}
  render() {
    const cats = [
      ['♀','Mulheres'],['✈','Migração',true],['⚕','Saúde Mental'],['⌂','Habitação'],
      ['☑','Emprego'],['✚','Apoio Social'],['📋','Formação'],['↑↑','Todos os Dados',false,true],
    ];
    return `
      <section>
        <div class="inner">
          <h2>Explorar Categorias de Dados</h2>
          <div class="grid">
            ${cats.map(([ic,l,active,dark]) => `
              <a class="cat ${active?'active':''} ${dark?'dark':''}" href="dados.html">
                <span class="ic">${ic}</span><span class="l">${l}</span>
              </a>
            `).join('')}
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-categories', LiCategories);
