import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWallToRoom, setSelectedWall, updateWall } from '../../redux/rooms'
import { BsPencilFill } from 'react-icons/bs'
import WallEditor from './WallEditor'
export default function WallControls() {
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [isLeftwallChecked, setIsLeftWallChecked] = useState(false)
  const [isRightwallChecked, setIsRighttWallChecked] = useState(false)
  const [isFrontwallChecked, setIsFrontWallChecked] = useState(false)
  const [isBackwallChecked, setIsBackWallChecked] = useState(false)
  const [side, setSide] = useState(null)
  const { selectedWall } = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  const handleEditWall = (side) => {
    console.log('Clicked: ' + side)
    dispatch(setSelectedWall({ id: `${selectedRoom.roomType}-${selectedRoom.id}-${side}` }))
  }
  useEffect(() => {
    if (side) {
      let status
      if (side === 'front') status = isFrontwallChecked
      if (side === 'back') status = isBackwallChecked
      if (side === 'left') status = isLeftwallChecked
      if (side === 'right') status = isRightwallChecked
      dispatch(addWallToRoom({ side, status, roomType: selectedRoom.roomType, id: selectedRoom.id }))
    }
  }, [side, isRightwallChecked, isBackwallChecked, isFrontwallChecked, isLeftwallChecked])
  return (
    <>
      <div className='font-bold h-[32px] flex items-center justify-between text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800'>
        Manage Walls
        <span className='text-xs '>
          Selected Room-
          <span className='text-[#5865F2] '>
            {selectedRoom.roomType === null
              ? ' None'
              : selectedRoom?.roomType[0]?.toUpperCase() +
                selectedRoom?.roomType?.substring(1) +
                '-' +
                selectedRoom?.id?.toUpperCase()}
          </span>
        </span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2 text-lg items-center font-semibold text-primaryLime'>
          <input
            type='checkbox'
            checked={isLeftwallChecked}
            value='left'
            onChange={(e) => {
              setIsLeftWallChecked((prev) => !prev)
              setSide(e.target.value)
            }}
          />
          <label>Left</label>
          {isLeftwallChecked && (
            <BsPencilFill
              className='text-xs text-blue-500 cursor-pointer hover:scale-125'
              onClick={() => handleEditWall('left')}
            />
          )}
        </div>
        <div className='flex gap-2 text-lg items-center font-semibold text-primaryLime'>
          <input
            type='checkbox'
            value='right'
            checked={isRightwallChecked}
            onChange={(e) => {
              setIsRighttWallChecked((prev) => !prev)
              setSide(e.target.value)
            }}
          />
          <label>Right</label>
          {isRightwallChecked && (
            <BsPencilFill
              className='text-xs text-blue-500 cursor-pointer hover:scale-125'
              onClick={() => handleEditWall('right')}
            />
          )}
        </div>
        <div className='flex gap-2 text-lg items-center font-semibold text-primaryLime'>
          <input
            type='checkbox'
            checked={isFrontwallChecked}
            value='front'
            onChange={(e) => {
              setIsFrontWallChecked((prev) => !prev)
              setSide(e.target.value)
            }}
          />
          <label>Front</label>
          {isFrontwallChecked && (
            <BsPencilFill
              className='text-xs text-blue-500 cursor-pointer hover:scale-125'
              onClick={() => handleEditWall('front')}
            />
          )}
        </div>
        <div className='flex gap-2 text-lg items-center font-semibold text-primaryLime'>
          <input
            type='checkbox'
            value='back'
            checked={isBackwallChecked}
            onChange={(e) => {
              setIsBackWallChecked((prev) => !prev)
              setSide(e.target.value)
            }}
          />
          <label>Back</label>
          {isBackwallChecked && (
            <BsPencilFill
              className='text-xs text-blue-500 cursor-pointer hover:scale-125'
              onClick={() => handleEditWall('back')}
            />
          )}
        </div>
      </div>
      {selectedWall && <WallEditor />}
    </>
  )
}
