import React from "react";
import index from './index.css';
import Nav from "./components/Nav";
import HomeCarousel from "./components/HomeCarousel";
import WhoAreWe from "./components/WhoAreWe";
import OurServices from "./components/OurServices";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Nav/>
      <HomeCarousel />
      <WhoAreWe />
      <OurServices />
      <Team/>
      <Footer/>
    </div>
  )
}

export default App;
