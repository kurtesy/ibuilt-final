import React, { useEffect, useState } from 'react'
import { BsPencilFill, BsSave2Fill, BsTrash2Fill } from 'react-icons/bs'
import PositionSelector from './PositionSelector'
export default function RoomSelector({
  label,
  value,
  setRooms,
  rooms,
  setCurrentRoom,
  currentRoom,
  selected,
  setSelected
}) {
  const [id, setId] = useState('')
  const handleRoomSelect = (e) => {
    setCurrentRoom(e.target.name)
    setId(e.target.name)
    const selectedRooms = rooms
    const filterdRooms = selectedRooms.filter((room) => room !== e.target.name)
    filterdRooms.push(e.target.name)
    setRooms(filterdRooms)
  }
  useEffect(() => {
    if (value === currentRoom) {
      setSelected(true);
    } else setSelected(false);
  }, [id]);
  return (
    <div className='w-full flex items-center justify-start '>
      <div className='w-full flex gap-2 items-center justify-start rounded-lg'>
        <div
          className={`flex gap-1 border-[1px] border-primaryLime p-1 rounded-lg  w-[90px]  hover:bg-primaryLime ${
            selected && currentRoom === value ? "bg-primaryLime animate-pulse" : "bg-slate-900"
          }`}>
          <button className='text-white bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs w-[80px]' name={value} onClick={handleRoomSelect}>
            {label}
          </button>
        </div>
        <PositionSelector currentRoom={currentRoom} rooms={rooms} id={id} />
      </div>
    </div>
  );
}
