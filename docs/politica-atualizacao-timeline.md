# Política de atualização da timeline

**Data:** 2026-05-19  
**Contexto:** definição de regras simples para atualização da timeline pública do Lisboa Invisível.

## Objetivo

Estabelecer um procedimento claro para atualizar a timeline sem depender de decisões improvisadas, reduzindo erros operacionais e facilitando a colaboração entre equipa editorial, apoio técnico e parceiros.

## Princípio geral

A timeline pública deve ser tratada como **camada de publicação validada**, não como espaço de rascunho.

Ou seja:

- nem toda atualização interna entra automaticamente na timeline;
- a timeline só deve refletir conteúdo revisto e aprovado;
- alterações técnicas devem ser mínimas e previsíveis.

## Situação atual

Neste momento, a timeline depende de uma publicação do Knight Lab TimelineJS baseada numa Google Sheet pública. Segundo os materiais partilhados, a republicação pode gerar um novo link.

Por isso, o projeto adotou uma camada intermediária em:

- `observatorio-timeline/data/timeline-config.json`

Esse ficheiro centraliza:

- `timelineEmbedUrl`;
- `spreadsheetUrl`;
- `version`;
- `updatedAt`.

## Política recomendada

### 1. Atualizar apenas quando houver conteúdo validado

A timeline não deve ser atualizada a cada pequena edição exploratória. A atualização pública deve ocorrer quando houver:

- nova versão aprovada da planilha/timeline;
- correção factual relevante;
- novo conjunto de entradas validadas;
- ajuste editorial que impacte a leitura pública.

### 2. Manter um único ponto de troca do link ativo

Sempre que a equipa técnica ou editorial publicar uma nova versão da timeline, a troca operacional deve ocorrer apenas em:

- `observatorio-timeline/data/timeline-config.json`

Isto evita editar múltiplos ficheiros e reduz o risco de inconsistências.

### 3. Registar cada atualização

Toda atualização pública da timeline deve deixar rasto mínimo de versão, incluindo:

- data da mudança;
- versão anterior e nova versão;
- motivo da atualização;
- responsável pela validação;
- responsável pela troca técnica, se aplicável.

Esse registo pode viver num ficheiro de decisões, changelog interno ou documento de acompanhamento.

### 4. Separar claramente revisão editorial de publicação técnica

Antes de atualizar a timeline, deve estar claro:

- quem aprovou o conteúdo;
- se os dados foram conferidos;
- se há duplicações ou inconsistências;
- se a nova versão é realmente a que deve ficar pública.

Só depois disso faz sentido trocar o link ou a planilha ativa.

## Frequência recomendada

Para uma equipa não técnica, a melhor prática é evitar atualizações excessivamente frequentes.

### Recomendação base

- atualização periódica em blocos, e não entrada a entrada;
- revisão semanal, quinzenal ou mensal, conforme volume;
- atualização extraordinária apenas quando houver correção importante.

## Responsabilidades sugeridas

### Equipa editorial

Responsável por:

- rever conteúdo;
- confirmar fontes;
- aprovar o que pode virar publicação pública;
- sinalizar quando existe nova versão pronta.

### Apoio técnico

Responsável por:

- atualizar o link ativo quando necessário;
- verificar se embed e planilha funcionam;
- confirmar que a página pública reflete a versão correta.

### Coordenação do projeto

Responsável por:

- decidir prioridades de atualização;
- garantir alinhamento entre equipa editorial e técnica;
- evitar publicação prematura de conteúdo ainda em revisão.

## Procedimento mínimo de atualização

### Passo 1 — validar conteúdo

Confirmar que os dados ou eventos já foram aprovados editorialmente.

### Passo 2 — confirmar publicação da nova timeline

Verificar se a nova versão da planilha/timeline já está publicada e acessível.

### Passo 3 — atualizar configuração

Alterar em `observatorio-timeline/data/timeline-config.json`:

- `timelineEmbedUrl`;
- `spreadsheetUrl`;
- `version`;
- `updatedAt`.

### Passo 4 — testar

Conferir:

- se a timeline abre;
- se o embed carrega;
- se a planilha correta está ligada;
- se não houve regressão visual evidente.

### Passo 5 — registar a mudança

Anotar a atualização para histórico interno.

## O que evitar

- trocar a timeline sem revisão editorial;
- editar diretamente vários pontos do site para mudar o link;
- usar versões diferentes da mesma timeline em lugares distintos;
- publicar versões experimentais como se fossem finais;
- depender de memória informal para saber qual é a versão ativa.

## Evolução futura desejável

No médio prazo, seria ideal reduzir a fragilidade atual com pelo menos uma destas melhorias:

- link de publicação estável;
- estrutura de dados mais reutilizável;
- processo menos dependente de republicação completa;
- melhor integração entre base editorial e camada pública.

## Conclusão

A política mais adequada para esta fase é simples:

- atualizar a timeline apenas quando houver conteúdo validado;
- centralizar a troca técnica num único ficheiro;
- registar cada mudança;
- manter a timeline como publicação pública controlada, e não como espaço de trabalho interno.
