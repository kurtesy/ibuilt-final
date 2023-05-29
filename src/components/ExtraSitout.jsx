import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import locationMap from '../constants/locationMapping'
import { setCurrentPosition, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import CommonToilet from './CommonToilet'
import { positions } from '../constants/facingAndPosition'
export default function ExtraSitout({ id }) {
  const currentRoom = useSelector((state) => state.rooms.sitouts.filter((room) => room.id === id)[0])
  const { facing } = useSelector((state) => state.plot)
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
      currStyle['backgroundColor'] = 'rgba(150,250,150,0.7)'
    } else {
      currStyle['zIndex'] = 50
      currStyle['backgroundColor'] = '#B0DAFF'
    }
    setStyle({ ...currStyle, ...currentRoom.position })
  }
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'extraSitout',
        position: positions[facing.toString()][id.toString()]
      })
    )
  }, [facing])

  useEffect(() => {
    setLength(currentRoom?.length)
    setBreadth(currentRoom?.breadth)
  }, [currentRoom])

  const handleClick = () => {
    // e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'extraSitout' }))
    setIsActive(true)
  }

  useEffect(() => {
    makeStyle()
  }, [length, breadth, selectedRoom, isActive, currentRoom])

  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }
  // useEffect(() => {
  //   dispatch(
  //     updateRoomData({
  //       id,
  //       roomType: 'living',
  //       length: parseFloat(builtLength / 2) < 20 ? parseFloat(builtLength / 2) : 20,
  //       breadth: parseFloat(builtBreadth / 2) ? parseFloat(builtBreadth / 2) : 20
  //     })
  //   )
  // }, [builtBreadth, builtLength])

  return (
    <div style={style} className='absolute cursor-pointer bg-woodenFlooring' id={id} onClick={handleClick} onContextMenu={handleDeSelect}>
      <div className='absolute top-1/4 left-1/3 text-center text-black p-2 font-semibold'>
        <p style={{ fontSize: Math.min(18, Math.min(currentRoom.length, currentRoom.breadth) * 1.0) }}>
          SIT-OUT- {id.toUpperCase()}
          <br />
          {currentRoom.length} X {currentRoom.breadth}
        </p>
      </div>
      {currentRoom.walls.map((wall) => (
        <Wall
          id={`extraSitout-${id}-${wall.side}`}
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
      {/* {currentRoom.hasToilet && <CommonToilet id={currentRoom.id} />}
      {currentRoom.hasWash && <div>WASH</div>}
      {currentRoom.hasSitout && <div>SITOUT</div>} */}
    </div>
  )
}
