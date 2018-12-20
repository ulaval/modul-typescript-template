import { shallowMount, Wrapper } from '@vue/test-utils';

export type PropsData = { [key: string]: any };

export function genSnapshotsTests(component: any, states: PropsData): void {
    for (const stateKey of Object.keys(states)) {
        it(stateKey, () => {
            const rdo: Wrapper<any> = shallowMount(component,
                {
                    propsData: states[stateKey]
                });

            return expect(rdo.html()).toMatchSnapshot();
        });
    }
}
