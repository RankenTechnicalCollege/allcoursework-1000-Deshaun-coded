import { useState } from 'react'
import TodoForm from './components/TodoForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <TodoForm />
   </>
  )
}

export default App
