import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './components/welcome/welcome';

// This synthax allows to load Page2 lazyly in a separate chunk
const Page2: any = (resolve: any) => (require as any)(['../page2/page2'], function(module) {
    resolve(module.default);
});

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/page2',
            name: 'page2',
            component: Page2
        }
    ]
});
