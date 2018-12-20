import { TodolistState } from '@/todolist/model/todolist-model';
import { genSnapshotsTests, PropsData } from '@jest/jest-utils';
import TodolistListView from './todolist-listview';

const loadingState: Partial<TodolistState> = {
    loading: true
};

const states: PropsData = {
    'loading state': {
        state: {
            loading: true
        } as TodolistState
    },
    'loading error state': {
        state: {
            loading: false,
            loadingError: true
        } as TodolistState
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
        } as TodolistState
    }
};

describe('TodolistListView', () => {
    genSnapshotsTests(TodolistListView, states);
});
