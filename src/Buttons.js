// Each button has props (colors, callbacks (fonction associé à l'événement), content (text) )

import React from 'react'
import App from './App'

export default function Buttons( props, {handleClearTodos, handleAddTodo} ) {
  // todoNameRef, setTodos, todos
  console.log(props)
  const todoNameRef = props.todoNameRef

 
  
  return (
    <div>
      <button onClick={handleAddTodo} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10">Add Tasks</button>
      <button onClick={handleClearTodos} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10">Clear Completed</button>
    </div>
  )
}
