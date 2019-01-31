import MainLayout from '@/common/components/layouts/main-layout/main-layout';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './welcome-page.html?style=./welcome-page.scss';

@WithRender
@Component({
    components: { MainLayout }
})
export default class WelcomePage extends Vue {


}
