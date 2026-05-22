import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://contato.github.io',
  base: '/oxygen-dicas',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
