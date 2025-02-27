module.exports = {
  siteMetadata: {
    title: `Portafolio Felipe Ospina`,
    description: `Desarrollo web y automatizaciones`,
    author: `@felipeospina`,
    social: [
      {
        url: "https://github.com/felipeospina21",
        name: "GitHub",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat"],
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-breakpoints",
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tags-list`,
        path: `./content/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/static/img`,
      },
    },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portafolio Felipe Ospina`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/felipe-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
