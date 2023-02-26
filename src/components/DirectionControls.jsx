import Slider from './Slider'
import React from 'react'

export default function DirectionControls() {
  return (
    <>
      <div className='font-bold h-[32px] flex items-center text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800'>
        Direction
      </div>
      <Slider min={-50} max={50} left='W' right='E' />
      <Slider min={-50} max={50} left='N' right='S' />
    </>
  )
}
