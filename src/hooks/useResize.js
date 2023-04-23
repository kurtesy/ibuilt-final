import { useState } from 'react'
const useResize = (dims) => {
  const [size, setSize] = useState(dims)
  const [isResizing, setIsResizing] = useState(false)
  const handleMouseDown = (event) => {
    setIsResizing(true)
  }
  const handleMouseMove = (event) => {
    if (isResizing) {
      setSize({
        width: Math.max(100, size.width + event.movementX),
        height: Math.max(100, size.height + event.movementY)
      })
    }
  }
  const handleMouseUp = () => {
    setIsResizing(false)
  }
  return [size, isResizing, handleMouseDown, handleMouseMove, handleMouseUp]
}
export default useResize
