import { MColumnTable, MTable } from '@ulaval/modul-components/dist/components/table/table';
import { dateFilter } from '@ulaval/modul-components/dist/filters/date/date';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './todolist-listview.html';

@WithRender
@Component({
    components: { MTable },
    filters: {
        formatDate: (date: Date | undefined) => date ? dateFilter(date) : ''
    }
})
export default class TodolistListView extends Vue {
    @Prop()
    state!: Todolist.TodolistState;

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
        }
    ];
}
