import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './my-comp.html?style=./my-comp.scss';
import { MyState } from '@/app/store/my-state';
import { ChangeValueMutation } from '@/app/store/mutations';

@WithRender
@Component
export default class MyComp extends Vue {
    private timer: any;
    private count: number = 0;

    public created() {
        this.timer = setInterval(() => {
            this.count++;
            this.$store.commit(ChangeValueMutation.TYPE, this.count + '...');
        }, 1000);
    }

    public destroyed(): void {
        clearInterval(this.timer);
    }

    public get value(): string {
        if (this.$store != null) {
            return (this.$store.state as MyState).value1;
        } else {
            return '';
        }
    }
}
