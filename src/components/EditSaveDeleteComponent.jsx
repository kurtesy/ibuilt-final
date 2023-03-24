import React, { useState } from 'react'
import { BsPencilFill, BsSave2Fill, BsTrash2Fill } from 'react-icons/bs'

export default function EditSaveDeleteComponent({ isSiderOpen }) {
  const [saveHovered, setSaveHovered] = useState(false)
  const [editHovered, setEditHovered] = useState(false)
  const [deleteHovered, setDeleteHovered] = useState(false)

  return (
    <div className='flex  flex-col fixed top-14  left-[290px] gap-1'>
      <button
        className='text-primaryLime bg-slate-900 px-2 flex items-center h-12 w-12 justify-center rounded-md shadow-xl text-xl'
        onMouseEnter={() => setSaveHovered(true)}
        onMouseLeave={() => setSaveHovered(false)}>
        {!saveHovered ? <BsSave2Fill className='text-green-400' /> : <pre className='text-xs'>Save</pre>}
      </button>
      <button
        className='text-primaryLime bg-slate-900 px-2 flex items-center h-12 w-12 justify-center rounded-md shadow-xl text-xl  '
        onMouseEnter={() => setEditHovered(true)}
        onMouseLeave={() => setEditHovered(false)}>
        {!editHovered ? <BsPencilFill className='text-blue-400' /> : <pre className='text-xs'>Edit</pre>}
      </button>
      <button
        className='text-primaryLime bg-slate-900 px-2 flex items-center h-12 w-12 justify-center rounded-md shadow-xl text-xl  '
        onMouseEnter={() => setDeleteHovered(true)}
        onMouseLeave={() => setDeleteHovered(false)}>
        {!deleteHovered ? <BsTrash2Fill className='text-red-400' /> : <pre className='text-xs'>Delete</pre>}
      </button>
    </div>
  )
}
