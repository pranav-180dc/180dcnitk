import React from "react";
import index from './index.css';
import HomeCarousel from "./components/HomeCarousel";
import WhoAreWe from "./components/WhoAreWe";
import OurServices from "./components/OurServices";

function App() {
  return (
    <div>
      <HomeCarousel />
      <WhoAreWe />
      <OurServices />
    </div>
  )
}

export default App;
