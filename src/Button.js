import React from 'react'

export default function Button( props ) {
  return (
    <button onClick={props.onClick} className={`mr-4 ${props.bgcolor} ${props.bghover} text-white font-bold py-2 px-4 rounded h-10`}>{props.text}</button>
  )
}
