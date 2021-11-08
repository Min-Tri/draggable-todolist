import { connect } from 'react-redux'
import { toggleItem, deleteItem } from '../redux/action'
import TodoList from '../components/TodoList'
import { Filters } from '../redux/actionType'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos
    case Filters.SHOW_COMPLETE:
      return todos.filter(t => t.completed)
    case Filters.SHOW_UNCOMPLETE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleItem: id => dispatch(toggleItem(id)),
  deleteItem: id => dispatch(deleteItem(id)),
  dispatch: dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)