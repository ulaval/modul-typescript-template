import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Vue, { VueConstructor } from 'vue';
import HelloWorld from './hello-world';

describe('HelloWord', () => {
    let localVue: VueConstructor<Vue>;

    beforeEach(() => {
        localVue = createLocalVue();
    });

    it('should render correctly', () => {
        expect(true).toBeTruthy();

        const rdo: Wrapper<HelloWorld> = mount(HelloWorld, {
            localVue: localVue,
            propsData: {
                msg: 'test hello world'
            }
        });

        return expect(rdo.html()).toMatchSnapshot();

    });

});
