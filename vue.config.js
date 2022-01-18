module.exports = {
  publicPath: "/cuva-test/",
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/styles/_mixins"; ',
      },
    },
  },
};
