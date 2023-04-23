import React, { useState, useEffect } from 'react'

function useResizeX(initialWidth) {
  const [width, setWidth] = useState(initialWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}
export default useResizeX
