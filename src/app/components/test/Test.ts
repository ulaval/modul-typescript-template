import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './Test.html?style=./Test.scss';

@WithRender
@Component
export default class Test extends Vue {

}
