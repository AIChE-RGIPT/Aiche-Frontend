import React from "react";
import Navbar from "../../internal-components/Navbar";
import Footer from "../../internal-components/footer";
import Main from "./Main";
import Events from "./Events";
import Webinars from "./Webinars";
import Gallery from "./Gallery";

function Chem_e_versary() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Main/>
          <Events/>
          <Webinars/>
          <Gallery/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Chem_e_versary;