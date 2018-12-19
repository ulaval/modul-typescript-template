import Vue from 'vue';
import Component from 'vue-class-component';
import Todolist from '../../containers/todolist/todolist';
import WithRender from './todolist-page.html';

@WithRender
@Component({
    components: { Todolist }
})
export default class TodolistPage extends Vue {

}
