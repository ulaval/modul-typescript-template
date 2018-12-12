import { MLink } from '@ulaval/modul-components/dist/components/link/link';
import { MTemplate } from '@ulaval/modul-components/dist/components/template/template';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './main-layout.html';

@WithRender
@Component({
    components: { MTemplate, MLink }
})
export default class MainLayout extends Vue {
}
