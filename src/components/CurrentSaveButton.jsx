import React from 'react'
import { useDispatch } from 'react-redux'
import { saveCurrentPlotState } from '../../redux/plot'
import { saveCurrentRoomsState } from '../../redux/rooms'
import { finalSave, saveToCsv } from '../helpers/outputControls'
import { save } from 'save-file'
export default function CurrentSaveButton() {
  const dispatch = useDispatch()
  const handleExportCsv = async () => {
    const csv = await saveToCsv()
    await save(csv, 'data.csv')
  }
  return (
    <div className='flex absolute gap-2 right-12 bottom-12'>
      <button
        className=' bg-primaryLime text-slate-900   gap-3 px-2 w-[120px] rounded-lg shadow-2xl font-bold'
        onClick={() => finalSave()}>
        Save
      </button>
      <button
        className=' bg-primaryLime text-slate-900   gap-3 px-2 w-[120px] rounded-lg shadow-2xl font-bold'
        onClick={handleExportCsv}>
        Export csv
      </button>
    </div>
  )
}
