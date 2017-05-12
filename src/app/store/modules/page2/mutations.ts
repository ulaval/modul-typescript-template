import { Mutation } from 'vuex';
import { SubState } from './sub-state';

export class SubStateMutations {
    public static CHANGE_TYPE: string = 'CHANGE_SUB_VALUE_MUTATION';

    public static INIT_TYPE: string = 'GITHUB_REPO_INIT';
    public static SUCCESS_TYPE: string = 'GITHUB_REPO_SUCCESS';
    public static ERROR_TYPE: string = 'GITHUB_REPO_ERROR';

    public static changeMutation: Mutation<SubState> = (state: SubState) => {
        state.value2 += 5;
    }

    public static initMutation: Mutation<SubState> = (state: SubState) => {
        state.githubRepo.isfectching = true;
    }

    public static successMutation: Mutation<SubState> = (state: SubState, repo: any) => {
        state.githubRepo.isfectching = false;
        state.githubRepo.repo = repo;
    }

    public static errorMutation: Mutation<SubState> = (state: SubState, reason: any) => {
        state.githubRepo.isfectching = false;
        state.githubRepo.lastError = reason;
    }
}
