import React from "react";
import index from './index.css';
import HomeCarousel from "./components/HomeCarousel";
import WhoAreWe from "./components/WhoAreWe";
import OurServices from "./components/OurServices";
import Team from "./components/Team";
import Footer from "./components/Footer";
import OurClients from "./components/OurClients";
import Navbar from "./components/Nav";
import OurAdvisors from "./components/OurAdvisors";




function App() {
  return (
    <div>
        <Navbar />
        <HomeCarousel />
        <WhoAreWe />
        <OurServices />
        <OurClients />
        <OurAdvisors />
        <Team />
        <Footer />
    </div>
  );
}

export default App;
