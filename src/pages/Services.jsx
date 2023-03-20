import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import mab from '../assets/SMAB.png'
import fm from '../assets/SFM.png'
import im from '../assets/SIM.png'
import meae from '../assets/SMEAE.png'
import om from '../assets/SOM.png'
import seo from '../assets/SSEO.png'



function Services() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
  <Nav />
    
  <div class="text-center mx-10 my-10 px-8 py-8">
    <p class="text-3xl md:text-6xl lg:text-7xl text-lime-600 font-bold font-title">SERVICES</p>
  </div>
  <div>
    <div class=" p-8 mr-6 ml-6 grid md:grid-cols-2 lg:grid-cols-3 grid-col-1 gap-12">
      <div class=" px-2 py-8  bg-lime-500 shadow-2xl shadow-gray-400 rounded-lg  ">
        <div class=" py-8 flex item-center justify-center hover:scale-125 transition-all delay-150 ">
          <img class=" h-40 w-40" src={meae} alt="ERROR" />
        </div>

        <p class="text-white p-4 font-bold text-4xl text-center font-titlefont-title">Market Entry and Expansion</p>

      </div>



      <div class=" px-2 py-8   bg-lime-500 shadow-2xl shadow-gray-400 rounded-lg ">
        <div class=" py-8 flex item-center justify-center hover:scale-125 transition-all delay-150">
          <img class=" h-40 w-40 " src={mab} alt="Error" />
        </div>

        <p class="text-white p-4 font-bold text-4xl text-center font-title">Marketing and Branding</p>



      </div>
      <div class=" px-2 py-8  bg-lime-500 shadow-2xl shadow-gray-400 rounded-lg ">
        <div class=" py-8 flex item-center justify-center hover:scale-125 transition-all delay-150">
          <img class=" h-40 w-40" src={im} alt="ERROR" />
        </div>

        <p class="text-white  p-4 font-bold text-4xl text-center ">Impact Mesurment</p>

      </div>
      <div class=" px-2 py-8   bg-lime-500 shadow-2xl shadow-gray-400 rounded-lg  ">
        <div class=" py-8 flex item-center justify-center hover:scale-125 transition-all delay-150">
          <img class=" h-40 w-40" src={om} alt="ERROR" />
        </div>

        <p class="text-white p-4 font-bold text-4xl text-center font-title">Operations Management</p>

      </div>
      <div class=" px-2 py-8    bg-lime-500 shadow-2xl shadow-gray-400 rounded-lg">
        <div class=" py-8 flex item-center justify-center hover:scale-125 transition-all delay-150">
          <img class=" h-40 w-40" src={seo} alt="ERROR" />
        </div>

        <p class="text-white p-4 font-bold text-4xl text-center font-title">Search Engine Optimization</p>

      </div>
      <div class=" px-2 py-8   bg-lime-500 shadow-2xl shadow-gray-400 rounded-lg">
        <div class=" py-8 flex item-center justify-center hover:scale-125 transition-all delay-150">
          <img class=" h-40 w-40" src={fm} alt="ERROR" />
        </div>

        <p class="text-white p-4 font-bold text-4xl text-center font-title">Financial Management</p>

      </div>
    </div>
    <div class=" p-8 my-10 mr-6 ml-6 grid border-emerald-100 shadow-2xl shadow-gray-400">

      <h1 class="flex gap-2 p-6 font-bold text-5xl text-light-black"> How can <p class="text-lime-600"> we help</p> you ?</h1>
      <p class="p-4 text-2xl text-light-black ">If your organization is interested in what we offer, please fill out the form below.</p>
      <p class="p-4 text-2xl text-light-black "> you have any questions, email <a href="https://180dc.org/branch/nitk/"
          class="text-lime-600 font-semibold hover:underline">engagements.nitk@180dc.org</a>
      </p>

      <form class=" p-6 my-8 flex flex-auto gap-14">
        <input class="w-96 rounded-lg p-4 border-t-4  border-b-4 border-l-4 border-r-4 text-black border-lime-600 bg-white"
          placeholder="Name" />
        <input class="w-96 rounded-lg p-4 border-t-4  border-b-4 border-l-4 border-r-4 text-black border-lime-600 bg-white"
          placeholder="E-mail" />
        <input class="w-96 rounded-lg p-4 border-t-4  border-b-4 border-l-4 border-r-4 text-black border-lime-600 bg-white"
          placeholder="Phone number" />
      </form>
      <form class=" mr-6 ml-6 my-4 p-4 flex flex-auto justify-center">
        <input
          class="h-96 w-full rounded-lg p-4 border-t-4  border-b-4 border-l-4 border-r-4  text-black border-lime-600 bg-white"
          placeholder="Please describe your query" />

      </form>







    </div>
  </div>
  <Footer/>
</div>

  )
}

export default Services