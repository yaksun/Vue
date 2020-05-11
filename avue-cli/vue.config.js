// 基础路径 注意发布之前要先修改这里
let baseUrl = './'
module.exports = {
  baseUrl: baseUrl, // 根据你的实际情况更改这里
 
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
    entry
      .add('@/mock')
      .end()
  },
  //配置转发代理
  devServer: {
    proxy: {
        // '/api': {
        //     target: 'http://192.168.1.4:8080',
        //     ws: true,
        //     pathRewrite: {
        //         '^/api': '/api'
        //     },
        //     changeOrigin:true
        // },

        '/finishTopTenMap': {
          target: 'http://192.168.1.220:8016/',
          ws: true,
          pathRewrite: {
              '^/finishTopTenMap': '/finishTopTenMap'
          },
          changeOrigin:true
      },

      '/getNameToIssue': {
        target: 'http://192.168.1.220:8016/',
        ws: true,
        changeOrigin:true
    },

        // 以什么开头的请求链接
        '/sugrec': {
          target: 'https://www.baidu.com',
          ws: true,
          changeOrigin:true
      },
      // http://192.168.1.220:8016/finishTopTenPie
      // http://192.168.1.220:8016/finishTopTen
    //   '/finishTopTenPie': {
    //     target: 'http://192.168.1.220:8016/',
    //     ws: true,
    //     changeOrigin:true
    // },
    }
  }
}