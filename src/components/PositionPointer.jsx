import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { useSelector } from 'react-redux'
export default function PositionPointer() {
  const { facing } = useSelector((state) => state.plot)
  if (facing)
    return (
      <div className='absolute left-2 top-10 h-90 bg-slate-900 flex flex-col items-center justify-center text-primaryLime'>
        <div className='items-center flex text-lg font-bold'>{facing}</div>
        <AiFillCaretDown size={32} />
      </div>
    )
}
