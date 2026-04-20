# Lisboa Invisível

Observatório social digital sobre a situação de sem-abrigo em Lisboa. Dados abertos, histórias reais, mapa de serviços de apoio e mobilização cívica.

## Estrutura

```
.
├── index.html          # Home
├── sobre.html          # Manifesto institucional
├── dados.html          # Dashboard de dados
├── historias.html      # Arquivo de testemunhos
├── servicos.html       # Mapa + lista de serviços
│
├── assets/             # Logo e outros recursos de marca
├── img/                # Fotografias editoriais
├── js/                 # Web Components
│   ├── core.js         # IMG registry · baseStyles · LiSection base
│   ├── chrome.js       # Navbar · Footer · Newsletter · Partners
│   ├── sections-common.js   # Hero · Stats · Mission · ServicesCta · DataFilter
│   ├── home.js         # StoriesPreview · Myths · Categories
│   ├── sobre.js        # Manifesto · PillarsOfAction · Ethics · JoinCta
│   ├── dados.js        # DataCards · Intersection · DataExport
│   ├── historias.js    # StoriesGrid · ContextStat
│   └── servicos.js     # ServicesList (+ Leaflet map)
└── docs/
    ├── figma-screenshots/   # Referências de design originais
    └── screenshots/         # Previews renderizados
```

## Arquitetura

Web Components nativos · Shadow DOM · SOLID
- **Single Responsibility** — cada componente encapsula uma secção
- **Open/Closed** — `LiSection` base; subclasses só implementam `styles()` + `render()` (+ `afterRender()` opcional)
- **Composição** — páginas são composição pura de custom elements (`<li-*>`)

## Stack

- HTML5 · CSS3 · Vanilla JS (ES6+ Web Components)
- [Leaflet](https://leafletjs.com/) (mapa de serviços) · [OpenStreetMap](https://www.openstreetmap.org/) tiles
- Typography: Inter

## Desenvolvimento

Servidor local:

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000/`.
