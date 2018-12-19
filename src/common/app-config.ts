import { TodolistModule } from '@/todolist/services/todolist-module';
import { TodolistRepositoryDummy } from '@/todolist/services/todolist-repository-dummy';

export default {
    install(vue: any, options: any): void {
        vue.prototype.$todolistModule = new TodolistModule(new TodolistRepositoryDummy(), options.store);
    }
};
