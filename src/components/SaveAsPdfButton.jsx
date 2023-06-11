import React, { useState } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { useSelector } from "react-redux";
export default function SaveAsPdfButton({ plotref }) {
  const { darkMode } = useSelector((state) => state.app);
  const [hovered, setHovered] = useState(false);
  const handlePrint = () => {};

  return (
    <div className={`flex flex-col items-center ${darkMode ? "text-blue-700" : "text-white"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <AiFillFilePdf size={24} className=' cursor-pointer hover:scale-125  duration-700 ease-in-out' onClick={handlePrint} />
      <p className={`text-xs my-2 font-semibold ${darkMode ? "text-blue-700" : "text-white"}`}>SAVE</p>
    </div>
  );
}
