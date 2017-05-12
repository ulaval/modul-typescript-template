import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './welcome.html?style=./welcome.scss';

import MyComp from '../commons/my-comp/my-comp';

@WithRender
@Component({
    components: { MyComp }
})
export default class Welcome extends Vue {

}
