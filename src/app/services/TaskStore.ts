import {ListWrapper} from 'angular2/src/core/facade/collection';
import {Task} from '../model/Task';
import {User} from '../model/User';

export class TaskStore {

  public list: Task[];

  constructor() {
    let user = new User("Fred");
    this.list = [
      new Task("First task", user),
      new Task("Second task", user),
      new Task("Third task", user)
    ];
  }

  get incompleteCount() {
    return this.list.filter((task: Task) => !task.completed).length;
  }

  add(task: Task) {
    this.list.push(task);
  }

  hideCompleted() {
    this.list = this.list.filter((task: Task) => !task.completed);
  }

  toggleStatus(task: Task) {
    task.completed = !task.completed;
  }

  toggleVisibility(task: Task) {
    task.private = !task.private;
  }

  remove(task: Task) {
    this._spliceOut(task);
  }

  // PRIVATE

  private _spliceOut(task: Task) {
    var i = this._indexFor(task);
    if (i > -1) {
      return ListWrapper.splice(this.list, i, 1)[0];
    }
    return null;
  }

  private _indexFor(task: Task) {
    return this.list.indexOf(task);
  }

}
