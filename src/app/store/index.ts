import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { MutationTree } from 'vuex';
import { MyState } from './my-state';
import { ChangeValueMutations } from './mutations';

Vue.use(Vuex);

const myState: MyState = new MyState();
const mutations: MutationTree<MyState> = {
    [ChangeValueMutations.TYPE]: ChangeValueMutations.mutate
};

const store: Store<MyState> = new Vuex.Store<MyState>({
    strict: true, // TODO debug mode only
    state: myState,
    mutations: mutations
});

export default store;
