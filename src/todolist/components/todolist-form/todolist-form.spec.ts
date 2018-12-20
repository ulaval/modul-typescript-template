import { genSnapshotsTests, PropsData } from '@jest/jest-utils';
import TodolistForm from './todolist-form';

const states: PropsData = {
    'new state': {
        state: {
            mode: 'new',
            open: false
        } as Todolist.TodolistFormState
    },
    'edit state': {
        state: {
            mode: 'edit',
            open: false
        } as Todolist.TodolistFormState
    }
};

describe('TodolistForm', () => {
    genSnapshotsTests(TodolistForm, states);
});
