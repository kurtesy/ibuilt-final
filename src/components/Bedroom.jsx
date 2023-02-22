import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedRoom } from '../../redux/common'
import Wall from './Wall'
// import Toilet from './Toilet'
import bedImg from '../assets/svg/kingBed.svg'
export default function Bedroom({ id }) {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const { bedrooms } = useSelector((state) => state.rooms)
  const { scale } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})
  const dispatch = useDispatch()
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = selectedRoom?.length * scale
    currStyle['height'] = selectedRoom?.breadth * scale
    currStyle['top'] = parseInt(selectedRoom?.position.y)
    currStyle['left'] = parseInt(selectedRoom?.position.x)
    setStyle(currStyle)
  }
  useEffect(() => {
    setSelectedRoom(
      bedrooms.find((room) => room.id === id),
      makeStyle()
    )
  }, [id, selectedRoom, bedrooms])
  const handleClick = (e) => {
    ref.current.style.zIndex = 99
    ref.current.style.backgroundColor = 'green'
    e.stopPropagation()
    dispatch(updateSelectedRoom({ room: 'bedrooms', data: selectedRoom }))
  }
  const ref = useRef()
  return (
    <div className='bg-white cursor-pointer absolute' onClick={handleClick} style={style} ref={ref}>
      {selectedRoom?.walls.map((wall) => (
        <Wall
          key={selectedRoom.id}
          position={wall.position}
          side={wall.side}
          length={wall.length}
          thickness={wall.thickness}
          hasDoor={wall.hasDoor}
          doorPosition={wall.doorPosition}
        />
      ))}
      {/* <Toilet id={1} /> */}
      <span className='text-xs m-6'>
        {selectedRoom?.length}
        <sup className=''></sup> X {selectedRoom?.breadth} ft
      </span>
      <img src={bedImg} alt='bed' className='absolute w-[80px] rotate-[-90deg]  left-4 bottom-4' />
    </div>
  )
}
