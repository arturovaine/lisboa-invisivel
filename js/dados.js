/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · dados (data) page sections
   - li-data-cards · li-intersection · li-data-export
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

import { LiSection } from './core.js';
import dadosHeroCSS from '../css/dados/dados-hero.css?inline';
import dataCardsCSS from '../css/dados/data-cards.css?inline';
import intersectionCSS from '../css/dados/intersection.css?inline';
import dataExportCSS from '../css/dados/data-export.css?inline';

class LiDadosHero extends LiSection {
  styles() { return dadosHeroCSS; }
  render() {
    return `
      <section>
        <div class="content">
          <span class="kicker">Observatório Social</span>
          <h1>DADOS QUE <mark>REVELAM</mark> O<br>INVISÍVEL.</h1>
        </div>
      </section>`;
  }
}
customElements.define('li-dados-hero', LiDadosHero);

class LiDataCards extends LiSection {
  styles() { return dataCardsCSS; }
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
  styles() { return intersectionCSS; }
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
  styles() { return dataExportCSS; }
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
    </section>`;}
}
customElements.define('li-data-export', LiDataExport);
