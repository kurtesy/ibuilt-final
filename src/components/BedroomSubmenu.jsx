import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRoomData } from '../../redux/rooms'
export default function BedroomSubmenu() {
  const [bathType, setBathType] = useState('')
  const { currentPosition } = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  const handleSelectBathType = (e) => {
    setBathType(e.target.value)
  }

  useEffect(() => {
    if (currentPosition) dispatch(updateRoomData({ id: currentPosition, roomType: 'toilet', bathType }))
  }, [currentPosition, bathType])

  return (
    <div className='bg-slate-800 w-[150px]  p-3 gap-4 rounded-lg flex flex-col shadow-2xl text-primaryLime'>
      <div className='flex items-center justify-between gap-2'>
        <input
          type='radio'
          className='w-4 h-full cursor-pointer hover:scale-115'
          name='bathType'
          value={0}
          onClick={handleSelectBathType}
        />
        <div className='h-full w-full text-xs'>None</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input
          type='radio'
          className='w-4 h-full cursor-pointer hover:scale-115'
          name='bathType'
          value={1}
          onClick={handleSelectBathType}
        />
        <div className='h-full w-full text-xs'>Wc Only</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input
          type='radio'
          className='w-4 h-full cursor-pointer hover:scale-115'
          name='bathType'
          value={2}
          onClick={handleSelectBathType}
        />
        <div className='h-full w-full text-xs'>WC & Shower</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input
          type='radio'
          className='w-4 h-full cursor-pointer hover:scale-115'
          name='bathType'
          value={3}
          onClick={handleSelectBathType}
        />
        <div className='h-full w-full text-xs'>Full Bath</div>
      </div>
      <div className='h-[1px] bg-primaryLime w-full' />
      <div className='flex items-center justify-between gap-2'>
        <input type='checkbox' className='w-4 h-full cursor-pointer hover:scale-115' />
        <div className='h-full w-full text-xs'>Balcony</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input type='checkbox' className='w-4 h-full cursor-pointer hover:scale-115' />
        <div className='h-full w-full text-xs'>Wardrobe</div>
      </div>
    </div>
  )
}
