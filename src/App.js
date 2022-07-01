import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import Buttons from './Buttons';
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
  
  return (
    <>
    <div className='m-8 flex flex-col items-center'>
    <h1 className="text-3xl font-bold m-2">To-Do List</h1>
    <div className='flex m-8 items-center'>
    <input type="text" ref={todoNameRef} placeholder="Write a new task" className='border-solid border-2 border-slate-200 m-8 pl-1'/>
    <Buttons todoNameRef={useRef()}/>
    </div>
    <div className='tasks bg-slate-200 w-6/12'>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    </div>  
    </>
  );
}

export default App;