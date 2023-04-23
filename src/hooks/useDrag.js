import { useState } from 'react'

const useDrag = () => {
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (event) => {
    setIsDragging(true)
  }

  const handleMouseMove = (event) => {
    if (isDragging) {
      setDragPosition({
        x: dragPosition.x + event.movementX,
        y: dragPosition.y + event.movementY
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return [dragPosition, handleMouseDown, handleMouseMove, handleMouseUp]
}
export default useDrag
