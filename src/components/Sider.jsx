import React, { useEffect, useState } from 'react'
import PositionSelector from './PositionSelector'
import RoomSelector from './RoomSelector'
import Submenu from './Submenu'
import DirectionControls from './DirectionControls'
import DimensionControls from './DimensionControls'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToPlot } from '../../redux/rooms'
import PremiumButton from './PremiumButton'
import MultiSelectComponent from './MultiSelectComponent'
import IconsList from './IconsList'

export default function Sider({ isSiderOpen }) {
  // premium controls tobe implemented
  const [premium, setPremium] = useState(true)
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)
  return (
    <div
      className={`w-[400px] ease-in-out z-30 transition-all h-full bg-slate-800 p-3 flex flex-col gap-3 absolute scrollbar-thin scrollbar-thumb-primaryLime scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-slate-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full top-0 ${
        isSiderOpen ? 'left-0' : 'left-[-400px]'
      }`}>
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
          <div className='flex w-full justify-between gap-3 '>
            <div className='flex flex-col gap-3 w-full'>
              {/* select position */}
              {/* <PositionSelector position={position} setPosition={setPosition} setRoom={setRoom} /> */}
              {/* select room */}
              {/* <RoomSelector room={room} setRoom={setRoom} position={position} /> */}
              <MultiSelectComponent isSiderOpen={isSiderOpen} />
              {/* <div className='font-bold h-[32px] flex items-center text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800'>
                <pre>Selected Room- </pre>
                <span className='text-[#5865F2]'>
                  {selectedRoom.roomType[0].toUpperCase() + selectedRoom.roomType.substring(1)} -{' '}
                  {selectedRoom.id.toUpperCase()}
                </span>
              </div> */}
            </div>

            {/* submenu */}
            {/* <Submenu roomType={selectedRoom.roomType} id={selectedRoom.id} /> */}
          </div>

          <div className='h-[1px] bg-primaryLime w-full' />
          {/* direction movement */}
          <DirectionControls />
          {/* change dimensions */}
          <DimensionControls />
          <IconsList />
        </>
      )}
    </div>
  )
}
