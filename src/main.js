import Vue from 'vue'
import router from './router'
// import store from './store'


// Vue 全局配置
Vue.config.productionTip = false




// 引入第三方包  /lib
import "./lib/mui/css/mui.min.css" // mui.css
import "./lib/fontAwesome/css/font-awesome.css" // font-awsome.css

// 引入初始化 less 样式表
import "./less/base.less"

import { Header, Button, Tabbar, TabItem} from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)



import App from './App.vue'



new Vue({
  router,
  // store,
  render: c => c(App)
}).$mount('#app')
