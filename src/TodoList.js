import React from 'react'

export default function TodoList( todos ) {
  return (
    <div className='tasks bg-slate-200 w-6/12 flex justify-center'>
      <ul className='flex flex-col'>
        <li><input type="checkbox" className="mr-2"/>Eat donut</li>
        <li><input type="checkbox" className="mr-2"/>Drink milk</li>
      </ul>
    </div>
  )
}
