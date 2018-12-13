import MainHeader from '@/common/main-header/main-header';
import { MLink } from '@ulaval/modul-components/dist/components/link/link';
import { MTemplate } from '@ulaval/modul-components/dist/components/template/template';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './main-layout.html';

@WithRender
@Component({
    components: { MTemplate, MLink, MainHeader }
})
export default class MainLayout extends Vue {
}
