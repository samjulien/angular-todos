import { Task } from '../model/Task';
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK_STATUS, TOGGLE_TASK_VISIBILITY } from '../actions/TaskActions';

export function tasks(tasks: Task[] = [], action) {
  let index: number
  let task: Task
  switch (action.type) {
    case ADD_TASK:
      return [
        ...tasks,
        action.task
      ]
    case REMOVE_TASK:
      return tasks.filter((task: Task) => task.id != action.id )
    case TOGGLE_TASK_STATUS:
      index = tasks.findIndex((task: Task) => task.id == action.id)
      if (index < 0) {
        return tasks
      } else {
        task = tasks[index];
        return [
          ...tasks.slice(0, index),
          Object.assign({}, task, {
            completed: !task.completed
          }),
          ...tasks.slice(index + 1)
        ]
      }
    case TOGGLE_TASK_VISIBILITY:
      index = tasks.findIndex((task: Task) => task.id == action.id)
      if (index < 0) {
        return tasks
      } else {
        task = tasks[index];
        return [
          ...tasks.slice(0, index),
          Object.assign({}, task, {
            private: !task.private
          }),
          ...tasks.slice(index + 1)
        ]
      }
    default:
      return tasks
  }

}
