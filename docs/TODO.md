# Itens Pendentes

## Produto / Conteúdo
- [ ] Menu mobile: hamburger abre drawer (ícone já existe, falta handler JS)
- [ ] Página 404
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Página individual de História (rota dinâmica)
- [ ] Página individual de Dados (detalhe por categoria)
- [ ] Formulário de newsletter funcional (endpoint: Formspree / Buttondown / ConvertKit)

## Performance
- [ ] Converter imagens JPG → WebP/AVIF
- [ ] Gerar `srcset` responsivo
- [ ] Adicionar `loading="lazy"` + `decoding="async"` nas imagens
- [ ] Tirar Google Fonts do caminho crítico (self-host); `font-display: swap` já aplicado, avaliar preload
- [ ] Preload do `hero-street.jpg`

## SEO & Social
- [ ] Open Graph + Twitter Cards (imagem de partilha por página)
- [ ] JSON-LD schema.org: `Organization`, `NGO`, `NewsArticle` (histórias)
- [ ] `<meta name="description">` por página

## Acessibilidade
- [ ] Skip-link "Saltar para conteúdo"
- [ ] `alt` nas fotos de **conteúdo** (retratos em cards, identificam pessoas — hoje em `background-image`, invisíveis a screen-readers). Backdrops decorativos sob overlay continuam aceitáveis como `background-image`.
  - [x] Histórias: cards migrados para `<img alt loading="lazy" decoding="async">` (2026-04-20)
  - [ ] Home / Sobre / Dados / Serviços: rever caso-a-caso, migrar só as imagens que identificam pessoas/locais
- [ ] Estados de foco visíveis em botões e links
- [ ] Revisar contraste de texto `rgba(..,.6)` sobre fundo cream — pode falhar WCAG AA

## Deploy
- [ ] Vercel ou Netlify com deploy automático a partir do `main` (`vercel.json` ou CLI)
- [ ] Domínio custom

## Qualidade
- [ ] Linter/formatter (Biome ou Prettier)
- [ ] Husky pre-commit
- [ ] Playwright: 1 teste por página verificando render sem erros de consola
