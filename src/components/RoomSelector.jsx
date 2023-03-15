import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom } from '../../redux/rooms'
export default function RoomSelector({ room, setRoom, position }) {
  const { currentPosition } = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  return (
    <div className='w-full'>
      <select
        className='w-full bg-slate-400 outline-none rounded-lg px-3 h-[32px] font-semibold text-slate-800 cursor-pointer'
        value={room}
        // disabled={position === ''}
        onChange={(e) => {
          if (currentPosition) dispatch(setCurrentRoom({ id: currentPosition, room: e.target.value }))
          setRoom(e.target.value)
        }}>
        <option className='bg-gray-700' value=''>
          Select Room
        </option>
        <option className='bg-primaryLime' value='bedroom'>
          <input type='checkbox' className='w-2 h-2' /> Bed Room
        </option>
        <option className='bg-primaryLime' value='living'>
          Living Room
        </option>
        <option className='bg-primaryLime' value='kitchen'>
          Kitchen
        </option>
        <option className='bg-primaryLime' value='drawing'>
          Drawing Room
        </option>
        <option className='bg-primaryLime' value='store'>
          Store
        </option>
        <option className='bg-primaryLime' value='sitout'>
          Sitout
        </option>
        <option className='bg-primaryLime' value='office'>
          Office
        </option>
        <option className='bg-primaryLime' value='media'>
          Media
        </option>
      </select>
    </div>
  )
}
