module.exports = {
    siteMetadata: {
        title: 'Малышев про',
        description: 'Блог какого-то ещё одного фронтендера.',
    },
    plugins: [
        'gatsby-plugin-linaria',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `malyshev.pro`,
                short_name: `malyshev.pro`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ebd913`,
                display: `minimal-ui`,
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/Layout.js'),
                    posts: require.resolve('./src/components/BlogPostLayout.js'),
                },
                gatsbyRemarkPlugins: [
                    'gatsby-remark-images',
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                            aliases: {},
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
                name: 'posts',
                path: './posts/',
            },
            __key: 'posts',
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/posts`,
            },
        },
    ],
}
