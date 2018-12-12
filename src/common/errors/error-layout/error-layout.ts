import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MMainLayout from '../../main-layout/main-layout';
import WithRender from './error-layout.html';

@WithRender
@Component({
    components: { MMainLayout }
})
export default class MErrorLayout extends Vue {
}
