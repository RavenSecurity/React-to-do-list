import React, { useState } from 'react';
import TodoList from './TodoList';
import Input from './Input';
import Submit from './Submit';
import ClearTasks from './ClearTasks';

function App() {
  return (
    <>
    <div className='m-8 flex flex-col items-center'>
    <h1 className="text-3xl font-bold m-2">To-Do List</h1>
    <div className='flex m-8 items-center'>
    <Input />
    <Submit />
    <ClearTasks />
    </div>
    <TodoList />
    </div>  
    </>
  );
}

export default App;