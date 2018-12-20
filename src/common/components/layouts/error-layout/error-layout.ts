import { MPanel } from '@modul/components/panel/panel';
import { MTemplate } from '@modul/components/template/template';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './error-layout.html';

@WithRender
@Component({
    components: { MTemplate, MPanel }
})
export default class MErrorLayout extends Vue {
}
