import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeRoomFromPlot, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'
import { AiFillCloseCircle } from 'react-icons/ai'
export default function Pooja({ id }) {
  const currentPooja = useSelector((state) => state.rooms.pooja)

  const [length, setLength] = useState(6)
  const [breadth, setBreadth] = useState(10)
  const [rotation, setRotation] = useState(0)
  const { scale, facing } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch()
  const [hovered, setHovered] = useState(false)
  const handleDelete = () => {
    dispatch(removeRoomFromPlot({ position: id, roomType: 'pooja' }))
  }
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
      currStyle['backgroundColor'] = '#FECD70'
    }
    setStyle({ ...currStyle, ...currentPooja.position })
  }

  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
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

  // useEffect(() => {
  //   dispatch(
  //     updateRoomData({
  //       id,
  //       roomType: 'pooja',
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
      onContextMenu={handleDeSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {selectedRoom.id && hovered && (
        <AiFillCloseCircle size={32} className='text-red-500 cursor-pointer hover:scale-125 duration-300 ease-in-out absolute right-0 top-0 z-[99]' onClick={handleDelete} />
      )}
      <div className='absolute top-1/2 left-1/2 text-center text-black p-2 font-semibold translate-x-[-50%] translate-y-[-50%]'>
        <p style={{ fontSize: Math.max(10, Math.min(currentPooja.length, currentPooja.breadth) * 1.5) }}>
          PUJA - {id.toUpperCase()}
          <br />
          {currentPooja.length} X {currentPooja.breadth}
        </p>
      </div>
      {currentPooja.walls.map((wall, index) => (
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
          key={index}
        />
        
      ))}
    </div>
  )
}
