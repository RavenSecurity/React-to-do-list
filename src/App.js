import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
    <TodoList todoList={todos}/>
    <input type="text" />
    <button>Add Tasks</button>
    <button>Clear Completed</button>
    <div className='tasks'>
      <ul>
        <input type="checkbox"/>Eat donut
        <input type="checkbox"/>Drink milk

      </ul>
    </div>
    </>
  );
}

export default App;
