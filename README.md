# Oxygen Dicass

Repositório de dicas da comunidade Oxygen Club — restaurantes, viagens, livros, eventos, filmes/séries e podcasts curados pelos assinantes.

## Sobre o projeto

Este é o código-fonte do site **Oxygen Dicas**, um catálogo de recomendações trocadas no grupo da comunidade Oxygen Club, organizado e disponível para fácil consulta.

- **Site no ar:** [https://dicas.oxygenhub.com.br](https://dicas.oxygenhub.com.br) (GitHub Pages com domínio próprio)
- **Fonte de alimentação:** dicas são adicionadas via Claude (com acesso ao repositório por MCP)
- **Tecnologia:** [Astro](https://astro.build) (static site generator) + GitHub Pages

## Como o site funciona

O conteúdo de cada dica vive como um arquivo Markdown em `src/content/dicas/`. Quando um arquivo novo é commitado, o GitHub Actions builda o site e publica automaticamente.

```
oxygen-dicas/
├── src/
│   ├── content/dicas/        # As dicas (arquivos .md)
│   ├── pages/                # Páginas do site (home, detalhe, categoria, tag)
│   ├── components/           # Componentes reutilizáveis
│   ├── layouts/              # Layout base
│   └── styles/               # CSS global
├── public/images/            # Logo e imagens estáticas
├── .github/workflows/        # Deploy automático
└── astro.config.mjs          # Configuração do Astro
```

## Como adicionar uma nova dica

Veja [`docs/COMO-ADICIONAR-DICA.md`](docs/COMO-ADICIONAR-DICA.md) — guia completo do fluxo.

Resumo: você manda a dica no chat do Claude (texto, print, link), e o Claude cria o arquivo `.md` correto neste repositório. O site rebuilda automaticamente em ~1-2 minutos.

## Acesso (portão por email)

O site é exclusivo para membros do Oxygen Club. Antes de chegar ao conteúdo, o
visitante passa por um **portão simples de acesso** (`/acesso`):

1. Informa o email na página de acesso.
2. O email (em minúsculas, sem espaços) é validado contra a base de membros via
   `POST {PUBLIC_ACCESS_API}` com corpo `{ "email": "..." }`. A resposta é
   `{ "eligible": true | false }`.
3. Se elegível, gravamos a flag `oxygenDicasAccess=1` no `localStorage` (e o email
   em `oxygenDicasEmail`) e redirecionamos para a home.
4. Quem não tem a flag é redirecionado para `/acesso` por um script no `<head>`
   do layout.

É um portão **de fricção** (friction-level): não há login, senha nem OTP, e o
conteúdo ainda é enviado ao navegador. Um usuário técnico consegue contornar —
isso é um tradeoff aceito de propósito, para manter a experiência simples.

### Configuração

Defina a variável de ambiente pública `PUBLIC_ACCESS_API` com a URL completa do
endpoint de validação. Ela deve apontar para o endpoint de **produção** do
`oxygen-admin`, servido no domínio próprio `https://admin.oxygenhub.com.br`:

```bash
PUBLIC_ACCESS_API=https://admin.oxygenhub.com.br/api/dicas-access
```

- Localmente: copie `.env.example` para `.env` e ajuste o valor.
- No deploy (GitHub Pages / Actions): configure `PUBLIC_ACCESS_API` no ambiente de
  build. Sem ela, o site builda normalmente usando o endpoint de produção do
  `oxygen-admin` como padrão (`https://admin.oxygenhub.com.br/api/dicas-access`).

## Categorias

- Viagens
- Restaurantes
- Livros
- Eventos
- Filmes & Séries
- Podcasts

Cada dica tem **uma categoria principal** mais **tags livres**. Por exemplo, um restaurante em Lisboa fica em "Restaurantes" como categoria principal, mas pode ter a tag `viagens` — assim aparece nos dois filtros.

## Rodar localmente

Para desenvolvedores que queiram testar mudanças antes de fazer push:

```bash
# Instalar dependências
npm install

# Subir servidor local em http://localhost:4321
npm run dev

# Buildar pra produção (gera pasta dist/)
npm run build

# Pré-visualizar o build
npm run preview
```

Pré-requisito: Node.js 18+ instalado.

## Manutenção

Documentação técnica adicional em [`docs/MANUTENCAO.md`](docs/MANUTENCAO.md):

- Como atualizar o logo
- Como adicionar uma categoria nova
- Como mudar cores ou tipografia
- Como diagnosticar erros de build

## Contato

Mantido pela equipe do Oxygen Club. Para dúvidas ou problemas: contato@oxygenhub.com.br
