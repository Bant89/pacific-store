module.exports = {
  siteMetadata: {
    title: `Pacific Online Stores`,
    description: `Pacific is the web app that let you connect with store owners for all kind of items that you may want to buy.`,
    author: `@bant89`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Oxygen', 'Ubuntu', 'Roboto']
        }
      }
    }
    // {
    //   resolve: `gatsby-source-pg`,
    //   options: {
    //     // connectionString: process.env.POSTGRES_URL,
    //     connectionString:
    //       "postgres://bant:cesar5@localhost:5432/backendPacific_development",
    //     schema: "public",
    //     refetchInterval: 60,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
