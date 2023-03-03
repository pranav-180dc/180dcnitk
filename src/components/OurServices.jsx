import React from 'react'

function OurServices() {
  return (
    <div id="services">
    <div className='flex flex-col justify-center items-center mt-32'>
    <div className='text-lime-600 text-7xl font-bold'>OUR SERVICES</div>
    <div className='px-28 pt-10 font-extralight text-lg'>
    <p className='text-justify text-2xl'>We are able to support your organization with any challenge it is facing. In addition to developing projects that address your organization's unique challenges, We have also developed special expertise in these six common areas through our work</p>
    <p className='text-center text-2xl'>with non-profits globally.</p>
    <p></p>
    </div>
    </div>
    <div className='md:flex flex-row px-28 text-xl font-semibold text-lime-600'>
        <div className='flex flex-col justify-center items-center basis-1/3 p-10'>
            <div className='p-4'>Market Entry and Expansion</div>
            <div className='p-4'>Impact Measurement</div>
            <div className='p-4'>Search Engine Optimizaion</div>
        </div>
        <div className='md:flex justify-center items-center basis-1/3 p-10'>SVG</div>
        <div className='flex flex-col justify-center items-center basis-1/3 p-10'>
            <div className='p-4'>Marketing and Branding</div>
            <div className='p-4'>Operations Management</div>
            <div className='p-4'>Financial Management</div>
        </div>
    </div>
    </div>
  )
}

export default OurServices