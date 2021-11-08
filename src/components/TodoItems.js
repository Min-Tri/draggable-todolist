import React from 'react'

const Todo = ({ onClick, onRemove, completed, content }) => {
    let className = 'list-group-item list-group-item-custom'
    if (completed) {
        className += ' completed'
    } else {
        className += ' '
    }


    return (
    <li
        className={className}
        
        // style={{
        // textDecoration: completed ? 'line-through' : 'none'
        // }}
    >
        <div className="view">
            <input 
                className="toggle" 
                type="checkbox"
                defaultChecked={completed}
                onClick={onClick}
            />
            <label style={{textDecoration: completed ? 'line-through' : 'none'}}>{content}</label>            
            <button className="destroy" onClick={onRemove}/>
        </div>
    </li>
    )
}

export default Todo