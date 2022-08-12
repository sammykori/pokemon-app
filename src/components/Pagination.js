import React from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'

export default function Pagination({next, prev}) {
  return (
    <div className='flex flex-row border items-center justify-between'>
        <div className='float-left m-4'>
            {prev && <ArrowLeftIcon className='w-6 h-6 text-red-900' onClick={prev}/>}
        </div>
        <div className='float-right m-4'>
            {next && <ArrowRightIcon className='w-6 h-6 text-red-900'  onClick={next}/>}
        </div>
        
    </div>
  )
}
