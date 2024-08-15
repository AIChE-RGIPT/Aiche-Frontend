import React from 'react'
import Navbar from "../../internal-components/Navbar";
import Footer from "../../internal-components/footer";
import Main from './Main';
import Members from './Members';
import Leaders from './Leaders';

function Team() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Main />
        <Leaders/>
        <Members/>
      </div>
      <Footer />
    </div>
  );
}

export default Team