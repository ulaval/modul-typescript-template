import Vuex from 'vuex';
import { MyState } from '../../my-state';
import { SubState } from './sub-state';
import { SubStateActions } from './actions';
import { SubStateMutations } from './mutations';

export class Page2StoreModule implements Vuex.Module<SubState, MyState> {
    public namespaces: boolean = true;

    public state: SubState = new SubState();

    public mutations: Vuex.MutationTree<SubState> = {
        [SubStateMutations.CHANGE_TYPE]: SubStateMutations.changeMutation,
        [SubStateMutations.INIT_TYPE]: SubStateMutations.initMutation,
        [SubStateMutations.SUCCESS_TYPE]: SubStateMutations.successMutation,
        [SubStateMutations.ERROR_TYPE]: SubStateMutations.errorMutation
    };

    public actions: Vuex.ActionTree<SubState, MyState> = {
        [SubStateActions.GET_TYPE]: SubStateActions.getGithubRepoAction
    };
}
