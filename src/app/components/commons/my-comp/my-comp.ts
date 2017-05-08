import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './my-comp.html?style=./my-comp.scss';

@WithRender
@Component
export default class MyComp extends Vue {

}
