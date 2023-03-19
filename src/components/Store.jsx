import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'

export default function Store({ id }) {
  const currentStore = useSelector((state) => state.rooms.store)

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
    setStyle({ ...currStyle, ...currentStore.position })
  }
  useEffect(() => {
    setLength(currentStore?.length)
    setBreadth(currentStore?.breadth)
  }, [currentStore])

  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'store' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentStore.rotated)
  }, [currentStore])
  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentStore])
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'store',
        length,
        breadth
      })
    )
  }, [length, breadth])
  return (
    <div style={style} className='bg-bathFullType13 relative' onClick={handleClick}>
      <div className='absolute top-1/2 left-1/2 text-sm font-thin italic'>Store</div>
      {currentStore.walls.map((wall) => (
        <Wall
          length={wall.length}
          thickness={wall.thickness}
          position={wall.position}
          door={wall.door}
          hasDoor={wall.door.includes}
          doorPosition={wall.door.position}
          side={wall.side}
          direction={wall.direction}
          opening={wall.opening}
        />
      ))}
    </div>
  )
}
