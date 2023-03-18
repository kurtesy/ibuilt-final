import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const mapping = {
  S: 'SOUTH',
  N: 'NORTH',
  E: 'EAST',
  W: 'WEST'
}
export default function PositionPointer({ isBottom }) {
  const { facing } = useSelector((state) => state.plot)
  if (facing)
    return (
      <div
        className={`absolute h-90 bg-slate-900 flex  items-center justify-center text-primaryLime ${
          isBottom ? 'right-12 bottom-2 gap-3 px-2 w-[120px] rounded-lg shadow-2xl' : ' left-2 top-16 flex-col'
        }`}>
        {!isBottom ? (
          <div className='items-center flex text-lg font-bold'>{facing}</div>
        ) : (
          <div className='font-bold'>{mapping[`${facing}`]}</div>
        )}
        <AiFillCaretDown size={32} />
      </div>
    )
}
