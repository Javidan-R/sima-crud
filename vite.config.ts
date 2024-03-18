import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        eslintPlugin({
            cache: false,
            include: ['./src/**/*.ts', './src/**/*.tsx'],
        }),
    ],
    server: {
        port: 3000
    },
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version)
    }
});
