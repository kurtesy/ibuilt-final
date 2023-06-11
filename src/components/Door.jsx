import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {} from "../assets/doors/D1_BACK_L.svg";
import {} from "../assets/doors/D1_BACK_R.svg";

import D1_FRONT_L from "../assets/doors/D1_FRONT_L.svg";
import D1_FRONT_R from "../assets/doors/D1_FRONT_R.svg";

import D1_BACK_L from "../assets/doors/D1_FRONT_L.svg";
import D1_BACK_R from "../assets/doors/D1_FRONT_R.svg";

import D1_LEFT_B from "../assets/doors/D1_LEFT_B.svg";
import D1_LEFT_T from "../assets/doors/D1_LEFT_T.svg";

import D1_RIGHT_B from "../assets/doors/D1_RIGHT_B.svg";
import D1_RIGHT_T from "../assets/doors/D1_RIGHT_T.svg";
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
        className={`absolute flex items-end justify-center z-[99] ${
          side === "left" || side === "right" ? (side === "left" ? "h-[54px] w-[54px] right-0" : "h-[54px] w-[54px] right-0") : "h-[6px] w-[54px]"
        }`}></div>
      <img
        src={doors[side][Object.keys(position)[0]]}
        alt='door'
        className={`absolute h-[54px] w-[54px] z-[100]  ${side === "front" ? "bottom-[-9px]" : ""} ${side === "left" ? "left-[-9px]" : ""} ${side === "right" ? "right-[-9px]" : ""} ${
          side === "back" ? "bottom-[-9px]" : ""
        }`}
      />
    </div>
  );
}
