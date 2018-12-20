
export type TodoStatus = 'open' | 'in_progress' | 'done' | 'wont_complete';
export type FormMode = 'new' | 'edit';

export class Todo {
    todoId?: string;
    todolistId?: string;
    title?: string;
    description?: string;
    dueDate?: Date;
    status?: TodoStatus;
}

export class Todolist {
    todolistId?: string;
    todolistName?: string;
}

export class TodolistFormState {
    open: boolean = false;
    mode: FormMode = 'new';
    todo?: Todo;
}

export class TodolistState {
    loading: boolean = false;
    loadingError: boolean = false;
    todolistFormState: TodolistFormState = {
        mode: 'new',
        open: false
    };
    todolist?: Todolist;
    visibleTodos: Todo[] = [];

    setLoading(loading: boolean): void {
        this.loading = loading;
        this.loadingError = false;
    }
}
