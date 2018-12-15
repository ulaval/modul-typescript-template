import { TodolistRepository } from './todolist-service';

export class TodolistRepositoryDummy implements TodolistRepository {
    private dummyData: { [k: string]: Todolist.Todolist } = {
        '1': {
            todolistId: '1',
            todolistName: 'Demo list 1'
        }
    };

    loadTodolist(todolistId: string): Promise<Todolist.Todolist> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const list = this.dummyData[todolistId];

                if (!list) {
                    reject(new Error(`List ${todolistId} does not exist.`));
                } else {
                    resolve(list);
                }
            }, 1000);
        });
    }

    searchTodos(todolistId: string, lastTodolistId: string, pageSize: number): Promise<Todolist.Todo[]> {
        throw new Error('Method not implemented.');
    }
    addTodo(todo: Todolist.Todo): Promise<Todolist.Todo> {
        throw new Error('Method not implemented.');
    }
    updateTodo(todo: Todolist.Todo): Promise<Todolist.Todo> {
        throw new Error('Method not implemented.');
    }
    deleteTodo(todo: Todolist.Todo): Promise<Todolist.Todo> {
        throw new Error('Method not implemented.');
    }
}
