import MainLayout from '@/common/components/layouts/main-layout/main-layout';
import { MPanel } from '@modul/components/panel/panel';
import { MRichTextEditor } from '@modul/components/rich-text-editor/rich-text-editor';
import { MToggleButton } from '@ulaval/modul-components/dist/components/toggle-buttons/toggle-buttons';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './about-page.html';

@WithRender
@Component({
    components: {
        MRichTextEditor,
        MainLayout,
        MPanel
    }
})
export default class AboutPage extends Vue {

    private richTextModel: string = '';

    private toogleButtons: MToggleButton[] = [{
        id: 'id',
        title: 'title'
    }];
}
