import MainHeader from '@/common/components/main-header/main-header';
import { MLink } from '@ulaval/modul-components/dist/components/link/link';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './main-layout.html?style=./main-layout.scss';

@WithRender
@Component({
    components: { MLink, MainHeader }
})
export default class MainLayout extends Vue {
}
