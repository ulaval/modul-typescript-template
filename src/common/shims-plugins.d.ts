import { TodolistModule } from '@/todolist/model/todolist-module';

declare module 'vue/types/vue' {
    interface Vue {
        $todolistModule: TodolistModule;
    }
}
