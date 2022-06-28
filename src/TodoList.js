import React from 'react'

export default function TodoList( todos ) {
  return (
    <div className='tasks'>
      <ul>
        <input type="checkbox" className="mr-1"/>Eat donut
        <input type="checkbox" className="ml-10 mr-1"/>Drink milk
      </ul>
    </div>
  )
}
