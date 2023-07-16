import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Line } from 'react-lineto'

const Ruler = ({ rulerStart, rulerEnd }) => {
    const lineRef = useRef()
    const { scale } = useSelector((state) => state.plot);

    useEffect(() => {
        const ele = document.getElementsByClassName("ruler-class")[0]
        const measure = ele.clientWidth

        // remove previos text div
        const prevDiv = document.getElementById("ruler_text")
        if (prevDiv) {
            ele.parentNode.removeChild(prevDiv)
        }

        // Attach new element with measurement text
        const textDiv = document.createElement("div");
        textDiv.id = "ruler_text"
        textDiv.innerHTML = (measure / scale).toFixed(2)
        textDiv.style.cssText = ele.style.cssText
        ele.parentNode.insertBefore(textDiv, ele.nextSibling)
    }, [rulerStart, rulerEnd])



    return (
        <div id="ruler">
            <Line
                ref={lineRef}
                x0={rulerStart.X}
                y0={rulerStart.Y}
                x1={rulerEnd.X}
                y1={rulerEnd.Y}
                borderColor="blue"
                borderStyle="dashed"
                borderWidth={5}
                zIndex={9999}
                className="ruler-class"
            >
            </Line>
        </div>
    );
}

export default Ruler
