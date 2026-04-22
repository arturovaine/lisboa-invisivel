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
      { name:'Balneário Público de Alcântara', tag:'Higiene', addr:'Rua Cozinha Económica, 1300-149 Lisboa', d:'Serviços de duche quente, lavandaria e apoio social básico. Acesso gratuito para pessoas em situação de sem-abrigo.', h:'08:00 — 19:00 (Seg a Sex)', phone:'+351 213 621 450', dark:false, lat:38.7067, lng:-9.1785 },
      { name:'Cozinha Comunitária de Marvila', tag:'Alimentação', addr:'Estrada de Marvila, 1900-321 Lisboa', d:'Fornecimento diário de refeições quentes e cabazes de emergência. Requer triagem prévia no local.', h:'12:00 — 14:30 / 19:00 — 21:00', phone:'+351 218 310 100', dark:false, lat:38.7464, lng:-9.1014 },
    ];
  }

  render() {
    const services = this.services;
    return `
      <section>
        <div class="inner">
          <div class="col-list">
            <div class="svc-head">
              <span>Listagem de Resultados</span>
              <div class="svc-head-filters">
                <button class="view-filter active" data-view="list">LISTA</button>
                <button class="view-filter" data-view="map">MAPA</button>
              </div>
            </div>
            <div class="list-content">
              ${services.map(s => `
                <article class="svc ${s.dark?'purple':''}">
                  <div>
                    <h3>${s.name}</h3>
                    <p class="addr"><svg class="pin" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0C2.239 0 0 2.239 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.761-2.239-5-5-5zm0 6.75A1.75 1.75 0 1 1 5 3.25a1.75 1.75 0 0 1 0 3.5z" fill="rgba(28,27,27,.5)"/></svg>${s.addr}</p>
                    <p class="d">${s.d}</p>
                    <div class="meta">
                      <div class="meta-item"><span class="meta-label">HORÁRIO</span><span class="meta-val">${s.h}</span></div>
                      <div class="meta-item"><span class="meta-label">CONTACTO</span><span class="meta-val phone">${s.phone}</span></div>
                    </div>
                  </div>
                  <div class="svc-right">
                    <span class="tag">${s.tag}</span>
                    <button class="cta"><span>TRAÇAR<br>ROTA</span><svg width="10.5" height="10.5" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.775 10.5L4.1125 6.3875L0 4.725V3.90833L10.5 0L6.59167 10.5H5.775ZM6.15417 8.34167L8.51667 1.98333L2.15833 4.34583L5.01667 5.48333L6.15417 8.34167Z" fill="white"/></svg></button>
                  </div>
                </article>
              `).join('')}
              <div class="results-footer">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="rf-icon" flex-shrink="0"><path d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM8.45 18.45L11 17.35L13.6 18.45L15 16.05L17.75 15.4L17.5 12.6L19.35 10.5L17.5 8.35L17.75 5.55L15 4.95L13.55 2.55L11 3.65L8.4 2.55L7 4.95L4.25 5.55L4.5 8.35L2.65 10.5L4.5 12.6L4.25 15.45L7 16.05L8.45 18.45ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z" fill="#765B00"/></svg>
                <div class="rf-text">
                  <span class="rf-title">VERIFICAÇÃO DE DADOS</span>
                  <p class="rf-body">Última atualização: 24 de Maio de 2024. Se encontrar informações incorretas, por favor utilize o botão de reportar em cada ficha de serviço.</p>
                </div>
              </div>
            </div>
            <div class="map-full loading" id="li-leaflet-full"></div>
          </div>
          <div class="side">
            <div class="emerg">
              <div class="emerg-head">
                <div class="emerg-title"><span>Contactos de</span><span>Emergência</span></div>
                <span class="emerg-ast"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 23.9375V17.5625L3.21875 20.75L0 15.1875L5.53125 11.9688L0 8.8125L3.21875 3.21875L8.75 6.40625V0H15.1875V6.40625L20.7188 3.21875L23.9375 8.8125L18.4062 11.9688L23.9375 15.1875L20.7188 20.75L15.1875 17.5625V23.9375H8.75Z" fill="#1C1B1B"/></svg></span>
              </div>
              <div class="emerg-primary">
                <a class="erow" href="tel:112"><div class="ecol"><span class="ename">Emergência Nacional</span><span class="etel">112</span></div><span class="earrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1C1B1B"/></svg></span></a>
                <a class="erow" href="tel:144"><div class="ecol"><span class="ename">Emergência Social</span><span class="etel">144</span></div><span class="earrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1C1B1B"/></svg></span></a>
              </div>
              <div class="emerg-sec">
                <span class="emerg-sec-label">Apoio Municipal (CML)</span>
                <a class="srow" href="tel:800910110"><span class="sname">Unidade Sem-Abrigo</span><span class="stel">800 910 110</span></a>
                <a class="srow" href="tel:218171100"><span class="sname">Proteção Civil</span><span class="stel">218 171 100</span></a>
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
    const leafletLink = document.createElement('link');
    leafletLink.rel = 'stylesheet';
    leafletLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    shadow.appendChild(leafletLink);

    const services = this.services;
    const icon = () => L.divIcon({
      className: 'li-pin',
      html: '<div style="width:26px;height:26px;background:#F4C542;border:3px solid #24103A;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.35)"></div>',
      iconSize: [26,26], iconAnchor: [13,26]
    });

    const initMap = (box, onReady) => {
      const run = () => {
        if (typeof L === 'undefined') { setTimeout(run, 80); return; }
        box.classList.remove('loading');
        const map = L.map(box, { scrollWheelZoom: false }).setView([38.7223, -9.1393], 12);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          maxZoom: 19, attribution: '© OpenStreetMap © CARTO'
        }).addTo(map);
        const markers = services.map(s => L.marker([s.lat, s.lng], { icon: icon() })
          .addTo(map)
          .bindPopup(`<strong>${s.tag}</strong>${s.name}<br/><em>${s.addr}</em>`));
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds(), { padding: [40, 40], maxZoom: 13 });
        setTimeout(() => map.invalidateSize(), 100);
        if (onReady) onReady(map);
      };
      run();
    };

    const miniBox = shadow.getElementById('li-leaflet');
    if (miniBox) initMap(miniBox);

    const inner = shadow.querySelector('.inner');
    const listContent = shadow.querySelector('.list-content');
    const side = shadow.querySelector('.side');
    const fullBox = shadow.getElementById('li-leaflet-full');
    let fullMap = null;

    shadow.querySelectorAll('.view-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        shadow.querySelectorAll('.view-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const isMap = btn.dataset.view === 'map';
        const FADE = 200;

        if (isMap) {
          listContent.style.opacity = '0';
          side.style.opacity = '0';
          setTimeout(() => {
            listContent.style.display = 'none';
            side.style.display = 'none';
            inner.style.gridTemplateColumns = '1fr';
            fullBox.style.cssText = 'display:block;width:100%;height:560px;opacity:0;transition:opacity 0.2s ease;';
            requestAnimationFrame(() => requestAnimationFrame(() => {
              fullBox.style.opacity = '1';
              if (!fullMap) {
                initMap(fullBox, map => { fullMap = map; });
              } else {
                fullMap.invalidateSize();
              }
            }));
          }, FADE);
        } else {
          fullBox.style.opacity = '0';
          setTimeout(() => {
            fullBox.style.cssText = 'display:none;';
            inner.style.gridTemplateColumns = '';
            listContent.style.display = '';
            side.style.display = '';
            requestAnimationFrame(() => requestAnimationFrame(() => {
              listContent.style.opacity = '1';
              side.style.opacity = '1';
            }));
          }, FADE);
        }
      });
    });
  }
}
customElements.define('li-services-list', LiServicesList);
