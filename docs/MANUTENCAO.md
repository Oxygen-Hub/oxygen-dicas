# Manutenção técnica do site

## Visão geral da stack

- **Framework:** [Astro](https://astro.build) v4 (modo static export)
- **Linguagem:** TypeScript + Markdown
- **Estilização:** CSS puro com variáveis CSS (sem Tailwind, sem framework de UI)
- **Tipografia:** Manrope via Google Fonts
- **Hospedagem:** GitHub Pages
- **CI/CD:** GitHub Actions (auto-deploy a cada push na branch `main`)
- **Conteúdo:** Markdown com frontmatter, validado por schema Zod

## Como atualizar o logo

O logo está em `public/images/logo-oxygen-club.png`. Pra atualizar:

1. Substitua o arquivo PNG mantendo o mesmo nome
2. Faça commit
3. O site rebuilda automaticamente

**Recomendação:** quando possível, troque por SVG (`logo-oxygen-club.svg`) pra qualidade infinita em qualquer tela. Caso troque pra SVG, ajuste a referência no `Layout.astro`.

## Como mudar a cor laranja

A cor primária da marca está definida em `src/styles/global.css`, na sessão `:root`:

```css
:root {
  --oxy-orange: #F3523F;
  --oxy-orange-dark: #C73E2E;   /* derivada — versão mais escura pra texto sobre fundo claro */
  --oxy-orange-light: rgba(243, 82, 63, 0.12);  /* fundo sutil pras tags */
}
```

Pra mudar pra outro tom, ajuste essas três variáveis. O resto do site (filtros, links, hovers, tags) puxa de lá automaticamente.

## Como adicionar uma categoria nova

Adicionar uma categoria envolve 3 lugares:

### 1. Schema (`src/content/config.ts`)

Adicione o nome no enum:

```typescript
categoria: z.enum([
  'Viagens',
  'Restaurantes',
  'Livros',
  'Eventos',
  'Filmes & Séries',
  'Podcasts',
  'Música'  // ← nova
]),
```

### 2. Lista de filtros (`src/components/Filtros.astro`)

Adicione na array:

```typescript
const categorias = [
  'Todas',
  'Viagens',
  // ...
  'Música'  // ← nova
];
```

### 3. Lista de páginas estáticas (`src/pages/categoria/[categoria].astro`)

Adicione no `getStaticPaths`:

```typescript
const categorias = ['Viagens', /* ... */, 'Música'];
```

### 4. Bloco de info (`src/components/InfoBlock.astro`)

Adicione o mapeamento de campos:

```typescript
const camposPorCategoria = {
  // ...
  'Música': [
    { chave: 'autor', label: 'Artista' },
    { chave: 'ano', label: 'Ano' },
    { chave: 'plataforma', label: 'Onde ouvir' },
    { chave: 'site', label: 'Link', eh_link: true },
  ],
};
```

E se precisar de campos novos (não cobertos pelos existentes), adicione também no schema do `config.ts`.

## Como mudar o texto do preâmbulo

Edite `src/components/Preambulo.astro`. As três strings principais:

- Eyebrow (texto pequeno em laranja em cima)
- Título principal (h1 em destaque)
- Texto explicativo
- Manifesto (frase final em itálico)

## Como mudar fontes

A fonte é carregada via Google Fonts no `src/layouts/Layout.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

E aplicada como `--font-sans` em `global.css`. Pra trocar:

1. Substitua a URL do Google Fonts pela nova
2. Atualize a variável `--font-sans` em `global.css`

## Debugar problemas de build

Se o GitHub Actions falhar:

1. Vá na aba **Actions** do repositório no GitHub
2. Clique no workflow que falhou
3. Veja o log de erro

**Erros comuns:**

- **"Cannot find module"** → falta rodar `npm install` (ou o cache de dependências precisa ser limpo)
- **"Invalid frontmatter"** → algum arquivo `.md` em `src/content/dicas/` tem frontmatter mal formado (categoria errada, data inválida, etc.)
- **"Slug already exists"** → dois arquivos `.md` com mesmo nome

## Build local pra testar

Antes de mexer em coisas estruturais, rode local:

```bash
npm install
npm run dev
```

E acesse http://localhost:4321/oxygen-dicas/

## Configuração do GitHub Pages

Pra o deploy funcionar pela primeira vez:

1. Vá em **Settings** > **Pages** do repositório
2. Em "Source", selecione **GitHub Actions**
3. Salve
4. Faça um push na `main`
5. O workflow vai rodar e publicar o site

A URL final será: `https://contato.github.io/oxygen-dicas/`

(Se quiserem usar domínio próprio como `dicas.oxygenhub.com.br`, é só adicionar arquivo `CNAME` em `public/` com o domínio dentro, e configurar o DNS.)

## Atualizar dependências

```bash
# Ver o que está desatualizado
npm outdated

# Atualizar Astro pra última versão
npm install astro@latest
```

Sempre testar local depois (`npm run dev` e `npm run build`) antes de commitar atualizações de dependência.

## Onde estão as coisas

| Arquivo / Pasta | O que é |
|---|---|
| `src/content/dicas/*.md` | As dicas (uma por arquivo) |
| `src/content/config.ts` | Schema (estrutura) que valida as dicas |
| `src/pages/index.astro` | Home |
| `src/pages/dicas/[slug].astro` | Página de detalhe de cada dica |
| `src/pages/categoria/[categoria].astro` | Listagem por categoria |
| `src/pages/tag/[tag].astro` | Listagem por tag |
| `src/components/*.astro` | Componentes reutilizáveis (Card, Filtros, etc.) |
| `src/layouts/Layout.astro` | Layout base (header, footer, head) |
| `src/styles/global.css` | Todo o CSS do site |
| `public/images/` | Imagens estáticas (logo) |
| `astro.config.mjs` | Configuração do framework |
| `.github/workflows/deploy.yml` | Auto-deploy no GitHub Pages |
