import React from 'react'
import Navbar from "../internal-components/Navbar";
import Footer from "../internal-components/footer";
import Main from './Main';
import Directory from './Directory';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Main/>
        <Directory/>
      </div>
      <Footer />
    </div>
  );
}

export default Contact