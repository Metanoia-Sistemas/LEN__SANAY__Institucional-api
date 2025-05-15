// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/scripts',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],

    app: {
        pageTransition: { 
            name: 'pagina-blur', 
            mode: 'out-in'
        },
        layoutTransition: { 
            name: 'pagina-blur', 
            mode: 'out-in'
        },
    },

    runtimeConfig:{
        public: {
            API_BASE: '',
            MAPS_KEY: '',
            RECAPTCHA_KEY: '',
        }
    },

    css: [ 
        '~/assets/scss/main.scss',
    ],

    vite: {
        css : {
            preprocessorOptions : {
                scss : {
                    api: 'modern-compiler',
                    additionalData: '@use "@/assets/scss/utils/vars" as *; @use "@/assets/scss/utils/functions" as *;',
                }
            }
        }
    },
})