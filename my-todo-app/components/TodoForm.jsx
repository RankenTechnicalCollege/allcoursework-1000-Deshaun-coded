import React,{useState} from 'react'


const TodoForm = () => {
  const {input, setInput}= useState('');

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random()*10000),
      text:input
    })
    setInput('');
  };

  const handleChange = e => {
    setInput(e.target.value);

  };

  

  return (
  <div>
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text'
      placeholder='Update your task'
      value={input}
      name='text'
      className='todo-input-edit'
      onChange={handleChange}/>
      <button type='submit' className='todo-button edit'>Update</button>
      </form>
      </div>
    )
}

export default TodoForm