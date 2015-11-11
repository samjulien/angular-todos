import {Component, EventEmitter, Input, Output, NgIf} from 'angular2/angular2';
import {Task} from '../model/Task';
import {User} from '../model/User';

@Component({
    directives: [NgIf],
    selector: 'task-item',
    templateUrl: './app/components/task-item.html'
})
export class TaskItemComponent {

    @Input() currentUser: User
    @Input() task: Task
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
