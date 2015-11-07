import {Component, EventEmitter, Input, Output, NgFor} from 'angular2/angular2';
import {Task} from '../model/Task';
import {TaskItemComponent} from './task-item';

@Component({
    directives: [NgFor, TaskItemComponent],
    selector: 'task-list',
    templateUrl: './app/components/task-list.html'
})
export class TaskListComponent {

    @Input() tasks:Task[];
    @Output() remove:EventEmitter = new EventEmitter();
    @Output() toggleStatus:EventEmitter = new EventEmitter();
    @Output() toggleVisibility:EventEmitter = new EventEmitter();

    onToggleStatus(task:Task) {
        this.toggleStatus.next(task);
    }

    onToggleVisibility(task:Task) {
        this.toggleVisibility.next(task);
    }

    onRemove(task:Task) {
        this.remove.next(task);
    }

}
