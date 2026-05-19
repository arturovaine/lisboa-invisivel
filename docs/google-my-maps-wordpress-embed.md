# Como criar um Google My Maps para embed no WordPress

**Data:** 2026-05-19  
**Contexto:** usar os serviços de apoio mapeados do Lisboa Invisível para criar um mapa simples, fácil de manter e incorporável no WordPress.

## Objetivo

Criar um Google My Maps com os serviços de apoio e depois incorporar esse mapa numa página ou artigo do WordPress.

Esta pode ser uma solução útil quando se quer:

- dar autonomia a utilizadores não técnicos;
- atualizar pontos no mapa sem mexer no código;
- publicar uma versão visual simples e partilhável;
- manter um fluxo leve para fase inicial.

## Quando faz sentido

O Google My Maps é adequado se o objetivo for:

- mostrar pontos de apoio num mapa público;
- editar localizações manualmente;
- organizar marcadores por categorias simples;
- fazer embed rápido no WordPress.

Não é a melhor solução se o objetivo for:

- ter filtros complexos;
- integrar dados com lógica editorial avançada;
- usar o mapa como base principal de dados estruturados do observatório.

## Materiais de partida

Já existe uma base consolidada neste repositório:

- `docs/servicos-apoio.csv`
- `docs/servicos-apoio.json`
- `assets/data/servicos-apoio.csv`
- `assets/data/servicos-apoio.json`

Para Google My Maps, o formato mais prático é o CSV.

## Estrutura mínima recomendada do CSV

Os campos mais úteis para importação são:

- `name`
- `address`
- `lat`
- `lng`
- `tag`
- `phone`
- `hours`
- `description`

O ficheiro atual já contém esses campos, além de notas técnicas.

## Passo a passo — criar o mapa

### 1. Abrir Google My Maps

Ir para:

- https://www.google.com/mymaps

Entrar com a conta Google que vai gerir o mapa.

### 2. Criar um novo mapa

Clicar em:

- **Create a new map** / **Criar um novo mapa**

Dar um nome claro, por exemplo:

- `Lisboa Invisível — Serviços de Apoio`

Adicionar também uma descrição curta do mapa.

### 3. Importar o CSV

No painel lateral, clicar em:

- **Import** / **Importar**

Selecionar o ficheiro:

- `docs/servicos-apoio.csv`

ou

- `assets/data/servicos-apoio.csv`

### 4. Escolher os campos de localização

Quando o Google My Maps perguntar quais campos devem posicionar os pontos, usar:

- `lat`
- `lng`

Se a importação não aceitar diretamente lat/lng como esperado, usar também o campo:

- `address`

Em geral, latitude + longitude é a opção mais fiável.

### 5. Escolher o título dos marcadores

Quando o sistema perguntar qual campo usar como título do marcador, selecionar:

- `name`

## Organizar o mapa

### Opção A — uma camada única

Mais simples:

- todos os serviços na mesma camada.

### Opção B — uma camada por tipo

Melhor para legibilidade manual:

- Higiene
- Alimentação
- Apoio Social
- Abrigo

Se a equipa quiser mais controlo visual, esta opção costuma funcionar melhor.

## Personalização recomendada

Depois de importar os pontos, vale a pena:

- escolher cores por categoria;
- rever nomes e descrições dos marcadores;
- remover colunas desnecessárias da apresentação pública;
- ajustar a vista inicial do mapa para Lisboa.

## Conteúdo sugerido para cada marcador

Cada marcador pode mostrar:

- nome do serviço;
- categoria;
- morada;
- telefone;
- horário;
- breve descrição.

Isso melhora a utilidade pública do mapa, especialmente em dispositivos móveis.

## Tornar o mapa público

Depois de finalizar o mapa:

1. clicar em **Share / Partilhar**;
2. ajustar permissões para visualização pública ou por link;
3. confirmar que o mapa pode ser incorporado.

Sem isso, o embed no WordPress pode não funcionar para visitantes externos.

## Como obter o código de embed

No Google My Maps:

1. abrir o mapa;
2. clicar no menu de três pontos do mapa;
3. escolher **Embed on my site** / **Incorporar no meu site**;
4. copiar o código `iframe`.

O código será semelhante a:

```html
<iframe src="https://www.google.com/maps/d/embed?mid=..." width="640" height="480"></iframe>
```

## Como incorporar no WordPress

### No editor de blocos (Gutenberg)

Usar um bloco de:

- **HTML personalizado**

Depois colar o `iframe` do Google My Maps.

### No editor clássico

Colar o `iframe` na aba de HTML / código.

## Ajustes recomendados no WordPress

Ao incorporar, vale a pena ajustar:

- `width="100%"`
- altura adequada, por exemplo `height="480"` ou `height="640"`
- contexto textual acima ou abaixo do mapa

Exemplo:

```html
<iframe
  src="https://www.google.com/maps/d/embed?mid=SEU_MAP_ID"
  width="100%"
  height="560"
  style="border:0;"
  loading="lazy">
</iframe>
```

## Boas práticas editoriais

### 1. Não depender do mapa como única fonte de verdade

O My Maps deve ser entendido como camada de visualização, não como única base de dados do projeto.

### 2. Manter uma base estruturada fora do My Maps

Continuar a guardar os dados em:

- CSV;
- JSON;
- base editorial interna.

### 3. Definir responsável por atualização

É importante haver uma pessoa ou equipa responsável por:

- adicionar novos pontos;
- corrigir coordenadas;
- rever contactos e horários;
- manter consistência entre mapa e site.

### 4. Rever privacidade e sensibilidade dos dados

Antes de publicar, confirmar se todos os serviços devem aparecer publicamente com localização exata.

## Limitações do Google My Maps

Apesar de ser simples, o My Maps tem limites:

- pouca flexibilidade de design;
- filtros limitados;
- integração fraca com lógica de dados mais avançada;
- manutenção manual;
- difícil reutilização estruturada no resto do site.

## Recomendação para este projeto

O Google My Maps pode ser uma boa solução se o objetivo for:

- criar rapidamente um mapa público;
- permitir manutenção simples por equipa não técnica;
- incorporar no WordPress sem desenvolvimento adicional.

Mas a melhor prática continua a ser:

- manter os dados estruturados fora do My Maps;
- usar o mapa como visualização;
- preservar governança editorial e revisão das informações.

## Resumo operacional

### Fluxo simples recomendado

1. atualizar `docs/servicos-apoio.csv`;
2. importar ou atualizar no Google My Maps;
3. rever marcadores;
4. publicar / incorporar no WordPress;
5. registar quem atualizou e quando.

## Conclusão

Para uma equipa não técnica, Google My Maps + embed no WordPress pode ser uma solução muito prática para a fase inicial do mapa de serviços.

Funciona bem desde que:

- exista um CSV organizado;
- o mapa não seja tratado como única base de dados;
- a atualização siga um processo editorial mínimo.
