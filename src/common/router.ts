import Vue from 'vue';
import Router from 'vue-router';
import NotFound from './errors/not-found/not-found';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'WelcomePage',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../pages/welcome-page/welcome-page')
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: () => import(/* webpackChunkName: "about" */ '../pages/about-page/about-page')
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ]
});
