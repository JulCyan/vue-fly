import Vue from 'vue'
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import CategoryContainer from "./components/tabbar/CategoryContainer.vue"
import ShoppingContainer from "./components/tabbar/ShoppingContainer.vue"
import BuyCarContainer from "./components/tabbar/BuyCarContainer.vue"
import CenterContainer from "./components/tabbar/CenterContainer.vue"

import VueRouter from "vue-router"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: "/", name: "home", redirect: "/home" },
    {path: "/home", name: "home", component: HomeContainer},
    {path: "/category", name: "category", component: CategoryContainer},
    {path: "/shopping", name: "shopping", component: ShoppingContainer},
    {path: "/buycar", name: "buycar", component: BuyCarContainer},
    {path: "/center", name: "center", component: CenterContainer}
    // {path: '/', name: '', component: () => import('')}
  ]
})
