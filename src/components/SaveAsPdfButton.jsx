import React from 'react'
import Pdf from 'react-to-pdf'
export default function SaveAsPdfButton({ plotref }) {
  return (
    <div className='flex absolute gap-2 right-12 bottom-20'>
      <Pdf targetRef={plotref} filename='drawing.pdf' options={{ orientation: 'landscape' }}>
        {({ toPdf }) => (
          <button onClick={toPdf} className='z-50 px-3 rounded-md bg-slate-700 text-white'>
            Save Pdf
          </button>
        )}
      </Pdf>
    </div>
  )
}
