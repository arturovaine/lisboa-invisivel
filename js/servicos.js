/* ══════════════════════════════════════════════════════════════════
   LISBOA INVISÍVEL · serviços (services) page sections
   - li-services-list (with embedded Leaflet map)
   Requires: core.js, Leaflet (loaded globally in servicos.html)
   ══════════════════════════════════════════════════════════════════ */

class LiServicesList extends LiSection {
  styles() { return `
    @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
    section { background: var(--cream); padding: 3rem 2rem 5rem; }
    .inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; align-items: start; }
    .col-list { display: flex; flex-direction: column; gap: 1rem; }
    .svc-head { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .15em; text-transform: uppercase; color: rgba(26,16,48,.5); margin-bottom: .5rem; }
    .svc { background: #fff; padding: 1.5rem 1.8rem; border-left: 4px solid var(--yellow); display: grid; grid-template-columns: 1fr auto; gap: 1rem; }
    .svc.purple { background: var(--purple-dark); color: #fff; border-left-color: var(--yellow); }
    .svc .tag { display: inline-block; background: var(--yellow); color: var(--purple-dark); font-family: var(--font-display); font-weight: 700; font-size: .6rem; letter-spacing: .12em; text-transform: uppercase; padding: .2rem .6rem; margin-bottom: .6rem; }
    .svc h3 { font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; margin-bottom: .3rem; }
    .svc .addr { font-size: .82rem; opacity: .65; margin-bottom: .8rem; }
    .svc .d { font-size: .85rem; line-height: 1.55; opacity: .75; margin-bottom: 1rem; }
    .svc .meta { display: flex; gap: 1.5rem; font-size: .7rem; letter-spacing: .08em; text-transform: uppercase; opacity: .6; font-family: var(--font-display); font-weight: 700; }
    .svc .cta { background: var(--purple-dark); color: #fff; border: none; font-family: var(--font-display); font-weight: 800; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; padding: .6rem 1rem; cursor: pointer; align-self: center; }
    .svc.purple .cta { background: var(--yellow); color: var(--purple-dark); }

    .side { display: flex; flex-direction: column; gap: 1rem; position: sticky; top: 6rem; }

    .emerg { background: var(--yellow); padding: 1.8rem; color: var(--purple-dark); }
    .emerg-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.4rem; padding-bottom: 1rem; border-bottom: 2px solid var(--purple-dark); }
    .emerg-title { display: flex; flex-direction: column; font-family: var(--font-display); font-weight: 900; font-size: 1.15rem; line-height: 1.05; text-transform: uppercase; letter-spacing: .02em; }
    .emerg-ast { font-family: var(--font-display); font-weight: 900; font-size: 1.3rem; line-height: 1; color: var(--purple-dark); }
    .emerg-primary { display: flex; flex-direction: column; gap: .4rem; margin-bottom: 1.2rem; }
    .erow { display: flex; align-items: center; justify-content: space-between; padding: .7rem 0; border-bottom: 1px solid rgba(22,12,48,.25); gap: .8rem; transition: transform .15s; }
    .erow:hover { transform: translateX(3px); }
    .erow:last-child { border-bottom: 1px solid rgba(22,12,48,.25); }
    .ecol { display: flex; flex-direction: column; gap: .2rem; }
    .ename { font-family: var(--font-display); font-weight: 700; font-size: .7rem; letter-spacing: .14em; text-transform: uppercase; color: rgba(22,12,48,.7); }
    .etel { font-family: var(--font-display); font-weight: 900; font-size: 2rem; line-height: 1; letter-spacing: -.02em; color: var(--purple-dark); }
    .earrow { font-family: var(--font-display); font-weight: 900; font-size: 1.4rem; color: var(--purple-dark); }
    .emerg-sec { display: flex; flex-direction: column; gap: 0; padding-top: .4rem; border-top: 1px dashed rgba(22,12,48,.25); }
    .srow { display: flex; justify-content: space-between; align-items: center; padding: .55rem 0; font-family: var(--font-display); }
    .srow + .srow { border-top: 1px solid rgba(22,12,48,.12); }
    .sname { font-weight: 700; font-size: .72rem; letter-spacing: .08em; text-transform: uppercase; color: rgba(22,12,48,.75); }
    .stel { font-weight: 800; font-size: .95rem; color: var(--purple-dark); letter-spacing: .02em; }

    .map { background: #fff; padding: 1.5rem; }
    .map-box { height: 280px; width: 100%; background: #e9e3d3; position: relative; overflow: hidden; }
    .map-box.loading::before { content: '⌖ A carregar mapa…'; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: rgba(26,16,48,.4); font-family: var(--font-display); font-weight: 700; font-size: .75rem; letter-spacing: .15em; text-transform: uppercase; }
    .leaflet-popup-content-wrapper { border-radius: 0; }
    .leaflet-popup-content { font-family: var(--font-body); font-size: .8rem; line-height: 1.4; margin: .75rem 1rem; }
    .leaflet-popup-content strong { font-family: var(--font-display); font-weight: 800; text-transform: uppercase; font-size: .7rem; letter-spacing: .08em; color: var(--purple-dark); display: block; margin-bottom: .3rem; }
    .map button { width: 100%; margin-top: 1rem; background: var(--purple-dark); color: #fff; border: none; font-family: var(--font-display); font-weight: 800; font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; padding: .9rem; cursor: pointer; }

    .ver { margin-top: 1rem; background: #fff; padding: 1rem 1.2rem; border-left: 3px solid var(--yellow); font-size: .78rem; line-height: 1.5; color: rgba(26,16,48,.65); }

    @media (max-width: 860px) { .inner { grid-template-columns: 1fr; } .side { position: static; } }
  `;}

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
        html: '<div style="width:26px;height:26px;background:#E8B843;border:3px solid #160C30;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.35)"></div>',
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
