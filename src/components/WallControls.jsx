import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWallToRoom } from '../../redux/rooms'

export default function WallControls() {
  const { selectedRoom } = useSelector((state) => state.rooms)
  const [isLeftwallChecked, setIsLeftWallChecked] = useState(false)
  const [isRightwallChecked, setIsRighttWallChecked] = useState(false)
  const [isFrontwallChecked, setIsFrontWallChecked] = useState(false)
  const [isBackwallChecked, setIsBackWallChecked] = useState(false)
  const [side, setSide] = useState(null)
  const dispatch = useDispatch()
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
        Manage Dimensions
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
        </div>
      </div>
      <div>
        <label>Added Walls: </label>
        <div></div>
      </div>
    </>
  )
}
