import React from 'react'
import Navbar from "../internal-components/Navbar";
import Banner from "./Banner";
import Member from "./member";
import Events from "./Events";
import Team from "./Team";
import About from "./About";
import Slider from "./slider";
import History from "./History";
import President from "./president";
import Faq from "./faq";
import Testimonials from "./student-voice";
import Footer from "../internal-components/footer";


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex items-center justify-center my-10 flex-col md:flex-row">
        <Member />
        <Events />
        <Team />
      </div>
      <About />
      <Slider />
      <President />
      <History />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home