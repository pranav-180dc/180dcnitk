import React from 'react'
import MEE from '../assets/MEE.png'
import IM from '../assets/IM.png'
import SEO from '../assets/SEO.png'
import MB from '../assets/MB.png'
import OM from '../assets/OM.png'
import FM from '../assets/FM.png'
import middleSVG from '../assets/middleSVG.png'


function OurServices() {
  return (
    <div>
    <div className='flex flex-col justify-center items-center mt-32'>
    <div className='text-lime-600 text-4xl sm:text-6xl md:text-7xl font-bold p-8 md:p-12'>OUR SERVICES</div>
    <div className='invisible sm:visible h-2 w-64 md:w-96 rounded-xl bg-clip-content bg-gradient-to-r from-lime-600 to-transparent'></div>
    <div className='px-10 md:px-14 lg:px-28 pt-10 font-extralight text-lg'>
    <p className='text-justify text-2xl'>We are able to support your organization with any challenge it is facing. In addition to developing projects that address your organization's unique challenges, We have also developed special expertise in these six common areas through our work with non-profits globally.</p>
    </div>
    </div>
    <div className='flex flex-col sm:flex-row px-10 md:px-14 lg:px-28 text-base sm:text-sm lg:text-xl font-semibold text-lime-600'>
        <div className='flex flex-col justify-center items-center basis-1/3 p-2'>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={MEE} alt="..." className='h-10 w-10'/><p>Market Entry and Expansion</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={IM} alt="..." className='h-10 w-10'/><p>Impact Measurement</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={SEO} alt="..." className='h-10 w-10'/><p>Search Engine Optimizaion</p></div>
        </div>
        <div className='invisible sm:visible sm:basis-1/3 flex justify-center items-center'><img src={middleSVG} alt="..." className='h-0 w-0 sm:h-28 sm:w-28 lg:h-32 lg:w-32 drop-shadow-lg'/></div>
        <div className='flex flex-col justify-center items-center basis-1/3 p-2'>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={MB} alt="..." className='h-10 w-10'/><p>Marketing and Branding</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={OM} alt="..." className='h-10 w-10'/><p>Operations Management</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={FM} alt="..." className='h-10 w-10'/><p>Financial Management</p></div>
        </div>
    </div>
    </div>
  )
}

export default OurServices