import Vue from 'vue';
import Welcome from '@/app/components/welcome/welcome';

describe('Welcome component', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(Welcome)
        });
        const text: Element | null = vm.$el.querySelector('h1');
        expect(text.textContent).toBe('Welcome to University Laval starter app!');
    });
});
