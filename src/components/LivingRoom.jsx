import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import locationMap from '../constants/locationMapping'
import { setCurrentPosition, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import CommonToilet from './CommonToilet'
export default function LivingRoom({ id }) {
  const currentLivingroom = useSelector((state) => state.rooms.livingRooms.filter((room) => room.id === id)[0])

  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const { scale, builtLength, builtBreadth } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch()
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = Math.floor(length * scale)
    currStyle['height'] = Math.floor(breadth * scale)
    if (isActive && selectedRoom.id === id) {
      currStyle['zIndex'] = 40
      currStyle['backgroundColor'] = 'rgba(150,150,250,0.7)'
    } else {
      currStyle['zIndex'] = 1
      currStyle['backgroundColor'] = '#fff'
    }
    setStyle({ ...currStyle, ...currentLivingroom.position })
  }
  useEffect(() => {
    setLength(currentLivingroom?.length)
    setBreadth(currentLivingroom?.breadth)
  }, [currentLivingroom])

  const handleClick = () => {
    // e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'living' }))
    setIsActive(true)
  }

  useEffect(() => {
    makeStyle()
  }, [length, breadth, selectedRoom, isActive, currentLivingroom])

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'living',
        length: parseFloat(builtLength / 2) < 20 ? parseFloat(builtLength / 2) : 20,
        breadth: parseFloat(builtBreadth / 2) ? parseFloat(builtBreadth / 2) : 20
      })
    )
  }, [builtBreadth, builtLength])

  return (
    <div style={style} className='absolute cursor-pointer bg-woodenFlooring' id={id} onClick={handleClick}>
      <div className='absolute top-1/2 left-1/2 text-sm font-thin italic'>LIVING ROOM - {id?.toUpperCase()}</div>
      {currentLivingroom.walls.map((wall) => (
        <Wall
          id={`living-${id}-${wall.side}`}
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
      {currentLivingroom.hasToilet && <CommonToilet id={currentLivingroom.id} />}
      {currentLivingroom.hasWash && <div>WASH</div>}
      {currentLivingroom.hasSitout && <div>SITOUT</div>}
    </div>
  )
}
