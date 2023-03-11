import React from "react";
import {profiles} from '../data/team';
import FadeInSection from '../components/cards/FadeInSection'
import { Card } from "flowbite-react";

export default function Team() {
    return (
      <div id="team">
        <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:text-center ">
          <FadeInSection>
            <div className="text-lime-600 p-8 md:p-12 text-4xl sm:text-6xl md:text-7xl font-bold">
              TEAM
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="invisible sm:visible h-2 w-64 md:w-96 rounded-xl bg-clip-content bg-gradient-to-r from-lime-600 to-transparent"></div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="flex justify-center font-poppins p-3 m-3 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-700 to-lime-200">
            Executive Core
          </div>
        </FadeInSection>
        <FadeInSection>
        <div className="hidden md:flex ">
            {profiles.map((profile, idx) => (
           
           <Card 
             imgAlt=".."
             imgSrc={profile.imgUrl}
             className="basis-1/4 w-30 p-2"
             
           >
             <h5 className="text-2xl font-bold tracking-tight bg-grey-800 text-lime-600 dark:text-white">
             {profile.member}
             </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
             {profile.position}
             </p>
             <p className="font-normal text-gray-700 dark:text-gray-400">
             {profile.bio.line_1}
             </p>
             <p className="font-normal text-gray-700 dark:text-gray-400">
             {profile.bio.line_2}
             </p>
           </Card>
        
       ))}
        </div>
        {profiles.map((profile, idx) => (
         <div className="max-w-sm md:hidden">
         <Card
         height="h-96"
           horizontal={true}
           imgSrc={profile.imgUrl}
           className="p-2 px-6"
         >
           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {profile.member}
           </h5>
           <p className="font-normal text-gray-700 dark:text-gray-400">
           {profile.position}
           </p>
         </Card>
       </div>
        ))}
{/* 
              // <div className="flex flex-col  justify-center items-center p-10">
              //   <div className="flex justify-center items-center h-40 w-40 rounded-full bg-lime-600 border border-stone-300 object-center object-cover shadow-2xl">
              //     <img src={profile.imgUrl} alt="..." className="h-40 w-40 rounded-full object-left-top object-cover" />
              //   </div>
              //   <div className="flex justify-center items-center text-black opacity-60 font-semibold text-2xl">
              //     {profile.member}
              //   </div>
              //   <div className="flex justify-center items-center text-lime-600 font-medium text-xl">
              //     {profile.position}
              //   </div>
              // </div> */}
        </FadeInSection>
        <div className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div className="text-lime-600 p-8 md:p-12 text-4xl sm:text-6xl md:text-7xl font-bold">
              Consultants
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="invisible sm:visible h-2 w-64 md:w-96 rounded-xl bg-clip-content bg-gradient-to-r from-lime-600 to-transparent"></div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="flex justify-center font-poppins p-3 m-3 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-700 to-lime-200">
            Executive Core
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="md:flex justify-around ">
            {profiles.map((profile, idx) => (
              <div className="flex flex-col  justify-center items-center p-10">
                <div className="flex justify-center items-center h-40 w-40 rounded-full bg-lime-600 border border-stone-300 object-center object-cover shadow-2xl">
                  <img src={profile.imgUrl} alt="..." className="h-40 w-40 rounded-full object-left-top object-cover" />
                </div>
                <div className="flex justify-center items-center text-black opacity-60 font-semibold text-2xl">
                  {profile.member}
                </div>
                <div className="flex justify-center items-center text-lime-600 font-medium text-xl">
                  {profile.position}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>

      
      
    );
}