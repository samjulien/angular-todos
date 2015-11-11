import {User} from './User';

export class Task {

    id: number
    completed: boolean = false
    createdAt: Date = new Date()
    owner: User
    private: boolean = false
    text: string

    constructor(text: string, owner: User) {
        this.id = this.getRandomInt(1,1000)
        this.text = text
        this.owner = owner
    }

    private getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }
}
