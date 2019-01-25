import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './error-layout.html';

@WithRender
@Component
export default class MErrorLayout extends Vue {
}
