import Vue from 'vue';
import Component from 'vue-class-component';
import WelcomePageBody from './welcome-page-body/welcome-page-body';
import WelcomePageHeader from './welcome-page-header/welcome-page-header';
import WithRender from './welcome-page.html?style=./welcome-page.scss';

@WithRender
@Component({
    components: { WelcomePageBody, WelcomePageHeader }
})
export default class WelcomePage extends Vue { }
