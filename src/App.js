import React, { useState } from 'react';
import TodoList from './TodoList';
import Input from './Input';
import Submit from './Submit';
import ClearTasks from './ClearTasks';

function App() {
  return (
    <>
    <div className='text-center m-8'>
    <h1 className="text-3xl font-bold m-2">To-Do List</h1>
    <Input />
    <Submit />
    <ClearTasks />
    <TodoList />
    </div>  
    </>
  );
}

export default App;