import React from "react";
import {profiles} from '../data/team';
export default function Team() {
    return (
        <div id="team">
<div className="flex justify-center text-center ">
<div className=' text-lime-600 text-7xl font-bold'>TEAM</div>


</div>
<div className='flex text-lime-600 justify-center font-poppins text-5xl '>Executive Core</div>
<div className='md:flex justify-around '>
{profiles.map((profile,idx)=>(
<div className='flex flex-col justify-center items-center p-10'>
<div className='flex justify-center items-center h-40 w-40 rounded-full bg-lime-600'>{profile.imgUrl}</div>
<div className='flex justify-center items-center text-lime-600 font-bold text-2xl'>{profile.member}</div>
<div className='flex justify-center items-center text-lime-600 font-bold text-xl'>{profile.position}</div>

</div>
)
)}
</div>
        </div>
    )
}