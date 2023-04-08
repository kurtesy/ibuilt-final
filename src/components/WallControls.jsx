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
  const [currentRoom, setCurrentRoom] = useState({})
  const [side, setSide] = useState(null)
  const { selectedWall } = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  const { bedRooms, livingRooms, balconies, kitchen, utility, store, drawing, dining, pooja, toilets, commonToilet } =
    useSelector((state) => state.rooms)
  const handleEditWall = (side) => {
    dispatch(setSelectedWall({ id: `${selectedRoom.roomType}-${selectedRoom.id}-${side}` }))
  }
  useEffect(() => {
    if (!isBackwallChecked || !isFrontwallChecked || !isRightwallChecked || !isLeftwallChecked)
      dispatch(setSelectedWall({ id: `` }))
  }, [isBackwallChecked, isFrontwallChecked, isLeftwallChecked, isRightwallChecked])
  useEffect(() => {
    if (selectedRoom.roomType === 'bedroom') {
      const room = bedRooms.filter((room) => room.id === selectedRoom.id)[0]
      setCurrentRoom(room)
    }
    if (selectedRoom.roomType === 'living') {
      const room = livingRooms.filter((room) => room.id === selectedRoom.id)[0]
      setCurrentRoom(room)
    }
    if (selectedRoom.roomType === 'toilet') {
      const room = toilets.filter((room) => room.id === selectedRoom.id)[0]
      setCurrentRoom(room)
    }
    if (selectedRoom.roomType === 'kitchen') setCurrentRoom(kitchen)
    if (selectedRoom.roomType === 'commonToilet') setCurrentRoom(commonToilet)
    if (selectedRoom.roomType === 'drawing') setCurrentRoom(drawing)
    if (selectedRoom.roomType === 'dining') setCurrentRoom(dining)
    if (selectedRoom.roomType === 'pooja') setCurrentRoom(pooja)
    if (selectedRoom.roomType === 'store') setCurrentRoom(store)
    if (selectedRoom.roomType === 'utility') setCurrentRoom(utility)
  }, [selectedRoom])
  useEffect(() => {
    if (currentRoom) {
      currentRoom?.walls?.forEach((wall) => {
        if (wall.side === 'front') {
          if (wall.added) setIsFrontWallChecked(true)
          else setIsFrontWallChecked(false)
        }
        if (wall.side === 'back') {
          if (wall.added) setIsBackWallChecked(true)
          else setIsBackWallChecked(false)
        }
        if (wall.side === 'left') {
          if (wall.added) setIsLeftWallChecked(true)
          else setIsLeftWallChecked(false)
        }
        if (wall.side === 'right') {
          if (wall.added) setIsRighttWallChecked(true)
          else setIsRighttWallChecked(false)
        }
      })
    }
  }, [currentRoom, selectedRoom])
  console.log('Current Room: ' + JSON.stringify(currentRoom))
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
      <div className='font-bold  flex justify-between items-center text-left p-1 px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-full drop-shadow-2xl text-slate-800 text-xs'>
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
      <div className='flex items-center justify-evenly gap-3 text-xs '>
        <div className='flex gap-2 items-center font-semibold text-primaryLime w-[80px]'>
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
        <div className='flex gap-2  items-center font-semibold text-primaryLime w-[80px]'>
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
        <div className='flex gap-2  items-center font-semibold text-primaryLime w-[80px]'>
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
        <div className='flex gap-2  items-center font-semibold text-primaryLime w-[80px]'>
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
