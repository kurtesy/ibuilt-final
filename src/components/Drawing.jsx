import React, { useEffect, useState } from 'react'
import Plot from './Plot'
import Loader from './Loader'
import { useSelector } from 'react-redux'
import Builtup from './Builtup'
import PlotInputs from './PlotInputs'
export default function Drawing() {
  const { plotLength, plotBreadth } = useSelector((state) => state.plot)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (plotLength && plotBreadth) setLoading(true)
    setTimeout(() => setLoading(false), 5000)
  }, [plotLength, plotBreadth])
  if (!(plotLength && plotBreadth))
    return (
      <div className='flex items-center justify-center w-full'>
        (
        <div className='text-lg w-full h-full flex items-center justify-center'>
          <div>Please Enter Dimensions</div>
        </div>
        )
      </div>
    )
  if (loading) return <Loader />
  else
    return (
      <>
        <div className='flex items-center justify-center w-full'>
          <Plot />
        </div>
      </>
    )
}
