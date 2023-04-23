import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import Utility from './Utility'
import { positions } from '../constants/facingAndPosition'
import Store from './Store'
export default function Kitchen({ id }) {
  const currentKitchen = useSelector((state) => state.rooms.kitchen)

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
      currStyle['backgroundColor'] = 'rgba(150,250,150,0.7)'
    } else {
      currStyle['zIndex'] = 10
      currStyle['backgroundColor'] = '#BBD6B8'
    }
    setStyle({ ...currStyle, ...currentKitchen.position })
  }

  useEffect(() => {
    setLength(currentKitchen?.length)
    setBreadth(currentKitchen?.breadth)
  }, [currentKitchen])

  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'kitchen',
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    )
  }, [facing])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'kitchen' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentKitchen.rotated)
  }, [currentKitchen])
  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentKitchen, facing])

  // useEffect(() => {
  //   dispatch(
  //     updateRoomData({
  //       id,
  //       roomType: 'kitchen',
  //       length,
  //       breadth
  //     })
  //   )
  // }, [length, breadth])

  return (
    <div
      style={style}
      className='bg-bathFullType13 absolute cursor-pointer'
      onClick={handleClick}
      onContextMenu={handleDeSelect}>
      <div className='absolute top-1/2 left-1/2 text-center text-black p-2 font-semibold translate-x-[-50%] translate-y-[-50%]'>
        <p style={{ fontSize: Math.max(12, Math.min(currentKitchen.length, currentKitchen.breadth)) * 0.9 }}>
          KITCHEN - {id.toUpperCase()}
          <br />
          {currentKitchen.length} X {currentKitchen.breadth}
        </p>
      </div>
      {currentKitchen.hasUtility && <Utility id={currentKitchen.id} />}
      {currentKitchen.hasStore && <Store id={currentKitchen.id} isInside={true} />}
      {currentKitchen.walls.map((wall) => (
        <Wall
          id={`kitchen-${id}-${wall.side}`}
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
