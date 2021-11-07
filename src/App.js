import React, { useState, useEffect } from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import Loader from './todo/Loader'
import Modal from './modal/Modal'
const AddTodo = React.lazy(() => import('./todo/AddTodo'))

function App() {
  let [loading, setLoading] = useState(true)
  let [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => { setTimeout(() => {setTodos(todos); setLoading(false)}, 2000) })

  },[])

  const toggleTask = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === todos[id].id) { todo.completed =  !todo.completed}
        return todo
      }) 
    )
  }
  const removeTask = id => {
    setTodos(
      todos.filter(t => t.id !== id)
    )
  }
  const addTask = val => {
    setTodos(
      [...todos, { title: val, id: todos.length, completed: false }]
    )
  }

  return (
    <div className="wrapper">
      <Context.Provider value={{toggleTask, removeTask, addTask}}>
        <h1>First React App</h1>
        <Modal />
        <React.Suspense fallback={<p>loading...</p>}>
        <AddTodo />
        </React.Suspense>
       
      { loading ? <Loader /> : <TodoList todos={todos} /> } 
      </Context.Provider>
      
    </div>
  );
}

export default App;
