import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import React, { useEffect, useState } from 'react'
import { updateRoomData } from '../../redux/rooms'

export default function DirectionControls() {
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)
  const { plotLength, plotBreadth, scale, setbacks } = useSelector((state) => state.plot)
  const currentBedRoom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === selectedRoom.id)[0])
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === selectedRoom.id)[0])
  const containedBedRoom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === selectedRoom.id)[0])
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [maxX, setMaxX] = useState(0)
  const [maxY, setMaxY] = useState(0)
  const [position, setPosition] = useState({})
  const [currentSelection, setCurrentSelection] = useState(null)
  useEffect(() => {
    if (selectedRoom.roomType === 'bedroom' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((plotLength - currentSelection.length - setbacks.left - setbacks.right) * scale)
      setMaxY((plotBreadth - currentSelection.breadth - setbacks.front - setbacks.back) * scale)
    } else if (selectedRoom.roomType === 'toilet' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((containedBedRoom?.length - currentSelection.length) * scale)
      setMaxY((containedBedRoom?.breadth - currentSelection.breadth) * scale)
    }
  }, [currentSelection])

  useEffect(() => {
    if (selectedRoom.roomType === 'bedroom') setCurrentSelection(currentBedRoom)
    else if (selectedRoom.roomType === 'toilet') setCurrentSelection(currentToilet)
    else setCurrentSelection(null)
  }, [selectedRoom])
  useEffect(() => {
    if (currentSelection) {
      const currPos = {}
      if (currentSelection.position.top !== undefined) currPos['top'] = y
      else currPos['bottom'] = y
      if (currentSelection.position.left !== undefined) currPos['left'] = x
      else currPos['right'] = x
      setPosition(currPos)
    }
  }, [x, y])
  useEffect(() => {
    dispatch(updateRoomData({ ...selectedRoom, position }))
  }, [position])

  console.log(position)
  return (
    <>
      <div className='font-bold h-[32px] flex items-center text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800'>
        Direction
      </div>
      <Slider
        min={0}
        max={maxX}
        value={x}
        setValue={setX}
        direction={position.right !== undefined ? { from: 'E', to: 'W' } : { from: 'W', to: 'E' }}
      />
      <Slider
        min={0}
        max={maxY}
        value={y}
        setValue={setY}
        direction={position.bottom !== undefined ? { from: 'S', to: 'N' } : { from: 'N', to: 'S' }}
      />
    </>
  )
}
