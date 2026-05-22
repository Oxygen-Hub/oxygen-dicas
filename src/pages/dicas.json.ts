import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const dicas = await getCollection('dicas');

  const data = dicas
    .sort((a, b) => b.data.publicado_em.valueOf() - a.data.publicado_em.valueOf())
    .map(d => ({
      slug: d.slug,
      titulo: d.data.titulo,
      subtitulo: d.data.subtitulo || '',
      categoria: d.data.categoria,
      subcategoria: d.data.subcategoria,
      subtag: d.data.subtag || '',
      pais: d.data.pais || '',
      cidade: d.data.cidade || '',
      tags: d.data.tags || [],
      meta: (() => {
        if (d.data.cidade && d.data.pais) return `${d.data.cidade}, ${d.data.pais}`;
        if (d.data.cidade) return d.data.cidade;
        if (d.data.pais) return d.data.pais;
        if (d.data.subtag) return d.data.subtag;
        return '';
      })(),
    }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
