import Vue from 'vue';
import Vuex, { MutationTree } from 'vuex';
import state, { MyState } from './my-State';
import { ChangeValueMutation } from './mutations';

Vue.use(Vuex);

const myState: MyState = state;
const mutations: MutationTree<MyState> = {
    [ChangeValueMutation.TYPE]: ChangeValueMutation.mutate
};

const store: Vuex.Store<MyState> = new Vuex.Store<MyState>({
    state: myState,
    mutations: mutations
});

export default store;
