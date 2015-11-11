import {Component, EventEmitter, Input, Output, NgFor} from 'angular2/angular2';
import {Task} from '../model/Task';
import {User} from '../model/User';
import {TaskItemComponent} from './task-item';

@Component({
    directives: [NgFor, TaskItemComponent],
    selector: 'task-list',
    templateUrl: './app/components/task-list.html'
})
export class TaskListComponent {

    @Input() currentUser: User
    @Input() tasks: Task[]
    @Output() remove: EventEmitter = new EventEmitter()
    @Output() toggleStatus: EventEmitter = new EventEmitter()
    @Output() toggleVisibility: EventEmitter = new EventEmitter()

    onToggleStatus(id: number) {
      this.toggleStatus.next(id)
    }

    onToggleVisibility(id: number) {
        this.toggleVisibility.next(id)
    }

    onRemove(id: number) {
        this.remove.next(id)
    }

}
