import {connect} from "react-redux";
import Header from "./components/Header";
// import TodoList from "./components/TodoList";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import {HTML5Backend} from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const App=(todos)=> {
  return (
    <div className="todoapp">

      <DndProvider backend={HTML5Backend}>
        <Header/>
        {/* {todos.length>0 && <VisibleTodoList/>}
        {todos.length>0 && <Footer/>} */}
        {/* <TodoList/> */}
        <VisibleTodoList/>
        <Footer/>
      </DndProvider>
    </div>
  );
}

export default connect()(App);
