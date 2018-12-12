import MErrorLayout from '@/common/layouts/error-layout/error-layout';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './not-found.html';

@WithRender
@Component({
    components: { MErrorLayout }
})
export default class NotFound extends Vue {
}
