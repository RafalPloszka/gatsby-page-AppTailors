module.exports = {
  siteMetadata: {
    title: "AppTailors",
    titleTemplate: "AppTailors",
    description:
      "Apptailors specializes in the development of mobile and web applications. Our team takes care of your project by creating of the architecture, preparing the design and developing the application.",
    url: "https://gatsbypageapptailors.gatsbyjs.io",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
