import MainLayout from '@/common/components/layouts/main-layout/main-layout';
import { MPanel } from '@modul/components/panel/panel';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './about-page.html';

const phoneFieldChunk: () => Promise<any> = (): Promise<any> => import(/* webpackChunkName: "phonefield" */ '@ulaval/modul-components/dist/components/phonefield/phonefield').then((exports: any) => {
    return exports.MPhonefield;
});


@WithRender
@Component({
    components: { 'm-phonefield': phoneFieldChunk, MainLayout, MPanel }
})
export default class AboutPage extends Vue {
    public model: string = '';
    public country: any = {
        iso: 'ca',
        prefix: '1'
    };
}
