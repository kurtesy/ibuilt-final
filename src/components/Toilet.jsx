import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedRoom } from '../../redux/common'
import Wall from './Wall'

export default function Toilet({ id }) {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const { toilets } = useSelector((state) => state.rooms)
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
      toilets.find((room) => room.id === id),
      makeStyle()
    )
  }, [id, selectedRoom, toilets])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(updateSelectedRoom({ room: 'toilets', data: selectedRoom }))
  }
  console.log(selectedRoom)
  return (
    <div
      className='bg-white cursor-pointer absolute flex items-center justify-center '
      onClick={handleClick}
      style={style}>
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
      <span className='text-xs mr-6'>
        {selectedRoom?.length}
        <sup className=''></sup> X {selectedRoom?.breadth} ft
      </span>
    </div>
  )
}
