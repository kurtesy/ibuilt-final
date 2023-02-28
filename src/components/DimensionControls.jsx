import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import React, { useEffect, useState } from 'react'
import { updateRoomData } from '../../redux/rooms'

export default function DimensionControls() {
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)
  const currentRoom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === selectedRoom.id)[0])
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  useEffect(() => {
    if (currentRoom) {
      setLength(currentRoom.length < currentRoom.maxDim ? currentRoom.length : currentRoom.maxDim)
      setBreadth(currentRoom.breadth < currentRoom.maxDim ? currentRoom.breadth : currentRoom.maxDim)
    }
  }, [currentRoom])

  useEffect(() => {
    dispatch(updateRoomData({ ...selectedRoom, length, breadth }))
  }, [length, breadth])

  return (
    <>
      <div className='font-bold h-[32px] flex items-center text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800'>
        Dimensions
      </div>
      <Slider min={3.5} max={20} dimension='Length' value={length} setValue={setLength} />
      <Slider min={3.5} max={20} dimension='Breadth' value={breadth} setValue={setBreadth} />
    </>
  )
}
