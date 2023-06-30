import React, { useEffect, useState, useRef } from 'react'
import { Line } from 'react-lineto'

const Ruler = ({ rulerStart, rulerEnd }) => {
    const [style, setStyle] = useState({})
    const [measure, setMeasure] = useState(0)
    const lineRef = useRef()

    useEffect(() => {
        const ele = document.getElementsByClassName("ruler-class")[0].style
        setStyle({
            top: ele.top,
            left: ele.top,
        })
    }, [rulerStart, rulerEnd])

    useEffect(() => {
    }, [rulerEnd])

    return (
        <div id="ruler">
            <Line
                ref={lineRef}
                x0={rulerStart.X}
                y0={rulerStart.Y}
                x1={rulerEnd.X}
                y1={rulerEnd.Y}
                borderColor="red"
                zIndex={9999}
                className="ruler-class"
            >
            </Line>
        </div>
    );
}

export default Ruler
