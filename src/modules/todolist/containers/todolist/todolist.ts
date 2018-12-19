import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import TodolistListView from '../../components/todolist-listview/todolist-listview';
import { TodolistModule } from '../../services/todolist-module';
import WithRender from './todolist.html';

@WithRender
@Component({
    components: { TodolistListView }
})
export default class Todolist extends Vue {
    @Prop()
    todolistId!: string;

    @Prop()
    todolistModule!: TodolistModule;

    state: boolean | Todolist.TodolistState = false;

    created() {
        this.loadTodolistId(this.todolistId);
    }

    @Watch('todolistId')
    loadTodolistId(todolistId: string) {
        this.todolistModule.loadTodolist(todolistId);
        this.state = this.todolistModule.getTodolistState(this.todolistId)!;
    }
}
