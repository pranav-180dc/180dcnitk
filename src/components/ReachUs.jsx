import React from 'react'

function ReachUs() {
  return (
    <div>
    <div className='h-0.5 w-full bg-lime-600'></div>
    <div className='flex flex-row text-xs m-4 justify-center items-start'>
    <div className='flex flex-col basis-1/2 font-bold'>
    <p className='text-xl text-lime-600'>REACH US</p>
    <p className='text-xs font-extralight'>nitk@180dc.org</p>
    <p className='text-xs'>We'd love to hear from you!</p>
    <p className='text-xs'>Please don't hesitate to reach out.</p>
    </div>
    <div className='basis-1/4'></div>
    <div className='basis-1/4 font-extralight text-xs'><p>Follow us for more:</p></div>
    </div>
    </div>
  )
}

export default ReachUs