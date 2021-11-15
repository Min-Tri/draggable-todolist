/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action'


const AddTodo = ({ dispatch }) => {
  let input

  return (
    <header className="header">
        <h1>todos</h1>
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <div>
              
                    <input 
                        ref={node => input = node} 
                        type="text" className="form-control" 
                        placeholder="Please enter" 
                        aria-label="Please enter" 
                        aria-describedby="basic-addon2" 
                        required
                        className="new-todo"
                    />
                    {/* <div>
                        <button 
                            
                            style={{color: 'white', borderColor: 'lightgrey'}} 
                            type="submit"
                        ></button>
                    </div> */}
                </div>
            </form>
        </div>
    </header>
  )
}

export default connect()(AddTodo)