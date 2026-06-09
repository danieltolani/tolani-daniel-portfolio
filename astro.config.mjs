// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://tolanidaniel.me',
  output: 'static',
  adapter: vercel(),
  integrations: [react()],
  vite: {
    // Pre-bundle these at dev-server start. Otherwise Vite optimizes them lazily the
    // first time they're imported — which, during a Barba SPA navigation to a project
    // page (from a page that doesn't use them), makes the dynamically-appended script's
    // import fail, so the project's init never runs until a hard refresh. Prod is
    // unaffected (everything is bundled at build time).
    optimizeDeps: {
      include: ['smooothy', 'gsap', 'gsap/ScrollTrigger', '@barba/core'],
    },
  },
});