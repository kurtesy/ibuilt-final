import React, { useState } from 'react'
import SetbacksModal from './SetbacksModal'

export default function ExtraInputs() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='relative'>
      <button
        className='h-10 px-3 rounded-xl shadow-xl hover:scale-110 duration-300 font-semibold text-slate-800 bg-primaryLime'
        onClick={() => setOpenModal(true)}>
        Built-up
      </button>
      {openModal && <SetbacksModal />}
    </div>
  )
}
