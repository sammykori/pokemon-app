import React from 'react'

export default function Pagination({next, prev}) {
  return (
    <div className='border'>
        <div className='float-right m-4'>
            {prev && <button className='p-2 rounded-xl bg-red-900 text-white m-2' onClick={prev}>Previous</button>}
            {next && <button className='p-2 rounded-xl bg-red-900 text-white m-2' onClick={next}>Next</button>}
        </div>
        
    </div>
  )
}
