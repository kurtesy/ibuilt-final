import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateRoomData } from '../../redux/rooms'
export default function KitchenSubmenu({ id }) {
  const [isUtilityChecked, setIsUtilityChecked] = useState(false)
  const [isStoreRequired, setIsStoreRequired] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateRoomData({ id, roomType: 'kitchen', store: isStoreRequired }))
  }, [isStoreRequired])

  useEffect(() => {
    dispatch(updateRoomData({ id, roomType: 'kitchen', utility: isUtilityChecked }))
  }, [isUtilityChecked])

  return (
    <div className='flex items-start gap-3'>
      <div className='bg-slate-800 w-[150px]  p-3 gap-4 rounded-lg flex flex-col shadow-2xl text-primaryLime '>
        <div className='flex items-center justify-between gap-2 w-full'>
          <input
            type='checkbox'
            className='w-4 h-full cursor-pointer  hover:scale-115'
            checked={isUtilityChecked}
            onChange={() => setIsUtilityChecked((prev) => !prev)}
          />
          <div className='h-full w-full text-xs'>Utility</div>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <input
            type='checkbox'
            className='w-4 h-full cursor-pointer hover:scale-115'
            name='bathType'
            checked={isStoreRequired}
            onChange={() => setIsStoreRequired((prev) => !prev)}
          />
          <div className='h-full w-full text-xs'>Store</div>
        </div>
      </div>
    </div>
  )
}
