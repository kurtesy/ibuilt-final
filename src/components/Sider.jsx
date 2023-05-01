import React, { useEffect, useState } from 'react'
import PositionSelector from './PositionSelector'
import RoomSelector from './RoomSelector'
import Submenu from './Submenu'
import { generatePlot } from '../constants/rooms'
import DirectionControls from './DirectionControls'
import DimensionControls from './DimensionControls'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToPlot } from '../../redux/rooms'
import PremiumButton from './PremiumButton'
import MultiSelectComponent from './MultiSelectComponent'
import IconsList from './IconsList'
import WallControls from './WallControls'
import { removeAllRooms } from '../../redux/rooms'
import PlanClearConfirmation from './planClearConfirmation'
export default function Sider({ isSiderOpen }) {
  // premium controls tobe implemented
  const [premium, setPremium] = useState(true)
  const dispatch = useDispatch()
  const { darkMode } = useSelector((state) => state.app)
  const { selectedRoom, addedRooms } = useSelector((state) => state.rooms)
  const { builtBreadth, builtLength, facing, type } = useSelector((state) => state.plot)
  useEffect(() => {
    generatePlot(builtLength, builtBreadth, facing, type)
  }, [builtLength, builtBreadth])
  const [selection, setSelection] = useState('')

  const handleEditPlan = () => {
    setSelection('edit')
  }
  const createNewPlan = () => {
    dispatch(removeAllRooms())
    setSelection('edit')
  }

  return (
    <div
      className={`w-[400px] ease-in-out z-30 transition-all h-full p-3 flex flex-col gap-3 absolute scrollbar-thin scrollbar-thumb-primaryLime scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-slate-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full top-0 ${
        isSiderOpen ? 'left-0' : 'left-[-400px]'
      } ${darkMode ? ' bg-slate-800' : 'bg-slate-200'}`}>
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
          {!selection ? (
            <div className='w-full h-full flex flex-col items-center justify-center gap-6 relative'>
              {/* <PlanClearConfirmation /> */}
              <button className='bg-red-400 px-6 py-3 rounded-md hover:scale-110 duration-300' onClick={createNewPlan}>
                Create a New Plan
              </button>
              <button
                className='bg-green-400 px-6 py-3 rounded-md hover:scale-110 duration-300 '
                onClick={handleEditPlan}>
                Edit Existing Plan
              </button>
            </div>
          ) : null}
          {selection ? (
            <>
              <div className='flex w-full justify-between gap-3 '>
                <div className='flex flex-col gap-3 w-full'>
                  <MultiSelectComponent isSiderOpen={isSiderOpen} />
                </div>
              </div>

              <div className='h-[1px] bg-primaryLime w-full' />
              {selectedRoom.id && selectedRoom.roomType && (
                <>
                  <DirectionControls />
                  <DimensionControls />
                  <WallControls />
                  <IconsList />
                </>
              )}
            </>
          ) : null}
        </>
      )}
    </div>
  )
}
