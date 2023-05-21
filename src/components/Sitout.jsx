import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRoomId, updateRoomData, setRoomRotation } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'

import { AiOutlineRotateRight } from 'react-icons/ai'
export default function Staircase({ id }) {
  const currentSitout = useSelector((state) => state.rooms.sitout)

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
      currStyle['backgroundColor'] = '#FFBBBB'
    }
    setStyle({ ...currStyle, ...currentSitout.position })
  }
  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }
  useEffect(() => {
    setLength(currentSitout?.length)
    setBreadth(currentSitout?.breadth)
  }, [currentSitout])
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'sitout',
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    )
  }, [facing])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'sitout' }))
    setIsActive(true)
  }

  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentSitout, facing])

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'sitout',
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
      <div className='absolute top-1/3 left-1/4 text-center text-black p-2 font-semibold'>
        <p style={{ fontSize: Math.min(currentSitout.length, currentSitout.breadth) * 1.4 }}>
          SIT-OUT - {id.toUpperCase()}
          <br />
          {currentSitout.length} X {currentSitout.breadth}
        </p>
      </div>
      {currentSitout.walls.map((wall) => (
        <Wall
          id={`sitout-${id}-${wall.side}`}
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
