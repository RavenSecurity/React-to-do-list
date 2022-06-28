import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
    <input type="text" />
    <button>Add Tasks</button>
    <button>Clear Completed</button>
    <TodoList />
    </>
  );
}

export default App;
