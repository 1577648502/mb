module.exports = {
    devServer: {
      proxy: {
        '/api': {// 使用"/api"来代替"http://f.apiplus.c"
          // target: 'http://192.168.0.102:8080', // 源地址
          target: 'http://127.0.0.1:8080/', // 源地址
          changeOrigin: true, // 改变源
        //   pathRewrite: {
        //     '^/Shopping': '' // 路径重写
        //   }
        },
        // '/api':{
        //   target:'172.30.21.121/Shopping/public',
        //   changeOrigin:true,
        //   pathRewrite: {
        //         '^/api': '' // 路径重写
        //       }
        // }
      }
    }
  }