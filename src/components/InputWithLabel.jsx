import React, { useEffect } from 'react'

export default function InputWithLabel({ label, value, setValue, min, max }) {
  return (
    <div className=' h-full px-2 py-1 flex items-center bg-slate-800 rounded-xl'>
      <label className='capitalize text-primaryLime font-semibold'>{label}&nbsp;</label>
      <input
        className='w-[90px] h-full rounded-tl-xl rounded-br-xl outline-none px-3'
        value={value}
        type='number'
        onChange={(e) => setValue(e.target.value)}
        min={min}
        max={max}
        onFocus={(e) => e.target.select()}
      />
      <select className='h-full bg-transparent text-primaryLime bg-slate-800 flex items-center justify-center font-semibold outline-none'>
        <option className='bg-slate-800'>ft</option>
        <option className='bg-slate-800'>m</option>
      </select>
    </div>
  )
}
