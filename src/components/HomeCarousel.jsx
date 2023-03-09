import { Carousel } from "flowbite-react";
import MNSTK from '../assets/180DC-MONO-STACKED.png';
import DA from '../assets/down-arrow.png';
import car_1 from '../assets/carousel_1.png';
import car_2 from '../assets/carousel_2.jpeg';
import car_3 from '../assets/carousel_3.jpg';

// grid grid-cols-1 grid-rows-3 justify-items-center
export default function HomeCarousel(){
    return (
        <div className="top-14 h-64 w-full sm:h-[80vh] sm:w-full xl:h-[90vh] bg-clip-content bg-transparent">
          <Carousel  indicators={false} slideInterval={5000} className="overflow-y-clip rounded-none">
          <div className="relative h-full w-full mix-blend-overlay">
            <img src={car_1} alt="..." className="absolute h-full w-full object-cover object-center opacity-50" />
            <div className="absolute -z-10 bg-gradient-to-b from-white via-black to-black h-full w-full" />
            </div>
            <div className="relative h-full w-full mix-blend-overlay">
            <img src={car_3} alt="..." className="absolute h-full w-full object-cover object-bottom opacity-50" />
            <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full" />
            </div>
            <div className="relative h-full w-full mix-blend-overlay">
            <img src={car_2} alt="..." className="absolute h-full w-full object-cover object-center opacity-50" />
            <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full" />
            </div>
          </Carousel>
        </div> 
    );
}