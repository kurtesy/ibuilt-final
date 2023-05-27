import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const { darkMode } = useSelector((state) => state.app)
  return (
    <div className={`flex h-[60px] w-full bg-inherit shadow-xl items-center pl-3 pr-6 justify-between `}>
      {/* BRAND */}
      <div className='text-2xl  text-primaryLime font-bold '>iBuiltup</div>
      {/* NAVS */}
      <div className='flex px-6 gap-6 font-semibold text-xl'>
        <NavLink className='hover:scale-110 cursor-pointer z-50  px-6 py-3 ease-in-out duration-300'>Home</NavLink>
        <NavLink className='hover:scale-110 cursor-pointer z-50  px-6 py-3 ease-in-out duration-300'>Partners</NavLink>
        <NavLink className='hover:scale-110 cursor-pointer z-50 bg-primaryLime px-8 py-3 rounded-md ease-in-out duration-300' to='/auth'>
          Login
        </NavLink>
      </div>
    </div>
  )
}
