import React from 'react'

export default function Sort( props ) {
  return (
        <select className='bg-slate-100 absolute right-0 top-0' onChange={props.nameAZ} name="" id="">
            <option value="">Sort By</option>
            <option  value="">Name A - Z</option>
            <option value="">Name Z - A</option>
        </select>
)}