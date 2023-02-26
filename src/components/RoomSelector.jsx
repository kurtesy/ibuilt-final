import React, { useEffect, useState } from 'react'
export default function RoomSelector({ room, setRoom, position }) {
  return (
    <div className='w-full'>
      <select
        className='w-full bg-primaryLime rounded-lg px-3 h-[32px] font-semibold text-slate-800 cursor-pointer'
        value={room}
        disabled={position === ''}
        onChange={(e) => setRoom(e.target.value)}>
        <option value=''>Select Room</option>
        <option value='bedroom'>Bed Room</option>
        <option value='living'>Living Room</option>
        <option value='kitchen'>Kitchen</option>
        <option value='drawingroom'>Drawing Room</option>
        <option value='store'>Store</option>
        <option value='sitout'>Study</option>
        <option value='office'>Office</option>
        <option value='media'>Media</option>
      </select>
    </div>
  )
}
