import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import mab from '../assets/SMAB.png'
import fm from '../assets/SFM.png'
import im from '../assets/SIM.png'
import meae from '../assets/SMEAE.png'
import om from '../assets/SOM.png'
import seo from '../assets/SSEO.png'


function Flip(props){
  return(<div className='absolute justify-center items-center w-full h-full bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all delay-200'>
  <p className='cursor-text p-8 text-xl font-semibold md:text-2xl text-white-opac'>
  {props.w1}
  </p>
</div>)
}


function Services() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
  <Nav />
    
  <div class="text-center mx-10 my-10 px-8 py-8">
    <p class="text-3xl md:text-6xl lg:text-7xl text-lime-600 font-bold font-title">OUR SERVICES</p>
  </div>
  <div>
    <div class="sm:p-4 md:p-8 mx-2 grid md:grid-cols-2 lg:grid-cols-3 grid-col-1 gap-8">
      <div class=" m-5 px-2 py-8 bg-gradient-to-b from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg  group hover:scale-110 transition-all delay-200 relative overflow-hidden lg:m-10 ">
        <div class=" py-8 flex item-center justify-center ">
          <img class=" h-40 w-40" src={meae} alt="ERROR" />
        </div>

        <p class="text-white p-4 font-bold text-2xl text-center font-title md:text-3xl ">Market Entry and Expansion</p>
       
            <Flip 
            w1="Help your organisation explore and understand new and viable market opportunities."/>

      </div>



      <div class="m-5 px-2 py-8   bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg group hover:scale-110 transition-all delay-200 relative overflow-hidden lg:m-10 ">
        <div class=" py-8 flex item-center justify-center ">
          <img class=" h-40 w-40 " src={mab} alt="Error" />
        </div>

        <p class="text-white p-4 font-bold text-2xl text-center font-title md:text-3xl">Marketing and Branding</p>

        <Flip 
            w1="Study current approach and suggest strategies that help you scale."/>


      </div>
      <div class="m-5 px-2 py-8  bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg group hover:scale-110 transition-all delay-200 relative overflow-hidden lg:m-10 ">
        <div class=" py-8 flex item-center justify-center ">
          <img class=" h-40 w-40" src={im} alt="ERROR" />
        </div>

        <p class="text-white  p-4 font-bold text-2xl text-center md:text-3xl ">Impact Measurement</p>
        <Flip 
            w1="Present a thorough analysis of your venture's impact on society's well-being."/>


      </div>
      <div class="m-5 px-2 py-8   bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg group hover:scale-110 transition-all delay-200 relative overflow-hidden lg:m-10  ">
        <div class=" py-8 flex item-center justify-center ">
          <img class=" h-40 w-40" src={om} alt="ERROR" />
        </div>

        <p class="text-white p-4 font-bold text-2xl text-center font-title md:text-3xl">Operations Management</p>
        <Flip 
            w1="Deep assessment of current operational challenges and exploring a realm of unexplored solutions"/>


      </div>
      <div class="m-5 px-2 py-8    bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg group hover:scale-110 transition-all delay-200 relative overflow-hidden lg:m-10">
        <div class=" py-8 flex item-center justify-center ">
          <img class=" h-40 w-40" src={seo} alt="ERROR" />
        </div>

        <p class="text-white p-4 font-bold text-2xl text-center font-title md:text-3xl">Search Engine Optimization</p>
        <Flip 
            w1="Analyze your website and help you recognize what need to be fixed and the approach that must be adopted "/>


      </div>
      <div class="m-5 px-2 py-8   bg-gradient-to-br from-services-gradient-1 to-services-gradient-2 shadow-2xl shadow-gray-400 rounded-lg group hover:scale-110 transition-all delay-200 relative overflow-hidden lg:m-10">
        <div class=" py-8 flex item-center justify-center ">
          <img class=" h-40 w-40" src={fm} alt="ERROR" />
        </div>

        <p class="text-white p-4 font-bold text-2xl text-center font-title md:text-3xl">Financial Management</p>
        <Flip 
            w1="Help your organization in developing and Optimizing budget without compromising the impact."/>


      </div>
    </div>
    <div class=" p-8 my-8 mr-6 ml-6 lg:grid  border-emerald-100 shadow-2xl shadow-gray-400 ">

          <h1 class=" gap-2 p-6 font-bold text-2xl md:flex md:text-4xl lg:flex lg:text-5xl text-light-black"> How can <p class="text-lime-600"> we help</p> you ?</h1>
          <p class="px-6 p-4 text-s  md:text-xl lg:text-2xl text-light-black ">If your organization is interested in what we offer, please fill out the form below.</p>
          <p class="px-6 p-4 text-s md:text-xl lg:text-2xl text-light-black "> You have any questions, email <a href="https://180dc.org/branch/nitk/"
            class="text-lime-600 font-semibold hover:underline">nitk@180dc.org</a>
          </p>

          <form class=" p-6 my-4 grid grid-rows md:flex  md:gap-6 lg:flex flex-row gap-14 ">
            <input class=" rounded-lg p-4 text-light-black border-t-4 border-b-4 border-l-4 border-r-4 hover:border-lime-400  border-lime-600 bg-white lg:w-96"
              placeholder="Name" />
            <input class=" rounded-lg p-4 border-t-4  border-b-4 border-l-4 border-r-4 text-light-black  hover:border-lime-400  border-lime-600 bg-white lg:w-96"
              placeholder="E-mail" />
            <input class=" rounded-lg p-4 border-t-4  border-b-4 border-l-4 border-r-4 text-light-black  hover:border-lime-400  border-lime-600 bg-white lg:w-96"
              placeholder="Phone number" />
          </form>
          <form class="  p-6 my-4 flex flex-auto justify-center">
            <textarea
              class="h-96 w-full rounded-lg p-4 border-t-4 border-b-4 border-l-4 border-r-4  text-light-black  hover:border-lime-400  border-lime-600 bg-white">Please describe your query</textarea>
           
          </form>
           
          
          <button class="bg-lime-600 w-fit mx-6 rounded-lg "> 
          <p class="  text-white align-middle font-bold py-2 px-4 hover:bg-lime-500 rounded-lg ">Submit</p></button>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Services