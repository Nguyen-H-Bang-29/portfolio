export default {
    buildModules: [
        'nuxt-vite',
        '@nuxtjs/google-fonts'
    ],
    dir: {
        pages: 'src/pages',
        components: 'src/components',
        layouts: 'src/layouts',
        store: 'src/store'
    },
    vite: {
        build: true,
        ssr: true,
        vue: {},
    },
    link: [
        {
            rel: "stylesheet",
            type: "text/css",
            href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
        }
    ],
    googleFonts: {
        families: {
            'Zen+Kaku+Gothic+Antique': true,
        }
    }

}
