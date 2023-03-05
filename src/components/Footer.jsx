import React from "react";
import insta from '../assets/insta.png'
import linkedIn from '../assets/linkedin.png'
import FadeInSection from '../components/cards/FadeInSection'


export default function Footer() {
    return (
   <div id="footer">
   <FadeInSection>
    <hr class="h-0.5 my-6 bg-lime-600 border-0 dark:bg-lime-700"/>
    </FadeInSection>
    <div className="flex flex-row justify-center p-5 m-5">
    <FadeInSection>
        <div className="flex flex-col basis-1/2 md:p-3">
            <div><p className="text-xl md:text-4xl lg:text-5xl font-bold text-lime-600">REACH US</p></div>
            <div><p className="text-xs md:text-lg lg:text-xl font-extralight">nitk@180dc.org</p></div>
            <div className="flex flex-row"><p className="text-xs md:text-lg lg:text-xl font-normal">We'd</p><p className="text-lime-600 text-xs md:text-lg lg:text-xl font-normal px-1">love to hear</p><p className="text-xs md:text-lg lg:text-xl font-normal"> from you!</p>
            </div>
            <div>
            <p className="text-xs md:text-lg lg:text-xl font-normal">Please don't hesitate to reach out.</p>
            </div>

        </div>
        </FadeInSection>
        <div className="basis-1/2">
        </div>
        <FadeInSection>
        <div className="flex flex-col md:flex-row md:justify-end basis-1/3 md:basis-1/2">
        <div className="flex flex-row h-max items-center md:px-4">
            <div className="items-center justify-center">
            <p className="text-xs md:text-lg font-extralight lg:text-xl">Follow us for more:</p>
            </div>
            <div className="flex flex-row">
            <a href="https://instagram.com/180dcnitk?igshid=YmMyMTA2M2Y=" target="_blank"><img src={insta} alt="..." className="h-6 w-6 md:h-14 md:w-14 md:mx-2"/></a>
            <a href="https://in.linkedin.com/company/180dc-nitk" target="_blank"><img src={linkedIn} alt="..." className="h-6 w-6 md:h-14 md:w-14 md:mx-2"/></a>
            </div>
            </div>
        </div>
        </FadeInSection>
    </div> 
   </div>
    )
}