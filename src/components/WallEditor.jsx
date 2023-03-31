import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWall } from '../../redux/rooms'
export default function WallEditor() {
  const [isOpeningChecked, setIsOpeningChecked] = useState(false)
  const [isDoorChecked, setIsDoorChecked] = useState(false)
  const [isWindowChecked, setIsWindowChecked] = useState(false)
  const { selectedWall } = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, hasOpening: isOpeningChecked }))
  }, [isOpeningChecked])
  return (
    <div className='bg-slate-900 text-white p-3 rounded-lg'>
      {/* OPENING */}
      <div className='flex w-full flex-col'>
        <div className='flex gap-2 items-center'>
          <input type='checkbox' value={isOpeningChecked} onChange={() => setIsOpeningChecked((prev) => !prev)} />
          <label>Opening</label>
        </div>
        {isOpeningChecked && (
          <>
            <div className='flex items-center gap-2 w-full'>
              <div>Length:</div>
              <input type='range' className='flex-1' />
            </div>
            <div className='flex items-center gap-2 w-full '>
              <div>Position:</div>
              <input type='range' className='flex-1' />
            </div>
          </>
        )}
      </div>
      {/* DOOR */}
      <div className='flex w-full flex-col'>
        <div className='flex gap-2 items-center'>
          <input type='checkbox' value={isDoorChecked} onChange={() => setIsDoorChecked((prev) => !prev)} />
          <label>Door</label>
        </div>
        {isDoorChecked && (
          <>
            <div className='flex items-center gap-2 w-full'>
              <div>Length:</div>
              <input type='range' className='flex-1' />
            </div>
            <div className='flex items-center gap-2 w-full'>
              <div>Position:</div>
              <input type='range' className='flex-1' />
            </div>
          </>
        )}
      </div>
      {/* WINDOW */}
      <div className='flex w-full flex-col'>
        <div className='flex gap-2 items-center'>
          <input type='checkbox' value={isWindowChecked} onChange={() => setIsWindowChecked((prev) => !prev)} />
          <label>Window</label>
        </div>
        {isWindowChecked && (
          <>
            <div className='flex items-center gap-2 w-full'>
              <div>Length:</div>
              <input type='range' className='flex-1' />
            </div>
            <div className='flex items-center gap-2 w-full'>
              <div>Position:</div>
              <input type='range' className='flex-1' />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
