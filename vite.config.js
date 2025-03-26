import { defineConfig } from 'vite';

export default defineConfig({
    base: '/My_password_generator/', // Change this to your repo name
    build: {
        outDir: 'dist',
    },
    server: {
        port: 3000
    }
});
