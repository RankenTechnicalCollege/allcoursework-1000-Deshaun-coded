import React from 'react'


const TodoForm = () => {
  const {input, setInput}= useState('');
  return (
  <div>
    <form className='todo-form'>
      <input type='text'
      placeholder='Update your task'
      value={input}
      name='text'
      className='todo-input-edit'/>
      <button type='submit' className='todo-button edit'>Update</button>
      </form>
      </div>
    )
}

export default TodoForm