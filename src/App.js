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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage properties={PropertiesData} />} />
        <Route path="/channel-partners" element={<PartnerRegistration channelPartner={true} />} />
        <Route path="/lead-registration" element={<LeadRegistration />} />
        <Route path='/properties/:status' element={<Properties properties={PropertiesData} />} />
        <Route path='/properties/page/:propertyName' element={<PropertyPage properties={PropertiesData} />} />
      </Routes>
    </Router>
  );
}

export default App;
