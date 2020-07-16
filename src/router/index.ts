import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../containers/home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/ajout',
        name: 'Ajout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../containers/ajout.vue'),
    },
    {
        path: '/boutons',
        name: 'Bouton',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../components/boutons.vue'),
    },
    {
        path: '/fenetres',
        name: 'Fenetres',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../components/fenetres.vue'
            ),
    },
    {
        path: '/navigation',
        name: 'Navigation',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../components/navigation.vue'
            ),
    },
    {
        path: '/tableaux',
        name: 'Tableaux',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../components/tableaux.vue'
            ),
    },
];

const router: VueRouter = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
