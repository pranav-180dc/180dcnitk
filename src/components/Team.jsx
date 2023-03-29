import React from "react";
import {profiles} from '../data/team';
import linkedIn from '../assets/linkedIn.png';
import FadeInSection from '../components/cards/FadeInSection'
// import Ranjeet from '../assets'


export default function Team() {
    return (
      <div id="team">
        <FadeInSection>
          <div className="flex justify-center font-title pt-8 text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-700 to-lime-200">
            Executive Board
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="md:flex justify-around ">
            {profiles.map((profile, idx) => (
              <div className="flex flex-col font-title justify-center items-center p-10">
                <div className="flex justify-center items-center h-40 w-40 rounded-full bg-lime-600 border-2 border-lime-300 hover:scale-[1.05] object-center object-cover shadow-2xl">
                  <img src={profile.imgUrl} alt="..." className="h-40 w-40 rounded-full object-left-top object-cover" />
                </div>
                
                <div className="flex justify-center items-center text-black opacity-60 font-semibold text-2xl">
                  {profile.member}
                </div>
                <div className="flex justify-center items-center text-lime-600 font-medium text-xl">
                <a href={profile.linkedin} target="_blank"><img src={linkedIn} alt="..." className="h-6 w-6 md:h-14 md:w-14 md:mx-2"/></a>
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