import React, { useEffect } from 'react'

export default function InputWithLabel({ label, value, setValue, min, max, disabled }) {
  return (
    <div className=' h-full py-1  items-center bg-slate-800 rounded-xl flex gap-3'>
      <label className='capitalize text-primaryLime font-semibold px-2'>{label}&nbsp;</label>
      <input
        className='w-[90px] h-full rounded-md outline-none px-3 '
        value={value}
        type='number'
        style={{ color: "black" }}
        onChange={(e) => setValue(e.target.value)}
        min={min}
        max={max}
        onFocus={(e) => e.target.select()}
        disabled={disabled}
      />
      <div className='h-full w-full px-2  bg-transparent text-primaryLime bg-slate-800 flex items-center justify-center font-semibold outline-none'>
        <div className='bg-slate-800'>ft</div>
        {/* <option className='bg-slate-800'>m</option> */}
      </div>
    </div>
  );
}
