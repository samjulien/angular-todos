import { Task } from '../model/Task';

export const ADD_TASK = 'ADD_TASK'
export function addTask(task: Task) {
  return { type: ADD_TASK, task }
}

export const REMOVE_TASK = 'REMOVE_TASK'
export function removeTask(id: number) {
  return { type: REMOVE_TASK, id }
}

export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS'
export function toggleTaskStatus(id: number) {
  return { type: TOGGLE_TASK_STATUS, id }
}

export const TOGGLE_TASK_VISIBILITY = 'TOGGLE_TASK_VISIBILITY'
export function toggleTaskVisibility(id: number) {
  return { type: TOGGLE_TASK_VISIBILITY, id }
}
