import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedRoom } from '../../redux/common'
import Wall from './Wall'
import Toilet from './Toilet'

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
    e.stopPropagation()
    dispatch(updateSelectedRoom({ room: 'bedrooms', data: selectedRoom }))
  }
  console.log(selectedRoom)
  return (
    <div className='bg-white cursor-pointer absolute flex items-center justify-end' onClick={handleClick} style={style}>
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
      {selectedRoom?.toiletRequired ? <Toilet id={1} /> : null}
      <span className='text-xs m-6'>
        {selectedRoom?.length}
        <sup className=''></sup> X {selectedRoom?.breadth} ft
      </span>
    </div>
  )
}
