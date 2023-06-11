import React, { useEffect, useState } from "react";
import { FiRotateCw, FiRotateCcw } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setPlotRotation } from "../../redux/plot";
export default function RotationsButtons() {
  const [rotation, setRotation] = useState(0);
  const { darkMode } = useSelector((state) => state.app);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rotation) dispatch(setPlotRotation({ rotation }));
  }, [rotation]);
  const handleRotateCw = () => {
    if (rotation === 360) setRotation(0);
    else setRotation((prev) => prev + 45);
  };
  const handleRotateCcw = () => {
    if (rotation === 45) setRotation();
    else setRotation((prev) => prev - 45);
  };
  return (
    <div className={`flex flex-col gap-3 items-center justify-center ${darkMode ? "text-blue-700" : "text-white"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div>
        <FiRotateCcw size={24} className=' cursor-pointer hover:scale-125 hover:-rotate-180 duration-700 ease-in-out' onClick={handleRotateCcw} />
        <p className={`text-xs my-2 font-semibold ${darkMode ? "text-blue-700" : "text-white"}`}>CCW</p>
      </div>
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      <div>
        <FiRotateCw size={24} className=' cursor-pointer hover:scale-125 hover:rotate-180 duration-700 ease-in-out' onClick={handleRotateCw} />
        <p className={`text-xs my-2 font-semibold ${darkMode ? "text-blue-700" : "text-white"}`}>CW</p>
      </div>
    </div>
  );
}
