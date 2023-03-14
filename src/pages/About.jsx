import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import car_2 from '../assets/carousel_2.jpeg'
import AU_1 from '../assets/AU_1.png'
import AU_2 from '../assets/AU_2.png'
import AU_3 from '../assets/AU_3.png'
import wigglyLines from '../assets/wigglyLines.png'



function Stats(props){
  return(
    <div className='flex flex-col justify-center items-center m-8'>
          <div className='p-2'>
            <img src={props.imgUrl} alt="..." className='h-16 w-16 lg:h-32 lg:w-32'/>
          </div>
          <div className='flex flex-col p-2 text-lg lg:text-2xl font-light opacity-60 justify-center items-center'>
            <p>{props.stat}</p>
            <p>{props.what}</p>
          </div>
        </div>
  )
}


function About() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Nav />
      <div className="relative h-64 w-full sm:h-[23vh] sm:w-full xl:h-[53vh] object-contain mix-blend-overlay">
            <img src={car_2} alt="..." className="absolute h-full w-full object-cover object-center opacity-30" />
            <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full" />
            <p className='flex justify-center items-center h-full text-lime-600 underline text-3xl md:text-5xl lg:text-8xl shadow-2xl font-extrabold'>About US</p>
      </div>


      <div className='flex flex-row justify-center items-center p-8 m-4 md:p-14'>
        <div className='flex flex-col basis-1/3 p-1 justify-center'>
          <div className='flex items-center basis-1/3'><p className='text-lg md:text-3xl lg:text-6xl text-light-black font-bold'>What is</p></div>
          <div className='flex items-center basis-2/3'><p className='text-lg md:text-3xl lg:text-6xl text-lime-600 font-bold'>180 Degrees Consulting ?</p></div>
        </div>
        <div className='flex flex-col p-2 justify-between basis-2/3 font-light text-sm md:text-lg opacity-60 lg:text-3xl text-justify'>
          <div className='flex mb-4'>
            <p>180DC is the world' s largest consultancy for non-profits and social enterprises.
            </p>
          </div>
          <div className='flex mt-4'>
            <p>180DC provides high-quality business solutions to social impact organizations, with the help of over 10,000 carefully selected and professionally trained student volunteers from across the globe.
               Learn More</p>
          </div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <Stats 
          imgUrl={AU_1}
          stat = "2000+"
          what = "Social Ventures"
        />
        <Stats 
          imgUrl={AU_2}
          stat = "12000+"
          what = "University Students"
        />
        <Stats 
          imgUrl={AU_3}
          stat = "35+ Countries,"
          what = "150+ Branches"
        />
      </div>

      <div className='flex flex-row justify-center items-center p-8 m-4 md:p-14'>
        <div className='flex flex-col basis-1/3 p-1 justify-center'>
          <div className='flex items-center basis-1/3'><p className='text-lg md:text-3xl lg:text-6xl text-lime-600 font-bold'>180 Degrees</p></div>
          <div className='flex items-center basis-2/3'><p className='text-lg md:text-3xl lg:text-6xl text-light-black font-bold'>NITK Branch</p></div>
        </div>
        <div className='flex flex-col p-2 justify-between basis-2/3 font-light text-sm md:text-lg opacity-60 lg:text-3xl text-justify'>
          <div className='flex mb-4'>
            <p>180DC is the world' s largest consultancy for non-profits and social enterprises.
            </p>
          </div>
          <div className='flex mt-4'>
            <p>180DC provides high-quality business solutions to social impact organizations, with the help of over 10,000 carefully selected and professionally trained student volunteers from across the globe.
               Learn More</p>
          </div>
        </div>
      </div>

    {/* <div className='bg-wiggly-lines h-[90vh] -rotate-3 scale-110 overflow-y-hidden absolute'>
    </div> */}
    <div className='flex flex-col md:flex-row justify-center items-center relative h-[50vh] mb-52'>
      <div className='absolute invisible md:visible'>
        <img src={wigglyLines} className="h-full w-full -rotate-3 object-contain opacity-30 scale-110" />
      </div>

        <div className='md:h-full md:w-1/2 flex flex-col md:flex-col justify-center items-center'>
          <div className='flex flex-row justify-center items-center m-4'>
            <div className='text-lime-600 font-extrabold text-6xl md:text-8xl mr-2'>7</div>
            <div className='flex flex-col justify-center font-bold text-light-black'>
              <div className='text-xl md:text-5xl'>Clients</div>
              <div className='text-lg md:text-xl'>till now</div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='text-lime-600 font-extrabold text-6xl md:text-8xl mr-2'>$9.1m</div>
            <div className='flex flex-col justify-center font-bold text-light-black'>
              <div className='text-xl md:text-5xl'>Raised</div>
              <div className='text-lg md:text-xl'>till now</div>
            </div>
          </div>
        </div>
        <div className='md:h-full md:w-1/2 flex flex-col md:flex-col justify-center items-center'>
        <div className='flex flex-row m-4 justify-center items-center'>
            <div className='text-lime-600 font-extrabold text-6xl md:text-8xl mr-2'>3</div>
            <div className='flex flex-col justify-center font-bold text-light-black'>
              <div className='text-xl md:text-5xl'>Continents</div>
              <div className='text-lg md:text-xl'>worldwide</div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center m-4'>
            <div className='text-lime-600 font-extrabold text-6xl md:text-8xl mr-2'>26+</div>
            <div className='flex flex-col justify-center font-bold text-light-black'>
              <div className='text-xl md:text-5xl'>Members</div>
              <div className='text-lg md:text-xl'>in the team</div>
            </div>
          </div>
        </div>
    </div>


    <Footer />


    </div>
  )
}

export default About