import React, { useEffect, useState } from 'react'

export default function PositionSelector({ currentRoom, roomsm, id }) {
  const [data, setData] = useState({})
  const [selected, setSelected] = useState({ nw: 0, ne: 0, sw: 0, se: 0 })
  const [editing, setEditing] = useState([0, 0, 0, 0])
  function prepareData() {
    const finalData = []
  }
  useEffect(() => {
    console.log(data)
  }, [data, currentRoom])

  const handleSelection = (e) => {
    setData({ roomType: currentRoom, id: e.target.name })
    if (id === currentRoom) {
      if (e.target.name === 'nw') setSelected({ ...selected, nw: true })
      if (e.target.name === 'ne') setSelected({ ...selected, ne: true })
      if (e.target.name === 'sw') setSelected({ ...selected, sw: true })
      if (e.target.name === 'se') setSelected({ ...selected, se: true })
    }
  }

  return (
    <div className='flex gap-1'>
      <div className='flex gap-1 border-[1px] p-1 rounded-lg bg-slate-700'>
        <button
          className={` px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.nw ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'}`}
          disabled={id !== currentRoom}
          name='nw'
          onClick={handleSelection}>
          NW
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.ne ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'}`}
          disabled={id !== currentRoom}
          name='ne'
          onClick={handleSelection}>
          NE
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.sw ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'}`}
          disabled={id !== currentRoom}
          name='sw'
          onClick={handleSelection}>
          SW
        </button>
        <button
          className={`text-primaryLime bg-slate-900 px-2 flex items-center h-8 rounded-md shadow-xl text-xs ${
            id === currentRoom ? '' : ' cursor-not-allowed'
          } ${selected.se ? 'text-slate-900 bg-primaryLime' : 'text-primaryLime bg-slate-900'}`}
          disabled={id !== currentRoom}
          name='se'
          onClick={handleSelection}>
          SE
        </button>
      </div>
    </div>
  )
}
