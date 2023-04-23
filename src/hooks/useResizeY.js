import { useEffect, useState } from 'react'

function useResizeY(initialHeight) {
  const [height, setHeight] = useState(initialHeight)

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return height
}
export default useResizeY
