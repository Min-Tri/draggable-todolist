import { ADD_TODO, COMPLETE, DELETE_TODO, SET_FILTER ,SWAP_TODO,EDIT_TODO,COMPLETE_ALL_TODOS,CLEAR_COMPLETED} from "./actionType.js";

let todoid = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: todoid++,
    content
  }
});

export const toggleItem = (id, status) => ({
  type: COMPLETE,
  payload: {
    id,
    status
  }
});

export const deleteItem = (id) => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const swapTodo = (sourceTodo, targetTodo) => ({
  type: SWAP_TODO,
  payload:{
    sourceTodo,
    targetTodo
  }
})

export const filter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter
  }
});

export const editTodo = (id, content) => ({ 
  type: EDIT_TODO,
  payload:{
    id, 
    content
  }
})

export const completeAllTodos = () => ({ 
  type: COMPLETE_ALL_TODOS 
})

export const clearCompleted = () => ({ 
  type: CLEAR_COMPLETED 
})