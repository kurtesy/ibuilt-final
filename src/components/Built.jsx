import React from 'react'
import { useSelector } from 'react-redux'

export default function Built() {
  const { builtLength, builtBreadth, scale, setbacks } = useSelector((state) => state.plot)
  console.log(parseInt(setbacks.back * scale))
  return (
    <div
      className={`bg-gray-600 absolute top-[${parseInt(setbacks.back * scale)}px] left-[${parseInt(
        setbacks.left * scale
      )}px]`}
      style={{ width: builtLength * scale, height: builtBreadth * scale }}></div>
  )
}
