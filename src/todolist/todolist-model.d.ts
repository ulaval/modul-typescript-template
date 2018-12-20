
declare namespace Todolist {
    type TodoStatus = 'open' | 'in_progress' | 'done' | 'wont_complete';
    type FormMode = 'new' | 'edit';

    type Todo = {
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

    interface TodolistFormState {
        open: boolean;
        mode: FormMode;
        todo?: Todo;
    }

    interface TodolistState {
        loading: boolean;
        loadingError: boolean;
        todolistFormState: TodolistFormState;
        todolist?: Todolist;
        visibleTodos: Todo[];
    }

    interface TodolistModuleState {
        todos: { [k: string]: Todolist.Todo | undefined };

        todolists: { [k: string]: Todolist.TodolistState | undefined };
    }

    interface TodolistRepository {
        loadTodolist(todolistId: string): Promise<Todolist.Todolist>;
        searchTodos(todolistId: string, lastTodolistId?: string, pageSize?: number): Promise<Todolist.Todo[]>;
        addTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
        updateTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
        deleteTodo(todo: Todolist.Todo): Promise<Todolist.Todo>;
    }
}
