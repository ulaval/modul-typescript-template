import { TodolistModule } from '@/modules/todolist/services/todolist-module';
import { TodolistRepositoryDummy } from '@/modules/todolist/services/todolist-repository-dummy';

export default {
    install(vue: any, options: any): void {
        vue.prototype.$todolistModule = new TodolistModule(new TodolistRepositoryDummy(), options.store);
    }
};
