import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './main-layout.html';

@WithRender
@Component
export default class MMainLayout extends Vue {
}
