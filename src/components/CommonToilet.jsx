import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeRoomFromPlot, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import { positions } from '../constants/facingAndPosition'
import { AiFillCloseCircle } from 'react-icons/ai'
export default function CommonToilet({ id }) {
  const currentToilet = useSelector((state) => state.rooms.commonToilet)

  const [length, setLength] = useState(6)
  const [breadth, setBreadth] = useState(10)
  const [rotation, setRotation] = useState(0)
  const { scale, facing, icons } = useSelector((state) => state.plot);
  const { selectedRoom } = useSelector((state) => state.rooms);
  const [style, setStyle] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleDeSelect = (e) => {
    e.preventDefault();
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }));
    setIsActive(false);
  };
  const handleDelete = () => {
    dispatch(removeRoomFromPlot({ position: id, roomType: "commonToilet" }));
  };

  const makeStyle = () => {
    const currStyle = {};
    currStyle["width"] = Math.floor(length * scale);
    currStyle["height"] = Math.floor(breadth * scale);
    currStyle["rotate"] = `${rotation}deg`;
    if (isActive && selectedRoom.id === id) {
      currStyle["zIndex"] = 40;
      currStyle["backgroundColor"] = "#fff";
    } else {
      currStyle["zIndex"] = 30;
      currStyle["backgroundColor"] = icons ? "#FFF" : "#D7E9F7";
    }
    setStyle({ ...currStyle, ...currentToilet.position });
  };
  useEffect(() => {
    setLength(currentToilet?.length);
    setBreadth(currentToilet?.breadth);
  }, [currentToilet]);
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: "commonToilet",
        position: positions[facing.toString()][id.toString()]
        // position: { bottom: 0, right: 0 }
      })
    );
  }, [facing]);
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setSelectedRoomId({ selectedId: id, roomType: "commonToilet" }));
    setIsActive(true);
  };
  useEffect(() => {
    setRotation(currentToilet.rotated);
  }, [currentToilet]);
  useEffect(() => {
    makeStyle();
  }, [length, breadth, location, selectedRoom, isActive, currentToilet, facing, icons]);

  // useEffect(() => {
  //   dispatch(
  //     updateRoomData({
  //       id,
  //       roomType: 'commonToilet',
  //       length,
  //       breadth
  //     })
  //   )
  // }, [length, breadth])

  return (
    <div
      style={style}
      className='bg-bathFullType13 absolute cursor-pointer bg-amber-400 '
      onClick={handleClick}
      onContextMenu={handleDeSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className='absolute top-1/3 left-1/3 text-center text-black p-2 font-semibold'>
        <p style={{ fontSize: (18, Math.min(currentToilet.length, currentToilet.breadth) * 1.1) }}>
          CMN BATH/DRESS - {id.toUpperCase()}
          <br />
          {currentToilet.length} X {currentToilet.breadth}
        </p>
      </div>
      {currentToilet.walls.map((wall, index) => (
        <Wall
          id={`commonToilet-${id}-${wall.side}`}
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
