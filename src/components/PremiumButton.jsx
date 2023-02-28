import React from 'react'
import { GrDiamond } from 'react-icons/gr'
export default function PremiumButton({ setPremium }) {
  const handleClick = () => {
    setPremium(true)
  }
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <button
        className=' bg-primaryLime h-[48px]  px-3 text-lg gap-3 cursor pointer  rounded-xl shadow-xl font-semibold text-slate-800 flex items-center justify-between z-99'
        onClick={handleClick}>
        <GrDiamond size={30} className='hover:scale-110' /> <span className='text-red-500 font-bold'>Premium</span>
      </button>
    </div>
  )
}
