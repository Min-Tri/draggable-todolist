/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, COMPLETE, DELETE_ITEM,SWAP_TODO} from "../actionType";


const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:{
      const {id,content}=action.payload
      return [
        ...state,
        {
          id,
          content,
          completed: false
        }
      ]
    }
    case COMPLETE:{
      const {id}=action.payload
      return state.map(todo =>
        (todo.id === id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    }
    case DELETE_ITEM:{
      const {id}=action.payload
      return state.filter(todo => todo.id !== id)
    }
    case SWAP_TODO:{
      const {sourceTodo,targetTodo}=action.payload
      return state.map(todo => {
        switch(todo.id) {
          case sourceTodo.id:
            return targetTodo
          case targetTodo.id:
            return sourceTodo
          default:
            return todo
        }
      })
    }
    default:
      return state
  }
}

export default todos
