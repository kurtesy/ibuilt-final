import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Quadrant from './Quadrant'

export default function Builtup() {
  const { builtLength, builtBreadth, scale, setbacks } = useSelector((state) => state.plot)

  const [style, setStyle] = useState({})
  const makeStyle = () => {
    const position = 'absolute'
    const width = Math.floor(builtLength * scale)
    const height = Math.floor(builtBreadth * scale)
    const top = Math.floor(setbacks.back * scale)
    const left = Math.floor(setbacks.left * scale)
    setStyle({ width, height, position, top, left })
  }
  console.log(scale)
  useEffect(() => {
    makeStyle()
  }, [builtLength, builtBreadth, setbacks, scale])

  return (
    <div className='bg-gray-400' style={style}>
      <Quadrant id={1} />
      {/* <Quadrant id={2} /> */}
    </div>
  )
}
