import {Component, EventEmitter, Output, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    directives: [FORM_DIRECTIVES],
    selector: 'task-form',
    templateUrl: './app/components/task-creator.html'
})
export class TaskFormComponent {

    @Output() create: EventEmitter = new EventEmitter()

    onSubmit(inputElement) {
        this.create.next(inputElement.value)
        inputElement.value = ''
    }
}
