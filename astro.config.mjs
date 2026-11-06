import { defineConfig } from 'astro/config';

// Set SITE_URL in the deployment environment for custom domains.
const site = process.env.SITE_URL || 'https://example.github.io';
const base = process.env.BASE_PATH || '/';
export default defineConfig({ site, base, output: 'static' });
