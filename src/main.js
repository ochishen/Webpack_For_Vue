import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from './components/hello.vue'
Vue.use(VueRouter)
let app = new Vue({
    el:'#app',
    render: h => h(hello)
})