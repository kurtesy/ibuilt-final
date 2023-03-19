import React from 'react'
import AddIconComponent from './AddIconComponent'

export default function IconsList() {
  return (
    <>
      <div className='font-bold h-[32px] flex items-center justify-between text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800'>
        Manage Icons
        <span className='text-xs '>
          Selected Icon-
          <span className='text-[#5865F2] '></span>
        </span>
      </div>
      <div>
        <AddIconComponent />
      </div>
    </>
  )
}
