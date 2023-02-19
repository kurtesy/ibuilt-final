import React, { useState } from 'react'
import Sider from './Sider'
import Drawing from './Drawing'
import PlotInputs from './PlotInputs'

export default function Layout() {
  const [hideInputs, setHideInputs] = useState(true)
  return (
    <>
      <div className=' flex fixed top-0 right-0 w-[84%] items-center z-50'>
        <button
          className='text-2xl font-semibold bg-lime-400 h-[30px] rounded-lg mt-3 w-[30px] flex items-center justify-center text-gray-400'
          onClick={() => setHideInputs((prev) => !prev)}>
          {!hideInputs ? '<' : '>'}
        </button>
        {!hideInputs && <PlotInputs setHideInputs={setHideInputs} />}
      </div>
      <div className='flex h-screen w-screen'>
        <Sider />
        <Drawing />
      </div>
    </>
  )
}
