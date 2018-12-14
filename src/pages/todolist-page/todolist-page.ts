import MainLayout from '@/common/layouts/main-layout/main-layout';
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './todolist-page.html?style=./todolist-page.scss';

@WithRender
@Component({
    components: { MainLayout }
})
export default class TodolistPage extends Vue { }
