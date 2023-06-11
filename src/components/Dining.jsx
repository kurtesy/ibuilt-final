import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeRoomFromPlot, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import { AiFillCloseCircle } from 'react-icons/ai'
import { positions } from '../constants/facingAndPosition'
export default function Dining({ id }) {
  const currentDining = useSelector((state) => state.rooms.dining)

  const [length, setLength] = useState(6)
  const [breadth, setBreadth] = useState(10)
  const [rotation, setRotation] = useState(0)
  const { scale, facing, icons } = useSelector((state) => state.plot);
  const { selectedRoom } = useSelector((state) => state.rooms);
  const [style, setStyle] = useState({});
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const handleDelete = () => {
    dispatch(removeRoomFromPlot({ position: id, roomType: "dining" }));
  };
  const makeStyle = () => {
    const currStyle = {};
    currStyle["width"] = Math.floor(length * scale);
    currStyle["height"] = Math.floor(breadth * scale);
    currStyle["rotate"] = `${rotation}deg`;
    if (isActive && selectedRoom.id === id) {
      currStyle["zIndex"] = 40;
      currStyle["backgroundColor"] = "#FFF";
    } else {
      currStyle["zIndex"] = 30;
      currStyle["backgroundColor"] = icons ? "#fff" : "#B4F2E1";
    }
    setStyle({ ...currStyle, ...currentDining.position });
  };

  useEffect(() => {
    setLength(currentDining?.length);
    setBreadth(currentDining?.breadth);
  }, [currentDining]);
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: "dining",
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    );
  }, [facing]);
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setSelectedRoomId({ selectedId: id, roomType: "dining" }));
    setIsActive(true);
  };
  useEffect(() => {
    setRotation(currentDining.rotated);
  }, [currentDining]);
  useEffect(() => {
    makeStyle();
  }, [length, breadth, selectedRoom, isActive, currentDining, facing, icons]);

  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: "dining",
        length,
        breadth
      })
    );
  }, [length, breadth]);

  const handleDeSelect = (e) => {
    e.preventDefault();
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }));
    setIsActive(false);
  };
  return (
    <div
      style={style}
      className='bg-bathFullType13 absolute cursor-pointer shadow-2xl'
      onClick={handleClick}
      onContextMenu={handleDeSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className='absolute top-1/2 left-1/2 text-center text-xs   text-black p-1 '>
        DINING - {id.toUpperCase()}
        <br />
        {currentDining.length} X {currentDining.breadth}
      </div>
      {currentDining.walls.map((wall, index) => (
        <Wall
          id={`dining-${id}-${wall.side}`}
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
