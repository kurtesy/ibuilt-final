import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'
export default function Dining({ id }) {
  const currentDining = useSelector((state) => state.rooms.dining)

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
      currStyle['zIndex'] = 42
      currStyle['backgroundColor'] = '#yellow'
    } else {
      currStyle['zIndex'] = 10
      currStyle['backgroundColor'] = '#fff'
    }
    setStyle({ ...currStyle, ...currentDining.position })
  }
  useEffect(() => {
    setLength(currentDining?.length)
    setBreadth(currentDining?.breadth)
  }, [currentDining])
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'dining',
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    )
  }, [facing])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'dining' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentDining.rotated)
  }, [currentDining])
  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentDining, facing])

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'dining',
        length,
        breadth
      })
    )
  }, [length, breadth])

  return (
    <div style={style} className='bg-bathFullType13 absolute cursor-pointer' onClick={handleClick}>
      <div className='absolute top-1/2 left-1/2 text-sm font-thin italic'>Dining</div>
      {currentDining.walls.map((wall) => (
        <Wall
          id={`dining-${id}-${wall.side}`}
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
