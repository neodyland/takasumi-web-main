import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://neodyland.github.io',
  base: 'takasumi-web-main',
  integrations: [tailwind(), react()],
});