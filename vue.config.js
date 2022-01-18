module.exports = {
  publicPath: "/hotels/",
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/styles/_mixins"; ',
      },
    },
  },
};
