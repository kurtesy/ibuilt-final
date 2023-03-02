import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import locationMap from '../constants/locationMapping'
import { setCurrentPosition, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import flooring from '../assets/svg/Flooring/Wooden Flooring Type 1.svg'
import Wall from './Wall'
import Toilet from './Toilet'
export default function Bedroom({ id }) {
  const currentBedroom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === id)[0])
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
      currStyle['backgroundColor'] = 'black'
    } else {
      currStyle['zIndex'] = 1
      currStyle['backgroundColor'] = '#fff'
    }
    setStyle({ ...currStyle, ...currentBedroom.position })
  }
  useEffect(() => {
    setLength(currentBedroom?.length)
    setBreadth(currentBedroom?.breadth)
  }, [currentBedroom])

  const handleClick = () => {
    // e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'bedroom' }))
    setIsActive(true)
  }

  useEffect(() => {
    makeStyle()
  }, [length, breadth, selectedRoom, isActive, currentBedroom])

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'bedroom',
        length: parseFloat(builtLength / 2) < 20 ? parseFloat(builtLength / 2) : 20,
        breadth: parseFloat(builtBreadth / 2) ? parseFloat(builtBreadth / 2) : 20
      })
    )
  }, [builtBreadth, builtLength])

  return (
    <div style={style} className='absolute cursor-pointer bg-woodenFlooring' id={id} onClick={handleClick}>
      <Toilet id={id} />
      {currentBedroom.walls.map((wall) => (
        <Wall
          length={wall.length}
          thickness={wall.thickness}
          position={wall.position}
          door={wall.door}
          side={wall.side}
          direction={wall.direction}
          opening={wall.opening}
        />
      ))}
    </div>
  )
}
