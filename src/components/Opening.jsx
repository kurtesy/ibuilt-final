import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Opening({ length, position, side }) {
  const { scale } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})
  const makeStyle = () => {
    let currStyle = {}
    if (side === 'front' || side === 'back') {
      currStyle['width'] = Math.floor(parseFloat(length) * scale)
      currStyle['height'] = '100%'
    } else {
      currStyle['height'] = Math.floor(parseFloat(length) * scale)
      currStyle['width'] = '100%'
    }
    currStyle = { ...currStyle, ...position }
    setStyle(currStyle)
  }
  useEffect(() => {
    makeStyle()
  }, [length, position, side])
  return <div className='bg-white absolute' style={style}></div>
}
