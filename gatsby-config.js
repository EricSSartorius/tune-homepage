module.exports = {
  siteMetadata: {
    title: `Tune & his Flying Home Studio`,
    description: `Tune & his Flying Home Studio`,
    author: `@_purefunc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tune-homepage`,
        short_name: `tune`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#e95424`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
