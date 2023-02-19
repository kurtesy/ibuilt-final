import React, { useEffect, useState } from 'react'
import PlotInputs from './PlotInputs'
import RoomControls from './RoomControls'
import { useSelector } from 'react-redux'
export default function Sider() {
  const { selectedRoom } = useSelector((state) => state.common)
  return <div className='w-[18%] bg-slate-900 px-3 py-6 text-slate-200'>{selectedRoom && <RoomControls />}</div>
}
