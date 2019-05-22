import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './app'
import router from './router/index'
Vue.use(vueRouter);
new Vue({
    el: '#root',  //挂载点
    router,  // 路由
    template: '<App />', //模板
    components:{ App }
    
})