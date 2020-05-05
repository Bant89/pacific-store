import aws from "./src/aws-exports"

module.exports = {
  siteMetadata: {
    title: `Pacific Online Stores`,
    description: `Pacific is the web app that let you connect with store owners for all kind of items that you may want to buy.`,
    author: `@bant89`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `PACIFIC`,
        fieldName: `pacific`,
        url: aws.aws_appsync_graphqlEndpoint,
        headers: {
          "x-api-key": aws.aws_appsync_apiKey,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}