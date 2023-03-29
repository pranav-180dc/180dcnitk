import React from "react";
import {profiles,advisors,consultants,Designers,Developers,projectManagers} from '../data/team';
import FadeInSection from '../components/cards/FadeInSection'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function scrollToElement(id) {
  document.getElementById(id).scrollIntoView();
}

function handleClick(e, id) {
  e.preventDefault();
  scrollToElement(id);
}

export default function Team() {
    return (
      
      <div id="team">
        <Nav/>
        <div className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div className="text-lime-600 p-8 md:p-12 text-6xl md:text-7xl font-bold font-title">
              TEAM
            </div>
          </FadeInSection>
        </div>
        <FadeInSection>
        <div className="hidden sm:flex justify-center items-center">
          <div className="flex flex-row p-4 m-4">
            <a href="#execcore" onClick={(e) => handleClick(e, 'execcore')} className="focus:bg-lime-600 hover:bg-lime-600 hover:text-white transition-all delay-150 hover:rounded-md focus:rounded-md border-lime-500 border-y-2 border-l-2 rounded-l-md"><div className="p-4 text-lg font-title font-medium">Executive Board</div></a>
            <a href="#pm" onClick={(e) => handleClick(e, 'pm')} className="focus:bg-lime-600 hover:bg-lime-600 hover:text-white transition-all delay-150 hover:rounded-md focus:rounded-md border-lime-500 border-y-2"><div className="p-4 text-lg font-title font-medium">Project Managers</div></a>
            <a href="#consultants" onClick={(e) => handleClick(e, 'consultants')} className="focus:bg-lime-600 hover:bg-lime-600 hover:text-white transition-all delay-150 hover:rounded-md focus:rounded-md border-lime-500 border-y-2"><div className="p-4 text-lg font-title font-medium">Consultants</div></a>
            <a href="#designers" onClick={(e) => handleClick(e, 'designers')} className="focus:bg-lime-600 hover:bg-lime-600 hover:text-white transition-all delay-150 hover:rounded-md focus:rounded-md border-lime-500 border-y-2"><div className="p-4 text-lg font-title font-medium">Designers</div></a>
            <a href="#developers" onClick={(e) => handleClick(e, 'developers')} className="focus:bg-lime-600 hover:bg-lime-600 hover:text-white transition-all delay-150 hover:rounded-md focus:rounded-md border-lime-500 border-y-2 border-r-2 rounded-r-md"><div className="p-4 text-lg font-title font-medium">Developers</div></a>
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className="text-lime-600 p-8 md:p-12 text-center text-4xl md:text-6xl font-bold font-title">
              Executive Board
            </div>
        </FadeInSection>
        <FadeInSection>
          <div id="execcore" className="hidden md:flex  md:flex-row md:justify-center md:item-center  md:text-center ">
        {profiles.map((profile, idx) => (
      <div className="text-lime-500 border-2 bg-opacity-40 border-lime-500  hover:scale-[1.05] transition-all delay-150  bg-white-100 m-5 rounded-lg pb-2 shadow ">
    
          <img class="rounded-t-lg" src={profile.imgUrl} alt="" />

      
      <div class="p-5  text-center font-title">
          <h5 class="mb-2 text-2xl text-slate-600 font-bold ">{profile.member}</h5>
          <p class="mb-3 ">{profile.position}</p>
       </div>
      </div>
        ))}
      </div>
      <div className="md:hidden flex flex-wrap justify-around p-3">
            {profiles.map((profile, idx) => (
              <div className=" flex flex-col  hover:scale-[1.05] transition-all delay-150 justify-center text-4xl items-center  p-12">
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
        <div className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div id="pm" className="text-lime-600 p-8 md:p-12 text-4xl md:text-7xl font-title font-bold">
              Project Managers
            </div>
          </FadeInSection>
          
          
        </div>
        
        <FadeInSection>
          <div className=" md:flex flex-wrap justify-around p-3">
            {projectManagers.map((projectManager, idx) => (
              <div className=" flex flex-col  justify-center items-center  p-12">
                <div className="flex justify-center items-center h-45 w-45 rounded-full bg-lime-600 object-center object-cover shadow-2xl">
                  <img src={projectManager.imgUrl} alt="..." className="border-2 border-lime-600  hover:scale-[1.05] transition-all delay-150 h-40 w-40 rounded-full object-cover" />
                </div>
                <div className="flex justify-center items-center text-center text-black opacity-60 font-semibold font-title text-2xl">
                  {projectManager.member}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
            <div className="flex flex-col  justify-center items-center text-center ">
          <FadeInSection>
            <div id="consultants" className="text-lime-600 p-8 md:p-12 text-4xl md:text-7xl font-title font-bold">
              Consultants
            </div>
          </FadeInSection>
          
          
        </div>
        
        <FadeInSection>
          <div className=" md:flex flex-wrap justify-around p-3">
            {consultants.map((consultant, idx) => (
              <div className=" flex flex-col content-start items-center  p-11">
                <div className="flex justify-center  items-center h-40 w-40 rounded-full bg-lime-600 object-center shadow-2xl">
                  <img src={consultant.imgUrl} alt="..." className="border-2 border-lime-600  hover:scale-[1.05] transition-all delay-150 h-40 w-40 rounded-full object-cover" />
                </div>
                <div className="flex justify-center items-center text-center text-black opacity-60 font-semibold font-title text-2xl">
                  {consultant.member}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
        <div id="designers" className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div id="designers" className="text-lime-600 p-8 md:p-12 text-4xl md:text-7xl font-bold font-title">
              Designers
            </div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="md:flex flex-wrap justify-around p-3">
            {Designers.map((Designer, idx) => (
              <div className="flex flex-col  justify-center items-center p-12">
                <div className="flex justify-center items-center h-40 w-40 hover:scale-[1.05] transition-all delay-150 rounded-full bg-lime-600 border border-stone-300 object-center object-cover shadow-2xl">
                  <img src={Designer.imgUrl} alt="..." className="border-2 border-lime-600 transition-all delay-150  h-40 w-40 rounded-full object-left-top object-cover" />
                </div>
                <div className="flex justify-center items-center text-black opacity-60 font-semibold font-title text-2xl">
                  {Designer.member}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
        <div className="flex flex-col justify-center items-center text-center ">
          <FadeInSection>
            <div id="developers" className="text-lime-600 p-8 md:p-12 text-4xl md:text-7xl font-title font-bold">
              Developers
            </div>
          </FadeInSection>
           
          
        </div>
        <FadeInSection>
          <div className="md:flex flex-wrap justify-around p-3">
            {Developers.map((Developer, idx) => (
              <div className="flex flex-col   justify-center items-center p-12">
                <div className="flex justify-center items-center h-40 w-40 rounded-full bg-lime-600  object-center object-cover shadow-2xl">
                  <img src={Developer.imgUrl} alt="..." className="h-40 w-40 border-2 border-lime-600  hover:scale-[1.05] transition-all delay-150 rounded-full object-left-top object-cover" />
                </div>
                <div className="flex justify-center items-center text-black opacity-60 font-semibold font-title text-2xl">
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