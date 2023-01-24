const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  
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
