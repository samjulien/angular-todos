import { combineReducers } from 'redux'
import { SET_FILTER, Filters } from '../actions/FilterActions';

const { SHOW_ALL } = Filters

export function filter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}
