import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
    <h1 className="text-3xl font-bold underline flex justify-center">To-do List</h1>
    <input type="text" />
    <button>Add Tasks</button>
    <button>Clear Completed</button>
    <TodoList />
    </>
  );
}

export default App;
