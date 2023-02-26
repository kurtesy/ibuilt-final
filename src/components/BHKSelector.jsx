import React, { useState } from 'react'

export default function BHKSelector() {
  const [selected, setSelected] = useState('1BHK')
  const activeClass = 'bg-primaryLime text-slate-800 font-semibold px-2 rounded-lg cursor-pointer'
  return (
    <>
      <div className='flex gap-3 h-8 items-center bg-slate-800 text-primaryLime justify-between px-6 rounded-lg'>
        <label className='font-semibold text-lg'>Facing</label>
        <select className='font-semibold flex items-center justify-center text-white outline-none bg-transparent'>
          <option className='bg-slate-800'>Select Facing </option>
          <option className='bg-slate-800'>NORTH </option>
          <option className='bg-slate-800'>SOUTH </option>
          <option className='bg-slate-800'>EAST </option>
          <option className='bg-slate-800'>WEST </option>
        </select>
      </div>
      <div className='flex gap-3 h-8 items-center bg-slate-800 text-primaryLime justify-between px-6 rounded-lg'>
        <div className={selected === '1BHK' ? activeClass : null} onClick={() => setSelected('1BHK')}>
          1 BHK
        </div>
        <div className={selected === '2BHK' ? activeClass : null} onClick={() => setSelected('2BHK')}>
          2 BHK
        </div>
        <div className={selected === '3BHK' ? activeClass : null} onClick={() => setSelected('3BHK')}>
          3 BHK
        </div>
        <div className={selected === '4BHK' ? activeClass : null} onClick={() => setSelected('4BHK')}>
          4 BHK
        </div>
      </div>
    </>
  )
}
