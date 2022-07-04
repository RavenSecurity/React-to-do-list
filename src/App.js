import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import Button from './Button';
import Sort from './Sort'
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
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  
  function orderByName() {
    const orderedTodos = todos.sort((a, b) => a.name.localeCompare(b.name));
    console.log(orderedTodos);
    setTodos(orderedTodos);

    // Idk why it doesn't update the DOM with the sorted array unless I add the clear function
    handleClearTodos() 
  }
  
  return (
    <>
    <div className='m-8 flex flex-col items-center'>
    <h1 className="text-3xl font-bold m-2">To-Do List</h1>
    <div className='flex m-8 items-center'>
    <input type="text" ref={todoNameRef} placeholder="Write a new task" className='border-solid border-2 border-slate-200 m-8 pl-1'/>
    <Button bgcolor={'bg-blue-500'} bghover={'hover:bg-blue-700'} text={'Add Tasks'} onClick={handleAddTodo} />
    <Button bgcolor={'bg-green-500'} bghover={'hover:bg-green-700'} text={'Clear Completed'} onClick={handleClearTodos} />
    {/* <button onClick={orderByName}> sort </button> */}
    </div>
    <div className='tasks bg-slate-200 w-6/12 relative p-2'>
      <Sort nameAZ={orderByName}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    </div>  
    </>
  );
}

export default App;