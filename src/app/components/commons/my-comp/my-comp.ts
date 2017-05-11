import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './my-comp.html?style=./my-comp.scss';
import { MyState } from '@/app/store/my-state';
import { CHANGE_VALUE_MUTATION } from '@/app/store/mutations';

@WithRender
@Component
export default class MyComp extends Vue {
    private timer: any;
    private count: number = 0;

    public created() {
        this.timer = setInterval(() => {
            this.count++;
            this.$store.commit(CHANGE_VALUE_MUTATION, this.count + '...');
        }, 1000);
    }

    public destroyed(): void {
        clearInterval(this.timer);
    }

    public get value(): string {
        return (this.$store.state as MyState).value1;
    }
}
