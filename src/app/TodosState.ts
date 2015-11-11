import { Task } from './model/Task';
import { User } from './model/User';

export interface TodosState {

  currentUser: User
  filter: string
  tasks: Task[]

}
