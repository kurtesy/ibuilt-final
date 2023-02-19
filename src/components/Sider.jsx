import React, { useEffect, useState } from 'react'
import PlotInputs from './PlotInputs'
import RoomControls from './RoomControls'
import { useSelector } from 'react-redux'
export default function Sider() {
  const { selectedRoom } = useSelector((state) => state.common)
  return (
    <aside className='w-[400px] bg-slate-100 p-3'>
      <div className='font-semibold text-2xl text-center w-full py-2 bg-black text-lime-500 mb-3'>iBuiltup</div>
      <RoomControls />
    </aside>
  )
}
