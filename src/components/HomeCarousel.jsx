import { Carousel } from "flowbite-react";
import MNSTK from '../assets/180DC-MONO-STACKED.png';
import DA from '../assets/down-arrow.png';
import car_1 from '../assets/carousel_1.png';

// grid grid-cols-1 grid-rows-3 justify-items-center
export default function HomeCarousel(){
    return (
        <div className="h-screen">
          <Carousel slideInterval={500000000}>
            <img src={car_1} alt="..." className="h-fit w-full" />
            <img src={MNSTK} alt="..." className="h-fit w-full" />
            <img src={MNSTK} alt="..." className="h-fit w-full" />
            <img src={MNSTK} alt="..." className="h-fit w-full" />
            <img src={MNSTK} alt="..." className="h-fit w-full" />
          </Carousel>
          <div className="flex justify-center">
          <a href="#">
            <img src={DA} alt="..." />
          </a>
        </div>
        </div> 
    );
}