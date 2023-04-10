import React, { useEffect, useState } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../redux/app'
export default function ModeToggler() {
  const { darkMode } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const [isDarkMode, setIsDarkMode] = useState(darkMode)
  useEffect(() => {
    dispatch(setDarkMode({ mode: isDarkMode }))
  }, [isDarkMode])
  return (
    <div className='absolute top-28 right-4 flex flex-col items-center'>
      {darkMode ? (
        <BsMoonFill
          size={24}
          className='text-white cursor-pointer hover:scale-125 hover:rotate-180 duration-700 ease-in-out'
          onClick={() => setIsDarkMode((prev) => !prev)}
        />
      ) : (
        <BsSunFill
          size={30}
          className='text-slate-800 cursor-pointer hover:scale-125 hover:rotate-180 duration-700 ease-in-out'
          onClick={() => setIsDarkMode((prev) => !prev)}
        />
      )}
      <p className='text-xs my-2 font-semibold'>{darkMode ? 'DARK' : 'LIGHT'}</p>
    </div>
  )
}
