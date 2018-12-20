import { TodolistFormState } from '@/todolist/model/todolist-model';
import { genSnapshotsTests, PropsData } from '@jest/jest-utils';
import TodolistForm from './todolist-form';

const states: PropsData = {
    'new state': {
        state: {
            mode: 'new',
            open: false
        } as TodolistFormState
    },
    'edit state': {
        state: {
            mode: 'edit',
            open: false
        } as TodolistFormState
    }
};

describe('TodolistForm', () => {
    genSnapshotsTests(TodolistForm, states);
});
