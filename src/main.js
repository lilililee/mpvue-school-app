import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import './assets/css/index.less'



// mpvue 不支持直接注入vuex store的方式
Vue.prototype.$store = store


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/home/index/main',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      backgroundColor: '#eee',
      // position:'top',
      "list": [{
        "pagePath": "pages/home/index/main",
        "text": "首页"
      }, {
        "pagePath": "pages/calendar/index/main",
        "text": "首页"
      }, {
        "pagePath": "pages/order/index/main",
        "text": "首页"
      }, {
        "pagePath": "pages/user/index/main",
        "text": "日志"
      }]
    },
  }
}
