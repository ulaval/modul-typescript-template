import { Action, ModuleBase, Mutation } from '@ulaval/modul-vuex/dist/vuex-annotations';
import { Store } from 'vuex';

export class TodolistModuleState {
    todos: { [k: string]: Todolist.Todo } = {};

    todolists: { [k: string]: Todolist.TodolistState } = {};
}

export interface TodolistRepository {
    loadTodolist(todolistId: string): Promise<Todolist.Todolist>;
    searchTodos(todolistId: string, lastTodolistId?: string, pageSize?: number): Promise<Todolist.Todo[]>;
    addTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
    updateTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
    deleteTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
}

export class TodolistService extends ModuleBase<TodolistModuleState> {
    constructor(private todolistRepository: TodolistRepository, store: Store<any>, moduleName = 'TodolistService') {
        super(moduleName, new TodolistModuleState(), store);
    }

    public onNewTodo() {
        console.info('YES');
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

export function newTodolistState(): Todolist.TodolistState {
    return {
        loading: false,
        loadingError: false,
        visibleTodos: []
    };
}
