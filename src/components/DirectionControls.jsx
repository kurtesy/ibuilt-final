import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import React, { useEffect, useState } from 'react'
import { updateRoomData } from '../../redux/rooms'
import { RiAnticlockwise2Fill, RiClockwise2Fill } from 'react-icons/ri'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill
} from 'react-icons/bs'
import { BiReset } from 'react-icons/bi'
export default function DirectionControls() {
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)
  const { plotLength, plotBreadth, scale, setbacks } = useSelector((state) => state.plot)
  const currentBedRoom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === selectedRoom.id)[0])
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === selectedRoom.id)[0])
  const containedBedRoom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === selectedRoom.id)[0])
  const containedLivingRoom = useSelector(
    (state) => state.rooms.livingRooms.filter((room) => room.id === selectedRoom.id)[0]
  )
  const currentLivingroom = useSelector(
    (state) => state.rooms.livingRooms.filter((room) => room.id === selectedRoom.id)[0]
  )

  const { commonToilet, kitchen, utility, store, drawing, dining, pooja } = useSelector((state) => state.rooms)

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [maxX, setMaxX] = useState(0)
  const [maxY, setMaxY] = useState(0)
  const [position, setPosition] = useState({})
  const [rotation, setRotation] = useState(0)
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
    } else if (selectedRoom.roomType === 'living' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((plotLength - currentSelection.length - setbacks.left - setbacks.right) * scale)
      setMaxY((plotBreadth - currentSelection.breadth - setbacks.front - setbacks.back) * scale)
    } else if (selectedRoom.roomType === 'commonToilet' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((containedLivingRoom?.length - currentSelection.length) * scale)
      setMaxY((containedLivingRoom?.breadth - currentSelection.breadth) * scale)
    } else if (selectedRoom.roomType === 'kitchen' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((plotLength - currentSelection.length - setbacks.left - setbacks.right) * scale)
      setMaxY((plotBreadth - currentSelection.breadth - setbacks.front - setbacks.back) * scale)
    } else if (selectedRoom.roomType === 'utility' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((utility?.length - currentSelection.length) * scale)
      setMaxY((utility?.breadth - currentSelection.breadth) * scale)
    } else if (selectedRoom.roomType === 'store' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((store?.length - currentSelection.length) * scale)
      setMaxY((store?.breadth - currentSelection.breadth) * scale)
    } else if (selectedRoom.roomType === 'pooja' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((plotLength - currentSelection.length - setbacks.left - setbacks.right) * scale)
      setMaxY((plotBreadth - currentSelection.breadth - setbacks.front - setbacks.back) * scale)
    } else if (selectedRoom.roomType === 'drawing' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((plotLength - currentSelection.length - setbacks.left - setbacks.right) * scale)
      setMaxY((plotBreadth - currentSelection.breadth - setbacks.front - setbacks.back) * scale)
    } else if (selectedRoom.roomType === 'dining' && currentSelection) {
      if (currentSelection.position.top !== undefined) setY(currentSelection.position.top)
      else setY(currentSelection.position.bottom)
      if (currentSelection.position.left !== undefined) setX(currentSelection.position.left)
      else setX(currentSelection.position.right)
      setMaxX((plotLength - currentSelection.length - setbacks.left - setbacks.right) * scale)
      setMaxY((plotBreadth - currentSelection.breadth - setbacks.front - setbacks.back) * scale)
    }
  }, [currentSelection])
  useEffect(() => {
    if (selectedRoom.roomType === 'bedroom') setCurrentSelection(currentBedRoom)
    else if (selectedRoom.roomType === 'toilet') setCurrentSelection(currentToilet)
    else if (selectedRoom.roomType === 'living') setCurrentSelection(currentLivingroom)
    else if (selectedRoom.roomType === 'commonToilet') setCurrentSelection(commonToilet)
    else if (selectedRoom.roomType === 'kitchen') setCurrentSelection(kitchen)
    else if (selectedRoom.roomType === 'utility') setCurrentSelection(utility)
    else if (selectedRoom.roomType === 'store') setCurrentSelection(utility)
    else if (selectedRoom.roomType === 'pooja') setCurrentSelection(pooja)
    else if (selectedRoom.roomType === 'drawing') setCurrentSelection(drawing)
    else if (selectedRoom.roomType === 'dining') setCurrentSelection(dining)
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
  const handleRotateClockwise = () => {
    if (rotation === 270) setRotation(0)
    else setRotation((prev) => prev + 90)
  }
  const handleRotateAntiClockwise = () => {
    if (rotation === -270) setRotation(0)
    else setRotation((prev) => prev - 90)
  }

  useEffect(() => {
    if (selectedRoom.roomType === 'toilet')
      dispatch(updateRoomData({ id: selectedRoom.id, roomType: 'toilet', rotated: rotation }))
  }, [rotation])

  return (
    <>
      <div className='font-bold  flex justify-between items-center text-left p-1 px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800 text-xs'>
        Manage Position
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
      <Slider min={0} max={maxX} value={x} setValue={setX} direction={{ from: '-', to: '+' }} type='horizontal' />
      <Slider min={0} max={maxY} value={y} setValue={setY} direction={{ from: '-', to: '+' }} type='vertical' />
      {/* <div className='flex bg-slate-700 py-3 rounded-xl shadow-2xl items-center justify-between px-6'>
        <RiAnticlockwise2Fill
          size={32}
          className='text-white cursor-pointer hover:scale-110 hover:rotate-[-90deg] duration-300 hover:text-red-500'
          onClick={handleRotateAntiClockwise}
        />
        <BiReset
          size={32}
          className='text-white cursor-pointer hover:scale-110 hover:rotate-[-180deg] duration-300 hover:text-green-500'
          onClick={() => setRotation(0)}
        />
        <RiClockwise2Fill
          size={32}
          className='text-white cursor-pointer hover:scale-110 hover:rotate-[90deg] duration-300 hover:text-blue-500'
          onClick={handleRotateClockwise}
        />
      </div> */}
    </>
  )
}
