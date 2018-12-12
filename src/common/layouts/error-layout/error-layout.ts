import MMainLayout from '@/common/layouts/main-layout/main-layout';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './error-layout.html';

@WithRender
@Component({
    components: { MMainLayout }
})
export default class MErrorLayout extends Vue {
}
