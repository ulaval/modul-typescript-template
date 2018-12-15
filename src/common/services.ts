import { TodolistRepositoryDummy } from '@/modules/todolist/services/todolist-repository-dummy';
import { TodolistService } from '@/modules/todolist/services/todolist-service';

export default {
    install(vue: any, options: any): void {
        vue.prototype.$todolistService = new TodolistService(new TodolistRepositoryDummy(), options.store);
    }
};
