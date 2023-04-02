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
  const [currentWall, setCurrentWall] = useState({})
  const { bedRooms, selectedRoom, toilets, livingRooms, kitchen, utility, store, pooja, dining, drawing } = useSelector(
    (state) => state.rooms
  )

  useEffect(() => {
    console.log('selectedWall: ' + selectedWall)
    const [room, id, side] = selectedWall.split('-')
    if (room === 'bedroom') {
      const currentRoom = bedRooms.find((room) => room.id === id)
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
    if (room === 'living') {
      const currentRoom = livingRooms.find((room) => room.id === id)
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
    if (room === 'toilet') {
      const currentRoom = toilets.find((room) => room.id === id)
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
    if (room === 'kitchen') {
      const currentRoom = kitchen
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
    if (room === 'utility') {
      const currentRoom = utility
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
    if (room === 'store') {
      const currentRoom = store
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
    if (room === 'drawing') {
      const currentRoom = drawing
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
    if (room === 'dining') {
      const currentRoom = dining
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
    if (room === 'pooja') {
      const currentRoom = pooja
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === side) {
          setCurrentWall(wall)
        }
      })
    }
  }, [selectedWall, selectedRoom])
  useEffect(() => {
    if (currentWall?.opening?.includes) {
      setIsOpeningChecked(true)
    } else setIsOpeningChecked(false)
    if (currentWall?.door?.includes) {
      setIsDoorChecked(true)
    } else setIsDoorChecked(false)
  }, [currentWall])

  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, hasOpening: isOpeningChecked }))
  }, [isOpeningChecked])

  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, hasDoor: isDoorChecked }))
  }, [isDoorChecked])

  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, openingLength: openingLength }))
  }, [openingLength])

  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, openingPosition }))
  }, [openingPosition, currentWall])
  useEffect(() => {
    dispatch(updateWall({ id: selectedWall, doorPosition }))
  }, [doorPosition, currentWall])

  return (
    <div className='bg-slate-900 text-white p-3 rounded-lg text-xs'>
      {/* OPENING */}
      <div className='flex w-full flex-col'>
        <div className='flex gap-2 items-center'>
          <input type='checkbox' checked={isOpeningChecked} onChange={() => setIsOpeningChecked((prev) => !prev)} />
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
                defaultValue={currentWall?.opening.length}
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
          <input type='checkbox' checked={isDoorChecked} onChange={() => setIsDoorChecked((prev) => !prev)} />
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
