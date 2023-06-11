import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRoomId, updateRoomData, setRoomRotation } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'
import hr from "../assets/staircases/hr-0.svg";
import hl from "../assets/staircases/hl-0.svg";
import vr from "../assets/staircases/vr-0.svg";
import vl from "../assets/staircases/vl-0.svg";
import intenal1 from "../assets/staircases/internal-1.svg";
import { AiOutlineRotateRight } from "react-icons/ai";
export default function Staircase({ id }) {
  const currentStaircase = useSelector((state) => state.rooms.stairCase);
  const [hovered, setHovered] = useState(false);
  const [length, setLength] = useState(6);
  const [breadth, setBreadth] = useState(10);
  const { rotated } = currentStaircase;
  const [rotation, setRotation] = useState(0);
  const { scale, facing, icons } = useSelector((state) => state.plot);
  const { selectedRoom } = useSelector((state) => state.rooms);
  const [style, setStyle] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [srcIcon, setSrcIcon] = useState();
  const dispatch = useDispatch();

  const makeStyle = () => {
    const currStyle = {};
    currStyle["width"] = Math.floor(length * scale);
    currStyle["height"] = Math.floor(breadth * scale);
    currStyle["rotate"] = `${rotated}deg`;
    if (rotated > 0) {
      currStyle["transform"] = `translate(-${length / 2},-${breadth / 2})`;
    }
    if (isActive && selectedRoom.id === id) {
      currStyle["zIndex"] = 40;
      currStyle["backgroundColor"] = "#fff";
    } else {
      currStyle["zIndex"] = 30;
      currStyle["backgroundColor"] = icons ? "#fff" : "gray";
    }
    setStyle({ ...currStyle, ...currentStaircase.position });
  };
  const handleDeSelect = (e) => {
    e.preventDefault();
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }));
    setIsActive(false);
  };
  useEffect(() => {
    setLength(currentStaircase?.length);
    setBreadth(currentStaircase?.breadth);
  }, [currentStaircase]);
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: "stairCase",
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    );
  }, [facing]);
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setSelectedRoomId({ selectedId: id, roomType: "stairCase" }));
    setIsActive(true);
  };

  useEffect(() => {
    if (currentStaircase?.placement === "internal") {
      setSrcIcon(intenal1);
    } else {
      if (parseFloat(currentStaircase.length) > parseFloat(currentStaircase.breadth)) {
        if (currentStaircase.position?.right != undefined) {
          setSrcIcon(hr);
        } else if (currentStaircase.position?.left != undefined) {
          setSrcIcon(hl);
        }
      } else {
        if (currentStaircase.position?.right != undefined) {
          setSrcIcon(vr);
        } else if (currentStaircase.position?.left != undefined) {
          setSrcIcon(vl);
        }
      }
    }
  }, [currentStaircase]);

  useEffect(() => {
    makeStyle();
  }, [length, breadth, location, selectedRoom, isActive, currentStaircase, facing, rotation, icons, srcIcon]);

  // useEffect(() => {
  //   dispatch(
  //     updateRoomData({
  //       id,
  //       roomType: 'stairCase',
  //       length,
  //       breadth
  //     })
  //   )
  // }, [length, breadth])
  const handleRotate = () => {
    if (rotation === 270) setRotation(0);
    else setRotation((prev) => prev + 90);
  };
  useEffect(() => {
    dispatch(setRoomRotation({ roomType: "stairCase", id, rotation }));
  }, [rotation]);
  return (
    <div style={style} className={` absolute cursor-pointer `} onClick={handleClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {/* {hovered && <AiOutlineRotateRight size={24} className='absolute right-0 top-[-24px]' onClick={handleRotate} />} */}
      {icons ? <img src={srcIcon} alt='stair' className='w-full h-full' /> : ""}
      <div className='absolute z-40 top-1/2 left-1/2 text-center text-black p-2 font-semibold translate-x-[-50%] translate-y-[-50%]'>
        <p style={{ fontSize: Math.max(14, Math.min(currentStaircase.length, currentStaircase.breadth)) * 0.8 }}>
          STAIRCASE - {id.toUpperCase()}
          <br />
          {currentStaircase.length} X {currentStaircase.breadth}
        </p>
      </div>
      {currentStaircase.walls.map((wall, index) => (
        <Wall
          id={`stairCase-${id}-${wall.side}`}
          added={wall.added}
          length={wall.length}
          thickness={wall.thickness}
          position={wall.position}
          door={wall.door}
          side={wall.side}
          window={wall.window}
          opening={wall.opening}
          key={index}
        />
      ))}
    </div>
  );
}
