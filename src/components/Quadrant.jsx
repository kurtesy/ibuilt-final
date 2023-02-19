import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Bedroom from './Bedroom'

export default function Quadrant({ id }) {
  const [quadrantDimensions, setQuadrantDimensions] = useState({ length: 0, breadth: 0 })
  const { scale, builtLength, builtBreadth } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})

  const makeStyle = () => {
    let currStyle = {}
    currStyle['width'] = Math.ceil(quadrantDimensions.length * scale)
    currStyle['height'] = Math.ceil(quadrantDimensions.breadth * scale)
    if (id === 1) currStyle = { ...currStyle, top: 0, left: 0 }
    if (id === 2) currStyle = { ...currStyle, top: 0, right: 0 }
    if (id === 3) currStyle = { ...currStyle, bottom: 0, left: 0 }
    if (id === 4) currStyle = { ...currStyle, bottom: 0, right: 0 }
    setStyle(currStyle)
  }
  useEffect(
    () => setQuadrantDimensions({ length: builtLength / 2, breadth: builtBreadth / 2 }),
    [builtBreadth, builtLength]
  )
  useEffect(() => {
    makeStyle()
  }, [quadrantDimensions, id, scale, builtLength, builtBreadth])
  return (
    <div className='bg-amber-400 absolute border-2' style={style}>
      <Bedroom id={id} />
    </div>
  )
}
