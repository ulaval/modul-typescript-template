import Vue from 'vue';
import axios from 'axios';
import { Action, ActionContext } from 'vuex';
import { SubState } from './sub-state';
import { MyState } from '../../my-state';
import { SubStateMutations } from './mutations';

export class SubStateActions {
    public static GET_TYPE: string = 'GITHUB_REPO_GET';

    public static getGithubRepoAction: Action<SubState, MyState> = (context: ActionContext<SubState, MyState>) => {
        context.commit(SubStateMutations.INIT_TYPE);

        setTimeout(() => {
            axios.get('https://api.github.com/users/ulaval/repos').then(value => {
                context.commit(SubStateMutations.SUCCESS_TYPE, value);
            }, reason => {
                context.commit(SubStateMutations.ERROR_TYPE, reason);
            });
        }, 500);
    }
}
