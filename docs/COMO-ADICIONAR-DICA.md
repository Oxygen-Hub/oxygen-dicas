# Como adicionar uma dica

## O fluxo padrão (via Claude)

1. Abra o chat com o Claude (no projeto de Dicas Oxygen)
2. Mande a dica — pode ser de várias formas:
   - **Print do WhatsApp** da pessoa indicando
   - **Texto** descrevendo o que é
   - **Link** do lugar/livro/evento/etc
   - **Cola direta** do que alguém escreveu
3. Claude vai:
   - Identificar a categoria (Restaurante, Livro, Viagem, etc.)
   - Anonimizar (remover nome e foto de quem indicou)
   - Estruturar os campos (localização, info, tags)
   - Confirmar com você se necessário
   - Commitar o arquivo `.md` no repositório
4. O GitHub Actions detecta o push e rebuilda o site em ~1-2 minutos
5. A dica aparece no ar

## Estrutura de um arquivo de dica

Cada dica é um arquivo Markdown em `src/content/dicas/{slug}.md`. Por exemplo: `src/content/dicas/cervejaria-ramiro.md`.

A estrutura é:

```markdown
---
titulo: "Nome da dica"
subtitulo: "Descrição curta (1 linha) que aparece no card."
categoria: "Restaurantes"  # uma das 6 categorias
localizacao: "Lisboa, Portugal"  # opcional, só faz sentido pra lugares físicos
tags:
  - "viagens"
  - "marisco"
  - "tradicional"
info:
  endereco: "Av. Almirante Reis 1, Lisboa"
  horario: "12h – 00h30"
  site: "cervejariaramiro.pt"
  reservas: "Não aceita"
publicado_em: 2026-05-22
---

Aqui vai o **texto da dica** em Markdown. Você pode:

- Usar **negrito** em pontos importantes (vão aparecer em laranja).
- Fazer listas com hífen
- Adicionar [links](https://exemplo.com) normais
- Quebrar em parágrafos com linha em branco
```

## Categorias disponíveis

Use exatamente uma dessas (case-sensitive):

- `Viagens`
- `Restaurantes`
- `Livros`
- `Eventos`
- `Filmes & Séries`
- `Podcasts`

## Campos do bloco `info` por categoria

O bloco de info estruturada se adapta por categoria. Use só os campos relevantes:

### Restaurantes
- `endereco`
- `horario`
- `site`
- `reservas`

### Viagens
- `endereco` (vira "Local")
- `horario`
- `site`
- `reservas`

### Livros
- `autor`
- `editora`
- `ano`
- `onde_comprar`

### Eventos
- `endereco` (vira "Local")
- `data`
- `ingresso`
- `site`

### Filmes & Séries
- `onde_assistir`
- `ano`
- `duracao`
- `site` (vira "Mais info")

### Podcasts
- `idioma`
- `frequencia`
- `plataforma`
- `site` (vira "Link")

## Tags — boas práticas

Tags são livres, mas:

- **Use minúsculas** e palavras únicas quando possível (`marisco`, não `frutos do mar`)
- **Inclua "viagens" como tag** quando a dica é sobre algo em outra cidade, mesmo que a categoria principal seja outra (Restaurante, Hospedagem, etc.). Assim a dica aparece no filtro de Viagens também.
- **Adicione cidade/país como tag** quando for um lugar físico (`lisboa`, `portugal`, `tóquio`, `japão`)
- **3-5 tags por dica** é a faixa ideal. Mais que isso polui.

## Anonimização — o que NUNCA entrar

- Nome de quem indicou a dica
- Foto de pessoa
- Print do WhatsApp visível
- Telefone, email, conta pessoal de Instagram
- Qualquer info que identifique quem enviou

A dica deve ser **da comunidade Oxygen**, não de uma pessoa específica. Se a indicação veio com história pessoal ("eu fui lá quando..."), reformule pra terceira pessoa ou estilo impessoal.

## Slug do arquivo

O nome do arquivo `.md` vira a URL da página de detalhe.

- `cervejaria-ramiro.md` → `/dicas/cervejaria-ramiro/`
- `co-intelligence.md` → `/dicas/co-intelligence/`

Regras pro nome:

- Tudo em minúsculas
- Hífens (`-`) em vez de espaços
- Sem acentos
- Sem caracteres especiais

## Editar uma dica existente

Mande o pedido no chat com o Claude:

> "Atualize a dica do Ramiro com novo horário: 12h–01h."

> "Mude a categoria do Trunk Hotel de Viagens pra Hospedagem."  *(não vai funcionar — Hospedagem não é categoria, é tag)*

> "Apague a dica do Industry, a recomendação foi retirada."

## Programar uma dica pra publicar depois

Coloque uma data futura em `publicado_em`. O site vai mostrar dicas com data ≤ hoje.

(Funcionalidade a ser implementada — atualmente todas aparecem assim que commitadas.)
