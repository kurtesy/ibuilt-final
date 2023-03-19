import React from 'react'
import { useDispatch } from 'react-redux'
import { saveCurrentPlotState } from '../../redux/plot'
import { saveCurrentRoomsState } from '../../redux/rooms'

export default function CurrentSaveButton() {
  const dispatch = useDispatch()
  function saveState() {
    dispatch(saveCurrentRoomsState())
    dispatch(saveCurrentPlotState())
  }

  return (
    <button
      className='absolute bg-primaryLime text-slate-900  right-12 bottom-12  gap-3 px-2 w-[120px] rounded-lg shadow-2xl font-bold'
      onClick={saveState}>
      Save
    </button>
  )
}
