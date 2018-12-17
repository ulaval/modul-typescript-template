import { TodolistRepository } from './todolist-service';

export class TodolistRepositoryDummy implements TodolistRepository {
    private dummyData: { [k: string]: Todolist.Todolist } = {
        '1': {
            todolistId: '1',
            todolistName: 'Demo list 1'
        },
        '2': {
            todolistId: '2',
            todolistName: 'Demo list 2'
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

    async searchTodos(todolistId: string, lastTodolistId?: string, pageSize?: number): Promise<Todolist.Todo[]> {
        return ([
            {
                todoId: '1',
                todolistId: '1',
                title: 'My first todo!',
                description: 'Major refactoring task',
                dueDate: new Date(2019, 0, 1),
                status: 'in_progress'
            },
            {
                todoId: '2',
                todolistId: '1',
                title: 'Big job',
                description: 'Don\'t forget about important stuff.',
                status: 'open'
            },
            {
                todoId: '3',
                todolistId: '1',
                title: 'Start project',
                description: '',
                status: 'done'
            },
            {
                todoId: '4',
                todolistId: '1',
                title: 'Translate project',
                description: '',
                status: 'wont_complete'
            }
        ] as Todolist.Todo[])
            .filter(todo => todo.todolistId === todolistId);
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
