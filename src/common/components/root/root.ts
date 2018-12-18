import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './root.html';

@WithRender
@Component
export default class Root extends Vue {
}
