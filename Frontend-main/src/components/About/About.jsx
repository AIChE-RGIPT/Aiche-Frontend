import React from 'react'
import Navbar from "../internal-components/Navbar";
import Footer from "../internal-components/footer";
import Main from "./Main"
import Mission from './Mission';
import Mentor from "./mentor";
import Leaders from './Leaders';
import Membership from './Membership';
import Merchandise from './Merchandise';


function About() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Main />
        <Mission />
        <Mentor />
        <Leaders />
        <Membership/>
        <Merchandise/>
      </div>
      <Footer />
    </div>
  );
}

export default About