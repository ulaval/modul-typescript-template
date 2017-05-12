import { Mutation } from 'vuex';
import { SubState } from './sub-state';

export class ChangeSubValueMutation {
    public static TYPE: string = 'CHANGE_SUB_VALUE_MUTATION';

    public static mutate: Mutation<SubState> = (state: SubState) => {
        state.value2 += 5;
    }
}
