/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · histórias (stories) page sections
   - li-stories-filter · li-stories-grid
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

import { LiSection, IMG } from './core.js';
import { storiesFilterCSS } from '../css/historias/filter.js';
import { storiesGridCSS } from '../css/historias/grid.js';

class LiStoriesFilter extends LiSection {
  styles() { return storiesFilterCSS; }
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
  styles() { return storiesGridCSS; }
  render() {
    const small = [
      { pos: 'p1', name: 'António, 54',  loc: 'Arroios, LX',    cat: 'Documentação', img: IMG.antonio, quote: '"O meu nome existe, mas os papéis dizem o contrário. Sem o número na folha, não sou cidadão, sou apenas uma sombra que atravessa a Praça d…"' },
      { pos: 'p3', name: 'Ricardo, 41',   loc: 'Marvila',         cat: 'Emprego',      img: IMG.ricardo, quote: '"Trabalho 12 horas, mas a minha conta bancária não me deixa alugar um quarto. O paradoxo de ser um trabalhador pobre numa cidade que só cresce…"' },
      { pos: 'p5', name: 'Inês, 29',      loc: 'Chelas',          cat: 'Habitação',    img: IMG.ines, quote: 'Mãe de dois, Inês luta para manter o teto sobre a cabeça enquanto os despejos avançam no seu bairro. Uma história de resistência comunitária.' },
      { pos: 'p6', name: 'Inês, 29',       loc: 'Chelas',          cat: 'Habitação',    img: IMG.ines, quote: 'Mãe de dois, Inês luta para manter o teto sobre a cabeça enquanto os despejos avançam no seu bairro. Uma história de resistência comunitária.' },
    ];
    const feature = { name: 'Maria do Carmo', loc: '', cat: 'Saúde Mental', img: IMG.tentFlag, quote: 'A solidão não é a falta de pessoas, é a falta de visibilidade. Maria partilha como a invisibilidade social acelera o declínio da saúde mental em idosos isolados no centro histórico.' };

    const altFor = (s) => `Retrato de ${s.name}, ${s.loc} — testemunho sobre ${s.cat.toLowerCase()}`;

    const smallCard = (s) => `
      <article class="card-small ${s.pos}">
        <div class="photo-wrap">
          <img class="photo" src="${s.img}" alt="${altFor(s)}" loading="lazy" decoding="async">
        </div>
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
            <div class="photo-wrap">
              <img class="photo" src="${feature.img}" alt="${altFor(feature)}" loading="lazy" decoding="async">
            </div>
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
            <div class="stat-col">
              <div class="n">60%</div>
              <p class="stat-sub">Taxa de Desemprego de Longa<br>Duração nos Inquiridos</p>
            </div>
            <div class="body">
              <div class="t">O Contexto Estrutural</div>
              <p class="d">"Não é apenas azar. É um sistema de barreiras administrativas e preconceitos que impedem a reintegração."</p>
              <a class="link" href="dados.html">Explorar Observatório de Dados →</a>
            </div>
          </article>

          ${small.slice(1).map(smallCard).join('')}
        </div>
      </section>`;
  }
}
customElements.define('li-stories-grid', LiStoriesGrid);
