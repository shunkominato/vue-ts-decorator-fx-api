import Vue, { VNode } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// debug on
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
    router,
    store,
    render: (h): VNode => h(App),
}).$mount('#app')
