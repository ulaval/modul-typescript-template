import { Todo, TodolistFormState } from '@/todolist/model/todolist-model';
import { dateFilter } from '@modul/filters/date/date/date';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import WithRender from './todolist-form.html';

@WithRender
@Component({
    filters: {
        formatDate: (date: Date | undefined): string => date ? dateFilter(date) : ''
    }
})
export default class TodolistForm extends Vue {
    @Prop({
        required: true
    })
    state!: TodolistFormState;

    @Emit('confirm-form')
    emitConfirmForm(todo: Todo): void {
    }

    @Emit('close-form')
    emitCloseForm(): void {
    }

    title: string = '';
    description: string = '';

    onConfirm(): void {
        const todo: Todo = {
            todoId: '-1',
            todolistId: '-1',
            title: this.title,
            description: this.description,
            status: 'open'
        };

        this.emitConfirmForm(todo);
    }

    onClose(): void {
        this.emitCloseForm();
    }
}
