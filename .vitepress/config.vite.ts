import { UserConfig } from 'vitepress'
import WindiCSS from 'vite-plugin-windicss'

const vite: UserConfig['vite'] = {
    plugins: [
        // @ts-ignore
        WindiCSS({
            preflight: false,
            scan: {
                dirs: ['../.vitepress', '../src']
            },
            config: {
                darkMode: 'class', // or 'media'
                theme: {
                    extend: {
                    }
                },
                extract: {
                    include: [
                        '../.vitepress/**/*.{vue,html,jsx,tsx,ts,md}',
                        '../src/**/*.{vue,html,jsx,tsx,md}',
                    ],
                },
            }
        })
    ],
    define: {
        __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
        include: ['gsap', 'dynamics.js'],
        exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
        external: ['@vue/repl']
    },
    server: {
        host: true,
        fs: {
            // for when developing with locally linked theme
            allow: ['../..']
        }
    },
    build: {
        minify: 'terser',
        chunkSizeWarningLimit: Infinity
    },
    json: {
        stringify: true
    }
}

export default vite;
