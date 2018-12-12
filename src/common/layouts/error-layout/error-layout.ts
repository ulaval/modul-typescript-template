import { MPanel } from '@ulaval/modul-components/dist/components/panel/panel';
import { MTemplate } from '@ulaval/modul-components/dist/components/template/template';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './error-layout.html';

@WithRender
@Component({
    components: { MTemplate, MPanel }
})
export default class MErrorLayout extends Vue {
}
