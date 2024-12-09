import React, { useState } from 'react'

const TodoForm = (props) => {
const [ input, setInput] = useState('')

const handleSubmit = e => {
  e.preventDefault();
  //Add form submission logic here
  props.onSubmit({
    id:Math.floor(Math.random()* 10000)
    text:input
  });
};

  return (
    <div>
      <form className='todo-form' onSubmit ={handleSubmit} >
        <input 
        type='text'
        placeholder='Update your task'
        value={input}
        name='text'
        className='todo-input edit'
        onChange= {handleChange} />
        <button type='submit' className='todo-button edit'>Update</button>
      </form>
    </div>
  )
}

export default TodoForm