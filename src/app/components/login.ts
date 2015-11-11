import {Component, EventEmitter, Output, FORM_DIRECTIVES} from 'angular2/angular2';
import {User} from '../model/User';

@Component({
    directives: [FORM_DIRECTIVES],
    selector: 'login',
    templateUrl: './app/components/login.html'
})
export class LoginComponent {

    @Output() login: EventEmitter = new EventEmitter()

    onSubmit(inputElement) {
        this.login.next(inputElement.value)
        inputElement.value = ''
    }

}
