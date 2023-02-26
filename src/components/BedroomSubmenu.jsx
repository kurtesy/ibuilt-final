import React from 'react'
export default function BedroomSubmenu() {
  return (
    <div className='bg-slate-800 w-[150px]  p-3 gap-4 rounded-lg flex flex-col shadow-2xl text-primaryLime'>
      <div className='flex items-center justify-between gap-2'>
        <input type='radio' className='w-4 h-full cursor-pointer hover:scale-115' name='bathType' />
        <div className='h-full w-full text-xs'>Bath+WC</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input type='radio' className='w-4 h-full cursor-pointer hover:scale-115' name='bathType' />
        <div className='h-full w-full text-xs'>Bath Only</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input type='radio' className='w-4 h-full cursor-pointer hover:scale-115' name='bathType' />
        <div className='h-full w-full text-xs'>WC Only</div>
      </div>
      <div className='h-[1px] bg-primaryLime w-full' />
      <div className='flex items-center justify-between gap-2'>
        <input type='checkbox' className='w-4 h-full cursor-pointer hover:scale-115' />
        <div className='h-full w-full text-xs'>Balcony</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input type='checkbox' className='w-4 h-full cursor-pointer hover:scale-115' />
        <div className='h-full w-full text-xs'>Wardrobe</div>
      </div>
    </div>
  )
}
