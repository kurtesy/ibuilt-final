import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
export default function Balcony({ id }) {
  const currentToilet = useSelector((state) => state.rooms.toilets.filter((room) => room.id === id)[0])
  const currentBedroom = useSelector((state) => state.rooms.bedRooms.filter((room) => room.id === id)[0])
  const { scale } = useSelector((state) => state.plot)
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const [position, setPosition] = useState({})
  useEffect(() => {
    if (id === 'nw') {
      setPosition({ top: 0, right: 6 })
      if (currentToilet.length) setLength(parseFloat(currentBedroom.length) - parseFloat(currentToilet.length))
      else setLength(parseFloat(currentBedroom.length) - 6 / scale)
      setBreadth(currentToilet.breadth ? currentToilet.breadth : 3)
    }
  }, [currentToilet, currentBedroom])

  return (
    <div
      className='absolute bg-balconyOrange bg-cover'
      style={{ ...position, width: length * scale - 6, height: breadth * scale }}></div>
  )
}
