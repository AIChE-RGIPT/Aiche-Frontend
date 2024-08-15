import React from 'react';
import Home from './components/Home/home';
import About from "./components/About/About";
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Officers/Team';
import Leaders from "./components/Team/Leaders/Leaders";
import K12 from "./components/Events/k-12/k12";
import Chem_e_versary from "./components/Events/Chem_e_versary/Chem_e_versary"; 
import Urjaexperience from "./components/Events/Urjaexperience/Urjaexperience";
import Others from "./components/Events/Others/Others";
import Achievements from "./components/Events/Achievements/Achievements";
import Affairs from "./components/Events/Affairs/Affairs";
import Registration from './components/Registration/Resgistration';
import Latest from "./components/Latest/Latest";

function App() {
  return (
    <div>
      <html data-theme="light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team/Officers" element={<Team />} />
          <Route path="/Team/leaders" element={<Leaders />} />
          <Route path="/Events/k-12" element={<K12 />} />
          <Route path="/Events/Chem_e_versary" element={<Chem_e_versary />} />
          <Route path="/Events/Urjaexperience" element={<Urjaexperience />} />
          <Route path="/Events/Others" element={<Others />} />
          <Route path="/Events/Achievements" element={<Achievements />} />
          <Route path="/Events/Affairs" element={<Affairs />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Latest" element={<Latest />} />
        </Routes>
      </html>
    </div>
  );
}

export default App;
