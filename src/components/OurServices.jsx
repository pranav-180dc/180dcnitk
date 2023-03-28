import React from 'react'
import MEE from '../assets/MEE.png'
import IM from '../assets/IM.png'
import SEO from '../assets/SEO.png'
import MB from '../assets/MB.png'
import OM from '../assets/OM.png'
import FM from '../assets/FM.png'
import middleSVG from '../assets/middleSVG.png'
import FadeInSection from '../components/cards/FadeInSection'


function OurServices() {
  return (
    <div id="services">
    <div className='flex flex-col justify-center items-center mt-4'>
    <div className='text-lime-600 text-4xl sm:text-6xl md:text-7xl font-title font-bold pt-8 md:p-8'>
    <FadeInSection>
    <p>OUR SERVICES</p>
    </FadeInSection>
    </div>
    <div className='px-10 md:px-14 md:py-8 lg:px-28 pt-10 font-extralight font-content text-lg'>
    <FadeInSection>
    <p className='text-xl lg:text-2xl opacity-60'>We are able to support your organization with any challenge it is facing. In addition to developing projects that address your organization's unique challenges, We have also developed special expertise in these six common areas through our work with non-profits globally.</p>
    </FadeInSection>
    </div>
    </div>
    <FadeInSection>
    <div className='flex flex-col sm:flex-row px-10 md:px-14 lg:px-28 text-base sm:text-sm lg:text-xl font-semibold font-title text-lime-600'>
        <div className='flex flex-col justify-center items-center basis-1/3 p-2'>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-150'><img src={MEE} alt="..." className='h-10 w-10'/><p>Market Entry and Expansion</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-150'><img src={IM} alt="..." className='h-10 w-10'/><p>Impact Measurement</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-150'><img src={SEO} alt="..." className='h-10 w-10'/><p>Search Engine Optimizaion</p></div>
        </div>
        <div className='invisible sm:visible sm:basis-1/3 flex justify-center items-center'><img src={middleSVG} alt="..." className='h-0 w-0 sm:h-28 sm:w-28 lg:h-32 lg:w-32 drop-shadow-lg'/></div>
        <div className='flex flex-col justify-center items-center basis-1/3 p-2'>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-150'><img src={MB} alt="..." className='h-10 w-10'/><p>Marketing and Branding</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-150'><img src={OM} alt="..." className='h-10 w-10'/><p>Operations Management</p></div>
            <div className='flex flex-row p-3 m-5 items-center justify-center bg-white-opac w-full drop-shadow-lg hover:scale-110 transition-all delay-150'><img src={FM} alt="..." className='h-10 w-10'/><p>Financial Management</p></div>
        </div>
    </div>
    </FadeInSection>
    </div>
  )
}

export default OurServices