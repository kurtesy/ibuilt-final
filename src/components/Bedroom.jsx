import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import locationMap from '../constants/locationMapping'
import { setCurrentPosition, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import { positions } from '../constants/facingAndPosition'
import Wall from './Wall'
import Toilet from './Toilet'
import Wardrobe from './Wardrobe'
import Balcony from './Balcony'
export default function Bedroom({ id }) {
  const currentBedroom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === id)[0])
  const { facing } = useSelector((state) => state.plot)
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const { scale, builtLength, builtBreadth } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [isActive, setIsActive] = useState(false)
  const [rightClicked, setRightClicked] = useState(false)
  const dispatch = useDispatch()
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = Math.floor(length * scale)
    currStyle['height'] = Math.floor(breadth * scale)
    if (isActive && selectedRoom.id === id) {
      currStyle['zIndex'] = 40
      currStyle['backgroundColor'] = 'rgba(150,250,150,0.7)'
    } else {
      currStyle['zIndex'] = 1
      currStyle['backgroundColor'] = '#fff'
    }
    setStyle({ ...currStyle, ...currentBedroom.position })
  }
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'bedroom',
        position: positions[facing.toString()][id.toString()]
      })
    )
  }, [facing])
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
  }, [length, breadth, selectedRoom, isActive, currentBedroom, facing, scale])

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

  const handleContextMenu = (e) => {
    e.preventDefault()
    setRightClicked(true)
  }
  const handleDelete = (id) => {
    dispatch()
  }

  return (
    <div style={style} className='absolute cursor-pointer bg-slate-400 ' id={id} onClick={handleClick}>
      <Toilet id={id} />
      {currentBedroom.icons &&
        currentBedroom.icons.map((icon, index) => (
          <>
            <img
              src={icon.src}
              key={index}
              className='w-16 inline-block'
              onClick={(e) => handleDelete(e, icon.id)}
              onContextMenu={handleContextMenu}
            />
            {rightClicked && <span className='bg-red-500 text-xs p-1 rounded-lg'>Delete</span>}
          </>
        ))}
      {/* <img src={bed56} className='h-[150px] w-[150px] bottom-0 absolute rotate-[-90deg]' /> */}
      <div className='absolute top-1/2 left-1/2 text-sm font-thin italic'>BED ROOM - {id.toUpperCase()}</div>
      {currentBedroom.walls.map((wall) => (
        <Wall
          id={`bedroom-${id}-${wall.side}`}
          added={wall.added}
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
      {currentBedroom.hasWardrobe && <Wardrobe id={currentBedroom.id} />}
      {currentBedroom.hasBalcony && <Balcony id={currentBedroom.id} />}
    </div>
  )
}
