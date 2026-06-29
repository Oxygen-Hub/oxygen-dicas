import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dicas.oxygenhub.com.br',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});

