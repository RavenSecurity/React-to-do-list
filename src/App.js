import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'
const LOCAL_STORAGE_KEY = 'todoApp.todos'



function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()



  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
    <div className='m-8 flex flex-col items-center'>
    <h1 className="text-3xl font-bold m-2">To-Do List</h1>
    <div className='flex m-8 items-center'>
    <input type="text" ref={todoNameRef} className='border-solid border-2 border-slate-200 m-8'/>
    <button onClick={handleAddTodo} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10">Add Tasks</button>
    <button onClick={handleClearTodos} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10">Clear Completed</button>
    </div>
    <div className='tasks bg-slate-200 w-6/12'>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    </div>  
    </>
  );
}

export default App;