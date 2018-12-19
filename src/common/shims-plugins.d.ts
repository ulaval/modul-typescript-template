import { TodolistModule } from '@/todolist/services/todolist-module';

declare module 'vue/types/vue' {
    interface Vue {
        $todolistModule: TodolistModule;
    }
}
