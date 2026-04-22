# Lisboa Invisível

Observatório social digital sobre a situação de sem-abrigo em Lisboa. Dados abertos, histórias reais, mapa de serviços de apoio e mobilização cívica.

**Live:** https://arturovaine.github.io/lisboa-invisivel/

## Estrutura

```
.
├── index.html          # Home
├── sobre.html          # Manifesto institucional
├── dados.html          # Dashboard de dados
├── historias.html      # Arquivo de testemunhos
├── servicos.html       # Mapa + lista de serviços
│
├── assets/             # Logo, ícones e outros recursos de marca
├── img/                # Fotografias editoriais
├── css/                # Estilos por componente (importados via ?inline)
│   ├── chrome/         # Navbar · Footer · Newsletter · Partners
│   ├── home/           # StoriesPreview · Myths · Categories
│   └── sections/       # Hero · Stats · Mission · ServicesCta · DataFilter
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
- [Vite](https://vitejs.dev/) (dev server + build)
- [Leaflet](https://leafletjs.com/) (mapa de serviços) · [OpenStreetMap](https://www.openstreetmap.org/) tiles
- Typography: Inter · Epilogue · Manrope · Space Grotesk

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em `http://localhost:8090/`.

## Build e Deploy

```bash
npm run build   # gera dist/
npm run preview # pré-visualiza o build localmente
```

O deploy para GitHub Pages é automático via GitHub Actions em cada push para `main`.
