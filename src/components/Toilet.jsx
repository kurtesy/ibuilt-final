import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom, setSelectedRoomId } from '../../redux/rooms'
import Wall from './Wall'
import { components } from '../assets'

export default function Toilet({ id }) {
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === id)[0])
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const [type, setType] = useState(0)
  const [rotation, setRotation] = useState(0)
  const { scale } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [isActive, setIsActive] = useState(false)
  const [bgNum, setBgNum] = useState(4)
  const dispatch = useDispatch()
  useEffect(() => {
    setType(currentToilet.type)
  }, [currentToilet])

  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }
  useEffect(() => {
    if (type === 1) setBgNum(4)
    if (type === 2) setBgNum(3)
    if (type === 3) setBgNum(1)
  }, [type])
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
      currStyle['backgroundColor'] = '#94AF9F'
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
    <div style={style} className='relative' onClick={handleClick} onContextMenu={handleDeSelect}>
      {/* BG */}
      <div
        className='w-full h-full absolute top-0 left-0 bg-cover  -z-50'
        style={type > 0 ? { backgroundImage: `url("${components.defaults[bgNum].icon}")` } : {}}
        // type=1 wc only =>5
        // type=2 half bath =>4
        // type=3 fullbath =>2
      />
      <div className='absolute top-1/2 left-1/2 text-center text-black p-2 font-semibold translate-y-[-50%]'>
        <p style={{ fontSize: Math.max(10, Math.min(currentToilet.length, currentToilet.breadth) * 1.1) }}>
          TOILET - {id.toUpperCase()}
          <br />
          {currentToilet.length} X {currentToilet.breadth}
        </p>
      </div>
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
