import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { saveState,loadState } from "../util/storage";

// export default createStore(rootReducer, applyMiddleware(logger));

// const configureStore = () => {
//     const persistedState = loadState();
//     const store = createStore(
//       rootReducer,
//       persistedState,
      
//       applyMiddleware(logger));
  
//     store.subscribe(throttle(() => {
//       saveState({
//         todos: store.getState().todos,
//         visibilityFilter: store.getState().visibilityFilter
//       })
//     },1000))
  
//     return store;
//   }
  
// export default configureStore;

const store=createStore(rootReducer, loadState(),applyMiddleware(logger))

store.subscribe(() => saveState(store.getState()));

export default store;