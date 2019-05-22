import Router from 'vue-router'
import routes from './router'
export default new Router({
    mode: 'hash',
    base:'/',
    routes: routes
})