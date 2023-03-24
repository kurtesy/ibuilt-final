import React, { useState } from 'react'
import { BsPencilFill, BsSave2Fill, BsTrash2Fill } from 'react-icons/bs'
import PositionSelector from './PositionSelector'
export default function RoomSelector({ label, value, setRooms, rooms, setCurrentRoom, currentRoom }) {
  const [id, setId] = useState('')
  const handleRoomSelect = (e) => {
    setId(e.target.name)
    setCurrentRoom(e.target.name)
    const selectedRooms = rooms
    const filterdRooms = selectedRooms.filter((room) => room !== e.target.name)
    filterdRooms.push(e.target.name)
    setRooms(filterdRooms)
  }

  return (
    <div className='w-full flex items-center justify-start'>
      <div className='w-full flex  items-center justify-start rounded-lg shadow-2xl'>
        <div className='flex gap-1 border-[1px] p-1 rounded-lg bg-slate-700 w-[90px] hover:bg-primaryLime'>
          <button
            className='text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs w-full'
            name={value}
            onClick={handleRoomSelect}>
            {label}
          </button>
        </div>
        <PositionSelector currentRoom={currentRoom} rooms={rooms} id={id} />
      </div>
    </div>
  )
}
