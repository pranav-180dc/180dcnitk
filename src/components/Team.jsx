import React from "react";
import {profiles} from '../data/team';
import FadeInSection from '../components/cards/FadeInSection'
// import Ranjeet from '../assets'


export default function Team() {
    return (
      <div id="team">
        <div className="flex flex-col justify-center items-center text-center mt-28">
          <FadeInSection>
            <div className="text-lime-600 font-title p-8 md:p-8 text-4xl sm:text-6xl md:text-7xl font-bold">
              TEAM
            </div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="flex justify-center font-title p-3 text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-700 to-lime-200">
            Executive Core
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="md:flex justify-around ">
            {profiles.map((profile, idx) => (
              <div className="flex flex-col font-title justify-center items-center p-10">
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