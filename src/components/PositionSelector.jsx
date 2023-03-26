import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRoomToPlot, setSelectedRoomId } from '../../redux/rooms'
import { BsPencilFill } from 'react-icons/bs'
export default function PositionSelector({ currentRoom, rooms, id }) {
  const [data, setData] = useState()
  const [selected, setSelected] = useState({ nw: 0, ne: 0, sw: 0, se: 0 })
  const [editing, setEditing] = useState('')
  const dispatch = useDispatch()

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
      if (e.target.name === 'nw') {
        if (selected.nw) {
          if (!editing) setEditing('nw')
          else setEditing('')
        } else {
          setEditing('')
        }
        setSelected({ ...selected, nw: true })
      }
      if (e.target.name === 'ne') {
        if (selected.ne) {
          if (!editing) setEditing('ne')
          else setEditing('')
        } else {
          setEditing('')
        }
        setSelected({ ...selected, ne: true })
      }
      if (e.target.name === 'sw') {
        if (selected.sw) {
          if (!editing) setEditing('sw')
          else setEditing('')
        } else {
          setEditing('')
        }
        setSelected({ ...selected, sw: true })
      }
      if (e.target.name === 'se') {
        if (selected.se) {
          if (!editing) setEditing('se')
          else setEditing('')
        } else {
          setEditing('')
        }
        setSelected({ ...selected, se: true })
      }
    }
    setData({ roomType: currentRoom, position: e.target.name })
  }

  return (
    <div className='flex gap-1'>
      <div className='flex gap-1 border-[1px] p-1 rounded-lg bg-slate-700'>
        <button
          className={` px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.nw ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'} ${
            editing === 'nw' && id === currentRoom ? 'text-slate-900 bg-blue-400 animate-ping' : ''
          }`}
          disabled={id !== currentRoom}
          name='nw'
          onClick={handleSelection}>
          NW
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.ne ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'} ${
            editing === 'ne' && id === currentRoom ? 'text-slate-900 bg-blue-400 animate-ping' : ''
          }`}
          disabled={id !== currentRoom}
          name='ne'
          onClick={handleSelection}>
          NE
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.sw ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'} ${
            editing === 'sw' && id === currentRoom ? 'text-slate-900 bg-blue-400 animate-ping' : ''
          }`}
          disabled={id !== currentRoom}
          name='sw'
          onClick={handleSelection}>
          SW
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.se ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'} ${
            editing === 'se' && id === currentRoom ? 'text-slate-900 bg-blue-400 animate-ping' : ''
          }`}
          disabled={id !== currentRoom}
          name='se'
          onClick={handleSelection}>
          SE
        </button>
      </div>
    </div>
  )
}
