import { Action, ModuleBase, Mutation } from '@ulaval/modul-vuex/dist/vuex-annotations';
import Vue from 'vue';
import { Store } from 'vuex';

export class TodolistModule extends ModuleBase<Todolist.TodolistModuleState> {
    constructor(private todolistRepository: Todolist.TodolistRepository, store: Store<any>, moduleName: string = 'Todolist') {
        super(moduleName, {
            todolists: {},
            todos: {}
        }, store);
    }

    public getTodolistState(todolistId: string): Todolist.TodolistState | undefined {
        return this.state.todolists[todolistId];
    }

    @Mutation()
    public onOpenNewForm(todolistState: Todolist.TodolistState, mode: Todolist.FormMode = 'new'): void {
        todolistState.todolistFormState = newTodolistFormState();
        todolistState.todolistFormState.open = true;
        todolistState.todolistFormState.mode = mode;
    }

    @Mutation()
    public onConfirmForm(state: Todolist.TodolistState, todo: Todolist.Todo): void {
        state.visibleTodos.push(todo);
        state.todolistFormState = newTodolistFormState();
    }

    @Mutation()
    public onCloseForm(state: Todolist.TodolistState): void {
        state.todolistFormState = newTodolistFormState();
    }

    @Mutation()
    public onDeleteTodo(state: Todolist.TodolistState, todo: Todolist.Todo): void {
        const index: number = state.visibleTodos.findIndex((val: Todolist.Todo) => val === todo);

        if (index >= 0) {
            Vue.delete(state.visibleTodos, index);
        }
    }

    @Action()
    public async loadTodolist(todolistId: string): Promise<void> {

        this.setLoadingTodoList(todolistId, true);

        try {
            const todolist: Todolist.Todolist = await this.todolistRepository.loadTodolist(todolistId);
            const visibleTodos: Todolist.Todo[] = await this.todolistRepository.searchTodos(todolistId);

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
    private setLoadingTodoList(todolistId: string, loading: boolean, error: any = null): void {
        let todolistState: Todolist.TodolistState | undefined = this.state.todolists[todolistId];

        if (!todolistState) {
            todolistState = newTodolistState();
            Vue.set(this.state.todolists, todolistId, todolistState);
        }

        setLoading(todolistState, loading);

        if (error) {
            todolistState.loadingError = true;
        }
    }

    @Mutation()
    private updateTodoListState(todolist: Todolist.Todolist, visibleTodos: Todolist.Todo[]): void {
        let currentState: Todolist.TodolistState | undefined = this.getTodolistState(todolist.todolistId);

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

function setLoading(todolistState: Todolist.TodolistState, loading: boolean): void {
    todolistState.loading = loading;
    todolistState.loadingError = false;
}

function newTodolistFormState(): Todolist.TodolistFormState {
    return {
        open: false,
        mode: 'new'
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
