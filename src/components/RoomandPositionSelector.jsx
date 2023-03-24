import React, { useState } from 'react'
import RoomSelector from './RoomSelector'
import PositionSelector from './PositionSelector'

export default function RoomandPositionSelector({ label, value, rooms, setRooms, setCurrentRoom, currentRoom }) {
  return (
    <div className='flex w-2/3'>
      <RoomSelector
        label={label}
        value={value}
        rooms={rooms}
        setRooms={setRooms}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />
    </div>
  )
}
