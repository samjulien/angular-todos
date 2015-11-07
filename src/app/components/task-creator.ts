import {Component, EventEmitter, Input, Output, FORM_DIRECTIVES} from 'angular2/angular2';
import {Task} from '../model/Task';
import {User} from '../model/User';

@Component({
    directives: [FORM_DIRECTIVES],
    selector: 'task-creator',
    templateUrl: './app/components/task-creator.html'
})
export class TaskCreatorComponent {

    @Input() currentUser:User;
    @Output() create:EventEmitter = new EventEmitter();

    onSubmit(inputElement) {
        let newTask = new Task(inputElement.value, this.currentUser);
        inputElement.value = '';
        this.create.next(newTask);
    }
}
