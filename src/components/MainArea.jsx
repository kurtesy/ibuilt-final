import React, { useEffect, useState } from 'react'
import UserInputs from './UserInputs'
import Plot from './Plot'
import { useSelector } from 'react-redux'
import ZoomControls from './ZoomControls'


export default function MainArea() {
  const [show, setShow] = useState(false)
  const [showMainBtn, setShowMainBtn] = useState(true)
  const { plot } = useSelector((state) => state)

  useEffect(() => {
    if (plot.plotLength && plot.plotBreadth) setShowMainBtn(false)
  }, [plot.plotLength, plot.plotBreadth])

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
      {plot.plotLength && plot.plotBreadth && <Plot />}
      <ZoomControls />
    </div>
  )
}
