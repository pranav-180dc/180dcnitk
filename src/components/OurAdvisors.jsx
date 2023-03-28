import React from 'react'
import FadeInSection from '../components/cards/FadeInSection'
import Akshita from '../assets/Pictures/Akshita.jpeg';
import Achut from '../assets/Pictures/Achut.jpeg';
import Dipankar from '../assets/Pictures/Dipankar.jpeg';

function AdvisorCard(props){
    return(
        <div className='w-56 hover:scale-110 transition-all delay-150'>
                <div className='hover:bg-lime-600 text-lime-600 hover:text-white shadow-2xl transition-all delay-150 flex flex-col justify-center items-center w-full h-full p-2 border rounded-2xl hover:rounded-t-full'>
                    <img src={props.Img} alt="..." className='h-44 w-44 m-2 rounded-full outline outline-4 outline-offset-4 outline-lime-600'/>
                    <div className='flex justify-center items-center'>
                        <p className='font-title font-bold text-lg'>{props.name}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center m-1'>
                        <ul className='font-content text-sm font-extralight text-black list-disc list-inside'>
                            <li className=''>{props.p1}</li>
                            <li className=''>{props.p2}</li>
                            <li className=''>{props.p3}</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

function OurAdvisors() {
  return (
    <div className='mt-4 mb-14'>
        <div className='flex justify-center items-center text-lime-600 text-4xl sm:text-6xl md:text-7xl font-title font-bold pt-8 md:p-8'>
            <FadeInSection>
            <p>OUR ADVISORS</p>
            </FadeInSection>
        </div>
        <div className='flex flex-col md:flex-row justify-evenly md:gap-x-4 gap-y-10 lg:gap-x-10 pt-8 items-center'>
            <FadeInSection>
            <AdvisorCard 
                Img={Akshita}
                name="Akshita Kaushik"
                p1 = "Associate consultant at Sattva Consulting, Teach For India Fellow."
                p2="Co-founded Community Research lab."
                p3="Curriculum designer at Mastree (by Unacademy)."
            />
            </FadeInSection>
            <FadeInSection>
            <AdvisorCard 
                Img={Dipankar}
                name="Dipankar Maganty"
                p1 = "NIT-K Surathkal and IIM- Ahemdabad Alum."
                p2="Expertise in Pharma, Consumer Goods and Automotive Sector."
                p3="Current - Principal @Kearney."
            />
            </FadeInSection>
            <FadeInSection>
            <AdvisorCard
                Img={Achut}
                name="Achuth Arun R"
                p1 = "NITK Surathkal and ISB Hyderabad (Merit List and Dean's List) Alum."
                p2="Past - Kearney, Wells Fargo."
                p3="Current - Strategy Consultant @Tata Strategic Management Group."
            />
            </FadeInSection>
        </div>
    </div>
  )
}

export default OurAdvisors