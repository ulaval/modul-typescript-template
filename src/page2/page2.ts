import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './page2.html';
import { SubState } from '@/app/store/modules/page2/sub-state';
import { SubStateActions } from '@/app/store/modules/page2/actions';
import { SubStateMutations } from '@/app/store/modules/page2/mutations';
import { Page2StoreModule } from '@/app/store/modules/page2';

@WithRender
@Component
export default class Page2 extends Vue {
    private timer: any;

    public created() {
        this.$store.registerModule('page2', new Page2StoreModule());

        this.timer = setInterval(() => {
            this.$store.commit(SubStateMutations.CHANGE_TYPE);
        }, 1000);

        this.$store.dispatch(SubStateActions.GET_TYPE);
    }

    public destroyed(): void {
        clearInterval(this.timer);
        this.$store.unregisterModule('page2');
    }

    private get state(): SubState {
        return (this.$store.state.page2 as SubState);
    }

    public get value(): number {
        return this.state.value2;
    }

    public get isFetching(): boolean {
        return this.state.githubRepo.isfectching;
    }

    public get repoItems(): any[] {
        return this.state.githubRepo.repo.data;
    }
}
