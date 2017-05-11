import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './page2.html';
import { SubState } from '@/app/store/modules/page2/sub-state';
import { CHANGE_SUB_VALUE_MUTATION } from '@/app/store/modules/page2/mutations';
import { Page2StoreModule } from '@/app/store/modules/page2';

@WithRender
@Component
export default class Page2 extends Vue {
    private timer: any;

    public created() {
        this.$store.registerModule('page2', new Page2StoreModule());

        this.timer = setInterval(() => {
            this.$store.commit(CHANGE_SUB_VALUE_MUTATION);
        }, 1000);
    }

    public destroyed(): void {
        clearInterval(this.timer);
        this.$store.unregisterModule('page2');
    }

    public get value(): number {
        return (this.$store.state.page2 as SubState).value2;
    }
}
