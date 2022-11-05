// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    build: {
        loaders: {
            sass: {
                // implementation: require('sass'),
            },
            scss: {
                implementation: require('sass'),
            },
        },
    },
    css: [
        '@/assets/style/main.sass',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/main.sass" as *\n'
                }
            }
        }
    }
})
