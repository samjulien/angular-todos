/// <reference path="../../typings/redux/redux"/>
import {Component, NgIf, bootstrap} from 'angular2/angular2';
// Components
import {LoginComponent} from './components/login';
import {TaskFormComponent} from './components/task-form';
import {TaskListComponent} from './components/task-list';
// Models
import {Task} from './model/Task';
import {User} from './model/User';

// Redux
import {bindActionCreators, createStore, Store} from 'redux';
import rootReducer from './reducers/RootReducer';
import { AppState } from './reducers/AppState';
import { Filters } from './actions/FilterActions';
import * as AuthActions from './actions/AuthActions';
import * as TaskActions from './actions/TaskActions';
import * as FilterActions from './actions/FilterActions';

@Component({
    directives: [NgIf, LoginComponent, TaskFormComponent, TaskListComponent],
    selector: 'simple-todos',
    templateUrl: '/app/simple-todos.html'
})
class SimpleTodosComponent {

    state: AppState
    store: Store
    unsubscribe: Function

    constructor() {}

    get incompleteCount() {
      return this.state.tasks.filter((task: Task) => !task.completed).length
    }

    get filteredTodos(): Task[] {
      switch(this.state.filter) {
        case Filters.SHOW_ACTIVE:
          return this.state.tasks.filter((task: Task) => !task.completed)
        default:
          return this.state.tasks
      }
    }

    onInit() {
      // Dummy initial state
      const user = new User("Fred");
      const initialState = {
        tasks: [
          new Task("First task", user),
          new Task("Second task", user),
          new Task("Third task", user)
        ]
      }
      // Create redux store from reducers
      this.store = createStore(rootReducer, initialState) // InitialSate is optional
      // Initial state
      this.state = this.store.getState();
      console.log('store initial state', this.state)
      // Subscribe to store changes
      this.unsubscribe = this.store.subscribe(() => {
        this.state = this.store.getState()
        console.log('store changed', this.state)
      });
      // Bind action creators
      //this.actions = bindActionCreators(TaskActions, this.store.dispatch);
    }

    onDestroy() {
      this.unsubscribe()
    }

    // Auth actions

    onLogin(userName: string) {
      let user: User = new User(userName)
      this.store.dispatch(AuthActions.login(user))
    }

    // Tasks actions

    onCreate(text: string) {
      let newTask = new Task(text, this.state.currentUser)
      this.store.dispatch(TaskActions.addTask(newTask))
    }

    onToggleStatus(id: number) {
      this.store.dispatch(TaskActions.toggleTaskStatus(id))
    }

    onToggleVisibility(id: number) {
      this.store.dispatch(TaskActions.toggleTaskVisibility(id))
    }

    onRemove(id: number) {
      this.store.dispatch(TaskActions.removeTask(id))
    }

    // Visibility actions

    onToggleStatusFilter() {
      if (this.state.filter == Filters.SHOW_ALL) {
        this.store.dispatch(FilterActions.setFilter(Filters.SHOW_ACTIVE))
      } else {
        this.store.dispatch(FilterActions.setFilter(Filters.SHOW_ALL))
      }
    }

}
bootstrap(SimpleTodosComponent);
