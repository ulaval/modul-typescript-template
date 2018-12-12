import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MErrorLayout from '../error-layout/error-layout';
import WithRender from './not-found.html';

@WithRender
@Component({
    components: { MErrorLayout }
})
export default class NotFound extends Vue {
}
