import { defineCollection, z } from 'astro:content';

const dicas = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),

    // Categoria principal (nível 1)
    categoria: z.enum(['Viagens', 'Content+', 'IRL', 'Gerais']),

    // Subcategoria (nível 2)
    subcategoria: z.enum([
      // Viagens
      'Passeios', 'Lojas', 'Restaurantes', 'Hospedagem', 'Outros',
      // Content+
      'Podcast', 'Filme', 'Série', 'Documentário', 'Livro',
      // IRL
      'Exposição', 'Evento', 'Festival', 'Palestra',
      // Gerais
      'Profissionais', 'Casa', 'Beleza', 'Compras', 'Saúde', 'Pets'
    ]),

    subtag: z.string().optional(),

    pais: z.string().optional(),
    cidade: z.string().optional(),

    tags: z.array(z.string()).default([]),

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
      // Campos pra Gerais
      nome_profissional: z.string().optional(),
      especialidade: z.string().optional(),
      contato: z.string().optional(),
      pagamento: z.string().optional(),
      faixa_preco: z.string().optional(),
    }).optional(),

    publicado_em: z.coerce.date(),
    destaque: z.boolean().default(false)
  })
});

export const collections = { dicas };
