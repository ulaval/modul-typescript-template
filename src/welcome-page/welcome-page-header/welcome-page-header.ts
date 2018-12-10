import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './welcome-page-header.html';

@WithRender
@Component
export default class WelcomePageHeader extends Vue {
}
