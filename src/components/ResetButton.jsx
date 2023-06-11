import React, { useState } from "react";
import { resetPlot } from "../../redux/plot";
import { resetRooms } from "../../redux/rooms";
import { useDispatch, useSelector } from "react-redux";
import { BiReset } from "react-icons/bi";
export default function ResetButton() {
  const { darkMode } = useSelector((state) => state.app);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetPlot());
    dispatch(resetRooms());
  };
  return (
    <div className={`flex flex-col items-center ${darkMode ? "text-blue-700" : "text-white"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <BiReset size={24} className=' cursor-pointer hover:scale-125 hover:-rotate-180 duration-700 ease-in-out' onClick={handleReset} />
      <p className={`text-xs my-2 font-semibold ${darkMode ? "text-blue-700" : "text-white"}`}>RESET</p>
    </div>
  );
}
