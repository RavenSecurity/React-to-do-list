import React, { useState } from 'react'

export default function TodoList() {
  const initialTodos  = ["My first todo", "My second todo"];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className='tasks bg-slate-200 w-6/12'>
    <ul className=''>
      {todos.map((todo) => (
        <li>
          <input type="checkbox" className="m-2"/> {todo}
        </li>
      ))}
    </ul>
    </div>
  )
}