import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import flow from 'lodash.flow'
import Todo from '../components/TodoItems'
import { swapTodo } from '../redux/action'

/**
 * Implements the drag source contract.
 */
let sourceTodo = null
let targetTodo = null

const draggableTodoSource = {
    beginDrag(props) {
        // Return the data describing the dragged item
        const item = props.todo
        sourceTodo = item
        return item
    },
    endDrag(props) {
        // Return the data describing the endDrag item
        const item = props.todo
        return item
    }
}

const targetTodoSource = {
    drop(props) {
        // Return the data describing the dropped item
        const item = props.todo
        return item
    },
    hover(props) {
        // Return the data describing the hovered item
        const item = props.todo
        targetTodo = item
        if (sourceTodo.id !== targetTodo.id) {
            props.dispatch(swapTodo(sourceTodo, targetTodo))
        }
        return item
    }
}

/**
 * Specifies the props to inject into your component.
 */
function sourceCollect(connect, monitor) {
  return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
  }
}

function targetCollect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver()
    }
}

const DraggableTodo = ({isDragging, connectDragSource, isOver, connectDropTarget, todo, toggleItem, deleteItem, dispatch}) => connectDragSource(connectDropTarget(
    <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        <Todo
            {...todo}
            onClick={() => toggleItem(todo.id)}
            onRemove={() => deleteItem(todo.id)}
        />
    </div>
))


// Export the wrapped component:
export default flow(
    DragSource('list', draggableTodoSource, sourceCollect),
    DropTarget('list', targetTodoSource, targetCollect)
)(DraggableTodo)