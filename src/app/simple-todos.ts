import {Component, NgIf, bootstrap} from 'angular2/angular2';
// Components
import {LoginComponent} from './components/login';
import {TaskCreatorComponent} from './components/task-creator';
import {TaskListComponent} from './components/task-list';
// Models
import {Task} from './model/Task';
import {User} from './model/User';
// Services
import {TaskStore} from './services/TaskStore';

@Component({
    directives: [NgIf, LoginComponent, TaskCreatorComponent, TaskListComponent],
    selector: 'simple-todos',
    templateUrl: '/app/simple-todos.html'
})
class SimpleTodosComponent {

    currentUser:User;
    taskStore:TaskStore;

    constructor() {
        this.taskStore = new TaskStore();
    }

    onCreate(task:Task) {
        this.taskStore.add(task);
    }

    onHideCompleted() {
        this.taskStore.hideCompleted();
    }

    onLogin(user:User) {
        this.currentUser = user;
    }

    onToggleStatus(task:Task) {
        this.taskStore.toggleStatus(task);
    }

    onToggleVisibility(task:Task) {
        this.taskStore.toggleVisibility(task);
    }

    onRemove(task:Task) {
        this.taskStore.remove(task);
    }

}
bootstrap(SimpleTodosComponent);
