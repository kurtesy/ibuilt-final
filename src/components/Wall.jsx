import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Wall({ length, thickness, position, door, side, direction, opening }) {
  const { scale } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})
  const [openingStyle, setOpeningStyle] = useState({})

  const makeStyle = () => {
    const currStyle = {}
    const currOpeningStyle = {}
    if (direction === 0) {
      currStyle['width'] = Math.floor(parseFloat(length) * scale)
      currStyle['height'] = thickness
      if (opening?.includes) {
        currOpeningStyle['width'] = Math.floor(parseFloat(opening?.length) * scale)
        currOpeningStyle['height'] = thickness
      } else {
        currOpeningStyle['height'] = Math.floor(parseFloat(opening?.length) * scale)
        currOpeningStyle['width'] = thickness
      }
    } else {
      currStyle['height'] = Math.floor(parseFloat(length) * scale)
      currStyle['width'] = thickness
    }
    if (position.top !== undefined) currStyle['top'] = position.top
    else currStyle['bottom'] = position.bottom
    if (position.left !== undefined) currStyle['left'] = position.left
    else currStyle['right'] = position.right
    setStyle(currStyle)
    setOpeningStyle({ ...currOpeningStyle, ...opening?.position })
  }
  console.log(openingStyle)
  useEffect(() => {
    makeStyle()
  }, [scale, length, thickness, position, door, side, direction, opening])
  return (
    <div className='absolute bg-gray-500' style={style}>
      {/* <div className='bg-white absolute' style={openingStyle}></div> */}
    </div>
  )
}
