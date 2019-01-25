
import Component from 'vue-class-component';
import { Emit, Prop, Vue } from 'vue-property-decorator';
import WithRender from './confirmation.html?style=./confirmation.scss';

@WithRender
@Component
export default class MessageConfirmation extends Vue {
    @Prop({ required: true })
    title!: string;

    @Prop({ required: true })
    text!: string;

    @Prop({
        default: (Vue.prototype).$i18n.translate('common:confirm')
    })
    confirmMsg!: string;

    @Prop({
        default: (Vue.prototype).$i18n.translate('common:cancel')
    })
    cancelMsg!: string;

    @Prop({ default: false })
    open!: boolean;

    @Emit('confirm')
    onConfirm(): void {
    }

    @Emit('cancel')
    onCancel(): void {
    }
}
