import { genSnapshotsTests, PropsData } from '@jest/jest-utils';
import TodolistListView from './todolist-listview';

const states: PropsData = {
    'loading state': {
        state: {
            loading: true
        } as Todolist.TodolistState
    },
    'loading error state': {
        state: {
            loading: false,
            loadingError: true
        } as Todolist.TodolistState
    },
    'normal state': {
        state: {
            loading: false,
            loadingError: false,
            todolist: {
                todolistId: '-1',
                todolistName: 'Unit test'
            },
            todolistFormState: {
                mode: 'new',
                open: false
            },
            visibleTodos: [
                {
                    todoId: '-1',
                    todolistId: '-1',
                    title: 'Test title',
                    description: 'Test desc',
                    dueDate: new Date(2018, 2, 2),
                    status: 'open'
                }
            ]
        } as Todolist.TodolistState
    }
};

describe('TodolistListView', () => {
    genSnapshotsTests(TodolistListView, states);
});
