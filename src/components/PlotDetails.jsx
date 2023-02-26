import React from 'react'
import { useSelector } from 'react-redux'

export default function PlotDetails() {
  const { plotArea, builtArea } = useSelector((state) => state.plot)
  return (
    <div className='absolute right-10 flex items-center h-full top-0 text-white gap-3'>
      <div className='bg-slate-600 px-3 shadow-2xl shadow-white rounded-xl'>
        Plot Area: <strong className='text-green-500'>{plotArea}</strong> sqft
      </div>
      <div className='bg-slate-600 px-3 shadow-2xl shadow-white rounded-xl'>
        Builtup Area: <strong className='text-red-500'>{builtArea}</strong> sqft
      </div>
    </div>
  )
}
