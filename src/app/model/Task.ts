import {User} from './User';

export class Task {

    id:number;
    completed:boolean = false;
    createdAt:Date = new Date();
    owner:User;
    private:boolean = false;
    text:string;

    constructor(text:string, owner:User) {
        this.text = text;
        this.owner = owner;
    }

}
