import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import D1_FRONT_L from "../assets/doors/FRONT_LEFT.svg";
import D1_FRONT_R from "../assets/doors/FRONT_RIGHT.svg";

import D1_BACK_L from "../assets/doors/BACK_LEFT.svg";
import D1_BACK_R from "../assets/doors/BACK_RIGHT.svg";

import D1_LEFT_B from "../assets/doors/LEFT_BOTTOM.svg";
import D1_LEFT_T from "../assets/doors/LEFT_TOP.svg";

import D1_RIGHT_B from "../assets/doors/RIGHT_BOTTOM.svg";
import D1_RIGHT_T from "../assets/doors/RIGHT_TOP.svg";
export default function Door({ side, position }) {
  const [rotation, setRotation] = useState(0);

  const doors = {
    front: {
      left: D1_FRONT_L,
      right: D1_FRONT_R
    },
    back: {
      left: D1_BACK_L,
      right: D1_BACK_R
    },
    left: {
      top: D1_LEFT_T,
      bottom: D1_LEFT_B
    },
    right: {
      top: D1_RIGHT_T,
      bottom: D1_RIGHT_B
    }
  };

  useEffect(() => {
    if (side === "left") setRotation(90);
  }, [side]);

  return (
    <div
      className={`absolute flex items-end justify-center ${side === "left" || side === "right" ? (side === "left" ? "h-[54px] w-[54px] left-0" : "h-[54px] w-[54px] right-0") : "h-[6px] w-[54px] "}`}
      style={{ ...position, zIndex: 99 }}>
      <div
        className={`absolute flex items-end justify-center z-[99] bg-transparent ${
          side === "left" || side === "right" ? (side === "left" ? "h-[54px] w-[54px] right-0" : "h-[54px] w-[54px] right-0") : "h-[6px] w-[54px]"
        }`}></div>
      <img
        src={doors[side][Object.keys(position)[0]]}
        alt='door'
        className={`absolute h-[54px] w-[54px] z-[100]  ${side === "front" ? "bottom-[-13px]" : ""} ${side === "left" ? "left-[-13px]" : ""} ${side === "right" ? "right-[-13px]" : ""} ${
          side === "back" ? "top-[-13px]" : "z-[120]"
        }`}
      />
      <div className={`bg-white absolute ${side === "front" || side === "back" ? "h-[6px] w-[54px]" : "h-[54px] w-[6px]"} ${side === "left" ? "left-0" : ""} ${side === "right" ? "right-0" : ""}`} />
    </div>
  );
}
