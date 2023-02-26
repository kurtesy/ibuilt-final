import React from 'react'
export default function LivingSubmenu() {
  return (
    <div className='bg-slate-800 w-[150px]  p-3 gap-4 rounded-lg flex flex-col shadow-2xl text-primaryLime '>
      <div className='flex items-center justify-between gap-2 w-full'>
        <input type='checkbox' className='w-4 h-full cursor-pointer  hover:scale-115' />
        <div className='h-full w-full text-xs'>Common Bath</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input type='checkbox' className='w-4 h-full cursor-pointer hover:scale-115' name='bathType' />
        <div className='h-full w-full text-xs'>Wash</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input type='checkbox' className='w-4 h-full cursor-pointer hover:scale-115' />
        <div className='h-full w-full text-xs'>Sitout</div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <input type='checkbox' className='w-4 h-full cursor-pointer hover:scale-115' />
        <div className='h-full w-full text-xs'>Wardrobe</div>
      </div>
    </div>
  )
}
