import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home
        },{
            path: '/order',
            component: Order
        },{
            path: '/search',
            component: Search
        },{
            path: '/profile',
            component: Profile
        },{
            path: '/',
            component: Home
        }
    ]
})