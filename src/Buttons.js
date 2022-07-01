// Each button has props (colors, callbacks (fonction associé à l'événement), content (text) )

import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Buttons( todoNameRef, setTodos, todos) {
  

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
    <div>
      <button onClick={handleAddTodo} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10">Add Tasks</button>
      <button onClick={handleClearTodos} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10">Clear Completed</button>
    </div>
  )
}
