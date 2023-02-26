import React, { useEffect, useState } from 'react'
import Plot from './Plot'
import Loader from './Loader'
import { useSelector } from 'react-redux'
import Builtup from './Builtup'
import PlotInputs from './PlotInputs'
import north from '../assets/svg/north.svg'
import south from '../assets/svg/south.svg'
import east from '../assets/svg/east.svg'
import west from '../assets/svg/west.svg'
import ZoomControls from './ZoomControls'
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
        <div className='text-lg w-full h-full flex items-center justify-center text-primaryLime '>
          <div>Please Enter Dimensions</div>
        </div>
      </div>
    )
  // if (loading) return <Loader />
  else
    return (
      <div className='flex items-center justify-center w-full relative'>
        <Plot />
        <ZoomControls />
        <img src={south} alt='south' className='w-16 absolute bottom-0' />
        <img src={north} alt='north' className='w-16 absolute top-0' />
        <img src={east} alt='east' className='w-16 absolute right-0' />
        <img src={west} alt='west' className='w-16 absolute left-0' />
      </div>
    )
}
