import React from "react";
import Navbar from "../../internal-components/Navbar";
import Footer from "../../internal-components/footer";
import Main from "./Main";
import Events from "./Events";

function Others() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Main />
          <Events/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Others;
