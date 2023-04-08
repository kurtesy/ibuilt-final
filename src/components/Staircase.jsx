import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'
export default function Staircase({ id }) {
  const currentStaircase = useSelector((state) => state.rooms.stairCase)

  const [length, setLength] = useState(6)
  const [breadth, setBreadth] = useState(10)
  const [rotation, setRotation] = useState(0)
  const { scale, facing } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch()
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = Math.floor(length * scale)
    currStyle['height'] = Math.floor(breadth * scale)
    currStyle['rotate'] = `${rotation}deg`
    if (isActive && selectedRoom.id === id) {
      currStyle['zIndex'] = 50
      currStyle['backgroundColor'] = 'rgba(150,250,150,0.7)'
    } else {
      currStyle['zIndex'] = 50
      currStyle['backgroundColor'] = 'red'
    }
    setStyle({ ...currStyle, ...currentStaircase.position })
  }
  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }
  useEffect(() => {
    setLength(currentStaircase?.length)
    setBreadth(currentStaircase?.breadth)
  }, [currentStaircase])
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'stairCase',
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    )
  }, [facing])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'stairCase' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentStaircase.rotated)
  }, [currentStaircase])
  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentStaircase, facing])

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'stairCase',
        length,
        breadth
      })
    )
  }, [length, breadth])

  return (
    <div style={style} className='bg-bathFullType13 absolute cursor-pointer bg-amber-400 ' onClick={handleClick}>
      <div className='absolute top-1/2 left-1/2 text-center text-black p-2 font-semibold'>
        <p style={{ fontSize: Math.min(currentStaircase.length, currentStaircase.breadth) * 1.1 }}>
          STAIRCASE - {id.toUpperCase()}
          <br />
          {currentStaircase.length} X {currentStaircase.breadth}
        </p>
      </div>
      {currentStaircase.walls.map((wall) => (
        <Wall
          id={`stairCase-${id}-${wall.side}`}
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
