/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · sections-common
   Reusable sections used by 2+ pages:
   - li-page-hero · li-stats · li-mission · li-services-cta · li-data-filter
   Requires: core.js (LiSection)
   ══════════════════════════════════════════════════════════════════ */

import { LiSection, IMG } from './core.js';
import pageHeroCSS from '../css/sections/page-hero.css?inline';
import statsCSS from '../css/sections/stats.css?inline';
import missionCSS from '../css/sections/mission.css?inline';
import servicesCtaCSS from '../css/sections/services-cta.css?inline';
import dataFilterCSS from '../css/sections/data-filter.css?inline';

class LiPageHero extends LiSection {
  styles() { return pageHeroCSS; }
  render() {
    const variant = this.getAttribute('variant') || '';
    const bg = this.getAttribute('bg') || IMG.heroStreet;
    const kicker = this.getAttribute('kicker') || '';
    const tall = this.hasAttribute('tall') ? 'tall' : '';
    const title = this.innerHTML || 'Tornar <mark>visível</mark> o que a cidade insiste em não ver.';
    const sub = this.getAttribute('sub') || '';
    const actions = this.getAttribute('actions') || '';

    if (variant === 'white') {
      return `
        <section class="hero white">
          <div class="content">
            ${kicker ? `<span class="kicker">${kicker}</span>` : ''}
            <h1>${title}</h1>
            ${sub ? `<p class="sub">${sub}</p>` : ''}
          </div>
        </section>
      `;
    }
    if (variant === 'light') {
      const statNum   = this.getAttribute('stat-num') || '';
      const statLabel = this.getAttribute('stat-label') || '';
      const statDesc  = this.getAttribute('stat-desc') || '';
      const statCard  = statNum ? `
        <aside class="stat-card" aria-label="Estatística de destaque">
          <div class="stat-num">${statNum}</div>
          <div class="stat-label">${statLabel}</div>
          <p class="stat-desc">${statDesc}</p>
        </aside>` : '';
      return `
        <section class="hero light">
          <div class="content">
            <div class="inner">
              ${kicker ? `<span class="kicker">${kicker}</span>` : ''}
              <h1>${title}</h1>
              ${sub ? `<p class="sub">${sub}</p>` : ''}
              ${actions ? `<div class="actions">${actions}</div>` : ''}
            </div>
            ${statCard}
          </div>
        </section>
      `;
    }
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
  styles() { return statsCSS; }
  render() { return `
    <section>
      <div class="grid">
        <div class="card dark">
          <p class="label">Impacto Real</p>
          <div class="num">3.000+</div>
          <p class="desc">Pessoas em situação de sem-abrigo registadas em Lisboa.</p>
          <div class="footer">
            <span class="meta">Fonte: NPISA Lisboa · Atualizado em Jan 2024</span>
            <button class="share"><img src="./assets/icons/share-yellow.svg" alt="" aria-hidden="true"> Partilhar este Dado</button>
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
  styles() { return missionCSS; }
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
  styles() { return servicesCtaCSS; }
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
    </section>`;}
}
customElements.define('li-services-cta', LiServicesCta);

class LiDataFilter extends LiSection {
  styles() { return dataFilterCSS; }
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
