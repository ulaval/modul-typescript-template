import { TodolistModule } from '@/modules/todolist/services/todolist-module';

declare module 'vue/types/vue' {
    interface Vue {
        $todolistModule: TodolistModule;
    }
}
