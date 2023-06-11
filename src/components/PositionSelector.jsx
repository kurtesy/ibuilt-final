import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToPlot, removeRoomFromPlot, setSelectedRoomId } from '../../redux/rooms'
import { BsPencilFill } from 'react-icons/bs'
export default function PositionSelector({ currentRoom, rooms, id }) {
  const [data, setData] = useState()
  const [selected, setSelected] = useState({ nw: false, ne: false, sw: false, se: false })
  const [editing, setEditing] = useState('')
  const [hovered, setHovered] = useState(false);
  const { addedRooms } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    var alreadyAdded;
    for (const [position, added] of Object.entries(selected)) {
      addedRooms.forEach((room) => {
        if (room.position === position && room.roomType === currentRoom) alreadyAdded = true;
        else alreadyAdded = false;
      });
      if (added) {
        console.log("Added room: ");
        console.log({ position, roomType: currentRoom });
        dispatch(addRoomToPlot({ position, roomType: currentRoom }));
      } else {
        console.log("Removing: " + position);
        console.log("alreadyAdded: " + alreadyAdded);
        if (alreadyAdded) dispatch(removeRoomFromPlot({ position, roomType: currentRoom }));
      }
    }
  }, [selected]);

  const handleSelection = (e) => {
    if (id === currentRoom) {
      if (e.target.name === "nw") {
        if (selected.nw) setSelected({ ...selected, nw: false });
        else setSelected({ ...selected, nw: true });
      } else if (e.target.name === "sw") {
        if (selected.sw) setSelected({ ...selected, sw: false });
        else setSelected({ ...selected, sw: true });
      } else if (e.target.name === "ne") {
        if (selected.ne) setSelected({ ...selected, ne: false });
        else setSelected({ ...selected, ne: true });
      } else if (e.target.name === "se") {
        if (selected.se) setSelected({ ...selected, se: false });
        else setSelected({ ...selected, se: true });
      }
    }
  };

  return (
    <div className='flex gap-1 '>
      <div className='flex gap-1 border-[1px] p-1 rounded-lg bg-slate-700 '>
        <button
          className={` px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${id === currentRoom ? "" : " cursor-not-allowed"} ${
            selected.nw ? "text-slate-900 bg-primaryLime" : "text-white bg-slate-900"
          } border-[1px] border-primaryLime`}
          disabled={id !== currentRoom}
          name='nw'
          onClick={handleSelection}>
          NW
        </button>
        <button
          className={` bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${id === currentRoom ? "" : " cursor-not-allowed"} ${
            selected.ne ? "text-slate-900 bg-primaryLime" : "text-white bg-slate-900"
          } border-[1px] border-primaryLime`}
          disabled={id !== currentRoom}
          name='ne'
          onClick={handleSelection}>
          NE
        </button>
        <button
          className={` bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${id === currentRoom ? "" : " cursor-not-allowed"} ${
            selected.sw ? "text-slate-900 bg-primaryLime" : "text-white bg-slate-900"
          } border-[1px] border-primaryLime`}
          disabled={id !== currentRoom}
          name='sw'
          onClick={handleSelection}>
          SW
        </button>
        <button
          className={` bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${id === currentRoom ? "" : " cursor-not-allowed"} ${
            selected.se ? "text-slate-900 bg-primaryLime" : "text-white bg-slate-900"
          } border-[1px] border-primaryLime`}
          disabled={id !== currentRoom}
          name='se'
          onClick={handleSelection}>
          SE
        </button>
      </div>
    </div>
  );
}
