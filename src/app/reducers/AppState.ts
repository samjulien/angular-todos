import { Task } from '../model/Task';
import { User } from '../model/User';

export interface AppState {

  currentUser: User
  filter: string
  tasks: Task[]

}
