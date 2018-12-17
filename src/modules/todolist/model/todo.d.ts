
declare namespace Todolist {
    type TodoStatus = 'open' | 'in_progress' | 'done' | 'wont_complete';

    interface Todo {
        todoId: string,
        todolistId: string,
        title: string,
        description: string,
        dueDate?: Date,
        status: TodoStatus
    }

    interface Todolist {
        todolistId: string;
        todolistName: string;
    }

    interface TodolistState {
        loading: boolean;
        loadingError: boolean;
        todolist?: Todolist;
        visibleTodos: Todo[];
    }
}
