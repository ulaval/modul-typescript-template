import { MButton } from '@modul/components/button/button';
import { MDropdown } from '@modul/components/dropdown/dropdown';
import { MIcon } from '@modul/components/icon/icon';
import { MLink } from '@modul/components/link/link';
import { MPanel } from '@modul/components/panel/panel';
import { MPopper } from '@modul/components/popper/popper';
import { ENGLISH, FRENCH } from '@modul/utils/i18n/i18n';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './main-header.html?style=./main-header.scss';

@WithRender
@Component({
    components: { MLink, MPanel, MButton, MIcon, MDropdown, MPopper }
})
export default class MainHeader extends Vue {

    private navOpened: boolean = false;

    public onToggleLang(): void {
        if (MainHeader.currentLang() === ENGLISH) {
            localStorage.removeItem('lang');
        } else {
            localStorage.setItem('lang', ENGLISH);
        }

        window.location.reload();
    }

    public get toggleLangLabel(): string {
        return MainHeader.currentLang() === ENGLISH ? 'French' : 'English';
    }

    private static currentLang(): string {
        return localStorage.getItem('lang') === ENGLISH ? ENGLISH : FRENCH;
    }
}
