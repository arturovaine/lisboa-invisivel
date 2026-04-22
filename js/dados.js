/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · dados (data) page sections
   - li-data-cards · li-intersection · li-data-export
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

import { LiSection } from './core.js';
import dadosHeroCSS from '../css/dados/dados-hero.css?inline';
import dadosFilterCSS from '../css/dados/dados-filter.css?inline';
import bentoGridCSS from '../css/dados/bento-grid.css?inline';
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

class LiDadosFilter extends LiSection {
  styles() { return dadosFilterCSS; }

  get filters() {
    return [
      { id: 'filter-perfil',     label: 'PERFIL',     options: ['TODOS', 'Sem-Abrigo', 'Migrante', 'Mulheres'],      span: 2 },
      { id: 'filter-tema',       label: 'TEMA',       options: ['HABITAÇÃO', 'Saúde Mental', 'Alimentação', 'Emprego'], span: 2 },
      { id: 'filter-territorio', label: 'TERRITÓRIO', options: ['LISBOA (TOTAL)', 'Arroios', 'Alcântara', 'Marvila'],  span: 2 },
      { id: 'filter-causa',      label: 'CAUSA',      options: ['DESEMPREGO', 'Violência', 'Migração'],                span: 1 },
    ];
  }

  searchField() {
    return `
      <div class="search-field">
        <label class="field-label" for="dados-search">PESQUISAR INDICADORES</label>
        <div class="search-wrap">
          <input id="dados-search" type="text" placeholder="Ex: Alojamento, Arroios, Saúde…" aria-label="Pesquisar indicadores">
          <button class="search-btn" type="button" aria-label="Pesquisar">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14L10.4 10.4M11.3333 6.66667C11.3333 9.24399 9.24399 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.24399 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.24399 2 11.3333 4.08934 11.3333 6.66667Z" stroke="#4A454D" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>`;
  }

  dropdownField({ id, label, options, span }) {
    return `
      <div class="filter-field" style="grid-column: span ${span}">
        <label class="field-label" for="${id}">${label}</label>
        <select id="${id}">
          ${options.map(o => `<option>${o}</option>`).join('')}
        </select>
      </div>`;
  }

  render() {
    return `
      <section>
        <div class="inner">
          ${this.searchField()}
          ${this.filters.map(f => this.dropdownField(f)).join('')}
        </div>
      </section>`;
  }
}
customElements.define('li-dados-filter', LiDadosFilter);

class LiBentoGrid extends LiSection {
  styles() { return bentoGridCSS; }

  bars(n, accentLast = true) {
    return Array.from({length: n}).map((_, i) =>
      `<div class="bar ${accentLast && i === n - 1 ? 'accent' : ''}" style="height:${30 + Math.random() * 70}%"></div>`
    ).join('');
  }

  render() {
    return `
      <section>
        <div class="inner">
          <div class="grid">

            <!-- Card 1 · Large Highlight — 2 cols -->
            <div class="card card-large">
              <div class="img-placeholder"></div>
              <div class="body">
                <span class="tag">Habitação Emergencial</span>
              </div>
            </div>

            <!-- Card 2 · Chart Small — Saúde Mental -->
            <div class="card card-chart">
              <span class="tag">Saúde Mental</span>
              <div class="stat">68%</div>
              <p class="desc">Indivíduos que reportam sintomas severos de isolamento e depressão.</p>
              <div class="bars">${this.bars(8)}</div>
              <span class="source">Sondagem 2024</span>
            </div>

            <!-- Card 3 · Comparison — Refeições Servidas -->
            <div class="card card-comparison">
              <span class="tag">Refeições Servidas</span>
              <div class="cmp-row">
                <span class="cmp-label">Inverno 23</span>
                <span class="cmp-value">45.000</span>
                <div class="cmp-bar" style="width:73%"></div>
              </div>
              <div class="cmp-row">
                <span class="cmp-label">Inverno 24</span>
                <span class="cmp-value">62.000</span>
                <div class="cmp-bar accent" style="width:100%"></div>
              </div>
              <p class="desc">Aumento da pressão sobre as cantinas sociais e pontos de distribuição móvel.</p>
            </div>

            <!-- Card 4 · Migration Profile -->
            <div class="card card-migration">
              <span class="tag">Migração</span>
              <div class="stat">42%</div>
              <p class="desc">Dos novos registos são de cidadãos em situação de migração irregular ou precária.</p>
              <span class="source">DADOS DSE 2024</span>
            </div>

            <!-- Card 5 · Geographic Focus — 2 cols -->
            <div class="card card-geo">
              <div class="text-col">
                <span class="territory">Território: Arroios</span>
                <h3>A freguesia com a maior concentração de pedidos de apoio.</h3>
                <p class="body">O mapeamento geográfico revela que o centro histórico continua a ser o epicentro da invisibilidade social.</p>
              </div>
              <img class="map-img" src="./assets/map-arroios.svg" alt="Mapa da freguesia de Arroios, Lisboa — concentração de pedidos de apoio" width="192" height="192" loading="lazy" decoding="async">
            </div>

            <!-- Card 6 · Women Highlight -->
            <div class="card card-women">
              <span class="tag">Foco · Mulheres</span>
              <div class="stat">1/4</div>
              <p class="desc">Das pessoas em situação de rua são mulheres, muitas com filhos a cargo.</p>
              <a class="cta-link" href="#">Ver Relatório Completo</a>
            </div>

          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-bento-grid', LiBentoGrid);

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
      { svg: 'female-white',      title: 'Mulheres & Género', desc: 'Intersecções entre desigualdade de género e vulnerabilidade urbana.',        cta: '32 Indicadores' },
      { svg: 'globe-search-white', title: 'Migração & Visto',  desc: 'Barreiras burocráticas e documentação na integração social.',                cta: '18 Indicadores' },
      { svg: 'head-gear-white',   title: 'Saúde Mental',      desc: 'Trauma, dependência e rede pública de saúde mental em Lisboa.',              cta: '24 Indicadores' },
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
                <p class="link">${i.cta}</p>
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
          <h2>Descarregue os Dados<br>Brutos</h2>
          <p class="sub">Para investigadores, jornalistas e decisores políticos.<br>Promovemos a transparência total sobre a realidade social<br>de Lisboa.</p>
        </div>
        <button class="btn dark"><img src="./assets/icons/download-white.svg" alt="" aria-hidden="true"><span>Relatório Anual<br>PDF</span></button>
        <button class="btn light"><img src="./assets/icons/database-black.svg" alt="" aria-hidden="true"><span>Exportar<br>CSV / JSON</span></button>
      </div>
    </section>`;}
}
customElements.define('li-data-export', LiDataExport);
