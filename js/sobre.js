/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · sobre (about) page sections
   - li-manifesto · li-pillars-of-action · li-ethics · li-join-cta
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

class LiManifesto extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 6rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; align-items: start; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4vw, 3.2rem); text-transform: uppercase; line-height: 1.05; color: var(--text-dark); margin-bottom: 2rem; max-width: 20ch; }
    h2 em { font-style: normal; background: var(--yellow); padding: 0 .15em; }
    p { font-size: 1rem; line-height: 1.75; color: rgba(28,27,27,.75); margin-bottom: 1rem; max-width: 60ch; }
    .card { background: var(--purple-dark); color: #fff; padding: 2.5rem; position: relative; }
    .card::after { content: '◎'; position: absolute; top: 1.8rem; right: 1.8rem; color: var(--yellow); font-size: 1.5rem; }
    .card h3 { font-family: var(--font-display); font-weight: 800; font-size: 1rem; letter-spacing: .12em; text-transform: uppercase; color: var(--yellow); margin-bottom: 1rem; }
    .card ul { list-style: none; display: flex; flex-direction: column; gap: .6rem; font-size: .9rem; line-height: 1.5; color: rgba(255,255,255,.85); }
    .card li::before { content: '→'; color: var(--yellow); margin-right: .6rem; }
    @media (max-width: 860px) { .inner { grid-template-columns: 1fr; } }
  `;}
  render() { return `
    <section>
      <div class="inner">
        <div>
          <h2>A nossa missão é <em>desocultar</em> o que a cidade ignora.</h2>
          <p>Nascido da urgência de dados rigorosos sobre a exclusão social urbana, o Lisboa Invisível não é apenas uma plataforma de arquivo. É um instrumento de cidadania que utiliza a investigação académica para informar a intervenção social e a política pública.</p>
          <p>Acreditamos que o primeiro passo para a mudança é a visibilidade. Ao documentar histórias de vida e métricas de infraestrutura, construímos um mapa humano da capital que serve tanto para apoio imediato como para a transformação estrutural a longo prazo.</p>
        </div>
        <div class="card">
          <h3>Origens</h3>
          <ul>
            <li>Fundado em 2021</li>
            <li>Lisboa, Portugal</li>
            <li>Rede de apoio multidisciplinar</li>
          </ul>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('li-manifesto', LiManifesto);

class LiPillarsOfAction extends LiSection {
  styles() { return `
    section { background: var(--cream-dark); padding: 5rem 2rem; }
    .inner { max-width: 1200px; margin: 0 auto; }
    .kicker { font-family: var(--font-display); font-weight: 800; font-size: .75rem; letter-spacing: .2em; text-transform: uppercase; color: var(--yellow-dark); margin-bottom: 1rem; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4vw, 3rem); text-transform: uppercase; color: var(--text-dark); margin-bottom: 3rem; }
    .grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
    .card { background: #fff; border-left: 4px solid var(--yellow); padding: 2rem; }
    .ic { width: 40px; height: 40px; background: var(--yellow); color: var(--purple-dark); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-bottom: 1.2rem; }
    .t { font-family: var(--font-display); font-weight: 800; font-size: 1.2rem; color: var(--text-dark); margin-bottom: .8rem; }
    .d { font-size: .9rem; line-height: 1.65; color: rgba(28,27,27,.65); }
    @media (max-width: 760px) { .grid { grid-template-columns: 1fr; } }
  `;}
  render() {
    const items = [
      ['📊','Observatório','Mapeamento em tempo real do contexto urbano e recolha de dados estatísticos rigorosos sobre a população flutuante da cidade.'],
      ['📢','Mobilização','Campanhas de sensibilização para a pressão política baseada em factos para garantir o direito à habitação e dignidade.'],
      ['🤝','Apoio','Ligação direta entre quem precisa e a rede de assistência informal na Área Metropolitana de Lisboa.'],
    ];
    return `
      <section>
        <div class="inner">
          <p class="kicker">Pillars of Action</p>
          <h2>O que fazemos</h2>
          <div class="grid">
            ${items.map(([ic,t,d]) => `
              <div class="card"><div class="ic">${ic}</div><div class="t">${t}</div><p class="d">${d}</p></div>
            `).join('')}
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-pillars-of-action', LiPillarsOfAction);

class LiEthics extends LiSection {
  styles() { return `
    section { background: var(--cream); padding: 5rem 2rem; }
    .inner { max-width: 900px; margin: 0 auto; border-left: 4px solid var(--yellow); padding-left: 2rem; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.5rem, 3vw, 2.2rem); text-transform: uppercase; color: var(--text-dark); margin-bottom: 1.5rem; }
    .quote { font-size: 1.1rem; line-height: 1.7; color: rgba(28,27,27,.75); font-style: italic; margin-bottom: 1rem; }
    .sig { font-family: var(--font-display); font-weight: 700; font-size: .75rem; letter-spacing: .15em; text-transform: uppercase; color: var(--yellow-dark); }
  `;}
  render() { return `
    <section>
      <div class="inner">
        <h2>Compromisso Ético</h2>
        <p class="quote">"Tratamos cada dado como uma vida e cada história como um testemunho sagrado. A nossa metodologia garante o anonimato e a segurança total de todos os intervenientes, priorizando sempre o respeito pela autodeterminação e pela privacidade individual acima de qualquer métrica estatística."</p>
        <p class="sig">— Conselho de Ética L.I.</p>
      </div>
    </section>`;
  }
}
customElements.define('li-ethics', LiEthics);

class LiJoinCta extends LiSection {
  styles() { return `
    section { background: #000; color: #fff; padding: 5rem 2rem; border-top: 4px solid var(--yellow); }
    .inner { max-width: 1200px; margin: 0 auto; }
    h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4vw, 3rem); text-transform: uppercase; line-height: 1.05; margin-bottom: 2rem; }
    .btns { display: flex; gap: 1rem; flex-wrap: wrap; }
    button { font-family: var(--font-display); font-weight: 800; font-size: .85rem; letter-spacing: .1em; text-transform: uppercase; padding: 1rem 1.8rem; border: 2px solid var(--yellow); background: var(--yellow); color: var(--purple-dark); cursor: pointer; transition: all .2s; }
    button.outline { background: transparent; color: var(--yellow); }
    button:hover { background: #fff; color: var(--purple-dark); border-color: #fff; }
  `;}
  render() { return `
    <section id="participar">
      <div class="inner">
        <h2>Faça parte da rede.<br>Ajude a mapear a mudança.</h2>
        <div class="btns">
          <button>Torne-se Parceiro</button>
          <button class="outline">Contactar Equipa</button>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('li-join-cta', LiJoinCta);
