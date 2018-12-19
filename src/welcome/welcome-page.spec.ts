import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import Vue, { VueConstructor } from 'vue';
import WelcomePage from './welcome-page';

describe('WelcomePage', () => {
    let localVue: VueConstructor<Vue>;

    beforeEach(() => {
        localVue = createLocalVue();
    });

    it('should render correctly', () => {

        const rdo: Wrapper<WelcomePage> = shallowMount(WelcomePage, { localVue });

        return expect(rdo.html()).toMatchSnapshot();
    });

});
