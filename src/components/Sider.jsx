import React, { useEffect, useState } from 'react'
import PositionSelector from './PositionSelector'
import RoomSelector from './RoomSelector'
import Submenu from './Submenu'
import DirectionControls from './DirectionControls'
import DimensionControls from './DimensionControls'
import { useDispatch } from 'react-redux'
import { addRoomToPlot } from '../../redux/rooms'
import PremiumButton from './PremiumButton'

export default function Sider() {
  const [position, setPosition] = useState('')
  const [room, setRoom] = useState('')
  // premium controls tobe implemented
  const [premium, setPremium] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (position !== '' && room !== '') dispatch(addRoomToPlot({ position, roomType: room }))
  }, [position, room])
  return (
    <div className='w-[350px] h-full bg-slate-800 p-3 flex flex-col gap-3 overflow-y-scroll relative'>
      {/* title */}
      <div className='text-2xl font-semibold text-center bg-white rounded-full drop-shadow-2xl bg-gradient-to-r from-slate-800 to-lime-500 bg-clip-text text-transparent'>
        iBuiltup
      </div>
      {premium && (
        <div className='bg-yellow-300 text-slate-600 font-semibold w-auto absolute right-10 px-2 rounded-full'>
          Premium
        </div>
      )}
      {!premium && <PremiumButton setPremium={setPremium} />}
      {premium && (
        <>
          <div className='flex w-full justify-between gap-3 px-3 '>
            <div className='flex flex-col gap-3'>
              {/* select position */}
              <PositionSelector position={position} setPosition={setPosition} setRoom={setRoom} />
              {/* select room */}
              <RoomSelector room={room} setRoom={setRoom} position={position} />
            </div>
            {/* submenu */}
            <Submenu room={room} />
          </div>
          <div className='h-[1px] bg-primaryLime w-full' />
          {/* direction movement */}
          <DirectionControls />
          {/* change dimensions */}
          <DimensionControls />
        </>
      )}
    </div>
  )
}
