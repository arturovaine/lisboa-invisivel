# Coordenadas dos serviços de apoio mapeados

**Data:** 2026-05-19  
**Fonte principal:** `js/servicos.js`  
**Cópias estruturadas:** `docs/servicos-apoio.json` e `docs/servicos-apoio.csv`

## Objetivo

Consolidar num único local as coordenadas atualmente usadas no mapa de serviços de apoio, facilitando:

- revisão;
- exportação;
- partilha com parceiros;
- futura migração para Google My Maps, WordPress ou outras ferramentas.

## Fonte adotada

As coordenadas principais deste documento seguem o array `mapServices` em `js/servicos.js`, pois é esse conjunto que alimenta o mapa Leaflet da página `servicos.html`.

## Observação importante

Os dois primeiros serviços também aparecem no array `services`, com coordenadas ligeiramente diferentes. Por isso:

- neste documento, o campo principal `lat/lng` segue `mapServices`;
- as coordenadas alternativas foram preservadas nos ficheiros JSON e CSV como `cardCoordinates` / `cardLat` / `cardLng`.

## Lista consolidada

| Serviço | Categoria | Latitude | Longitude |
|---|---|---:|---:|
| Balneário Público de Alcântara | Higiene | 38.7061 | -9.1761 |
| Cozinha Comunitária de Marvila | Alimentação | 38.7332 | -9.1098 |
| João 13 – NAL+ de São Vicente | Higiene | 38.7144 | -9.1253 |
| UAPSA / NPISA – SCML | Apoio Social | 38.7030 | -9.1689 |
| CASA – Centro de Apoio ao Sem Abrigo | Apoio Social | 38.7536 | -9.1993 |
| Exército de Salvação | Abrigo | 38.7273 | -9.1099 |
| Vitae – Associação para o Desenvolvimento | Abrigo | 38.7033 | -9.1750 |
| Centro de Dia Santa Isabel (Cruz Vermelha) | Apoio Social | 38.7154 | -9.1645 |
| CASL – IASFA | Abrigo | 38.7186 | -9.1424 |

## Ficheiros disponíveis

### JSON

- `docs/servicos-apoio.json`
- `assets/data/servicos-apoio.json`

### CSV

- `docs/servicos-apoio.csv`
- `assets/data/servicos-apoio.csv`

## Como usar estes ficheiros no Google My Maps

### Recomendação principal

Para Google My Maps, o ficheiro recomendado é o **CSV**, não o JSON.

Ou seja, para importar este mapa, usar preferencialmente:

- `docs/servicos-apoio.csv`

ou

- `assets/data/servicos-apoio.csv`

### Porque não usar o JSON diretamente

O Google My Maps trabalha melhor com formatos como:

- CSV;
- Google Sheets;
- Excel/XLSX;
- KML/KMZ.

O ficheiro JSON é útil como cópia estruturada para reutilização técnica, documentação e integrações futuras, mas **não é o formato mais indicado para importação direta no My Maps**.

### Como importar no Google My Maps

1. abrir o Google My Maps em `https://www.google.com/mymaps`;
2. criar um novo mapa;
3. clicar em **Importar**;
4. selecionar o ficheiro `servicos-apoio.csv`;
5. quando o Google perguntar quais colunas definem a localização, escolher:
   - `lat`
   - `lng`
6. quando perguntar qual coluna usar como título do marcador, escolher:
   - `name`

### O que acontece depois

Depois da importação, o mapa pode ser:

- revisto manualmente;
- organizado por categorias;
- personalizado com cores e ícones;
- publicado e incorporado no WordPress.

### Papel do JSON neste fluxo

O JSON continua útil para:

- guardar a estrutura completa dos dados;
- reutilizar no frontend;
- apoiar futuras integrações;
- servir como fonte técnica de referência.

Mas, para a operação no Google My Maps, o CSV é a opção mais simples.

## Recomendação

Se esta lista passar a ser usada fora do frontend atual, o ideal é manter apenas uma fonte canónica de dados e fazer o `js/servicos.js` ler a partir dessa fonte, em vez de repetir coordenadas manualmente no código.
