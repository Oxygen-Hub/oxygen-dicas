import { defineCollection, z } from 'astro:content';

const dicas = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),
    categoria: z.enum([
      'Viagens',
      'Restaurantes',
      'Livros',
      'Eventos',
      'Filmes & Séries',
      'Podcasts'
    ]),
    localizacao: z.string().optional(),
    tags: z.array(z.string()).default([]),
    info: z.object({
      endereco: z.string().optional(),
      horario: z.string().optional(),
      site: z.string().optional(),
      reservas: z.string().optional(),
      autor: z.string().optional(),
      editora: z.string().optional(),
      ano: z.string().optional(),
      onde_comprar: z.string().optional(),
      data: z.string().optional(),
      ingresso: z.string().optional(),
      onde_assistir: z.string().optional(),
      duracao: z.string().optional(),
      idioma: z.string().optional(),
      frequencia: z.string().optional(),
      plataforma: z.string().optional(),
    }).optional(),
    publicado_em: z.coerce.date(),
    destaque: z.boolean().default(false)
  })
});

export const collections = { dicas };
