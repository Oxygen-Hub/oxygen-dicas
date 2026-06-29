/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** URL do endpoint que valida o email contra a base de membros (oxygen-admin). */
  readonly PUBLIC_ACCESS_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}