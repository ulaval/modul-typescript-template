import { Mutation } from 'vuex';
import { MyState } from './my-State';

export class ChangeValueMutation {
    public static TYPE: string = 'CHANGE_VALUE_MUTATION';

    public static mutate: Mutation<MyState> = (state: MyState, payload: any) => {
        state.value1 = 'value-' + payload;
    }
}
