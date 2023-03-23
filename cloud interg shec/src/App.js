import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'
import MapSection from './components/map/Map'

import './App.css'

const location = {
  address: " avunue hbib thamer , tunis, Tunisia .",
  lat: 33.43141,
  lng: 11.5656,
};

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <DisclaimerSection />
      <FooterSection />
      <MapSection location={location} zoomLevel={12} />
    </div>
  )
}

export default App