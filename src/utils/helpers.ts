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
  const info = d.info || {};

  // 1. Geografia: melhor pista quando o lugar importa (Viagens, Gerais com local)
  if (d.cidade && d.pais) return `${d.cidade}, ${d.pais}`;
  if (d.cidade) return d.cidade;
  if (d.pais) return d.pais;

  // 2. Subtag (refinamento explícito da dica)
  if (d.subtag) return d.subtag;

  // 3. Content+: autoria/origem do conteúdo
  if (info.autor) return info.autor;
  if (info.onde_assistir) return info.onde_assistir;
  if (info.onde_ler) return info.onde_ler;
  if (info.plataforma) return info.plataforma;

  // 4. Gerais sem geografia: especialidade ou nome do profissional/marca
  if (info.especialidade) return info.especialidade;
  if (info.nome_profissional) return info.nome_profissional;

  // 5. IRL sem geografia explícita: local do evento
  if (info.local) return info.local;

  // 6. Último recurso: indicado por
  if (info.indicado_por && info.indicado_por !== 'Membro da comunidade') {
    return `Indicado por ${info.indicado_por}`;
  }

  return '';
}
