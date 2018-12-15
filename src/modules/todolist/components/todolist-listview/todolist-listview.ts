import { MTable } from '@ulaval/modul-components/dist/components/table/table';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { TodolistState } from '../../services/todolist-service';
import WithRender from './todolist-listview.html';

@WithRender
@Component({
    components: { MTable }
})
export default class TodolistListView extends Vue {
    @Prop()
    state!: TodolistState;
}
