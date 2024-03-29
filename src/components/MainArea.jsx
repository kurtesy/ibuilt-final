import React, { useEffect, useRef, useState } from 'react'
import UserInputs from "./UserInputs";
import Plot from "./Plot";
import { useDispatch, useSelector } from "react-redux";
import ZoomControls from "./ZoomControls";
import PositionPointer from "./PositionPointer";
import Loader from "./Loader";
import CurrentSaveButton from "./CurrentSaveButton";
import ConfirmationModal from "./ConfirmationModal";
import Particles from "../components/Particles";
import SaveAsPdfButton from "./SaveAsPdfButton";
import ModeToggler from "./ModeToggler";
import useWindowSize from "use-window-hook";
import { FiRotateCw, FiRotateCcw } from "react-icons/fi";
import { setPlotRotation } from "../../redux/plot";
import { useNavigate } from "react-router-dom";
import IconToggler from "./IconToggler";
import Controls from "./Controls";
export default function MainArea({ isSiderOpen }) {
  const [_, width] = useWindowSize();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [showMainBtn, setShowMainBtn] = useState(true);
  const { plot } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [exitHovered, setExitHovered] = useState(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
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
  useEffect(() => {
    if (plot.plotLength && plot.plotBreadth) setShowMainBtn(false);
  }, [plot.plotLength, plot.plotBreadth]);

  const handleDelete = (e) => {
    if (e.key === "Delete") setOpenDeleteConfirmation(true);
  };

  const plotref = useRef();
  return (
    <div
      tabIndex={0}
      // onKeyDown={handleDelete}
      className={` relative h-full flex items-center justify-center  ${isSiderOpen ? "w-[calc(100%-400px)] left-[400px]" : "w-full"}`}>
      {/* {!(plot.plotLength && plot.plotBreadth) ? (
        <div className='absolute w-full h-full'>
          <img src={mainareaBG} alt='bg' className='w-full h-full blur-sm' />
        </div>
      ) : null} */}
      {/* {!plot.plotLength && !plot.plotBreadth && <Particles />} */}
      <UserInputs show={show} setShow={setShow} setLoading={setLoading} isSiderOpen={isSiderOpen} />
      {plot.plotLength && plot.plotBreadth ? (
        <>
          <PositionPointer />
          {/* <PositionPointer isBottom={true} />
          <CurrentSaveButton />
          <SaveAsPdfButton plotref={plotref} />
          <FiRotateCcw size={32} className='absolute top-15 right-12 cursor-pointer' onClick={handleRotateCcw} />
          <FiRotateCw size={32} className='absolute top-15 right-4 cursor-pointer' onClick={handleRotateCw} /> */}
          <Controls plotref={plotref} />
          {/* <ZoomControls /> */}
        </>
      ) : null}
      {showMainBtn ? (
        <button
          className='bg-primaryLime h-12 px-2 rounded-xl shadow-2xl text-slate-800 font-semibold hover:scale-110 duration-300 shadow-white animate-pulse'
          onClick={() => {
            setShow(true);
            setShowMainBtn(false);
          }}>
          Please Enter Dimensions
        </button>
      ) : null}
      {/* {loading ? (
        <Loader />
      ) : (
        plot.plotLength && plot.plotBreadth && <Plot isSiderOpen={isSiderOpen} plotref={plotref} />
      )} */}
      {plot.plotLength && plot.plotBreadth ? <Plot isSiderOpen={isSiderOpen} /> : null}
      {/* <ModeToggler />
      <IconToggler /> */}

      {openDeleteConfirmation ? <ConfirmationModal setOpenDeleteConfirmation={setOpenDeleteConfirmation} /> : null}
    </div>
  );
}
