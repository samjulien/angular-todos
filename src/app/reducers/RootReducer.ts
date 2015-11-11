import { currentUser } from './AuthReducers';
import { tasks } from './TaskReducers';
import { filter } from './FilterReducers';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  currentUser,
  filter,
  tasks,
})

export default rootReducer
