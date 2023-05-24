import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'
export default function Media({ id }) {
  const currentMedia = useSelector((state) => state.rooms.media)

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
      currStyle['backgroundColor'] = '#F4F9F4'
    }
    setStyle({ ...currStyle, ...currentMedia.position })
  }

  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }
  useEffect(() => {
    setLength(currentMedia?.length)
    setBreadth(currentMedia?.breadth)
  }, [currentMedia])
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'media',
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    )
  }, [facing])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'media' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentMedia.rotated)
  }, [currentMedia])
  useEffect(() => {
    makeStyle()
  }, [length, breadth, location, selectedRoom, isActive, currentMedia, facing])

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'media',
        length,
        breadth
      })
    )
  }, [length, breadth])

  return (
    <div
      style={style}
      className='bg-bathFullType13 absolute cursor-pointer'
      onClick={handleClick}
      onContextMenu={handleDeSelect}>
      <div className='absolute top-1/3 left-1/3 text-center text-black p-2 font-semibold'>
        <p style={{ fontSize: Math.max(14, Math.min(currentMedia.length, currentMedia.breadth)) * 0.6 }}>
          MEDIA - {id.toUpperCase()}
          <br />
          {currentMedia.length} X {currentMedia.breadth}
        </p>
      </div>
      {currentMedia.walls.map((wall) => (
        <Wall
          id={`media-${id}-${wall.side}`}
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
