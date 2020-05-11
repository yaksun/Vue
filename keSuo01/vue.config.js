const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  css: { // 配置高于chainWebpack中关于css loader的配置
    // modules: true, // 是否开启支持‘foo.module.css’样式
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: { // css预设器配置项
      less: {
        data: ''// `@import "@/assets/scss/mixin.scss";`
      }
    }
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: { // 第三方插件配置
  },
  pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://172.16.14.151:20014',
        // ws: true,
        source: false, // false http true https
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/videoTest': {
        target: 'http://172.16.14.92:8083',
        changOrigin: true,
        pathRewrite: {
          '^/videoTest': ''
        }
      },
      '/getVideo': {
        target: 'http://172.31.108.167:8080',
        changOrigin: true,
        pathRewrite: {
          '^/getVideo': ''
        }
      }
    },
    before: app => {}
   },
   chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader,如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    // 添加要替换的 loader
    svgRule.use('svg-sprite-loader').loader('svg-sprite-loader').options({
      symbolId: 'icon-[name]'
    })
  }
}
