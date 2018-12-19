import NotFound from '@/common/components/errors/not-found/not-found';
import MainLayout from '@/common/components/layouts/main-layout/main-layout';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'MainLayout',
            component: MainLayout,
            children: [
                {
                    path: '',
                    name: 'WelcomePage',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: (): any => import(/* webpackChunkName: "todolist" */ '@/welcome/welcome-page')
                },
                {
                    path: 'todos',
                    name: 'TodolistPage',
                    component: (): any => import(/* webpackChunkName: "todolist" */ '@/todolist/pages/todolist-page/todolist-page')
                },
                {
                    path: 'about',
                    name: 'AboutPage',
                    component: (): any => import(/* webpackChunkName: "about" */ '@/about/about-page')
                }
            ]
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ]
});
