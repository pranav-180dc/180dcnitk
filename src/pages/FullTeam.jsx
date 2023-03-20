import React from "react";
import {profiles,advisors,consultants,Designers,Developers} from '../data/team';
import FadeInSection from '../components/cards/FadeInSection'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
export default function Team() {
    return (
      
      <div id="team">
        <Nav/>
        <div className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div className="text-lime-600 p-8 md:p-12 text-6xl md:text-8xl font-bold">
              TEAM
            </div>
          </FadeInSection>
        </div>
        <FadeInSection>
        <div className="text-lime-600 p-8 md:p-12 text-center text-4xl md:text-7xl font-bold">
              Executive Core
            </div>
        </FadeInSection>
        <FadeInSection>
          <div className="hidden md:flex  md:flex-row md:justify-center md:item-center  md:text-center ">
        {profiles.map((profile, idx) => (
      <div className="text-lime-500 border-2 bg-opacity-50 border-lime-500  hover:scale-[1.05]  bg-slate-300 m-5 rounded-lg pb-2 shadow ">
      
          <img class="rounded-t-lg" src={profile.imgUrl} alt="" />

      
      <div class="p-5  text-center font-poppins">
          <h5 class="mb-2 text-2xl text-slate-600 font-bold ">{profile.member}</h5>
          <p class="mb-3 ">{profile.position}</p>
       </div>
      </div>
        ))}
      </div>
      <div className="md:hidden flex flex-wrap justify-around p-3">
            {profiles.map((profile, idx) => (
              <div className=" flex flex-col  border-2 border-lime-500  hover:scale-[1.05]  justify-center text-4xl items-center  p-12">
                <div className="flex justify-center border border-lime-600 h-40 w-40 items-center rounded-full  object-center object-cover shadow-2xl">
                  <img src={profile.imgUrl} alt="..." className="h-30 w-30 rounded-full object-contain" />
                </div>
                <div className="flex justify-center items-center text-center text-black opacity-60 font-semibold text-2xl">
                  {profile.member}
                </div>
              </div>
            ))}
          </div>
     
        </FadeInSection>
        <FadeInSection>
        <div className="text-lime-600 p-8 md:p-12 text-center text-4xl md:text-7xl font-bold">
             Our Advisors
            </div>
        </FadeInSection>
        <FadeInSection>
          <div className="hidden md:flex  md:flex-row md:justify-center md:item-center  md:text-center ">
        {profiles.map((profile, idx) => (
      <div className="text-lime-500 bg-slate-200 border-2 border-lime-500  hover:scale-[1.05]  bg-white bg-opacity-25 mx-9 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg" src={profile.imgUrl} alt="" />
      <div class="px-3  text-center font-poppins">
          <h5 class="mb-2 text-2xl text-slate-600 font-bold ">{profile.member}</h5>
       </div>
      </div>
        ))}
      </div>
      <div className="md:hidden flex flex-wrap justify-around p-3">
            {profiles.map((profile, idx) => (
              <div className=" flex flex-col  border-2 border-lime-500  hover:scale-[1.05]  justify-center text-4xl items-center  p-12">
                <div className="flex justify-center items-center h-40 w-40 rounded-full bg-lime-600 border border-stone-300 object-center object-cover shadow-2xl">
                  <img src={profile.imgUrl} alt="..." className="h-30 w-30 rounded-full object-contain" />
                </div>
                <div className="flex justify-center items-center text-center text-black opacity-60 font-semibold text-2xl">
                  {profile.member}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
        <div className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div className="text-lime-600 p-8 md:p-12 text-4xl md:text-7xl font-bold">
              Consultants
            </div>
          </FadeInSection>
          
          
        </div>
        
        <FadeInSection>
          <div className=" md:flex flex-wrap justify-around p-3">
            {consultants.map((consultant, idx) => (
              <div className=" flex flex-col  justify-center items-center  p-12">
                <div className="flex justify-center items-center h-40 w-45 rounded-full bg-lime-600 object-center object-cover shadow-2xl">
                  <img src={consultant.imgUrl} alt="..." className="border-2 border-lime-300  hover:scale-[1.05]  h-40 w-40 rounded-full object-cover" />
                </div>
                <div className="flex justify-center items-center text-center text-black opacity-60 font-semibold text-2xl">
                  {consultant.member}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
        <div className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div className="text-lime-600 p-8 md:p-12 text-4xl md:text-7xl font-bold">
              Designers
            </div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="md:flex flex-wrap justify-around p-3">
            {Designers.map((Designer, idx) => (
              <div className="flex flex-col  justify-center items-center p-12">
                <div className="flex justify-center items-center h-40 w-40 rounded-full bg-lime-600 border border-stone-300 object-center object-cover shadow-2xl">
                  <img src={Designer.imgUrl} alt="..." className="border-2 border-lime-300  hover:scale-[1.05]  h-40 w-40 rounded-full object-left-top object-cover" />
                </div>
                <div className="flex justify-center items-center text-black opacity-60 font-semibold text-2xl">
                  {Designer.member}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
        <div className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div className="text-lime-600 p-8 md:p-12 text-4xl md:text-7xl font-bold">
              Developers
            </div>
          </FadeInSection>
           
          
        </div>
        <FadeInSection>
          <div className="md:flex flex-wrap justify-around p-3">
            {Developers.map((Developer, idx) => (
              <div className="flex flex-col   justify-center items-center p-12">
                <div className="flex justify-center items-center h-40 w-40 rounded-full bg-lime-600  object-center object-cover shadow-2xl">
                  <img src={Developer.imgUrl} alt="..." className="h-40 w-40 border-2 border-lime-300  hover:scale-[1.05] rounded-full object-left-top object-cover" />
                </div>
                <div className="flex justify-center items-center text-black opacity-60 font-semibold text-2xl">
                  {Developer.member}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
        <Footer/>
      </div>

      
      
    );
}