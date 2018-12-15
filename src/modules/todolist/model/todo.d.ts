
declare namespace Todolist {
    type TodoStatus = 'open' | 'in_progress' | 'done' | 'wontcomplete';

    interface Todo {
        idTodo: string,
        idTodolist: string,
        titreTodo: string,
        descriptionTodo: string,
        dateDue: Date,
        statut: TodoStatus
    }

    interface Todolist {
        todolistId: string;
        todolistName: string;
    }
}
