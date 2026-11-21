import { defineConfig } from 'astro/config';

export default defineConfig({
    site: '[https://andmdam.github.io](https://andmdam.github.io)',
    base: '/public_portfolio',
    build: {
        format: 'file',
    },
});