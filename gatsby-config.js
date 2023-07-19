/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://my-gatsby-site.aquinaso.io`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [
        "G-73Y5H7SC2Y"
      ], 
      gtagConfig: {
        ganonymize_ip: true, 
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};