import Confirmation from '@/common/components/confirmation/confirmation';
import { MModal } from '@modul/components/modal/modal';
import { MColumnTable, MTable } from '@modul/components/table/table';
import { dateFilter } from '@modul/filters/date/date';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import TodolistForm from '../todolist-form/todolist-form';
import WithRender from './todolist-listview.html';

@WithRender
@Component({
    components: { MTable, MModal, TodolistForm, Confirmation },
    filters: {
        formatDate: (date: Date | undefined): string => date ? dateFilter(date) : ''
    }
})
export default class TodolistListView extends Vue {
    @Prop()
    state!: Todolist.TodolistState;

    @Emit('open-new-form')
    emitOpenNewForm(): void {
    }

    @Emit('new-todo')
    emitNewTodo(): void {
    }

    @Emit('delete-todo')
    emitDeleteTodo(todo: Todolist.Todo): void {
    }

    deleteConfirmationOpen: boolean = false;
    currentTodo?: Todolist.Todo;

    columns: MColumnTable[] = [
        {
            id: 'title',
            title: 'Title',
            dataProp: 'title'
        },
        {
            id: 'description',
            title: 'Description',
            dataProp: 'description'
        },
        {
            id: 'dueDate',
            title: 'Due date',
            dataProp: 'dueDate'
        },
        {
            id: 'status',
            title: 'Status',
            dataProp: 'status'
        },
        {
            id: 'menu',
            title: '',
            dataProp: 'todolistId'
        }
    ];

    onOpenNewForm(): void {
        this.emitOpenNewForm();
    }

    onDeleteTodo(todo: Todolist.Todo): void {
        this.currentTodo = todo;
        this.deleteConfirmationOpen = true;
    }

    onConfirmDeleteTodo(): void {
        if (this.currentTodo) {
            this.emitDeleteTodo(this.currentTodo);
        }
        this.deleteConfirmationOpen = false;
    }

    onCancelDeleteTodo(): void {
        this.deleteConfirmationOpen = false;
    }
}
