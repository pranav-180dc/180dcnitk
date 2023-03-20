import React from 'react'
import FadeInSection from '../components/cards/FadeInSection'
import nostosHomes from '../assets/nostos.jpeg'
import lal10 from '../assets/lal10.png'
import wakaoFoods from '../assets/wakaoFoods.webp'
import TFI from '../assets/TFI.png'
import ClientCard from './cards/ClientCard';



function OurClients() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="fade-in-text flex flex-col justify-center items-center p-8 mt-28 md:p-12 basis-1/2 subpixel-antialiased text-4xl sm:text-6xl md:text-7xl font-bold font-title text-lime-600">
        <FadeInSection>
          <p>OUR CLIENTS</p>
        </FadeInSection>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <ClientCard 
                name="Nostos Homes"
                imgPath = {nostosHomes}
                w1="Optimised resource utilisation"
                w2="Fundraising strategies"
                w3="Database of potential sources/organisations"
                w4="Both national and international outreach."
            />
            <ClientCard 
                name="Lal10"
                imgPath = {lal10}
                w1="Peer Benchmarking"
                w2="Seo Optimisation"
                w3="International customer acquisiton strategies"
                w4="Supply demand analysis"
            />
            <ClientCard 
                name="Wakao Foods"
                imgPath = {wakaoFoods}
                w1="Increase their international customer base and visibility."
                w2="Improve and optimize both the demand side and supply side of the business."
                w3="Conducted peer benchmarking, SEO Optimisation"
                w4="Something"
            />
            <ClientCard 
                name="TFI"
                imgPath = {TFI}
                w1="Increase their international customer base and visibility."
                w2="Improve and optimize both the demand side and supply side of the business."
                w3="Conducted peer benchmarking, SEO Optimisation"
                w4="Something"
            />
      </div>
      
    </div>
  );
}

export default OurClients