import React, { useEffect, useState } from 'react'
export default function PositionSelector({ position, setPosition, setRoom }) {
  return (
    <div className='w-full'>
      <select
        className='w-full bg-primaryLime rounded-lg px-3 h-[32px] font-semibold text-slate-800 cursor-pointer'
        value={position}
        onChange={(e) => {
          setPosition(e.target.value)
          setRoom('')
        }}>
        <option value=''>Select Position</option>
        <option value='nw'>North West</option>
        <option value='ne'>North East</option>
        <option value='sw'>South West</option>
        <option value='se'>South East</option>
      </select>
    </div>
  )
}
