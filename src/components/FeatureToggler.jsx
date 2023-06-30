import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function FeatureToggler({ label, toggleFunc, stateVal }) {

  const plotState = useSelector((state) => state.plot);
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.app);

  return (
    <div className={`flex flex-col items-center ${darkMode ? "text-blue-700" : "text-white"}`}>
      {plotState[stateVal] ? (
        <BsToggleOn size={24} className=' cursor-pointer hover:scale-125  duration-700 ease-in-out' onClick={() => dispatch(toggleFunc())} />
      ) : (
        <BsToggleOff size={24} className=' cursor-pointer hover:scale-125  duration-700 ease-in-out' onClick={() => dispatch(toggleFunc())} />
      )}
      <div className={`text-xs my-2 font-semibold ${darkMode ? "text-blue-700" : "text-white"}`}>{label}</div>
    </div>
  );
}

