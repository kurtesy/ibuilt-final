import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Auth() {
  return (
    <div className='w-full h-full items-center justify-center flex flex-col text-lg '>
      <Outlet />
    </div>
  )
}
