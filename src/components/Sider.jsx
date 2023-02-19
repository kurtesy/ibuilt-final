import React, { useEffect, useState } from 'react'
import PlotInputs from './PlotInputs'
import RoomControls from './RoomControls'
import { useSelector } from 'react-redux'
export default function Sider() {
  const { selectedRoom } = useSelector((state) => state.common)
  return (
    <aside className='w-[400px] bg-slate-100 p-3'>
      <RoomControls />
    </aside>
  )
}
