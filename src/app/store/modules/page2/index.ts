import Vuex from 'vuex';
import { MyState } from '../../my-state';
import state, { SubState } from './sub-state';
import { ChangeSubValueMutation } from './mutations';

class Page2StoreModule implements Vuex.Module<SubState, MyState> {
    public namespaces: boolean = true;
    public state: SubState = state;
    public mutations: Vuex.MutationTree<SubState> = {
        [ChangeSubValueMutation.TYPE]: ChangeSubValueMutation.mutate
    };
}

export default new Page2StoreModule();
