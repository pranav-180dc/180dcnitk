import React from "react"
import FadeInSection from "./FadeInSection"


function ClientCard(props){
    return(
        <FadeInSection>
        <div className='flex flex-col bg-white h-56 w-56 font-content justify-center items-center rounded-lg shadow-xl group hover:scale-110 transition-all delay-200 relative overflow-hidden m-5 md:m-10 lg:m-14'>
            <div className='flex flex-col justify-center items-center w-56 h-56 rounded-lg'>
            <img src={props.imgPath} alt="..." className='h-32 w-32 m-2'/>
            <p className='m-2 font-extralight text-2xl opacity-60'>{props.name}</p>
            </div>
            <div className='absolute justify-center items-center w-full h-full bg-white -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all delay-200'>
                <ul className='flex flex-col justify-center p-8  font-extralight text-xs opacity-60 list-disc'>
                <li>{props.w1}</li>
                <li>{props.w2}</li>
                <li>{props.w3}</li>
                <li>{props.w4}</li>
                </ul>
            </div>
        </div>
        </FadeInSection>
    )
}

export default ClientCard