import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedRoom } from '../../redux/common'
import onClickOutside from '../hooks/onClickOutside'
import Wall from './Wall'
// import Toilet from './Toilet'
import bedImg from '../assets/svg/kingBed.svg'
export default function Bedroom({ id }) {
  const [selectedBedRoom, setSelectedBedRoom] = useState(null)
  const { selectedRoom } = useSelector((state) => state.common)
  const { bedrooms } = useSelector((state) => state.rooms)
  const { scale } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})
  const [selected, setSelected] = useState(null)
  const [zIndex, setZindex] = useState(0)
  const [bg, setBg] = useState('white')
  const dispatch = useDispatch()
  const ref = useRef()
  onClickOutside(ref, () => setBg('red'))
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = selectedBedRoom?.length * scale
    currStyle['height'] = selectedBedRoom?.breadth * scale
    currStyle['top'] = parseInt(selectedBedRoom?.position.y)
    currStyle['left'] = parseInt(selectedBedRoom?.position.x)
    setStyle(currStyle)
  }
  useEffect(() => {
    setSelectedBedRoom(
      bedrooms.find((room) => room.id === id),
      makeStyle()
    )
  }, [id, selectedBedRoom, bedrooms])
  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(updateSelectedRoom({ room: 'bedrooms', data: selectedBedRoom }))
  }
  // useEffect(() => {
  //   handleFocus()
  // }, [selectedRoom])

  const handleFocus = () => {
    if (selectedRoom?.data?.id == id) {
      setBg('red')
    }
  }
  return (
    <div
      className='bg-white cursor-pointer absolute'
      onClick={handleClick}
      style={{ ...style, backgroundColor: bg }}
      id={id}>
      {selectedBedRoom?.walls.map((wall) => (
        <Wall
          key={selectedBedRoom.id}
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
        {selectedBedRoom?.length}
        <sup className=''></sup> X {selectedBedRoom?.breadth} ft
      </span>
      <img src={bedImg} alt='bed' className='absolute w-[80px] rotate-[-90deg]  left-4 bottom-4' />
    </div>
  )
}
