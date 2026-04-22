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
        <aside class="stat-card bracket-card" aria-label="Estatística de destaque">
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
        ${tall ? '<div class="blur-lens"></div>' : ''}
        <div class="content">
          ${kicker ? `<span class="kicker">${kicker}</span>` : ''}
          <h1>${title}</h1>
          ${sub ? `<p class="sub">${sub}</p>` : ''}
          ${actions ? `<div class="actions">${actions}</div>` : ''}
        </div>
      </section>
    `;
  }

  afterRender(shadow) {
    const hero = shadow.querySelector('.hero.tall');
    const lens = shadow.querySelector('.blur-lens');
    if (!hero || !lens) return;

    const R = 140;
    let raf;

    const moveLens = (mouseX, mouseY) => {
      const W = hero.offsetWidth * 3;
      const H = hero.offsetHeight * 3;
      const cx = W / 2;
      const cy = H / 2;
      const path = `M 0 0 L ${W} 0 L ${W} ${H} L 0 ${H} Z ` +
                   `M ${cx - R} ${cy} a ${R} ${R} 0 1 0 ${R * 2} 0 a ${R} ${R} 0 1 0 -${R * 2} 0 Z`;
      lens.style.clipPath = `path('${path}')`;
      lens.style.transform = `translate(${mouseX - W / 2}px, ${mouseY - H / 2}px)`;
    };

    moveLens(hero.offsetWidth / 2, hero.offsetHeight / 2);

    hero.addEventListener('mousemove', e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        moveLens(e.clientX - rect.left, e.clientY - rect.top);
      });
    });

    hero.addEventListener('mouseleave', () => {
      cancelAnimationFrame(raf);
      moveLens(hero.offsetWidth / 2, hero.offsetHeight / 2);
    });
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
          <div class="footer"><span class="meta">Fonte: Rede Social LX | 2023</span></div>
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
          <h2>Um observatório social<br>digital para<br>consciencializar,<br>desmistificar e mobilizar.</h2>
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
        <div class="text">
          <h2>Precisa de Ajuda ou Quer Ajudar Alguém?</h2>
          <p class="desc">Mapa interativo de serviços de emergência, alimentação e apoio em Lisboa.</p>
        </div>
        <div class="actions">
          <a href="servicos.html"><button class="btn-map"><img src="./assets/icons/ver-mapa.svg" alt="" aria-hidden="true" width="20" height="20"> Ver Mapa</button></a>
          <a href="tel:112"><button class="btn-emerg"><img src="./assets/icons/emergencia.svg" alt="" aria-hidden="true" width="20" height="20"> Emergência</button></a>
        </div>
      </div>
    </section>`;}
}
customElements.define('li-services-cta', LiServicesCta);

class LiDataFilter extends LiSection {
  styles() { return dataFilterCSS; }
  render() {
    const chips = ['Alimentação', 'Higiene', 'Saúde', 'Abrigo'];
    return `
      <section>
        <div class="inner">
          <div class="search">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14L10.4 10.4M11.3333 6.66667C11.3333 9.24399 9.24399 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.24399 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.24399 2 11.3333 4.08934 11.3333 6.66667Z" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round"/></svg>
            <input type="text" placeholder="Procurar por nome ou localização..."/>
          </div>
          <button class="btn-filter">
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.08333 7V5.83333H6.41667V7H4.08333ZM1.75 4.08333V2.91667H8.75V4.08333H1.75ZM0 1.16667V0H10.5V1.16667H0Z" fill="white"/></svg>
            FILTRAR
          </button>
          <div class="chips">
            ${chips.map(c => `<button class="chip">${c}</button>`).join('')}
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
