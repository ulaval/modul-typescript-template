import Vuex from 'vuex';
import { MyState } from './my-State';
import { CHANGE_VALUE_MUTATION } from './mutations';

const myState: MyState = new MyState();

export class Store {
    public static createStore(): Vuex.Store<MyState> {
        return new Vuex.Store<MyState>({
            state: myState,
            mutations: {
                [CHANGE_VALUE_MUTATION](state: MyState, payload: string): void {
                    state.value1 = 'value-' + payload;
                }
            }
        });
    }
}
