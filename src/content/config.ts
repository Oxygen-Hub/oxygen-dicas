import { defineCollection, z } from 'astro:content';

const dicas = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),

    // Categoria principal (nível 1)
    categoria: z.enum(['Viagens', 'Content+', 'IRL']),

    // Subcategoria (nível 2) — varia conforme categoria
    subcategoria: z.enum([
      // Viagens
      'Passeios', 'Lojas', 'Restaurantes', 'Hospedagem', 'Outros',
      // Content+
      'Podcast', 'Filme', 'Série', 'Documentário', 'Livro',
      // IRL
      'Exposição', 'Evento', 'Festival', 'Palestra'
    ]),

    // Subtag (nível 3) — opcional, refina a subcategoria em Content+
    subtag: z.string().optional(),

    // Geografia — pra Viagens e IRL
    pais: z.string().optional(),
    cidade: z.string().optional(),

    // Tags livres (continua existindo)
    tags: z.array(z.string()).default([]),

    // Info estruturada — varia por subcategoria
    info: z.object({
      endereco: z.string().optional(),
      horario: z.string().optional(),
      site: z.string().optional(),
      reservas: z.string().optional(),
      autor: z.string().optional(),
      onde_assistir: z.string().optional(),
      duracao: z.string().optional(),
      temporadas: z.string().optional(),
      plataforma: z.string().optional(),
      frequencia: z.string().optional(),
      data: z.string().optional(),
      ingresso: z.string().optional(),
      local: z.string().optional(),
    }).optional(),

    publicado_em: z.coerce.date(),
    destaque: z.boolean().default(false)
  })
});

export const collections = { dicas };
