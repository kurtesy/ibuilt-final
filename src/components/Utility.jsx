import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom, setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import Wall from './Wall'

export default function Utility({ id }) {
  const currentUtility = useSelector((state) => state.rooms.utility)

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
      currStyle["backgroundColor"] = icons ? "#fff" : "#b4f6ff";
    }
    setStyle({ ...currStyle, ...currentUtility.position });
  };

  const handleDeSelect = (e) => {
    e.preventDefault()
    dispatch(setSelectedRoomId({ selectedId: null, roomType: null }))
    setIsActive(false)
  }

  useEffect(() => {
    setLength(currentUtility?.length)
    setBreadth(currentUtility?.breadth)
  }, [currentUtility])

  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setSelectedRoomId({ selectedId: id, roomType: 'utility' }))
    setIsActive(true)
  }
  useEffect(() => {
    setRotation(currentUtility.rotated)
  }, [currentUtility])
  useEffect(() => {
    makeStyle();
  }, [length, breadth, location, selectedRoom, isActive, currentUtility, icons]);
  useEffect(() => {
    dispatch(
      updateRoomData({
        id,
        roomType: 'utility',
        length,
        breadth
      })
    )
  }, [length, breadth])
  return (
    <div style={style} className='bg-bathFullType13 relative' onClick={handleClick} onContextMenu={handleDeSelect}>
      <div className='absolute top-1/2 left-1/2 text-center text-black p-2 font-semibold'>
        <p style={{ fontSize: Math.min(currentUtility.length, currentUtility.breadth) * 1.1 }}>
          UTILITY - {id.toUpperCase()}
          <br />
          {currentUtility.length} X {currentUtility.breadth}
        </p>
      </div>
      {currentUtility.walls.map((wall) => (
        <Wall
          id={`utility-${id}-${wall.side}`}
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
