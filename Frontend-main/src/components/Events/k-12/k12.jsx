import React from "react";
import Navbar from "../../internal-components/Navbar";
import Footer from "../../internal-components/footer";
import Events from "./Events"
import Webinars from "./Webinars";
import Gallery from "./Gallery";


function k12() {
  return (
    <div>
      <Navbar />
      <div className="md:min-h-screen">
        <video
          autoPlay
          muted
          loop
          className="md:h-[83vh] mx-auto md:rounded-2xl md:shadow-lg my-32 md:my-28"
        >
          <source src="../../k-12-video.mp4" type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <Events/>
      <Webinars/>
      <Gallery/>
      <Footer />
    </div>
  );
}

export default k12;
