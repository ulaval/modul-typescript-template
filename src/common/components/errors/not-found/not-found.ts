import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './not-found.html';

@WithRender
@Component
export default class NotFound extends Vue {
}
