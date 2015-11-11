export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const SET_FILTER = 'SET_FILTER'
export function setFilter(filter: string) {
  return { type: SET_FILTER, filter }
}
