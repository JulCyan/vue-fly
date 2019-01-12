import Vue from 'vue'
import router from './router.js'
import store from "./store.js"

import VueResource from "vue-resource"
Vue.use(VueResource)


// Vue 全局配置
Vue.config.productionTip = false
Vue.http.options.root = 'http://127.0.0.1:3000';
// 设置表单提交形式
Vue.http.options.emulateJSON = true;



// 引入 Element-UI
import { Icon, Button, Card, Loading, Select, Option, InputNumber, FormItem, Form, Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(Icon) // 在 Vue上手动注册 ElementUI
Vue.use(Button)
Vue.use(Card)
Vue.use(Select)
Vue.use(Option)
Vue.use(InputNumber)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.prototype.$loading = Loading.service




// Swiper
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
Vue.prototype.$Swiper = Swiper



// 引入初始化 less 样式表
import "./less/base.less"
// 引入字体图标
import "./lib/fontAwesome/css/font-awesome.css"




// Mint-UI
import { Header, Tabbar, TabItem, Search, Cell, Toast, Loadmore } from "mint-ui"
import 'mint-ui/lib/style.css'




// 注册 Mint-UI 的组件
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Search.name, Search)
Vue.component(Cell.name, Cell)
Vue.component(Loadmore.name, Loadmore)

Vue.prototype.$Toast = Toast





import App from './App.vue'



new Vue({
  router,
  store,
  render: c => c(App)
}).$mount('#app')
