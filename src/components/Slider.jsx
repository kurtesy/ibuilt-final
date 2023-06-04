import React, { useState } from 'react'
import { TbArrowsUpDown, TbArrowsLeftRight } from 'react-icons/tb'
const Slider = ({ min, max, dimension, value, setValue, direction, type }) => {
  const handleChange = (event) => {
    setValue(parseFloat(event.target.value))
  }

  return (
    <div className='flex  gap-3 bg-slate-700 p-1 rounded-lg shadow-2xl'>
      <div className='flex gap-1 justify-between flex-1'>
        {type === "vertical" && <TbArrowsUpDown size={18} className='text-lime-300' />}
        {type === "horizontal" && <TbArrowsLeftRight size={18} className='text-lime-300' />}
        {dimension ? <div className='text-lime-300'>{dimension.charAt(0)}</div> : <div></div>}
        <input type='range' min={min} max={max} step={0.01} value={value} onChange={handleChange} className='flex w-full flex-1 accent-slate-200 cursor-pointer' defaultValue={value} />
        {/* <input
          type='text'
          className='w-16 rounded-md px-2 outline-none'
          value={value}
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
        /> */}
      </div>
      <div className='flex gap-2 justify-between items-center'>
        <div className='bg-red-500 p-1 text-xs font-bold rounded-lg text-white w-5 h-5 justify-center flex items-center cursor-pointer' onClick={() => setValue((prev) => prev - 1)}>
          -
        </div>

        <div className='bg-green-500 p-1 text-xs font-bold rounded-lg text-white w-12 h-5 justify-center flex items-center cursor-pointer'>
          {" "}
          {/* onClick={() => setValue(0)} */}
          {value}
        </div>

        <div
          className='bg-blue-500 p-1 text-xs font-bold rounded-lg text-white w-5 h-5  flex items-center justify-center cursor-pointer'
          style={dimension ? { width: "auto", padding: "8px 8px" } : {}}
          onClick={() => {
            setValue((prev) => prev + 1);
          }}>
          +
        </div>
      </div>
    </div>
  );
}

export default Slider
