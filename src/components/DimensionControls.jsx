import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import React, { useEffect, useState } from 'react'
import { updateRoomData } from '../../redux/rooms'

export default function DimensionControls() {
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)
  
  const currentBedRoom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === selectedRoom.id)[0])
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === selectedRoom.id)[0])
  const [currentSelection, setCurrentSelection] = useState(null)
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  useEffect(() => {
    if (selectedRoom.roomType === 'toilet') {
      console.log('toilet selected')
      setCurrentSelection(currentToilet)
    } else if (selectedRoom.roomType === 'bedroom') {
      setCurrentSelection(currentBedRoom)
      console.log('bedroom selected')
    } else {
      setCurrentSelection(null)
      console.log('nothing selected')
    }
  }, [selectedRoom])
  console.log(currentSelection)
  useEffect(() => {
    if (currentSelection) {
      setLength(currentSelection.length <= currentSelection.maxDim ? currentSelection.length : currentSelection.maxDim)
      setBreadth(
        currentSelection.breadth <= currentSelection.maxDim ? currentSelection.breadth : currentSelection.maxDim
      )
    }
  }, [currentSelection])

  useEffect(() => {
    dispatch(updateRoomData({ ...selectedRoom, length, breadth }))
  }, [length, breadth, selectedRoom])

  return (
    <>
      <div className='font-bold h-[32px] flex items-center text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800'>
        Dimensions
      </div>
      <Slider
        min={currentSelection?.minDim}
        max={currentSelection?.maxDim}
        dimension='Length'
        value={length}
        defaultValue={length}
        setValue={setLength}
      />
      <Slider
        min={currentSelection?.minDim}
        max={currentSelection?.maxDim}
        dimension='Breadth'
        value={breadth}
        defaultValue={breadth}
        setValue={setBreadth}
      />
    </>
  )
}
