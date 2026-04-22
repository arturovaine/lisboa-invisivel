/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · sobre (about) page sections
   - li-manifesto · li-pillars-of-action · li-ethics · li-join-cta
   Requires: core.js
   ══════════════════════════════════════════════════════════════════ */

import { LiSection } from './core.js';
import manifestoCSS from '../css/sobre/manifesto.css?inline';
import pillarsCSS from '../css/sobre/pillars.css?inline';
import ethicsCSS from '../css/sobre/ethics.css?inline';
import joinCtaCSS from '../css/sobre/join-cta.css?inline';

class LiManifesto extends LiSection {
  styles() { return manifestoCSS; }
  render() { return `
    <section>
      <div class="inner">
        <div>
          <h2>A nossa missão é <em>desocultar</em> o que a cidade ignora.</h2>
          <p>Nascido da urgência de dados rigorosos sobre a exclusão social urbana, o Lisboa Invisível não é apenas uma plataforma de arquivo. É um instrumento de cidadania que utiliza a investigação académica para informar a intervenção social e a política pública.</p>
          <p>Acreditamos que o primeiro passo para a mudança é a visibilidade. Ao documentar histórias de vida e métricas de infraestrutura, construímos um mapa humano da capital que serve tanto para apoio imediato como para a transformação estrutural a longo prazo.</p>
        </div>
        <div class="card">
          <div class="eye-badge">
            <img src="./assets/icons/eye-black.svg" alt="" aria-hidden="true" width="26" height="26">
          </div>
          <h3>Origens</h3>
          <ul>
            <li>Fundado em 2021</li>
            <li>Lisboa, Portugal</li>
            <li>Rede de apoio multidisciplinar</li>
          </ul>
        </div>
      </div>
    </section>`;}
}
customElements.define('li-manifesto', LiManifesto);

class LiPillarsOfAction extends LiSection {
  styles() { return pillarsCSS; }
  render() {
    const items = [
      { svg: 'chart-bars-yellow',  title: 'Observatório', desc: 'Mapeamento em tempo real do contexto urbano e recolha de dados estatísticos rigorosos sobre a população flutuante da cidade.' },
      { svg: 'megaphone-yellow',   title: 'Mobilização',  desc: 'Campanhas de sensibilização para a pressão política baseada em factos para garantir o direito à habitação e dignidade.' },
      { svg: 'donate-yellow',      title: 'Apoio',         desc: 'Ligação direta entre quem precisa e a rede de assistência informal na Área Metropolitana de Lisboa.' },
    ];
    return `
      <section>
        <div class="inner">
          <p class="kicker">Pillars of Action</p>
          <h2>O que fazemos</h2>
          <div class="grid">
            ${items.map(i => `
              <div class="card">
                <img class="ic" src="./assets/icons/${i.svg}.svg" alt="" aria-hidden="true" width="32" height="32">
                <div class="t">${i.title}</div>
                <p class="d">${i.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>`;
  }
}
customElements.define('li-pillars-of-action', LiPillarsOfAction);

class LiEthics extends LiSection {
  styles() { return ethicsCSS; }
  render() { return `
    <section>
      <div class="inner">
        <h2>Compromisso Ético</h2>
        <p class="quote">"Tratamos cada dado como uma vida e cada história como um testemunho sagrado. A nossa metodologia garante o anonimato e a segurança total de todos os intervenientes, priorizando sempre o respeito pela autodeterminação e pela privacidade individual acima de qualquer métrica estatística."</p>
        <p class="sig">Conselho de Ética L.I.</p>
      </div>
    </section>`;}
}
customElements.define('li-ethics', LiEthics);

class LiJoinCta extends LiSection {
  styles() { return joinCtaCSS; }
  render() { return `
    <section id="participar">
      <div class="inner">
        <h2>Faça parte da rede.<br>Ajude a mapear a mudança.</h2>
        <div class="btns">
          <button class="btn-yellow">Torne-se Parceiro</button>
          <button class="btn-white">Contactar Equipa</button>
        </div>
      </div>
    </section>`;}
}
customElements.define('li-join-cta', LiJoinCta);
