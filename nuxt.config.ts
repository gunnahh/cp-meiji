// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      basePath: process.env.basePath,
      usedomain: process.env.usedomain,
    },
  },
  app: {
    baseURL: process.env.basePath,
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:image', content: process.env.usedomain + process.env.basePath + '/share.jpg' },
        { property: 'og:url', content: process.env.usedomain + process.env.basePath },
        { property: 'og:type', content: 'website' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        // <script src="https://myawesome-lib.js"></script>
        
        { src :'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js' , tagPosition: 'bodyClose'},
        { src :'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js' , tagPosition: 'bodyClose'},
        // { src :'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' , tagPosition: 'bodyClose'},   
        { src :'https://unpkg.com/aos@2.3.1/dist/aos.js' , tagPosition: 'bodyClose'},  
        { src : process.env.basePath + 'js/slick-animation.js' , tagPosition: 'bodyClose'},
        { src : process.env.basePath + 'js/app.js' , tagPosition: 'bodyClose'},
        
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
        {
          rel: 'canonical',
          href: process.env.usedomain + process.env.basePath
        },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        {  }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        {  }
      ]
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  }, 
  // baseURL: process.env.basePath, 
  nitro: {
    static: true,
  },  
  modules: [
    'nuxt-gtag',
    'nuxt-svgo',
    '@nuxtjs/device',
    '@davestewart/nuxt-scrollbar',
    '@zadigetvoltaire/nuxt-gtm',
    // '@nuxt/image'
  ],  
  // image: {
  //   dir: 'assets/img'
  // },
  device: {
    refreshOnResize: true
  },
  svgo: {
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // customize default plugin options
              inlineStyles: {
                onlyMatchedOnce: true
              },

              // or disable plugins
              cleanupIds: false,
              removeDoctype: false,
              removeViewBox: false
            }
          }
        }
      ]
    }
  },

  css: [        
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/fonts.css',
    '~/assets/css/hamburgers.min.css',
    '~/assets/css/main.css',
    // 'animate.css/animate.css'
  ],

  // plugins: [
  //   { src: "~/plugins/jquery", mode: "client" },
  // ],
  gtm: {
    id: 'GTM-PRRZR2C', 
  },
  gtag: {
    // Your primary Google tag ID
    id: 'G-VH3J6BYEED',
    // Additional configuration for this tag ID
    // config: {
    //   page_title: 'My Custom Page Title'
    // },

    // To send data to multiple destinations, use this option instead:
    tags: [
      // 'GT-XXXXXXXXXX', // Google Ads and GA4
      // 'DC-ZZZZZZZZZZ' // Floodlight
    ]
  },
  // runtimeConfig: {
  //   public: {
  //     baseURL: process.env.basePath,
  //   },
  // },

  
})