import { MTextfield } from '@ulaval/modul-components/dist/components/textfield/textfield';
import { dateFilter } from '@ulaval/modul-components/dist/filters/date/date';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
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

    title: string = '';
    description: string = '';

    /*@Watch('state.open')
    onOpen() {
        this.title = '';
        this.description = '';
    }*/

    onConfirm() {
        const todo: Todolist.Todo = {
            todoId: '-1',
            todolistId: '-1',
            title: this.title,
            description: this.description,
            status: 'open'
        };

        this.$emit('confirm-form', todo);
    }
}
