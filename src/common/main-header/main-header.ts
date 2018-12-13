import { MButton } from '@ulaval/modul-components/dist/components/button/button';
import { MDropdown } from '@ulaval/modul-components/dist/components/dropdown/dropdown';
import { MIcon } from '@ulaval/modul-components/dist/components/icon/icon';
import { MLink } from '@ulaval/modul-components/dist/components/link/link';
import { MPanel } from '@ulaval/modul-components/dist/components/panel/panel';
import { MPopper } from '@ulaval/modul-components/dist/components/popper/popper';
import { MTemplate } from '@ulaval/modul-components/dist/components/template/template';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './main-header.html?style=./main-header.scss';

@WithRender
@Component({
    components: { MTemplate, MLink, MPanel, MButton, MIcon, MDropdown, MPopper }
})
export default class MainHeader extends Vue {

    private navOpened: boolean = false;
}
