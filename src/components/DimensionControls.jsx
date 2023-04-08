import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import React, { useEffect, useState } from 'react'
import { updateRoomData } from '../../redux/rooms'


export default function DimensionControls() {
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)

  const currentBedRoom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === selectedRoom.id)[0])
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === selectedRoom.id)[0])
  const currentLiving = useSelector((state) => state.rooms.livingRooms.filter((room) => room.id === selectedRoom.id)[0])


  const { kitchen, utility, store, drawing, dining, pooja, stairCase, commonToilet } = useSelector(
    (state) => state.rooms
  )
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
    } else if (selectedRoom.roomType === 'living') {
      setCurrentSelection(currentLiving)
      console.log('living selected')
    } else if (selectedRoom.roomType === 'commonToilet') {
      setCurrentSelection(commonToilet)
      console.log('common toilet selected')
    } else if (selectedRoom.roomType === 'kitchen') {
      setCurrentSelection(kitchen)
      console.log('kitchen selected')
    } else if (selectedRoom.roomType === 'utility') {
      setCurrentSelection(utility)
      console.log('kitchen selected')
    } else if (selectedRoom.roomType === 'store') {
      setCurrentSelection(store)
      console.log('store selected')
    } else if (selectedRoom.roomType === 'drawing') {
      setCurrentSelection(drawing)
      console.log('drawing selected')
    } else if (selectedRoom.roomType === 'dining') {
      setCurrentSelection(dining)
      console.log('dining selected')
    } else if (selectedRoom.roomType === 'pooja') {
      setCurrentSelection(pooja)
      console.log('pooja selected')
    } else if (selectedRoom.roomType === 'stairCase') {
      setCurrentSelection(stairCase)
      console.log('staircase selected')
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
      <div className='font-bold  flex justify-between items-center text-left p-1 px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800 text-xs'>
        Manage Dimensions
        <span className='text-xs '>
          Selected Room-
          <span className='text-[#5865F2] '>
            {selectedRoom.roomType === null
              ? ' None'
              : selectedRoom?.roomType[0]?.toUpperCase() +
                selectedRoom?.roomType?.substring(1) +
                '-' +
                selectedRoom?.id?.toUpperCase()}
          </span>
        </span>
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
