/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, COMPLETE, DELETE_TODO,SWAP_TODO,EDIT_TODO,COMPLETE_ALL_TODOS,CLEAR_COMPLETED} from "../actionType";


const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:{
      const {id,content}=action.payload
      return [
        ...state,
        {
          id: (state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1)||id,
          content:content,
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
    case DELETE_TODO:{
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
    case EDIT_TODO:{
      const {id,content}=action.payload
      return state.map(todo =>
        (todo.id === id) 
          ?{ ...todo, content: content } 
          :todo
      )
    }      
    case COMPLETE_ALL_TODOS:{
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))
    }      
    case CLEAR_COMPLETED:{
      return state.filter(todo => todo.completed === false)
    }      
    default:
      return state
  }
}

export default todos
