/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · home page sections
   - li-stories-preview · li-myths · li-categories
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

import { LiSection, IMG } from './core.js';
import storiesPreviewCSS from '../css/home/stories-preview.css?inline';
import mythsCSS from '../css/home/myths.css?inline';
import categoriesCSS from '../css/home/categories.css?inline';

class LiStoriesPreview extends LiSection {
  styles() { return storiesPreviewCSS; }
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
  styles() { return mythsCSS; }
  render() {
    const myths = [
      ['Mito da Toxicodependência', 'Apenas 22% das pessoas sem-abrigo têm problemas de dependência. A maioria enfrenta problemas económicos, familiares e de saúde mental sem qualquer relação com substâncias.'],
      ['Mito da Nacionalidade', '68% das pessoas registadas em situação de sem-abrigo em Lisboa são de nacionalidade portuguesa, contrariando a narrativa migratória dominante.'],
    ];
    return `
      <section>
        <div class="inner">
          <div class="myth">
            <div class="badge">Falso</div>
            <p class="lbl">O Mito</p>
            <p class="mt">"Quem está na rua está lá<br>porque quer ou porque não<br>quer trabalhar."</p>
            <div class="fact">
              <p class="lbl fl">O Facto</p>
              <p class="ft">Mais de 80% das situações decorrem de desemprego inesperado, traumas familiares ou problemas graves de saúde mental sem rede de apoio.</p>
              <div class="fn">82%</div>
            </div>
          </div>
          <div class="right">
            <h2>Desconstruir o preconceito.</h2>
            <p>A desinformação é a barreira mais alta que as pessoas em situação de sem-abrigo enfrentam todos os dias.</p>
            <div class="acc">
              ${myths.map(([t,d]) => `
                <div class="item"><div class="h">${t}<img class="ic" src="./assets/icons/chevron-right-cream.svg" alt="" aria-hidden="true" width="8" height="12"></div><div class="b">${d}</div></div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-myths', LiMyths);

class LiCategories extends LiSection {
  styles() { return categoriesCSS; }
  render() {
    const cats = [
      { svg: 'female-black',        label: 'Mulheres' },
      { svg: 'globe-purple',        label: 'Migração' },
      { svg: 'head-gear-black',     label: 'Saúde Mental' },
      { svg: 'house-black',         label: 'Habitação' },
      { svg: 'luggage-black',       label: 'Emprego' },
      { svg: 'luggage-plus-black',  label: 'Apoio Social' },
      { svg: 'feather-paper-black', label: 'Formação' },
      { svg: 'chart-bars-yellow',   label: 'Todos os Dados', dark: true },
    ];
    return `
      <section>
        <div class="inner">
          <h2>Explorar Categorias de Dados</h2>
          <div class="grid">
            ${cats.map(c => `
              <a class="cat ${c.active ? 'active' : ''} ${c.dark ? 'dark' : ''}" href="dados.html">
                <img class="ic" src="./assets/icons/${c.svg}.svg" alt="" aria-hidden="true" width="24" height="24">
                <span class="l">${c.label}</span>
              </a>
            `).join('')}
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-categories', LiCategories);
