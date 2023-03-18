import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Built from './Built'
import { changeScale, setBuiltup } from '../../redux/plot'

export default function Plot({ isSiderOpen }) {
  const { plotLength, plotBreadth, scale, setbacks } = useSelector((state) => state.plot)
  const [zoomLevel, setZoomLevel] = useState(20)
  const dispatch = useDispatch()
  useEffect(() => {
    if (plotLength && plotBreadth) {
      const builtLength = parseFloat(plotLength) - parseFloat(setbacks.left) - parseFloat(setbacks.right)
      const builtBreadth = parseFloat(plotBreadth) - parseFloat(setbacks.front) - parseFloat(setbacks.back)
      dispatch(setBuiltup({ builtLength, builtBreadth }))
    }
  }, [plotLength, plotBreadth, setbacks, scale])

  useEffect(() => {
    dispatch(changeScale({ scale: zoomLevel }))
  }, [zoomLevel])

  function handleWheel(event) {
    console.log(event.deltaY)
    if (event.deltaY > 0) setZoomLevel((prev) => prev - 1)
    else setZoomLevel((prev) => prev + 1)
  }

  return (
    <div
      className={`bg-white absolute ${isSiderOpen ? '' : ''}`}
      style={{ width: plotLength * scale, height: plotBreadth * scale }}
      onWheel={handleWheel}>
      <Built />
    </div>
  )
}
