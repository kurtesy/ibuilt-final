import React, { useEffect, useState } from 'react'
import { unstable_batchedUpdates } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import Bedroom from './Bedroom'
import { setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import LivingRoom from './LivingRoom'
import Kitchen from './Kitchen'
import WindowComp from './WindowComp'
import Pooja from './Pooja'
import Drawing from './Drawing'
import Dining from './Dining'
import Media from './Media'
import Hint from "./Hint";
import { generatePlot } from "../constants/rooms";
export default function Built() {
  const { builtLength, builtBreadth, scale, setbacks, facing, type } = useSelector((state) => state.plot);
  const { addedRooms } = useSelector((state) => state.rooms);
  // const { rooms } = useSelector((state) => state)
  const [style, setStyle] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const makeStyle = () => {
    const width = Math.floor(parseFloat(builtLength) * parseInt(scale));
    const height = Math.floor(parseFloat(builtBreadth) * parseInt(scale));
    const top = setbacks.back * scale;
    const left = setbacks.left * scale;
    setStyle({ width, height, top, left });
  };
  useEffect(() => {
    makeStyle();
  }, [builtLength, builtBreadth, scale, setbacks, selectedItems, addedRooms]);
  useEffect(() => {
    setSelectedItems(addedRooms);
  }, [addedRooms]);
  useEffect(() => {
    unstable_batchedUpdates(() => {
      generatePlot(builtLength, builtBreadth, facing, type);
    });
  }, [builtLength, builtBreadth]);
  return (
    <div
      className='bg-white absolute z-20'
      style={style}
      // onClick={(e) => {
      //   e.stopPropagation()
      //   dispatch(setSelectedRoomId({ selectedId: null, roomType: '' }))
      // }}
    >
      {/* outer walls */}
      {/* top */}
      {hovered ? <Hint text='I am a wall' /> : null}
      <div className='w-full h-[9px] bg-slate-800 z-50 absolute top-0 left-0'>{/* <WindowComp side='back' position={{ left: '50%' }} /> */}</div>
      {/* bottom */}
      <div className='w-full h-[9px] bg-slate-800 z-50 absolute bottom-0 left-0' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
      {/* left */}
      <div className='h-[calc(100%-18px)] w-[9px] bg-slate-800 z-50 absolute top-[9px] left-0' />
      {/* right */}
      <div className='h-[calc(100%-18px)] w-[9px] bg-slate-800 z-50 absolute top-[9px] right-0' />

      {selectedItems?.map((item, index) => item.roomType === "bedroom" && <Bedroom id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "living" && <LivingRoom id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "kitchen" && <Kitchen id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "drawing" && <Drawing id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "dining" && <Dining id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "pooja" && <Pooja id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "media" && <Media id={item.position} key={index} />)}
    </div>
  );
}
