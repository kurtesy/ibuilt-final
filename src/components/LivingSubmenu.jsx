import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateRoomData } from '../../redux/rooms'
export default function LivingSubmenu({ id }) {
  const [bathType, setBathType] = useState('')
  const [isCommonToiletChecked, setIsCommonToiletChecked] = useState(false)
  const [isWashChecked, SetISWashChecked] = useState(false)
  const [isSitoutChecked, setIsSetOutChecked] = useState(false)

  const dispatch = useDispatch()
  const handleSelectBathType = (e) => {
    setBathType(e.target.value)
  }
  console.log(isCommonToiletChecked)
  useEffect(() => {
    dispatch(updateRoomData({ id, roomType: 'living', commonToilet: isCommonToiletChecked }))
  }, [isCommonToiletChecked])
  useEffect(() => {
    dispatch(updateRoomData({ id, roomType: 'living', wash: isWashChecked }))
  }, [isWashChecked])

  useEffect(() => {
    dispatch(updateRoomData({ id, roomType: 'living', sitout: isSitoutChecked }))
  }, [isSitoutChecked])

  useEffect(() => {
    if (id) dispatch(updateRoomData({ id, roomType: 'commonToilet', bathType }))
  }, [id, bathType])

  return (
    <div className='flex items-start gap-3'>
      <div className='bg-slate-800 w-[150px]  p-3 gap-4 rounded-lg flex flex-col shadow-2xl text-primaryLime '>
        <div className='flex items-center justify-between gap-2 w-full'>
          <input
            type='checkbox'
            className='w-4 h-full cursor-pointer  hover:scale-115'
            checked={isCommonToiletChecked}
            onChange={() => setIsCommonToiletChecked((prev) => !prev)}
          />
          <div className='h-full w-full text-xs'>Common Bath</div>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <input
            type='checkbox'
            className='w-4 h-full cursor-pointer hover:scale-115'
            name='bathType'
            checked={isWashChecked}
            onChange={() => SetISWashChecked((prev) => !prev)}
          />
          <div className='h-full w-full text-xs'>Wash</div>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <input
            type='checkbox'
            className='w-4 h-full cursor-pointer hover:scale-115'
            checked={isSitoutChecked}
            onChange={() => setIsSetOutChecked((prev) => !prev)}
          />
          <div className='h-full w-full text-xs'>Sitout</div>
        </div>
      </div>
      {isCommonToiletChecked && (
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
        </div>
      )}
    </div>
  )
}
