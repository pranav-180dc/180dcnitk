import React from 'react'
import FadeInSection from '../components/cards/FadeInSection'
import index from '../index.css'
import jQuery from 'jquery'

const WhoAreWe = () => {
    

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center mt-4'>
    <div className='fade-in-text flex flex-col justify-center items-center pt-8 md:p-12 basis-1/2 subpixel-antialiased text-4xl sm:text-6xl md:text-7xl font-title font-bold text-lime-600'>
      <FadeInSection>
        <p>WHO ARE WE</p>
      </FadeInSection>
    </div>
    <div className='invisible sm:visible h-2 w-64 md:w-96 lg:w-2 lg:h-64 rounded-xl bg-clip-content sm:bg-gradient-to-r lg:bg-gradient-to-b from-lime-600 to-transparent'></div>
    <div className='fade-in-text font-content flex flex-col basis-1/2 p-4 md:p-12 lg:p-28'>
    <FadeInSection>
        <p className='p-4 subpixel-antialiased font-extralight text-xl opacity-60'>180DC is the world's largest consultancy for non-profits and social enterprises.</p>
        <p className='p-4 subpixel-antialiased font-extralight text-xl opacity-60'>180DC provides high-quality business solutions to social impact organizations, with the help of over 10,000 carefully selected and professionally trained student volunteers from across the globe.</p>
        <div className='flex flex-row justify-center items-center'>
        <div className='lg:invisible h-72 w-8 sm:h-36 md:w-4 rounded-xl bg-clip-content bg-lime-600'></div>
        <p className='p-4 subpixel-antialiased font-extralight text-xl opacity-60 italic'>
        "Why are we called 180 Degrees? It's because we work to turn good organizations into great organizations, challenges into opportunities, ideas into reality. We're focused on positive transformation. Transforming organizations, and - in turn - transforming lives." - Nat Ware (Founder & CEO)</p>
        </div>
        </FadeInSection>
        </div>
    </div>
  )
}

export default WhoAreWe 