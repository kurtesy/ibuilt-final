import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeRoomFromPlot, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import { positions } from '../constants/facingAndPosition'
import Wall from './Wall'
import Toilet from './Toilet'
import Wardrobe from './Wardrobe'
import Balcony from './Balcony'
import { AiFillCloseCircle } from 'react-icons/ai'
// import { saveBedRoom } from '../helpers/outputControls'
export default function Bedroom({ id }) {
  const currentBedroom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === id)[0])
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === id)[0])
  const { facing } = useSelector((state) => state.plot)
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const { scale, builtLength, builtBreadth } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [isActive, setIsActive] = useState(false)
  const [rightClicked, setRightClicked] = useState(false)
  const dispatch = useDispatch()
  const [hovered, setHovered] = useState(false)
  const handleDelete = () => {
    dispatch(removeRoomFromPlot({ position: id, roomType: 'bedRoom' }))
  }
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = Math.floor(length * scale)
    currStyle['height'] = Math.floor(breadth * scale)
    if (isActive && selectedRoom.id === id) {
      currStyle['zIndex'] = 98
      currStyle['backgroundColor'] = 'rgba(150,250,150,0.7)'
    } else {
      currStyle['zIndex'] = 1
      currStyle['backgroundColor'] = '#FBFFE2'
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

  // useEffect(() => {
  //   dispatch(
  //     updateRoomData({
  //       id,
  //       roomType: 'bedroom',
  //       length: parseFloat(builtLength / 2) < 20 ? parseFloat(builtLength / 2) : 20,
  //       breadth: parseFloat(builtBreadth / 2) ? parseFloat(builtBreadth / 2) : 20
  //     })
  //   )
  // }, [builtBreadth, builtLength])

  const handleContextMenu = (e) => {
    e.preventDefault()
    setRightClicked(true)
  }
  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }

  return (
    <div
      style={style}
      tabIndex={0}
      className='absolute cursor-pointer bg-slate-400 '
      id={id}
      onClick={handleClick}
      onContextMenu={handleDeSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {selectedRoom.id && hovered && (
        <AiFillCloseCircle size={32} className='text-red-500 cursor-pointer hover:scale-125 duration-300 ease-in-out absolute right-0 top-0 z-[99]' onClick={handleDelete} />
      )}
      {currentToilet.length && currentToilet.breadth ? <Toilet id={id} /> : null}
      {/* BG */}
      {/* <div
        className='w-full h-full absolute top-0 left-0  -z-50'
        style={{ backgroundImage: `url("${components.defaults[0].icon}")` }}
      /> */}
      {currentBedroom.icons &&
        currentBedroom.icons.map((icon, index) => (
          <div key={index}>
            <img src={icon.src} key={index} className='w-16 inline-block' onClick={(e) => {}} onContextMenu={handleContextMenu} />
            {rightClicked && <span className='bg-red-500 text-xs p-1 rounded-lg'>Delete</span>}
          </div>
        ))}
      {/* <img src={bed56} className='h-[150px] w-[150px] bottom-0 absolute rotate-[-90deg]' /> */}
      <div className='absolute top-1/3 left-1/3 text-center text-black p-2 font-semibold'>
        <p style={{ fontSize: Math.min(10, Math.min(currentBedroom.length, currentBedroom.breadth)) }}>
          BED ROOM - {id.toUpperCase()}
          <br />
          {currentBedroom.length} X {currentBedroom.breadth}
        </p>
      </div>
      {currentBedroom.walls.map((wall, index) => (
        <Wall
          key={index}
          id={`bedroom-${id}-${wall.side}`}
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
      {currentBedroom.hasWardrobe && <Wardrobe id={currentBedroom.id} />}
      {currentBedroom.hasBalcony && <Balcony id={currentBedroom.id} />}
    </div>
  )
}
