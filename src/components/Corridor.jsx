import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import locationMap from '../constants/locationMapping'
import { setCurrentPosition, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'
import CommonToilet from './CommonToilet'
import { positions } from '../constants/facingAndPosition'
export default function Corridor({ id }) {
  const currentRoom = useSelector((state) => state.rooms.corridors.filter((room) => room.id === id)[0])
  const { facing, icons } = useSelector((state) => state.plot);
  const [length, setLength] = useState(6);
  const [breadth, setBreadth] = useState(10);
  const { scale, builtLength, builtBreadth } = useSelector((state) => state.plot);
  const { selectedRoom } = useSelector((state) => state.rooms);
  const [style, setStyle] = useState({});
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const makeStyle = () => {
    const currStyle = {};
    currStyle["width"] = Math.floor(length * scale);
    currStyle["height"] = Math.floor(breadth * scale);
    if (isActive && selectedRoom.id === id) {
      currStyle["zIndex"] = 40;
      currStyle["backgroundColor"] = "#fff";
    } else {
      currStyle["zIndex"] = 30;
      currStyle["backgroundColor"] = icons ? "#FFF" : "#fdfdfd";
    }
    setStyle({ ...currStyle, ...currentRoom.position });
  };
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: "corridor",
        position: positions[facing.toString()][id.toString()]
      })
    );
  }, [facing]);

  useEffect(() => {
    currentRoom?.length ? setLength(currentRoom?.length) : null;
    currentRoom?.breadth ? setBreadth(currentRoom?.breadth) : null;
  }, [currentRoom]);

  const handleClick = () => {
    // e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: "corridor" }));
    setIsActive(true);
  };

  useEffect(() => {
    makeStyle();
  }, [length, breadth, selectedRoom, isActive, currentRoom, icons]);

  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }
  // useEffect(() => {
  //   dispatch(
  //     updateRoomData({
  //       id,
  //       roomType: 'living',
  //       length: parseFloat(builtLength / 2) < 20 ? parseFloat(builtLength / 2) : 20,
  //       breadth: parseFloat(builtBreadth / 2) ? parseFloat(builtBreadth / 2) : 20
  //     })
  //   )
  // }, [builtBreadth, builtLength])

  return (
    <div style={style} className='absolute cursor-pointer bg-woodenFlooring' id={id} onClick={handleClick} onContextMenu={handleDeSelect}>
      <div className='absolute top-1/2 left-1/2 text-center text-black p-2 font-semibold'>
        <p style={{ fontSize: Math.min(16, Math.min(currentRoom.length, currentRoom.breadth) * 1.1) }}>
          CORRIDOR - {id.toUpperCase()}
          <br />
          {currentRoom.length} X {currentRoom.breadth}
        </p>
      </div>
      {currentRoom.walls.map((wall, index) => (
        <Wall
          id={`corridor-${id}-${wall.side}`}
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
      {/* {currentRoom.hasToilet && <CommonToilet id={currentRoom.id} />}
      {currentRoom.hasWash && <div>WASH</div>}
      {currentRoom.hasSitout && <div>SITOUT</div>} */}
    </div>
  )
}
