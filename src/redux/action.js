import { ADD_TODO, COMPLETE, DELETE_ITEM, SET_FILTER ,SWAP_TODO} from "./actionType.js";

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
  type: DELETE_ITEM,
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
