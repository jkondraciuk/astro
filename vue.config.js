module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/styles/colors.scss";
            @import "@/assets/styles/resolution.scss";
          `
        }
      }
    }
  };