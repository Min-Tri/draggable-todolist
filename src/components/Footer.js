import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Filters } from '../redux/actionType'

const Footer = (props) => {
  const { activeCount, completedCount, onClearCompleted } = props
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return(
    <footer className="footer">
      <span className="todo-count">
          <strong>{activeCount || 'No'} </strong> {itemWord} left
      </span>
      <ul className="filters">
        <FilterLink filter={Filters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={Filters.SHOW_UNCOMPLETE}>
          Active
        </FilterLink>
        <FilterLink filter={Filters.SHOW_COMPLETE}>
          Completed
        </FilterLink>

      </ul>
      {
        !!completedCount &&
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >Clear completed</button>
        
      }
    </footer>
  )
}

export default Footer