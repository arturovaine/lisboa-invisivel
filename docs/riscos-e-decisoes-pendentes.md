# Riscos e decisões pendentes

**Data:** 2026-05-19  
**Contexto:** pontos críticos a acompanhar na evolução do observatório, timeline e publicação de dados do Lisboa Invisível.

## Objetivo

Identificar os principais riscos atuais do projeto e explicitar as decisões que ainda precisam de alinhamento para evitar retrabalho, inconsistências e dependências frágeis.

## Riscos principais

### 1. Dependência de links instáveis da timeline

O uso atual do Knight Lab com Google Sheets parece gerar novos links a cada republicação. Isso cria risco de:

- desatualização da página pública;
- links divergentes em lugares diferentes;
- retrabalho operacional;
- dependência de acompanhamento manual.

### Impacto

- médio a alto na operação;
- alto na manutenção;
- moderado na experiência pública, caso o link ativo falhe.

### Mitigação atual

- centralização em `observatorio-timeline/data/timeline-config.json`.

### Decisão pendente

- a equipa técnica consegue entregar um link mais estável ou o processo continuará dependente de republicações variáveis?

## 2. Falta de definição de fonte canónica

Hoje coexistem várias camadas de informação:

- Notion;
- revisão bibliográfica;
- Google Sheet da timeline;
- formulário de contribuições;
- conteúdos do site.

Sem definição clara, existe o risco de não se saber qual é a referência principal em caso de conflito.

### Impacto

- alto na governança;
- alto na qualidade editorial;
- alto na escalabilidade.

### Decisão pendente

- qual é a fonte canónica para dados publicados?
- qual é a fonte canónica para pesquisa interna?
- qual é a relação entre ambas?

## 3. Mistura entre rascunho, revisão e conteúdo publicado

Se o projeto não separar bem conteúdos internos de conteúdos públicos, há risco de:

- expor informação não validada;
- publicar linguagem ainda não revista;
- confundir colaboradoras sobre o estado de cada entrada.

### Impacto

- alto na credibilidade pública;
- médio na operação interna.

### Decisão pendente

- como sinalizar claramente o que é rascunho, o que está em revisão e o que já foi aprovado?

## 4. Pipeline editorial demasiado manual

O fluxo atual é viável para uma fase piloto, mas pode tornar-se pesado com aumento de volume.

Riscos associados:

- filas acumuladas;
- atrasos na publicação;
- inconsistência na revisão;
- dependência de poucas pessoas.

### Impacto

- médio no curto prazo;
- alto no médio prazo, se o projeto crescer.

### Decisão pendente

- qual será o volume esperado de contribuições?
- a equipa quer manter processo manual por mais tempo?
- quais partes precisam de automação e quais devem continuar humanas?

## 5. Dependência excessiva de ferramentas com papéis pouco claros

Se Notion, WordPress, Google Sheets e timeline forem usados sem fronteiras claras, o sistema pode ficar redundante e difícil de manter.

### Impacto

- médio a alto em manutenção;
- alto em confusão operacional.

### Decisão pendente

- qual é o papel exato de cada plataforma?
- o que é backstage e o que é publicação pública?

## 6. Publicação de dados sem critérios formalizados

Sem critérios claros, há risco de publicar:

- dados desatualizados;
- números sem contexto metodológico;
- fontes frágeis;
- entradas duplicadas ou difíceis de comparar.

### Impacto

- alto na confiança pública;
- alto na qualidade do observatório.

### Decisão pendente

- quais critérios mínimos uma entrada deve cumprir para entrar no site ou na timeline?

## 7. Escalabilidade limitada do embed de Notion para dados públicos

Se houver tentação de usar embed do Notion como solução principal, isso pode simplificar o curto prazo mas fragilizar o médio prazo.

Riscos:

- pouco controlo sobre apresentação;
- fraca integração com filtros e visualizações;
- dificuldade de separar interno e público;
- baixa reutilização de dados.

### Impacto

- baixo a médio no imediato;
- alto no médio prazo, se virar padrão estrutural.

### Decisão pendente

- o embed do Notion será apenas apoio temporário ou existe intenção de lhe dar papel central?

## 8. Dependência de conhecimento informal

Se o funcionamento do sistema viver apenas em emails, memória de reuniões ou entendimento tácito, o risco cresce quando:

- entram novas pessoas;
- alguém sai do projeto;
- há pausa entre ciclos de trabalho.

### Impacto

- médio a alto na continuidade;
- alto na transmissão de contexto.

### Decisão pendente

- que documentação mínima precisa de existir para garantir continuidade?

## Decisões prioritárias a fechar

Entre todas as questões, as mais urgentes parecem ser:

### 1. Fonte canónica

Definir qual é a referência principal para:

- pesquisa interna;
- dados publicados;
- timeline pública.

### 2. Governança editorial

Definir:

- quem submete;
- quem valida;
- quem aprova;
- quem publica;
- quem atualiza a timeline.

### 3. Papel das plataformas

Definir com clareza:

- Notion;
- WordPress;
- Google Forms / Sheets;
- timeline.

### 4. Política de atualização

Definir:

- quando atualizar;
- com que frequência;
- quem autoriza;
- como registar versões.

### 5. Estratégia para utilizadores não técnicos

Definir um fluxo que não dependa de edição de ficheiros, repositórios ou estruturas técnicas por parte da equipa alargada.

## Recomendação geral

A melhor resposta a estes riscos, nesta fase, não é aumentar complexidade técnica. É clarificar:

- papéis;
- critérios;
- fronteiras entre ferramentas;
- rotinas mínimas de atualização e validação.

## Conclusão

O projeto está bem orientado, mas os riscos principais não são de design ou intenção. São riscos de:

- governança;
- manutenção;
- definição de fonte;
- passagem entre trabalho interno e publicação pública.

Se estas decisões forem fechadas cedo, o observatório ganha consistência e evita acumular dívida editorial e operacional.
