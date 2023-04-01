import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'

export default function Utility({ id }) {
  const currentUtility = useSelector((state) => state.rooms.utility)

  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const [rotation, setRotation] = useState(0)
  const { scale } = useSelector((state) => state.plot)
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
    setStyle({ ...currStyle, ...currentUtility.position })
  }
  useEffect(() => {
    setLength(currentUtility?.length)
    setBreadth(currentUtility?.breadth)
  }, [currentUtility])

  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'utility' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentUtility.rotated)
  }, [currentUtility])
  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentUtility])
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'utility',
        length,
        breadth
      })
    )
  }, [length, breadth])
  return (
    <div style={style} className='bg-bathFullType13 relative' onClick={handleClick}>
      <div className='absolute top-1/2 left-1/2 text-sm font-thin italic'>Utility</div>
      {currentUtility.walls.map((wall) => (
        <Wall
          id={`utility-${id}-${wall.side}`}
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
