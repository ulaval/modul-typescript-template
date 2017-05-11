import Vuex from 'vuex';
import { MyState } from '../../my-state';
import { SubState } from './sub-state';
import { CHANGE_SUB_VALUE_MUTATION } from './mutations';

export class Page2StoreModule implements Vuex.Module<SubState, MyState> {
    public namespaces: boolean;
    public state: SubState;
    public mutations: Vuex.MutationTree<SubState>;

    constructor() {
        this.namespaces = true;
        this.state = new SubState();
        this.mutations = {
            [CHANGE_SUB_VALUE_MUTATION](state: SubState): void {
                state.value2 += 5;
            }
        };
    }
}
