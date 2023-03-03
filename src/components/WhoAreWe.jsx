import React from 'react'

const WhoAreWe = () => {
  return (
    <div className='md:flex flex-row justify-center items-center mt-14'>
    <div className='md:flex flex-col justify-center items-center basis-1/2 subpixel-antialiased text-7xl font-bold text-lime-600'>
      WHO ARE WE?
    </div>
    <div className='md:h-64 md:w-2 md:rounded-xl md:bg-clip-content md:bg-gradient-to-b from-lime-600 to-transparent'></div>
    <div className='md:flex flex-col basis-1/2 pr-28'>
        <p className='text-justify p-8 subpixel-antialiased font-extralight text-xl'>180DC is the world's largest consultancy for non-profits and social enterprises.</p>
        <p className='text-justify p-8 subpixel-antialiased font-extralight text-xl'>180DC provides high-quality business solutions to social impact organizations, with the help of over 10,000 carefully selected and professionally trained student volunteers from across the globe.</p>
        <p className='text-justify p-8 subpixel-antialiased font-extralight text-xl'>"Why are we called 180 Degrees? It's because we work to turn good organizations into great organizations, challenges into opportunities, ideas into reality. We're focused on positive transformation. Transforming organizations, and - in turn - transforming lives." - Nat Ware (Founder & CEO)</p>
    </div>
    </div>
  )
}

export default WhoAreWe 