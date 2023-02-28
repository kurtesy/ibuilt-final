import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import React, { useEffect, useState } from 'react'
import { updateRoomData } from '../../redux/rooms'

export default function DirectionControls() {
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)
  const { plotLength, plotBreadth, scale, setbacks } = useSelector((state) => state.plot)
  const currentRoom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === selectedRoom.id)[0])
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [maxX, setMaxX] = useState(0)
  const [maxY, setMaxY] = useState(0)
  const [position, setPosition] = useState({})
  useEffect(() => {
    if (currentRoom) {
      if (currentRoom.position.top !== undefined) setY(currentRoom.position.top)
      else setY(currentRoom.position.bottom)
      if (currentRoom.position.left !== undefined) setX(currentRoom.position.left)
      else setX(currentRoom.position.right)
      setMaxX((plotLength - currentRoom.length - setbacks.left - setbacks.right) * scale)
      setMaxY((plotBreadth - currentRoom.breadth - setbacks.front - setbacks.back) * scale)
    }
  }, [currentRoom])

  useEffect(() => {
    if (currentRoom) {
      const currPos = {}
      if (currentRoom.position.top !== undefined) currPos['top'] = y
      else currPos['bottom'] = y
      if (currentRoom.position.left !== undefined) currPos['left'] = x
      else currPos['right'] = x
      setPosition(currPos)
    }
  }, [x, y])
  useEffect(() => {
    dispatch(updateRoomData({ ...selectedRoom, position }))
  }, [position])
  return (
    <>
      <div className='font-bold h-[32px] flex items-center text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800'>
        Direction
      </div>
      <Slider min={0} max={maxX} left='W' right='E' value={x} setValue={setX} />
      <Slider min={0} max={maxY} left='N' right='S' value={y} setValue={setY} />
    </>
  )
}
