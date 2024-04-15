const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  // devServer: {
  //   proxy: 'https://securetoken.googleapis.com/v1/token?key=AIzaSyDfU8ZviDNX3e8lyuWvxvArfay-C0SUHjM',
  //   },
  css: {
    loaderOptions: {
      scss: { // the change was made here (match the option name with file extension)
        additionalData: `
          @import "./src/components/_base.scss";
        `
      }
    }
  }
})
