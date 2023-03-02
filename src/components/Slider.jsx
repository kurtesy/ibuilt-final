import React, { useState } from 'react'

const Slider = ({ min, max, dimension, value, setValue, direction }) => {
  const handleChange = (event) => {
    setValue(parseFloat(event.target.value))
  }

  return (
    <div className='flex flex-col gap-3 bg-slate-700 p-3 rounded-xl shadow-2xl'>
      <div className='flex gap-1'>
        <input
          type='range'
          min={min}
          max={max}
          step={0.01}
          value={value}
          onChange={handleChange}
          className='flex w-full flex-1 accent-slate-200 cursor-pointer'
          defaultValue={value}
        />
        <input
          type='text'
          className='w-16 rounded-md px-2 outline-none'
          value={value}
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className='flex w-full justify-between'>
        {!dimension && (
          <>
            <div
              className='bg-red-500 p-2 text-xs font-bold rounded-lg text-white w-8 h-6 justify-center flex items-center cursor-pointer'
              onClick={() => setValue((prev) => prev - 1)}>
              {direction.from}
            </div>

            <div
              className='bg-green-500 p-2 text-xs font-bold rounded-lg text-white w-8 h-6 justify-center flex items-center cursor-pointer'
              onClick={() => setValue(0)}>
              0
            </div>
          </>
        )}
        <div
          className='bg-blue-500 p-2 text-xs font-bold rounded-lg text-white w-auto h-6  flex items-center justify-center cursor-pointer'
          onClick={() => {
            if (dimension) setValue(initialValue)
            else setValue((prev) => prev + 1)
          }}>
          {dimension ? dimension : direction.to}
        </div>
      </div>
    </div>
  )
}

export default Slider
