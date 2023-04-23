import React, { useState } from 'react'
import useResize from '../hooks/useResize'
import useDrag from '../hooks/useDrag'
const DraggableResizableDiv = () => {
  const [position, handleDragStart, handleDragMove, handleDragEnd] = useDrag()
  const [size, isResizing, handleResizeStart, handleResizeMove, handleResizeEnd] = useResize()

  return (
    <div
      className='relative w-72 h-72 bg-blue-200 rounded-md p-4'
      style={{ width: size.width, height: size.height, top: position.y, left: position.x }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}>
      <div
        className={`resizer absolute w-4 h-4 bg-gray-500 rounded-full cursor-se-resize ${
          isResizing ? 'bg-red-500' : ''
        }`}
        style={{ bottom: 0, right: 0 }}
        onMouseDown={handleResizeStart}
        onMouseMove={handleResizeMove}
        onMouseUp={handleResizeEnd}></div>
    </div>
  )
}

export default DraggableResizableDiv
