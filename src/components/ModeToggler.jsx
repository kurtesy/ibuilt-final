import React from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '../../redux/app'
export default function ModeToggler() {
  const { darkMode } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  return (
    <div className='absolute top-28 right-4 flex flex-col items-center'>
      {darkMode ? (
        <BsMoonFill
          size={24}
          className='text-white cursor-pointer hover:scale-125 hover:rotate-180 duration-700 ease-in-out'
          onClick={() => dispatch(toggleMode())}
        />
      ) : (
        <BsSunFill
          size={30}
          className='text-slate-800 cursor-pointer hover:scale-125 hover:rotate-180 duration-700 ease-in-out'
          onClick={() => dispatch(toggleMode())}
        />
      )}
      <p className='text-xs my-2 font-semibold'>{darkMode ? 'DARK' : 'LIGHT'}</p>
    </div>
  )
}
