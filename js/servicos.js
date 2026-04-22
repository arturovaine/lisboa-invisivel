/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · serviços (services) page sections
   - li-services-list (with embedded Leaflet map)
   Requires: core.js, Leaflet (loaded globally in servicos.html)
   ══════════════════════════════════════════════════════════════════ */

import { LiSection } from './core.js';
import servicesListCSS from '../css/servicos/services-list.css?inline';

class LiServicesList extends LiSection {
  styles() { return servicesListCSS; }

  get services() {
    return [
      { name:'Balneário Público de Alcântara', tag:'Higiene', addr:'Rua Estêvão Encostada, 5 Lisboa', d:'Serviços de duche quente, lavandaria e apoio social básico. Acesso gratuito para pessoas em situação de sem-abrigo.', h:'Seg-Sex 08:00-18:00', phone:'+351 213 615 800', dark:false, lat:38.7067, lng:-9.1785 },
      { name:'Cozinha Comunitária de Marvila', tag:'Alimentação', addr:'R. Comarca de Marvila, 2000 Lisboa', d:'Fornecimento diário de refeições quentes e cabazes de emergência. Requer triagem prévia no local.', h:'Ter-Dom 12:00-14:00 / 19:00-21:00', phone:'+351 218 596 700', dark:true, lat:38.7464, lng:-9.1014 },
    ];
  }

  render() {
    const services = this.services;
    return `
      <section>
        <div class="inner">
          <div class="col-list">
            <div class="svc-head">Listagem de Resultados</div>
            ${services.map(s => `
              <article class="svc ${s.dark?'purple':''}">
                <div>
                  <span class="tag">${s.tag}</span>
                  <h3>${s.name}</h3>
                  <p class="addr">${s.addr}</p>
                  <p class="d">${s.d}</p>
                  <div class="meta"><span>⏱ ${s.h}</span><span>📞 ${s.phone}</span></div>
                </div>
                <button class="cta">Traçar Rota →</button>
              </article>
            `).join('')}
          </div>
          <div class="side">
            <div class="emerg">
              <div class="emerg-head">
                <div class="emerg-title"><span>Contactos de</span><span>Emergência</span></div>
                <span class="emerg-ast">✳</span>
              </div>
              <div class="emerg-primary">
                <a class="erow" href="tel:112"><div class="ecol"><span class="ename">Emergência Nacional</span><span class="etel">112</span></div><span class="earrow">→</span></a>
                <a class="erow" href="tel:144"><div class="ecol"><span class="ename">Emergência Social</span><span class="etel">144</span></div><span class="earrow">→</span></a>
              </div>
              <div class="emerg-sec">
                <a class="srow" href="tel:800207700"><span class="sname">Unidade Sem-Abrigo</span><span class="stel">800 207 700</span></a>
                <a class="srow" href="tel:218711000"><span class="sname">Proteção Civil</span><span class="stel">218 711 000</span></a>
              </div>
            </div>
            <div class="map">
              <div class="map-box loading" id="li-leaflet"></div>
              <button>⛶ Expandir Mapa</button>
            </div>
            <div class="ver">ℹ <strong>Verificação de dados</strong> — Confira sempre a disponibilidade direta com o serviço antes de deslocar-se ao local.</div>
          </div>
        </div>
      </section>`;
  }

  afterRender(shadow) {
    const box = shadow.getElementById('li-leaflet');
    if (!box) return;
    const services = this.services;
    const init = () => {
      if (typeof L === 'undefined') { setTimeout(init, 80); return; }
      box.classList.remove('loading');
      const map = L.map(box, { scrollWheelZoom: false }).setView([38.7223, -9.1393], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);
      const icon = L.divIcon({
        className: 'li-pin',
        html: '<div style="width:26px;height:26px;background:#F4C542;border:3px solid #24103A;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.35)"></div>',
        iconSize: [26,26], iconAnchor: [13,26]
      });
      const markers = services.map(s => L.marker([s.lat, s.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${s.tag}</strong>${s.name}<br/><em>${s.addr}</em>`));
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds(), { padding: [30, 30], maxZoom: 13 });
      setTimeout(() => map.invalidateSize(), 150);
    };
    init();
  }
}
customElements.define('li-services-list', LiServicesList);
