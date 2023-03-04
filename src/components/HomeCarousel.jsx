import { Carousel } from "flowbite-react";
import MNSTK from '../assets/180DC-MONO-STACKED.png';
import DA from '../assets/down-arrow.png';

// grid grid-cols-1 grid-rows-3 justify-items-center
export default function HomeCarousel(){
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-gradient-to-b from-slate-500 to-transparent">
          <Carousel slideInterval={500000000}>
            <img src={MNSTK} alt="..." className="h-56 w-1/6" />
            <img src={MNSTK} alt="..." className="h-56 w-1/6" />
            <img src={MNSTK} alt="..." className="h-56 w-1/6" />
            <img src={MNSTK} alt="..." className="h-56 w-1/6" />
            <img src={MNSTK} alt="..." className="h-56 w-1/6" />
          </Carousel>
          <div className="flex justify-center">
          <a href="#">
            <img src={DA} alt="..." />
          </a>
        </div>
        </div> 
    );
}