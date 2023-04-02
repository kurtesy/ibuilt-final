import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToPlot, setSelectedRoomId } from '../../redux/rooms'
import { BsPencilFill } from 'react-icons/bs'
export default function PositionSelector({ currentRoom, rooms, id }) {
  const [data, setData] = useState()
  const [selected, setSelected] = useState({ nw: false, ne: false, sw: false, se: false })
  const [editing, setEditing] = useState('')
  const { addedRooms } = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  useEffect(() => {
    const newSelected = { nw: false, ne: false, sw: false, se: false }
    addedRooms.forEach((room) => {
      if (room.roomType === id) {
        newSelected[room.position] = true
      }
    })
    setSelected(newSelected)
  }, [addedRooms, id])

  console.log('addedRooms: ' + JSON.stringify(addedRooms))
  console.log('selection: ' + JSON.stringify(selected))

  useEffect(() => {
    if (data) dispatch(addRoomToPlot(data))
  }, [data])
  useEffect(() => {
    if (editing) {
      console.log('editing: ' + editing)
      dispatch(setSelectedRoomId({ selectedId: editing, roomType: currentRoom }))
    }
  }, [editing])
  const handleSelection = (e) => {
    if (id === currentRoom) {
      if (e.target.name === 'nw') setSelected({ ...selected, nw: true })
      // else setSelected({ ...selected, nw: false })
      if (e.target.name === 'ne') setSelected({ ...selected, ne: true })
      // else setSelected({ ...selected, sw: false })
      if (e.target.name === 'sw') setSelected({ ...selected, sw: true })
      // else setSelected({ ...selected, ne: false })
      if (e.target.name === 'se') setSelected({ ...selected, se: true })
      // else setSelected({ ...selected, se: false })
    }
    setData({ roomType: currentRoom, position: e.target.name })
  }

  return (
    <div className='flex gap-1'>
      <div className='flex gap-1 border-[1px] p-1 rounded-lg bg-slate-700'>
        <button
          className={` px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.nw ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'} `}
          disabled={id !== currentRoom}
          name='nw'
          onClick={handleSelection}>
          NW
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.ne ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'} `}
          disabled={id !== currentRoom}
          name='ne'
          onClick={handleSelection}>
          NE
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.sw ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'} `}
          disabled={id !== currentRoom}
          name='sw'
          onClick={handleSelection}>
          SW
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.se ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'} `}
          disabled={id !== currentRoom}
          name='se'
          onClick={handleSelection}>
          SE
        </button>
      </div>
    </div>
  )
}
