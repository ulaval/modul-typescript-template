import { Action, ModuleBase, Mutation } from '@ulaval/modul-vuex/dist/vuex-annotations';
import { Store } from 'vuex';

export class TodolistState {
    loading = false;
    loadingError = false;
    todolist?: Todolist.Todolist;
    visibleTodos: Todolist.Todo[] = [];
}

export class TodolistModuleState {
    todos: { [k: string]: Todolist.Todo } = {};

    todolists: { [k: string]: TodolistState } = {};
}

export interface TodolistRepository {
    loadTodolist(todolistId: string): Promise<Todolist.Todolist>;
    searchTodos(todolistId: string, lastTodolistId: string, pageSize: number): Promise<Todolist.Todo[]>;
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

    public getTodolistState(todolistId: string): TodolistState | undefined {
        return this.state.todolists[todolistId];
    }

    @Action()
    public async loadTodolist(todolistId: string): Promise<void> {
        this.setLoadingTodoList(todolistId, true);

        try {
            const todolist = await this.todolistRepository.loadTodolist(todolistId);

            this.setTodoList(todolist);
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
            todolistState = new TodolistState();
            this.state.todolists[todolistId] = todolistState;
        }

        this.setLoading(todolistState, loading);

        if (error) {
            todolistState.loadingError = true;
        }
    }

    @Mutation()
    private setTodoList(todolist: Todolist.Todolist) {
        const current = this.getTodolistState(todolist.todolistId);

        if (current) {
            current.todolist = todolist;
            this.setLoading(current, false);
        } else {
            const newTodolistState = new TodolistState();
            this.setLoading(newTodolistState, false);
            newTodolistState.todolist = todolist;
            this.state.todolists[todolist.todolistId] = newTodolistState;
        }
    }

    private setLoading(todolistState: TodolistState, loading: boolean) {
        todolistState.loading = loading;
        todolistState.loadingError = false;
    }
}
