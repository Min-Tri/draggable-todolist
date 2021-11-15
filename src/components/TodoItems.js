import React,{Component} from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class Todo extends Component {
    state = {
      editing: false
    }
  
    handleDoubleClick = () => {
      this.setState({ editing: true })
    }
  
    handleSave = (id, content) => {
      if (content.length === 0) {
        this.props.onRemove(id)
      } else {
        this.props.editTodo(id, content)
      }
      this.setState({ editing: false })
    }
  
    render() {
      const { todo, onClick, onRemove, content} = this.props
  
      let element
      if (this.state.editing) {
        element = (
            <TodoTextInput 
                text={content}
                editing={this.state.editing}
                onSave={(content) => this.handleSave(todo.id, content)} 
            />
        )
      } else {
        element = (
          <div className="view">
            <input className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => onClick(todo.id)} 

            />
            <label onDoubleClick={this.handleDoubleClick}>
              {todo.content}
            </label>
            <button 
                className="destroy"

                onClick={onRemove}
            />
          </div>
        )
      }
  
      return (
        <li className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}>
          {element}
        </li>
      )
    }
}
export default Todo