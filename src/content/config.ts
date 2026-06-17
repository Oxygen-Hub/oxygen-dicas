import { defineCollection, z } from 'astro:content';

const dicas = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),

    // Categoria principal (nível 1)
    categoria: z.enum(['Viagens', 'Content+', 'IRL', 'Gerais']),

    // Subcategoria (nível 2) — lista expandida
    subcategoria: z.enum([
      // Viagens
      'Passeios', 'Lojas', 'Restaurantes', 'Hospedagem',
      'Roteiro', 'Destino', 'Bares e cafés', 'Guia', 'Agência', 'Outros',

      // Content+
      'Podcast', 'Filme', 'Série', 'Documentário', 'Livro',
      'Artigo', 'Ferramentas', 'Estudo',

      // IRL
      'Exposição', 'Evento', 'Festival', 'Palestra',

      // Gerais
      'Profissionais', 'Casa', 'Beleza', 'Compras', 'Saúde', 'Pets',
     'Espaços', 'Catering'
    ]),

    subtag: z.string().optional(),
    pais: z.string().optional(),
    cidade: z.string().optional(),
    regiao: z.string().optional(),
    tags: z.array(z.string()).default([]),

    info: z.object({
      // Comuns
      endereco: z.string().optional(),
      horario: z.string().optional(),
      site: z.string().optional(),
      reservas: z.string().optional(),
      indicado_por: z.string().optional(),

      // Content+
      autor: z.string().optional(),
      onde_assistir: z.string().optional(),
      onde_ler: z.string().optional(),
      duracao: z.string().optional(),
      temporadas: z.string().optional(),
      plataforma: z.string().optional(),
      frequencia: z.string().optional(),

      // IRL
      data: z.string().optional(),
      ingresso: z.string().optional(),
      local: z.string().optional(),

      // Gerais
      nome_profissional: z.string().optional(),
      especialidade: z.string().optional(),
      contato: z.string().optional(),
      pagamento: z.string().optional(),
      faixa_preco: z.string().optional(),

      // Viagens extras
      chef: z.string().optional(),
      bairro: z.string().optional(),
      instagram: z.string().optional(),
      periodo_visita: z.string().optional(),
      duracao_sugerida: z.string().optional(),
    }).optional(),

    publicado_em: z.coerce.date(),
    destaque: z.boolean().default(false)
  })
});

export const collections = { dicas };
