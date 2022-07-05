import React from 'react'

export default function Sort( props ) {
  return (
        <select className='bg-slate-100 absolute right-0 top-0' name="" id="">
            <option value="">Sort By</option>
            <option onClick={props.nameAZ} value="">Name A - Z</option>
            <option onClick={props.nameZA} value="">Name Z - A</option>
        </select>
)}