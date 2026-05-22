# Oxygen Dicas

Repositório de dicas da comunidade Oxygen Club — restaurantes, viagens, livros, eventos, filmes/séries e podcasts curados pelos assinantes.

## Sobre o projeto

Este é o código-fonte do site **Oxygen Dicas**, um catálogo de recomendações trocadas no grupo da comunidade Oxygen Club, organizado e disponível para fácil consulta.

- **Site no ar:** (a configurar após o deploy)
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
