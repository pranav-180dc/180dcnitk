import React from "react";
import index from './index.css';
import Nav from "./components/Nav";
import HomeCarousel from "./components/HomeCarousel";
import WhoAreWe from "./components/WhoAreWe";
import OurServices from "./components/OurServices";
import Team from "./components/Team";
import Footer from "./components/Footer";
import OurClients from "./components/OurClients";
import {  Router, Switch, Route } from "react-router-dom";
function App() {
  return (
<Router>
     <div>
        <Nav />
        <Switch>
          <Route path="/" component={HomeCarousel} exact />
          <Route path="/team" component={Team} exact />
          <Route path="/clients" component={OurClients} exact/>
          <Route path="/services" component={OurServices} exact/>
          <Route path="/whoarewe" component={WhoAreWe} exact/>
          </Switch>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
