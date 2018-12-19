import { Action, ModuleBase, Mutation } from '@ulaval/modul-vuex/dist/vuex-annotations';
import Vue from 'vue';
import { Store } from 'vuex';

export class TodolistModule extends ModuleBase<Todolist.TodolistModuleState> {
    constructor(private todolistRepository: Todolist.TodolistRepository, store: Store<any>, moduleName = 'TodolistService') {
        super(moduleName, {
            todolists: {},
            todos: {}
        }, store);
    }

    @Mutation()
    public onOpenForm(todolistState: Todolist.TodolistState, mode: Todolist.FormMode = 'new') {
        todolistState.todolistFormState = newTodolistFormState();
        todolistState.todolistFormState.open = true;
        todolistState.todolistFormState.mode = mode;
    }

    @Mutation()
    public onConfirmForm(state: Todolist.TodolistState, todo: Todolist.Todo) {
        state.visibleTodos.push(todo);
        state.todolistFormState = newTodolistFormState();
    }

    @Mutation()
    public onCloseForm(state: Todolist.TodolistState) {
        state.todolistFormState = newTodolistFormState();
    }

    @Mutation()
    public onDeleteTodo(state: Todolist.TodolistState, todo: Todolist.Todo) {
        const index = state.visibleTodos.findIndex(val => val === todo);

        console.info(index);

        if (index >= 0) {
            Vue.delete(state.visibleTodos, index);
        }
    }

    public getTodolistState(todolistId: string): Todolist.TodolistState | undefined {
        return this.state.todolists[todolistId];
    }

    @Action()
    public async loadTodolist(todolistId: string): Promise<void> {
        this.setLoadingTodoList(todolistId, true);

        try {
            const todolist = await this.todolistRepository.loadTodolist(todolistId);
            const visibleTodos = await this.todolistRepository.searchTodos(todolistId);

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
    public addTodo(todo: Todolist.Todo): void {

    }

    @Action()
    public updateTodo(todo: Todolist.Todo): void {

    }

    @Action()
    public deleteTodo(todo: Todolist.Todo): void {

    }

    @Mutation()
    private setLoadingTodoList(todolistId: string, loading: boolean, error: any = null) {
        let todolistState = this.state.todolists[todolistId];

        if (!todolistState) {
            todolistState = newTodolistState();
            this.state.todolists[todolistId] = todolistState;
        }

        setLoading(todolistState, loading);

        if (error) {
            todolistState.loadingError = true;
        }
    }

    @Mutation()
    private updateTodoListState(todolist: Todolist.Todolist, visibleTodos: Todolist.Todo[]) {
        let currentState = this.getTodolistState(todolist.todolistId);

        if (currentState) {
            currentState.todolist = todolist;
        } else {
            currentState = newTodolistState();
            currentState.todolist = todolist;
            this.state.todolists[todolist.todolistId] = currentState;
        }

        currentState.visibleTodos = visibleTodos;
        setLoading(currentState, false);
    }
}

function setLoading(todolistState: Todolist.TodolistState, loading: boolean) {
    todolistState.loading = loading;
    todolistState.loadingError = false;
}

function newTodolistFormState(): Todolist.TodolistFormState {
    return {
        open: false,
        mode: 'new',
        todo: {
            todoId: '-1',
            todolistId: '-1',
            description: '',
            status: 'open',
            title: ''
        }
    };
}

function newTodolistState(): Todolist.TodolistState {
    return {
        loading: false,
        loadingError: false,
        todolistFormState: newTodolistFormState(),
        visibleTodos: []
    };
}
