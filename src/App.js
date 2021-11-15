import {connect} from "react-redux";
import Header from "./components/Header";
// import TodoList from "./components/TodoList";
import MainSection from "./containers/MainSection";
import {HTML5Backend} from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const App=()=> {
  return (
    <div className="todoapp">

      <DndProvider backend={HTML5Backend}>
        <Header/>        
        <MainSection/>
      </DndProvider>
    </div>
  );
}

export default connect()(App);
