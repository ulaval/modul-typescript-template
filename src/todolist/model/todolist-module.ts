import { Action, ModuleBase, Mutation } from '@ulaval/modul-vuex/dist/vuex-annotations';
import Vue from 'vue';
import { Store } from 'vuex';
import { FormMode, Todo, Todolist, TodolistFormState, TodolistState } from './todolist-model';

export interface TodolistRepository {
    loadTodolist(todolistId: string): Promise<Todolist>;
    searchTodos(todolistId: string, lastTodolistId?: string, pageSize?: number): Promise<Todo[]>;
    addTodo(todo: Todo): Promise<Todo>;
    updateTodo(todo: Todo): Promise<Todo>;
    deleteTodo(todo: Todo): Promise<Todo>;
}

interface TodolistModuleState {
    todos: { [k: string]: Todo | undefined };

    todolists: { [k: string]: TodolistState | undefined };
}

export class TodolistModule extends ModuleBase<TodolistModuleState> {
    constructor(private todolistRepository: TodolistRepository, store: Store<any>, moduleName: string = 'Todolist') {
        super(moduleName, {
            todolists: {},
            todos: {}
        }, store);
    }

    public getTodolistState(todolistId: string): TodolistState | undefined {
        return this.state.todolists[todolistId];
    }

    @Mutation()
    public onOpenNewForm(todolistState: TodolistState, mode: FormMode = 'new'): void {
        todolistState.todolistFormState = new TodolistFormState();
        todolistState.todolistFormState.open = true;
        todolistState.todolistFormState.mode = mode;
    }

    @Mutation()
    public onConfirmForm(state: TodolistState, todo: Todo): void {
        state.visibleTodos.push(todo);
        state.todolistFormState = new TodolistFormState();
    }

    @Mutation()
    public onCloseForm(state: TodolistState): void {
        state.todolistFormState = new TodolistFormState();
    }

    @Mutation()
    public onDeleteTodo(state: TodolistState, todo: Todo): void {
        const index: number = state.visibleTodos.findIndex((val: Todo) => val === todo);

        if (index >= 0) {
            Vue.delete(state.visibleTodos, index);
        }
    }

    @Action()
    public async loadTodolist(todolistId: string): Promise<void> {

        this.setLoadingTodoList(todolistId, true);

        try {
            const todolist: Todolist = await this.todolistRepository.loadTodolist(todolistId);
            const visibleTodos: Todo[] = await this.todolistRepository.searchTodos(todolistId);

            this.updateTodoListState(todolist, visibleTodos);
        } catch (e) {
            this.setLoadingTodoList(todolistId, false, e);
            throw e;
        }
    }

    @Action()
    public loadMore(todolistId: string): void {

    }

    @Action()
    public addTodo(todo: Todo): void {

    }

    @Action()
    public updateTodo(todo: Todo): void {

    }

    @Action()
    public deleteTodo(todo: Todo): void {

    }

    @Mutation()
    private setLoadingTodoList(todolistId: string, loading: boolean, error: any = undefined): void {
        let todolistState: TodolistState | undefined = this.state.todolists[todolistId];

        if (!todolistState) {
            todolistState = new TodolistState();
            Vue.set(this.state.todolists, todolistId, todolistState);
        }

        todolistState.setLoading(loading);

        if (error) {
            todolistState.loadingError = true;
        }
    }

    @Mutation()
    private updateTodoListState(todolist: Todolist, visibleTodos: Todo[]): void {
        if (!todolist.todolistId) {
            throw new Error('Invalid todolist');
        }

        let currentState: TodolistState | undefined = this.getTodolistState(todolist.todolistId);

        if (currentState) {
            currentState.todolist = todolist;
        } else {
            currentState = new TodolistState();
            currentState.todolist = todolist;
            this.state.todolists[todolist.todolistId] = currentState;
        }

        currentState.visibleTodos = visibleTodos;
        currentState.setLoading(false);
    }
}
