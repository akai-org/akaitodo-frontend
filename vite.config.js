import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
        },
        plugins: [
            react(),
            // {
            //     name: 'treat-js-files-as-jsx',
            //     async transform(code, id) {
            //         if (!id.match(/src\/.*\.js$/)) return null;

            //         // Use the exposed transform from vite, instead of directly
            //         // transforming with esbuild
            //         return transformWithEsbuild(code, id, {
            //             loader: {
            //                 '.js': 'jsx',
            //             },
            //             jsx: 'automatic',
            //         });
            //     },
            // },
        ],
        resolve: {
            alias: { '#src': fileURLToPath(new URL('./src', import.meta.url)) },
        },
    };
});
