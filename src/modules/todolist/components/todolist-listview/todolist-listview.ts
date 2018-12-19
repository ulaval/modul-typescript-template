import { MModal } from '@ulaval/modul-components/dist/components/modal/modal';
import { MColumnTable, MTable } from '@ulaval/modul-components/dist/components/table/table';
import { dateFilter } from '@ulaval/modul-components/dist/filters/date/date';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import TodolistForm from '../todolist-form/todolist-form';
import WithRender from './todolist-listview.html';

@WithRender
@Component({
    components: { MTable, MModal, TodolistForm },
    filters: {
        formatDate: (date: Date | undefined) => date ? dateFilter(date) : ''
    }
})
export default class TodolistListView extends Vue {
    @Prop()
    state!: Todolist.TodolistState;

    onAddNewTodo() {
        this.$emit('new-todo');
    }

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
}
