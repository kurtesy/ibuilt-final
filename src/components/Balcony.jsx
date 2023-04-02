import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { components } from '../assets'
import RightClickPopup from './RightContext'
export default function Balcony({ id }) {
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === id)[0])
  const currentBedroom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === id)[0])
  const { scale } = useSelector((state) => state.plot)
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const [position, setPosition] = useState({})
  useEffect(() => {
    if (id === 'nw' || 'ne') {
      setPosition({ top: 0, right: 6 })
      if (currentToilet.length)
        setLength(
          (parseFloat(currentBedroom.length) - parseFloat(currentToilet.length)) * scale -
            6 -
            currentToilet.position.left
        )
      else setLength(parseFloat(currentBedroom.length) * scale - 6)
      setBreadth(currentToilet.breadth ? currentToilet.breadth : 3)
    }
    if (id === 'sw') {
      setPosition({ top: 0, right: 6 })
      if (currentToilet.length)
        setLength(
          (parseFloat(currentBedroom.length) - parseFloat(currentToilet.length)) * scale -
            6 -
            currentToilet.position.left
        )
      else setLength(parseFloat(currentBedroom.length) * scale - 6)
      setBreadth(currentToilet.breadth ? currentToilet.breadth : 3)
    }
  }, [currentToilet, currentBedroom, scale])

  return (
    <>
      <div className='absolute' style={{ ...position, width: length, height: breadth * scale }}>
        <div
          className='w-full h-full top-0 left-0 -z-50'
          style={{ backgroundImage: `url("${components.defaults[2].icon}")` }}
        />
        {/* <img className='w-full h-full' src={components.balcony_flooring_list[0].icon} />
      </div> */}
      </div>
    </>
  )
}
