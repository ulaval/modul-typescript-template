import { MTextfield } from '@ulaval/modul-components/dist/components/textfield/textfield';
import { dateFilter } from '@ulaval/modul-components/dist/filters/date/date';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import WithRender from './todolist-form.html';

@WithRender
@Component({
    components: { MTextfield },
    filters: {
        formatDate: (date: Date | undefined) => date ? dateFilter(date) : ''
    }
})
export default class TodolistForm extends Vue {
    @Prop()
    state!: Todolist.TodolistFormState;

    @Emit('confirm-form')
    emitConfirmForm(todo: Todolist.Todo) {
    }

    @Emit('close-form')
    emitCloseForm() {
    }

    title: string = '';
    description: string = '';

    onConfirm() {
        const todo: Todolist.Todo = {
            todoId: '-1',
            todolistId: '-1',
            title: this.title,
            description: this.description,
            status: 'open'
        };

        this.emitConfirmForm(todo);
    }

    onClose() {
        this.emitCloseForm();
    }
}
