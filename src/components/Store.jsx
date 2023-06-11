import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'

export default function Store({ id }) {
  const currentStore = useSelector((state) => state.rooms.store)

  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const [rotation, setRotation] = useState(0)
  const { scale, icons } = useSelector((state) => state.plot);
  const { selectedRoom } = useSelector((state) => state.rooms);
  const [style, setStyle] = useState({});
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
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
      currStyle["backgroundColor"] = icons ? "#fff" : "#d4f1f6";
    }
    setStyle({ ...currStyle, ...currentStore.position });
  };

  const handleDeSelect = (e) => {
    e.preventDefault();
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }));
    setIsActive(false);
  };
  useEffect(() => {
    setLength(currentStore?.length);
    setBreadth(currentStore?.breadth);
  }, [currentStore]);

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setSelectedRoomId({ selectedId: id, roomType: "store" }));
    setIsActive(true);
  };
  useEffect(() => {
    setRotation(currentStore.rotated);
  }, [currentStore]);
  useEffect(() => {
    makeStyle();
  }, [length, breadth, location, selectedRoom, isActive, currentStore, icons]);
useEffect(() => {
  dispatch(
    updateRoomData({
      id,
      roomType: 'store',
      length,
      breadth
    })
  )
}, [length, breadth])
return (
  <div style={style} className='bg-bathFullType13 absolute' onClick={handleClick} onContextMenu={handleDeSelect}>
    <div className='absolute top-1/2 left-1/2 text-center text-black p-2 font-semibold'>
      <p style={{ fontSize: Math.min(currentStore.length, currentStore.breadth) * 1.1 }}>
        STORE - {id.toUpperCase()}
        <br />
        {currentStore.length} X {currentStore.breadth}
      </p>
    </div>
    {currentStore.walls.map((wall) => (
      <Wall
        id={`store-${id}-${wall.side}`}
        added={wall.added}
        length={wall.length}
        thickness={wall.thickness}
        position={wall.position}
        door={wall.door}
        side={wall.side}
        window={wall.window}
        opening={wall.opening}
      />
    ))}
  </div>
)
}
