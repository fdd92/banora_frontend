import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import WishList from './components/WishList.vue'

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home, name: "home"},
    {path: '/wish-list', component: WishList, name: "wish-list"},
]

const router = new VueRouter({
    routes
})
import store from './store'
router.afterEach((to) => {
    store.commit('menu/setCurrentPage', to.name)
})

export default router
