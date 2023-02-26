import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Built from './Built'
import { setBuiltup } from '../../redux/plot'

export default function Plot() {
  const { plotLength, plotBreadth, scale, setbacks } = useSelector((state) => state.plot)
  const dispatch = useDispatch()
  useEffect(() => {
    if (plotLength && plotBreadth) {
      const builtLength = parseFloat(plotLength) - parseFloat(setbacks.left) - parseFloat(setbacks.right)
      const builtBreadth = parseFloat(plotBreadth) - parseFloat(setbacks.front) - parseFloat(setbacks.back)

      dispatch(setBuiltup({ builtLength, builtBreadth }))
    }
  }, [plotLength, plotBreadth, setbacks, scale])

  return (
    <div className='bg-white relative' style={{ width: plotLength * scale, height: plotBreadth * scale }}>
      <Built />
    </div>
  )
}
