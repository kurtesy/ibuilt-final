import React from 'react'
import InputWithLabel from './InputWithLabel'
import BHKSelector from './BHKSelector'
import PlotDetails from './PlotDetails'
export default function SetbacksModal() {
  return (
    <div className='absolute bg-white top-12 left-20 p-3 shadow-2xl rounded-lg flex flex-col gap-3'>
      <div className='flex w-full gap-3'>
        <InputWithLabel label='Front' />
        <InputWithLabel label='Back' />
      </div>
      <div className='flex w-full gap-3'>
        <InputWithLabel label='Left' />
        <InputWithLabel label='Right' />
      </div>
      <div className='h-[2px] bg-slate-800 w-full' />
      <BHKSelector />
      {/* <PlotDetails /> */}
    </div>
  )
}
