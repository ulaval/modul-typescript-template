import MainLayout from '@/common/components/layouts/main-layout/main-layout';
import { MRichTextEditorOption } from '@ulaval/modul-rich-text-editor';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './about-page.html';


@WithRender
@Component({
    components: {
        // tslint:disable-next-line: typedef
        MainLayout, MRichTextEditor: () => {
            return import(/* webpackChunkName: "rte" */ './rte');
        }
    }
})
export default class AboutPage extends Vue {

    option: MRichTextEditorOption = MRichTextEditorOption.IMAGE;

    public model: string = '';
}
