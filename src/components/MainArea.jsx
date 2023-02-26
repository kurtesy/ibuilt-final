import React, { useState } from 'react'
import UserInputs from './UserInputs'

export default function MainArea() {
  const [show, setShow] = useState(false)
  const [showMainBtn, setShowMainBtn] = useState(true)
  return (
    <div className='flex-1 relative w-full h-full flex items-center justify-center'>
      <UserInputs show={show} setShow={setShow} />
      {showMainBtn && (
        <button
          className='bg-primaryLime h-12 px-2 rounded-xl shadow-2xl text-slate-800 font-semibold hover:scale-110 duration-300 shadow-white'
          onClick={() => {
            setShow(true)
            setShowMainBtn(false)
          }}>
          Please Enter Dimensions
        </button>
      )}
    </div>
  )
}
