import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';
import WithRender from './confirmation.html?style=./confirmation.scss';

@WithRender
@Component
export default class MessageConfirmation extends Vue {
    @Prop({ required: true })
    title!: string;

    @Prop({ required: true })
    text!: string;

    @Prop({
        default: (Vue.prototype as any).$i18n.translate('common:confirm')
    })
    confirmMsg!: string;

    @Prop({
        default: (Vue.prototype as any).$i18n.translate('common:cancel')
    })
    cancelMsg!: string;

    @Prop({ default: false })
    open!: boolean;

    onConfirm(): void {
        this.$emit('confirm');
    }

    onCancel(): void {
        this.$emit('cancel');
    }
}
