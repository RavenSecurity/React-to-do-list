import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
  return (
    <div className='p-1'>
        <label >
            <input className='mr-2 w-4 h-4'type="checkbox"  checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
        </label>
    </div>
  )
}
