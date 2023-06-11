import React from "react";
import PositionPointer from "./PositionPointer";
import ModeToggler from "./ModeToggler";
import ExitButton from "./ExitButton";
import RotationsButtons from "./RotationsButtons";
import { useSelector } from "react-redux";
import IconToggler from "./IconToggler";
import ResetButton from "./ResetButton";
import SaveAsPdfButton from "./SaveAsPdfButton";

export default function Controls({ plotref }) {
  const { darkMode } = useSelector((state) => state.app);
  return (
    <div className={`absolute right-0  h-full w-[60px] flex flex-col  items-center justify-center ${darkMode ? "bg-slate-900" : "bg-slate-800"}`}>
      {/* MODE */}
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      <ModeToggler />
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      {/* RESET */}
      <ResetButton />
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      {/* EXIT */}
      <ExitButton />
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      {/* ROTATIONS */}
      <RotationsButtons />
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      {/* ICONS TOGGLE */}
      <IconToggler />
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      {/* SAVE PDF */}
      <SaveAsPdfButton plotref={plotref} />
    </div>
  );
}
