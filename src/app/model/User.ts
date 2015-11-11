export class User {

    id: number
    name: string

    constructor(name: string) {
      this.id = this.getRandomInt(1,1000)
      this.name = name
    }

    private getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }

}
