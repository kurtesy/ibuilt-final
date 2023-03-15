import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GiTireIronCross } from 'react-icons/gi'
export default function Wardrobe({ id }) {
  const { scale } = useSelector((state) => state.plot)
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === id)[0])
  const [length, setLength] = useState(2)
  const [breadth, setBreadth] = useState(3)
  const [position, setPosition] = useState({})
  useEffect(() => {
    if (currentToilet) {
      setPosition({ left: 6, top: parseFloat(currentToilet.breadth) * scale })
    }
  }, [currentToilet])

  return (
    <div
      className='absolute bg-red-500 flex items-center justify-center'
      style={{ height: breadth * scale, width: length * scale, ...position }}>
      <GiTireIronCross size={32} />
    </div>
  )
}
