import React from "react";
import index from './index.css';
import HomeCarousel from "./components/HomeCarousel";
import WhoAreWe from "./components/WhoAreWe";
import OurServices from "./components/OurServices";
import ReachUs from "./components/ReachUs";

function App() {
  return (
    <div>
      <HomeCarousel />
      <WhoAreWe />
      <OurServices />
      <ReachUs />
    </div>
  )
}

export default App;
