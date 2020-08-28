import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import { PositionResult } from 'vue-router/types/router'

import MenuPage from './views/MenuPage.vue'
import ShowBtcPage from './views/ShowBtcPage.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
    { path: '/', component: MenuPage },
    { path: '/ShowBtcPage', component: ShowBtcPage },
    { path: '*', redirect: '/' },
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition): PositionResult | Promise<PositionResult> | undefined | null | never {
        if (savedPosition) {
            return savedPosition
        } else {
            const selector = location.hash
            return selector ? { selector } : { x: 0, y: 0 }
        }
    },
    routes,
})
