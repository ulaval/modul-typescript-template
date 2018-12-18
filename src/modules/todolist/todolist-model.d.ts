
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

    interface TodolistModuleState {
        todos: { [k: string]: Todolist.Todo };

        todolists: { [k: string]: Todolist.TodolistState };
    }

    interface TodolistRepository {
        loadTodolist(todolistId: string): Promise<Todolist.Todolist>;
        searchTodos(todolistId: string, lastTodolistId?: string, pageSize?: number): Promise<Todolist.Todo[]>;
        addTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
        updateTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
        deleteTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
    }
}
