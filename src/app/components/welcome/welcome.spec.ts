import Vue from 'vue';
import Welcome from '@/app/components/welcome/welcome';

describe('Welcome component', () => {
    it('Should render correct contents', () => {
        Vue.config.ignoredElements = ['router-link'];

        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(Welcome)
        });

        const text: Element | null = vm.$el.querySelector('h1');
        expect(text).toBeDefined();

        if (text) {
            expect(text.textContent).toBe('Welcome to University Laval starter app!');
        }
    });
});
