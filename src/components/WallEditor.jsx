import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWall } from '../../redux/rooms'
export default function WallEditor() {
  const [isOpeningChecked, setIsOpeningChecked] = useState(false)
  const [isDoorChecked, setIsDoorChecked] = useState(false)
  // const [isWindowChecked, setIsWindowChecked] = useState(false)
  const { selectedWall } = useSelector((state) => state.rooms)
  const [openingLength, setOpeningLength] = useState(0)
  const [openingPosition, setOpeningPosition] = useState(18)
  const [doorPosition, setDoorPosition] = useState(18)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, hasOpening: isOpeningChecked }))
  }, [isOpeningChecked])

  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, hasDoor: isDoorChecked }))
  }, [isDoorChecked])
  // useEffect(() => {
  //   dispatch(updateWall({ id: selectedWall, hasWindow: isWindowChecked }))
  // }, [isWindowChecked])

  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, openingLength: openingLength }))
  }, [openingLength])

  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, openingPosition }))
  }, [openingPosition])
  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, doorPosition }))
  }, [doorPosition])

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
              <input
                type='range'
                className='flex-1'
                onChange={(e) => setOpeningLength(e.target.value)}
                min={0}
                max={10}
                step={0.1}
                value={openingLength}
              />
            </div>
            <div className='flex items-center gap-2 w-full '>
              <div>Position:</div>
              <input
                type='range'
                className='flex-1'
                onChange={(e) => setOpeningPosition(e.target.value)}
                min={18}
                max={54}
                value={openingPosition}
              />
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
            {/* <div className='flex items-center gap-2 w-full'>
              <div>Length:</div>
              <input type='range' className='flex-1' />
            </div> */}
            <div className='flex items-center gap-2 w-full'>
              <div>Position:</div>
              <input
                type='range'
                className='flex-1'
                onChange={(e) => setDoorPosition(e.target.value)}
                min={18}
                max={320}
                value={doorPosition}
              />
            </div>
          </>
        )}
      </div>
      {/* WINDOW */}
      {/* <div className='flex w-full flex-col'>
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
      </div> */}
    </div>
  )
}
