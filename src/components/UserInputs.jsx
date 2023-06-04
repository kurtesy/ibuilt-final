import React, { useState } from "react";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import InputWithLabel from "./InputWithLabel";
import ExtraInputs from "./ExtraInputs";
import { useDispatch, useSelector } from "react-redux";
import { resetPlot, setPlotDetails } from "../../redux/plot";
import { resetRooms } from "../../redux/rooms";
import PlotDetails from "./PlotDetails";
import useWindowSize from "use-window-hook";
export default function UserInputs({ show, setShow, setLoading }) {
  const { plot } = useSelector((state) => state);
  const [_, width] = useWindowSize();
  const [length, setLength] = useState(plot.plotLength ? plot.plotLength : 0);
  const [breadth, setBreadth] = useState(plot.plotBreadth ? plot.plotBreadth : 0);
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.app);
  const handleReset = () => {
    console.log("Resetting");
    dispatch(resetPlot());
    dispatch(resetRooms());
  };
  return (
    <>
      {show ? (
        <div className={`absolute  bg-slate-800 top-0 right-0  flex items-center cursor-pointer  z-50 w-full ${width >= 1024 ? "h-[48px]" : "h-[132px]"}`}>
          <RiMenuFoldFill
            className={`absolute w-12 h-8 hover:scale-110 duration-300 z-50 text-primaryLime
             }`}
            onClick={() => setShow(false)}
          />
          <div className={`w-full flex items-center justify-between ${width < 1024 ? "flex-col " : ""}`}>
            <div className={`flex-1 absolute flex   gap-3 text-black ${width < 1024 ? "flex-col justify-start items-center top-0 w-auto" : "right-32 justify-center items-center w-full h-full"}`}>
              <InputWithLabel label='length' value={length} setValue={setLength} min={10} max={70} />
              <InputWithLabel label='breadth' value={breadth} setValue={setBreadth} min={10} max={70} />
              <ExtraInputs dimensions={{ length, breadth }} setShow={setShow} setLoading={setLoading} />
              <button className='bg-red-500 h-[80%] w-[80px] px-3 rounded-md shadow-xl hover:scale-110 duration-300 font-semibold text-slate-800' onClick={handleReset}>
                Reset
              </button>
            </div>
            {width >= 1024 ? <PlotDetails /> : null}
          </div>
        </div>
      ) : (
        <div className='absolute w-12 bg-transparent top-0 left-0 h-[48px] flex items-center cursor-pointer '>
          <RiMenuUnfoldFill className={`absolute w-12 h-8 hover:scale-110 duration-300  z-50 ${darkMode ? "text-primaryLime" : "text-slate-800"}`} onClick={() => setShow((prev) => !prev)} />
        </div>
      )}
    </>
  );
}
