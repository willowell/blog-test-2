///==============================================================================================///
///                                    SITE METADATA                                             ///
///==============================================================================================///
module.exports = {
  siteMetadata: {
    title: 'William Howell',
    author: {
      name: 'William Howell',
    },
    description: 'My little plot of digital land',
    siteUrl: 'https://www.willhow.com',
  },

///==============================================================================================///
///                                            META                                              ///
///==============================================================================================///
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'William Howell',
        short_name: 'William Howell',
        description: 'My little plot of digital land',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },

    'gatsby-plugin-react-helmet',
    
    'gatsby-plugin-netlify',

    'gatsby-plugin-sitemap',

    'gatsby-plugin-offline',

    //TODO: RSS Feed?


///==============================================================================================///
///                              IMAGES AND STATIC DATA                                          ///
///==============================================================================================///
    'gatsby-plugin-sharp',

    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },

///==============================================================================================///
///                                          MARKDOWN                                            ///
///==============================================================================================///

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
        
          /// IMAGES
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1rem;',
            },
          },
          
          /// IFRAMES
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },

          /// CODE HIGHLIGHTS
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true
              }
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },

    'gatsby-plugin-catch-links',


///==============================================================================================///
///                                           SEARCH                                             ///
///==============================================================================================///
    
    //TODO

///==============================================================================================///
///                                         TYPESCRIPT                                           ///
///==============================================================================================///
    'gatsby-plugin-typescript',

    /// GraphQL Type Code Generation
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },

///==============================================================================================///
///                                          STYLING                                             ///
///==============================================================================================///
    'gatsby-plugin-sass',

    'gatsby-plugin-postcss',

    'gatsby-plugin-tailwindcss',

    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true
      }
    }
  ],
}
