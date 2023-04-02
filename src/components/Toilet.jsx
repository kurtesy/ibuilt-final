import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom, setSelectedRoomId } from '../../redux/rooms'
import Wall from './Wall'

export default function Toilet({ id, type }) {
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === id)[0])
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const [rotation, setRotation] = useState(0)
  const { scale } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch()

  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = Math.floor(length * scale)
    currStyle['height'] = Math.floor(breadth * scale)
    currStyle['rotate'] = `${rotation}deg`
    if (rotation) {
      currStyle['transform'] = `translate(-50%,-50%)`
    }
    if (isActive && selectedRoom.id === id) {
      currStyle['zIndex'] = 42
      currStyle['backgroundColor'] = 'rgba(250,150,150,0.8)'
    } else {
      currStyle['zIndex'] = 10
      currStyle['backgroundColor'] = '#fff'
    }
    setStyle({ ...currStyle, ...currentToilet.position })
  }
  useEffect(() => {
    setLength(currentToilet?.length)
    setBreadth(currentToilet?.breadth)
  }, [currentToilet])

  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'toilet' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentToilet.rotated)
  }, [currentToilet])
  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentToilet, scale])

  return (
    <div style={style} className='bg-bathFullType13 relative' onClick={handleClick} onContextMenu={handleDeSelect}>
      {currentToilet.walls.map((wall) => (
        <Wall
          id={`toilet-${id}-${wall.side}`}
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
