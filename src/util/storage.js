/* eslint-disable import/no-anonymous-default-export */

const TODOS_STORAGE_KEY='TODOS'

// export default  {
//     get(){
//         return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY))||[]
//     },
//     set(todos){
//         localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))
//     }
// }

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem(TODOS_STORAGE_KEY);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
export const saveState = (state) => {
try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(TODOS_STORAGE_KEY, serializedState);
} catch (err) {
    throw new Error("Can't save changes in local storage");
}
};