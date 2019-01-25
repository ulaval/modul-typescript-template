import { ENGLISH, FRENCH } from '@modul/utils/i18n/i18n';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './main-header.html?style=./main-header.scss';

@WithRender
@Component
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
