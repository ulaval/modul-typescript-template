import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import WithRender from './app.html?style=./app.scss';
import HelloWorld from './components/hello-world';

@WithRender
@Component({
    components: { HelloWorld }
})
export default class App extends ModulVue { }
