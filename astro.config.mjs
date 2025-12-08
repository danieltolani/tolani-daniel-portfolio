// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://tolani-daniel-portfolio.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [react()]
});