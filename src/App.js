import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import PartnerRegistration from './Components/PartnerRegistration';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Properties from './Components/Properties';
import PropertyPage from './Components/PropertyPage';
import LeadRegistration from './Components/LeadRegistration';
import PropertiesData from './PropertiesData';
import PrivacyPolicy from './Components/PrivacyPolicy';
import SkyBlossom from './Components/skyblossom/SkyBlossom';
import ThankYouPage from './Components/skyblossom/ThankYouPage';
import FloorPrice from './Components/skyblossom/FloorPrice';
import Lavivant from './Components/lavivant/Lavivant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage properties={PropertiesData} />} />
        <Route path="/channel-partners" element={<PartnerRegistration channelPartner={true} />} />
        <Route path="/lead-registration" element={<LeadRegistration />} />
        <Route path='/properties/:status' element={<Properties properties={PropertiesData} />} />
        <Route path='/properties/page/:propertyName' element={<PropertyPage properties={PropertiesData} />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/skyblossom' element={<SkyBlossom />} />
        <Route path='/skyblossom/thank-you' element={<ThankYouPage />} />
        <Route path='/skyblossom/floor-price' element={<FloorPrice />} />
        <Route path='/lavivant' element={<Lavivant />} />
      </Routes>
    </Router>
  );
}

export default App;
