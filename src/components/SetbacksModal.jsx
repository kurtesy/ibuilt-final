import React, { useState } from 'react'
import InputWithLabel from './InputWithLabel'
import BHKSelector from './BHKSelector'
import PlotDetails from './PlotDetails'
import { useSelector } from 'react-redux'
export default function SetbacksModal() {
  const { setbacks } = useSelector((state) => state.plot)
  const [front, setFront] = useState(setbacks.front)
  const [back, setBack] = useState(setbacks.back)
  const [left, setLeft] = useState(setbacks.left)
  const [right, setRight] = useState(setbacks.right)
  return (
    <div className='absolute bg-[#d9fc3595] top-12 left-20 p-3 shadow-lg rounded-lg flex flex-col gap-3 shadow-gray-500'>
      <div className='flex w-full gap-3'>
        <InputWithLabel label='Front' value={front} setValue={setFront} min={0} max={5} />
        <InputWithLabel label='Back' value={back} setValue={setBack} min={0} max={5} />
      </div>
      <div className='flex w-full gap-3'>
        <InputWithLabel label='Left' value={left} setValue={setLeft} min={0} max={5} />
        <InputWithLabel label='Right' value={right} setValue={setRight} min={0} max={5} />
      </div>
      <div className='h-[2px] bg-slate-800 w-full' />
      <BHKSelector />
      {/* <PlotDetails /> */}
    </div>
  )
}
