import React, { useState } from 'react'

const Slider = ({ min, max, left, right, dimension }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event) => {
    setValue(parseInt(event.target.value))
  }
  return (
    <div className='flex flex-col gap-3 bg-slate-700 p-3 rounded-xl shadow-2xl'>
      <input
        type='range'
        min={min}
        max={max}
        step='1'
        value={value}
        onChange={handleChange}
        className='flex w-full accent-slate-200 cursor-pointer'
        defaultValue={0}
      />
      <div className='flex w-full justify-between'>
        {!dimension && (
          <>
            <div className='bg-red-500 p-2 text-xs font-bold rounded-lg text-white w-8 h-6 justify-center flex items-center'>
              {left}
            </div>

            <div className='bg-green-500 p-2 text-xs font-bold rounded-lg text-white w-8 h-6 justify-center flex items-center'>
              0
            </div>
          </>
        )}
        <div className='bg-blue-500 p-2 text-xs font-bold rounded-lg text-white w-auto h-6  flex items-center justify-center'>
          {dimension ? dimension : right}
        </div>
      </div>
    </div>
  )
}

export default Slider
