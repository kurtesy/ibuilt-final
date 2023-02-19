import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Builtup from './Builtup'
import { updatePositions } from '../../redux/common'

export default function Plot() {
  const { plotLength, plotBreadth, scale } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})

  const dispatch = useDispatch()
  const makeStyle = () => {
    const width = Math.ceil(plotLength * scale)
    const height = Math.ceil(plotBreadth * scale)
    setStyle({ width, height })
  }
  useEffect(() => {
    makeStyle()
    const x = []
    const y = []
    const deltaX = plotLength / 18
    const deltaY = plotBreadth / 18
    for (let i = 0; i < 9; i++) {
      x.push(Math.floor(i * deltaX * scale))
      y.push(Math.floor(i * deltaY * scale))
    }
    dispatch(updatePositions({ x, y }))
  }, [plotLength, plotBreadth, scale])

  return (
    <div className='w-[82%] bg-red-300 relative ' style={style}>
      <Builtup />
    </div>
  )
}
