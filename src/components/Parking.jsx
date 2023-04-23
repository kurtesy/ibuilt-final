import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRoomId, updateRoomData, setRoomRotation } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'

import { AiOutlineRotateRight } from 'react-icons/ai'
export default function Parking({ id }) {
  const currentParking = useSelector((state) => state.rooms.parking)

  const [length, setLength] = useState(6)
  const [breadth, setBreadth] = useState(10)
  const { scale, facing } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch()
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = Math.floor(length * scale)
    currStyle['height'] = Math.floor(breadth * scale)

    if (isActive && selectedRoom.id === id) {
      currStyle['zIndex'] = 50
      currStyle['backgroundColor'] = 'rgba(150,250,150,0.7)'
    } else {
      currStyle['zIndex'] = 30
      currStyle['backgroundColor'] = 'lightgray'
    }
    setStyle({ ...currStyle, ...currentParking.position })
  }
  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }
  useEffect(() => {
    setLength(currentParking?.length)
    setBreadth(currentParking?.breadth)
  }, [currentParking])
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'parking',
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    )
  }, [facing])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'parking' }))
    setIsActive(true)
  }

  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentParking, facing])

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'parking',
        length,
        breadth
      })
    )
  }, [length, breadth])

  return (
    <div
      style={style}
      className={`bg-bathFullType13 absolute cursor-pointer `}
      onClick={handleClick}
      onContextMenu={handleDeSelect}>
      <div className='absolute top-1/2 left-1/2 text-center text-black p-2 font-semibold translate-x-[-50%] translate-y-[-50%]'>
        <p style={{ fontSize: Math.max(12, Math.min(currentParking.length, currentParking.breadth)) * 0.8 }}>
          PARKING - {id.toUpperCase()}
          <br />
          {currentParking.length} X {currentParking.breadth}
        </p>
      </div>
      {currentParking.walls.map((wall) => (
        <Wall
          id={`parking-${id}-${wall.side}`}
          added={wall.added}
          length={wall.length}
          thickness={wall.thickness}
          position={wall.position}
          door={wall.door}
          side={wall.side}
          window={wall.window}
          opening={wall.opening}
        />
      ))}
    </div>
  )
}
