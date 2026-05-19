# Arquitetura editorial de plataformas

**Data:** 2026-05-19  
**Contexto:** definição de papéis entre Notion, WordPress, timeline e outras camadas de trabalho no Lisboa Invisível.

## Objetivo

Clarificar o papel de cada plataforma para evitar sobreposição, confusão operacional e publicação inconsistente.

A pergunta central não é apenas “onde guardar o conteúdo?”, mas sim:

- onde se pesquisa;
- onde se organiza;
- onde se valida;
- onde se publica;
- onde se visualiza.

## Princípio orientador

Nem toda plataforma deve fazer tudo.

Para este projeto, a melhor abordagem é distribuir responsabilidades por camadas, de modo que cada ferramenta cumpra um papel claro.

## Camadas recomendadas

### 1. Notion — trabalho interno e pesquisa

O Notion deve ser tratado como **backstage editorial**.

Usos adequados:

- revisão bibliográfica;
- organização de fontes;
- notas internas;
- preparação de sínteses;
- colaboração entre equipa;
- registo de questões em aberto.

O Notion é especialmente útil porque:

- é fácil para pessoas não técnicas;
- permite colaboração flexível;
- facilita organizar materiais heterogéneos.

### O que não deve ser o Notion

Não deve ser, idealmente:

- a base pública principal dos dados;
- a camada final de publicação;
- a única referência para conteúdos já validados.

## 2. Formulário / recolha externa — porta de entrada

A camada de formulário deve servir para:

- receber contribuições externas;
- recolher fontes, eventos e sugestões;
- estruturar a entrada mínima de dados.

Essa camada não deve publicar automaticamente. O seu papel é:

- captar;
- organizar;
- encaminhar para revisão.

## 3. Curadoria editorial — filtro de validação

Entre recolha e publicação, deve existir uma camada explícita de decisão editorial.

Funções dessa camada:

- validar consistência factual;
- verificar fontes;
- evitar duplicações;
- decidir categoria, escala e enquadramento;
- separar rascunho de conteúdo público.

Esta camada pode ser manual nesta fase, o que é compatível com a maturidade atual do projeto.

## 4. WordPress / site institucional — camada pública editorial

O WordPress deve funcionar como **espaço público principal de comunicação e publicação editorial**.

Usos adequados:

- páginas institucionais;
- conteúdos explicativos;
- sínteses públicas;
- páginas temáticas;
- conteúdos aprovados para consumo público.

Se necessário, o WordPress também pode hospedar:

- documentação pública;
- conteúdos de enquadramento;
- artigos e atualizações.

## 5. Timeline — camada pública de visualização cronológica

A timeline deve ter um papel específico:

- visualização cronológica de eventos, dados e marcos;
- acesso público a uma leitura temporal do fenómeno;
- apoio à narrativa histórica e estatística do observatório.

A timeline não deve substituir:

- o repositório interno;
- a curadoria;
- a documentação completa;
- a governança dos dados.

Ela é uma **interface de leitura pública**, não a totalidade da infraestrutura editorial.

## 6. Base estruturada de dados — camada desejável de médio prazo

À medida que o projeto evoluir, será útil consolidar uma base estruturada mais estável para conteúdos publicados.

Essa camada pode ser implementada via:

- WordPress com estrutura própria;
- Google Sheets governado;
- Airtable;
- JSON/CSV curado;
- backend dedicado.

O importante não é a tecnologia em si, mas a capacidade de garantir:

- consistência;
- versionamento;
- reuso dos dados;
- separação entre trabalho interno e publicação.

## Papel recomendado de cada plataforma

### Notion

**Função principal:** pesquisa e organização interna  
**Público principal:** equipa interna  
**Estado do conteúdo:** rascunho, referência, preparação

### Formulário / Google Forms

**Função principal:** recolha de contribuições  
**Público principal:** associações, colaboradoras, participantes  
**Estado do conteúdo:** submetido, não validado

### Curadoria / revisão

**Função principal:** validação e decisão editorial  
**Público principal:** equipa responsável  
**Estado do conteúdo:** em revisão, validado, rejeitado

### WordPress

**Função principal:** publicação editorial pública  
**Público principal:** público geral  
**Estado do conteúdo:** aprovado e publicado

### Timeline

**Função principal:** visualização cronológica pública  
**Público principal:** público geral  
**Estado do conteúdo:** aprovado e publicado em formato temporal

## O que esta arquitetura evita

Uma arquitetura editorial clara ajuda a evitar:

- publicar rascunhos por engano;
- misturar investigação com conteúdo final;
- duplicar manutenção em várias ferramentas;
- confundir base de trabalho com site público;
- transformar o Notion em solução para problemas que ele não resolve bem.

## Relação com a questão do embed de Notion

O embed de Notion pode ser útil em casos pontuais, mas deve ser entendido como exceção controlada.

Faz sentido para:

- documentação de apoio;
- bibliografia pública;
- materiais temporários.

Não deve ser tratado como substituto de:

- estrutura editorial pública;
- base de dados publicada;
- integração consistente entre WordPress e observatório.

## Recomendação operacional

### Curto prazo

- Notion como base interna;
- formulário como entrada de contribuições;
- WordPress como camada pública principal;
- timeline como visualização cronológica;
- curadoria manual entre entrada e publicação.

### Médio prazo

- consolidar fonte canónica para dados publicados;
- reduzir dependência de links voláteis e republicações frágeis;
- preparar base mais estável para reuso entre páginas, filtros e timeline.

## Conclusão

A arquitetura mais adequada para o Lisboa Invisível, neste momento, é uma arquitetura em camadas:

- **Notion** para pesquisa e organização;
- **formulário** para captação;
- **curadoria** para validação;
- **WordPress** para publicação editorial;
- **timeline** para visualização pública cronológica.

Essa separação protege a qualidade do projeto, facilita o trabalho de utilizadores não técnicos e cria melhores condições para evolução futura.
