import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Filters } from '../redux/actionType'

const Footer = () => (
  <div className="footer">
    
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
  </div>
)

export default Footer