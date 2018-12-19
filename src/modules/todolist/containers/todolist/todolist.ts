import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import TodolistListView from '../../components/todolist-listview/todolist-listview';
import WithRender from './todolist.html';

@WithRender
@Component({
    components: { TodolistListView }
})
export default class Todolist extends Vue {
    @Prop()
    todolistId!: string;

    created() {
        this.loadTodolistId();
    }

    @Watch('todolistId')
    loadTodolistId() {
        this.$todolistModule.loadTodolist(this.todolistId);
    }

    get state() {
        return this.$todolistModule.getTodolistState(this.todolistId);
    }
}
