export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\+/g, '-plus')
    .replace(/\s+&\s+/g, '-e-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function categoriaSlug(cat: string): string {
  if (cat === 'Viagens') return 'viagens';
  if (cat === 'Content+') return 'content-plus';
  if (cat === 'IRL') return 'irl';
  if (cat === 'Gerais') return 'gerais';
  return slugify(cat);
}

export function metaDoCard(dica: any): string {
  const d = dica.data;
  if (d.cidade && d.pais) return `${d.cidade}, ${d.pais}`;
  if (d.cidade) return d.cidade;
  if (d.pais) return d.pais;
  if (d.subtag) return d.subtag;
  return '';
}
