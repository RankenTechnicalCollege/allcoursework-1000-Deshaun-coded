import React, {useState} from 'react';
import TodoForm from './TodoForm';


const ToDoList = () => {
  const  {todos, setTodos} = useState([]);


  const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text))
      return;
  }

  const newTodos = [todo,...todos];

return (
  <div>
    <h1> What Is  On Your List Today</h1>
      <TodoForm onSubmit={addTodo}/>
  </div>
 )
}

export default ToDoList