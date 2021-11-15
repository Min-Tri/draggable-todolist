import React, { Component } from 'react'

import DraggableTodo from '../containers/DraggableTodo'


class TodoList extends Component {
  componentDidMount() {
    // default data
    // this.props.dispatch(addTodo('Run'))
    // this.props.dispatch(addTodo('Chocolate Bar'))
  }

  render() {
    const { todos, toggleItem, deleteItem, dispatch,actions } = this.props
    return (
      <section className="main">

        <ul className="todo-list">
          {todos.map(todo =>
            <DraggableTodo
              key={todo.id}
              todo={todo}
              toggleItem={() => toggleItem(todo.id)}
              deleteItem={() => deleteItem(todo.id)}
              actions={actions}
              dispatch={dispatch}
            />
      
          )}
        </ul>
      </section>
    )
  }
}


export default TodoList