import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../redux/app";
import { toggleIcons } from "../../redux/plot";
export default function IconToggler() {
  const { icons } = useSelector((state) => state.plot);
  const dispatch = useDispatch();

  return (
    <div className='absolute bottom-28 right-4 flex flex-col items-center'>
      {icons ? (
        <BsToggleOn size={24} className='text-slate-800 cursor-pointer hover:scale-125  duration-700 ease-in-out' onClick={() => dispatch(toggleIcons())} />
      ) : (
        <BsToggleOff size={30} className='text-slate-800 cursor-pointer hover:scale-125  duration-700 ease-in-out' onClick={() => dispatch(toggleIcons())} />
      )}
      <p className='text-xs my-2 font-semibold'>{icons ? "ICONS ON" : "ICONS OFF"}</p>
    </div>
  );
}
