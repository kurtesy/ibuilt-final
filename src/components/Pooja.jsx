import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'
export default function Dining({ id }) {
  const currentPooja = useSelector((state) => state.rooms.pooja)

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
    setStyle({ ...currStyle, ...currentPooja.position })
  }
  useEffect(() => {
    setLength(currentPooja?.length)
    setBreadth(currentPooja?.breadth)
  }, [currentPooja])
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'pooja',
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    )
  }, [facing])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'pooja' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentPooja.rotated)
  }, [currentPooja])
  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentPooja, facing])

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'pooja',
        length,
        breadth
      })
    )
  }, [length, breadth])

  return (
    <div style={style} className='bg-bathFullType13 absolute cursor-pointer' onClick={handleClick}>
      <div className='absolute top-1/2 left-1/2 text-sm font-thin italic'>Pooja</div>
      {currentPooja.walls.map((wall) => (
        <Wall
          id={`pooja-${id}-${wall.side}`}
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