import { Filters, SET_FILTER } from '../actionType'

const visibilityFilter = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter