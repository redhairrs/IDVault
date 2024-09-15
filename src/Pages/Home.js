import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import About from '../Components/About';
import GetStarted from '../Components/GetStarted';
import Testemonials from '../Components/Testemonials';
import Services from '../Components/Services';
import End from '../Components/End';
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <GetStarted/>
      <Services/>
      <Testemonials/>
      <About/>
      <End/>
    </div>
  )
}

export default Home;