import MainLayout from '@/common/layouts/main-layout/main-layout';
import Vue from 'vue';
import Component from 'vue-class-component';
import Todolist from '../../containers/todolist/todolist';
import WithRender from './todolist-page.html';

@WithRender
@Component({
    components: { MainLayout, Todolist }
})
export default class TodolistPage extends Vue {

}
