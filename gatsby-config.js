/* eslint-disable no-undef */
module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'IRCB Pages',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-sharp`,
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `I Read Comic Books`,
                short_name: `IRCB`,
                start_url: `/`,
                theme_color: '#931a1c',
                background_color: '#931a1c',
                display: 'standalone',
                icon: `src/images/fav.png`,
                icons: [
                    {
                        src: 'src/images/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'src/images/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/mdx-layout.tsx'),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            disableBgImageOnAlpha: true,
                            linkImagesToOriginal: false,
                            maxWidth: 1200,
                            quality: 85,
                        },
                    },
                ],
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
};
