import React from "react";
import { useSelector } from "react-redux";
import FeatureToggler from "./FeatureToggler";
import { toggleResizeDrag, toggleRuler } from "../../redux/plot";

export default function Controls({ plotref }) {
  const { darkMode } = useSelector((state) => state.app);
  return (
    <div className={`absolute test right-20  h-full w-[60px] flex flex-col ${darkMode ? "bg-slate-900" : "bg-slate-800"}`}>
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      <FeatureToggler label="Drag or Resize" toggleFunc={toggleResizeDrag} stateVal="isResize" />
      <div className='w-full h-[1px] bg-primaryCyan my-2' />
      <FeatureToggler label="Ruler" toggleFunc={toggleRuler} stateVal="isRuler" />
    </div>
  );
}
