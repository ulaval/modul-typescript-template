import Vue from 'vue';
import Test from '@/app/components/test/Test';

describe('Test component', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(Test)
        });
        const text: Element | null = vm.$el.querySelector('p');
        expect(text.textContent).toBe('This is a sample component');
    });
});
