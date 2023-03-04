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
    <div className='text-lime-600 text-7xl font-bold'>OUR SERVICES</div>
    <div className='px-28 pt-10 font-extralight text-lg'>
    <p className='text-justify text-2xl'>We are able to support your organization with any challenge it is facing. In addition to developing projects that address your organization's unique challenges, We have also developed special expertise in these six common areas through our work</p>
    <p className='text-center text-2xl'>with non-profits globally.</p>
    <p></p>
    </div>
    </div>
    <div className='flex flex-row px-28 text-xl font-semibold text-lime-600'>
        <div className='flex flex-col justify-center items-center basis-1/3 p-10'>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={MEE} alt="..." className='h-10 w-10'/><p>Market Entry and Expansion</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={IM} alt="..." className='h-10 w-10'/>Impact Measurement</div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={SEO} alt="..." className='h-10 w-10'/>Search Engine Optimizaion</div>
        </div>
        <div className='flex justify-center items-center basis-1/3 p-10'><img src={middleSVG} alt="..." className='h-32 w-32 drop-shadow-lg'/></div>
        <div className='flex flex-col justify-center items-center basis-1/3 p-10'>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={MB} alt="..." className='h-10 w-10'/>Marketing and Branding</div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={OM} alt="..." className='h-10 w-10'/>Operations Management</div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg'><img src={FM} alt="..." className='h-10 w-10'/>Financial Management</div>
        </div>
    </div>
    </div>
  )
}

export default OurServices