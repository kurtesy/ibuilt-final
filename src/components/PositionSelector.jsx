import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPosition } from '../../redux/rooms'
export default function PositionSelector({ position, setPosition, setRoom }) {
  const dispatch = useDispatch()
  return (
    <div className='w-full'>
      <select
        className='w-full bg-slate-400 rounded-lg px-3 h-[32px] outline-none font-semibold text-slate-800 cursor-pointer'
        value={position}
        onChange={(e) => {
          dispatch(setCurrentPosition({ position: e.target.value }))
          setPosition(e.target.value)
          setRoom('')
        }}>
        <option className='bg-gray-700' value=''>
          Select Position
        </option>
        <option className='bg-primaryLime' value='nw'>
          North West
        </option>
        <option className='bg-primaryLime' value='ne'>
          North East
        </option>
        <option className='bg-primaryLime' value='sw'>
          South West
        </option>
        <option className='bg-primaryLime' value='se'>
          South East
        </option>
      </select>
    </div>
  )
}
