import React from 'react'

export default function Search({onSearchChange}) {
  return (
    <div>
        <input className = "w-40 border"
        type = 'number' 
        pattern='[0-9]*'
        placeholder = 'Filter by Generation'
        onChange = {
                onSearchChange
            }
        />
    </div>
  )
}
