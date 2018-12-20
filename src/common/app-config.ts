import { TodolistModule } from '@/todolist/model/todolist-module';
import { TodolistRepositoryDummy } from '@/todolist/model/todolist-repository-dummy';

export default {
    install(vue: any, options: any): void {
        vue.prototype.$todolistModule = new TodolistModule(new TodolistRepositoryDummy(), options.store);
    }
};
