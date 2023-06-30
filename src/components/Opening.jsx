import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOpening } from '../../redux/rooms'
import Draggable from 'react-draggable'
import { Resizable } from 're-resizable'
import { SizeMe } from "react-sizeme";


export default function Opening({ id, length, position, side }) {
  const { scale, isResize } = useSelector((state) => state.plot)
  const dispatch = useDispatch()
  const [style, setStyle] = useState({})
  const [selected, setSelected] = useState(false)

  const [dragAxis, setDragAxis] = useState('y')
  const [resizeDim, setResizeDim] = useState({})
  // onResize = (event, { node, size, handle }) => {
  //   setResizeDim({ width: size.width, height: size.height });
  // };

  const [currentPosition, setCurrentPosition] = useState(
    side === 'front' || side === 'back' ? position.right : position.top
  )
  // console.log('current position: ' + JSON.stringify(currentPosition))
  const [currentLength, setCurrentLength] = useState(length)

  // console.log('opening id: ' + id)
  const makeStyle = () => {
    let currStyle = {}
    if (side === 'front' || side === 'back') {
      currStyle['width'] = Math.floor(parseFloat(length) * scale)
      currStyle['height'] = '120%'
    } else {
      currStyle['height'] = Math.floor(parseFloat(length) * scale)
      currStyle['width'] = '150%'
    }
    currStyle = { ...currStyle, ...position }
    setStyle(currStyle)
    setResizeDim({
      width: currStyle['width'],
      height: currStyle['height']
    })
  }
  const hanldeSelect = (e) => {
    e.preventDefault()
    setSelected(true)
  }
  useEffect(() => {
    makeStyle()

  }, [length, position, side])

  const handleKeyDown = (e) => {
    //left
    if (e.keyCode === 37) {
      if (side === 'front' || side === 'back') setCurrentPosition((prev) => prev - 1)
    }
    //left+ctrl
    if (e.keyCode === 37 && e.ctrlKey) {
      if (side === 'front' || side === 'back') setCurrentLength((prev) => prev - 1)
    }

    //up
    if (e.keyCode === 38) {
      if (side === 'left' || side === 'right') setCurrentPosition((prev) => prev - 1)
    }
    //up+ctrl
    if (e.keyCode === 38 && e.ctrlKey) {
      if (side === 'left' || side === 'right') setCurrentLength((prev) => prev + 1)
    }
    //right
    if (e.keyCode === 39) {
      if (side === 'front' || side === 'back') setCurrentPosition((prev) => prev + 1)
    }
    //right+ctrl
    if (e.keyCode === 39 && e.ctrlKey) {
      if (side === 'front' || side === 'back') setCurrentLength((prev) => prev + 1)
    }
    //down
    if (e.keyCode === 40) {
      if (side === 'left' || side === 'right') setCurrentPosition((prev) => prev + 1)
    }
    //up+ctrl
    if (e.keyCode === 40 && e.ctrlKey) {
      if (side === 'left' || side === 'right') setCurrentLength((prev) => prev - 1)
    }
    // console.log('Key pressed: ' + e.keyCode)
  }

  const pointerDragStart = (event) => {
    if (!isResize && ['left', 'right'].includes(side)) {
      setDragAxis('y')
    }
    else {
      setDragAxis('x')
    }

  }
  const pointerDragEnd = (event) => {
    if (!isResize && ['left', 'right'].includes(side)) {
      moveVertical(event)
    }
    else {
      moveHorizontal(event)
    }

  }
  const moveVertical = event => {

  }

  const moveHorizontal = event => {

  }
  const onResize = (e, direction, ref, d) => {
    const data = {
      width: resizeDim.width + d.width,
      height: resizeDim.height + d.height,
    }
    setResizeDim(data);
    setStyle({ width: `${size.width} px`, height: `${size.height} px` })
  };

  useEffect(() => {
    const positionToUpdate = side === 'front' || side === 'back' ? { right: currentPosition } : { top: currentPosition }
    dispatch(updateOpening({ id, position: positionToUpdate }))
  }, [currentPosition])
  useEffect(() => {
    dispatch(updateOpening({ id, length: currentLength }))
    console.log('currentLength', currentLength)
  }, [currentLength])
  return (
    <>
      {
        isResize ? <Resizable

          style={style}
          className={`absolute ${selected ? 'bg-amber-500' : 'bg-white'}`}
          data-tooltip-id="opening-tt" data-tooltip-content={`${selected}`}
          onClick={hanldeSelect}
          onContextMenu={() => setSelected(false)}
          onKeyDown={handleKeyDown}
          size={{ height: resizeDim.height, width: resizeDim.width }}
          onResizeStop={onResize}
          boundsByDirection={true}
          bounds="parent"
          enable={{ top: true, right: false, bottom: true, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}>
        </Resizable> :
          <Draggable
            axis={dragAxis}
            bounds={"parent"}
            onStart={pointerDragStart}
            onStop={pointerDragEnd}
          >
            <div
              tabIndex={0}
              className={`absolute ${selected ? 'bg-amber-500' : 'bg-white'}`}
              style={style}
              data-tooltip-id="opening-tt" data-tooltip-content={`${selected}`}
              onClick={hanldeSelect}
              onContextMenu={() => setSelected(false)}
              onKeyDown={handleKeyDown}
            ></div>
          </Draggable>
      }
    </>
  )
}
