import Vue from 'vue'
import VueRouter from 'vue-router'
import VueX from 'vuex'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './components/index.vue'
import logon from './components/logon.vue'
Vue.use(VueX)
Vue.use(VueRouter)
Vue.use(element)
let router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:index,
            children:[
                {
                    path:'logon',
                    component:logon
                }
            ]
        }
    ]
})
let store = new VueX.Store({
    strict:process.env.NODE_ENV !== 'production',
    
})
let app = new Vue({
    el: '#app',
    template: `
    <div>
        <router-view>
        </router-view>
    </div>
    `,
    router,
    store
})