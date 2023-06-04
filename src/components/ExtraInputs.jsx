import React, { useState } from 'react'
import SetbacksModal from './SetbacksModal'

export default function ExtraInputs({ dimensions, setShow, setLoading }) {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='relative h-full flex items-center'>
      <button className='h-[80%] px-3 rounded-md shadow-xl hover:scale-110 duration-300 font-semibold text-slate-800 bg-primaryLime' onClick={() => setOpenModal((prev) => !prev)}>
        Built-up
      </button>
      {openModal && <SetbacksModal dimensions={dimensions} setShow={setShow} setLoading={setLoading} />}
    </div>
  );
}
