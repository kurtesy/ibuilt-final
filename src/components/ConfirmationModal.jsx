import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeRoomFromPlot, setSelectedRoomId } from '../../redux/rooms'

export default function ConfirmationModal({ setOpenDeleteConfirmation }) {
  const { selectedRoom } = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(removeRoomFromPlot({ position: selectedRoom.id, roomType: selectedRoom.roomType }))
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setOpenDeleteConfirmation(false)
  }
  return (
    <div
      className='absolute top-[50%] left-[50%] z-50 bg-slate-200 w-[420px] h-auto shadow-2xl rounded-lg p-6 flex flex-col  items-center justify-between text-xl'
      style={{ transform: 'translate(-50%,-50%)' }}>
      <div className='flex flex-col text-center gap-3'>
        Are you sure you want to delete the room?
        <span className='font-semibold text-red-500'>
          {selectedRoom.roomType}-{selectedRoom.id}
        </span>
      </div>
      <div className='w-full flex items-center justify-center gap-8 mt-10'>
        <button
          className='bg-red-800 p-2 px-6 text-white rounded-md hover:scale-110 duration-300 ease-in-out'
          onClick={handleDelete}>
          Yes
        </button>
        <button
          className='bg-slate-800 p-2 px-6 text-white rounded-md hover:scale-110 duration-300 ease-in-out'
          onClick={() => setOpenDeleteConfirmation(false)}>
          No
        </button>
      </div>
    </div>
  )
}
