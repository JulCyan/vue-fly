import Vue from 'vue'
import CategoryContainer from "./components/tabbar/CategoryContainer.vue"
import ShoppingContainer from "./components/tabbar/ShoppingContainer.vue"
import BuyCarContainer from "./components/tabbar/BuyCarContainer.vue"
import CenterContainer from "./components/tabbar/CenterContainer.vue"
import Search from "./components/subcomponents/Search.vue"
import GoodsList from "./components/goods/GoodsList.vue"
import GoodsInfo from "./components/goods/GoodsInfo.vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: "/", name: "home", redirect: "/home"},
    {path: "/home", name: "home", components: {main: () => import("./components/tabbar/HomeContainer.vue")}},
    {path: "/category", name: "category", components: {main: CategoryContainer}},
    {path: "/shopping", name: "shopping", components: {main: ShoppingContainer}},
    {path: "/buycar", name: "buycar", components: {main: BuyCarContainer}},
    {path: "/center", name: "center", components: {main: CenterContainer}},
    {path: "/search", name: "search", components: {search: Search}},
    {path: "/goodslist/:search", name: "goodslist", components: {main: GoodsList}},
    {
      path: "/goodsInfo/:id",
      name: "goodsInfo",
      components: {main: GoodsInfo},
      beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.$store.commit("changeBallStyle")
        })
      }
    },
    {path: "/login", name: "login", components: {main: () => import("./components/user/Login.vue")}},
    {path: "/register", name: "register", components: {main: () => import("./components/user/Register.vue")}}
  ]
})
