import React from "react";
import Navbar from "../internal-components/Navbar";
import Footer from "../internal-components/footer";
import Main from "./Main";
import Events from "./Events";

function Latest() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Main />
        <Events/>
      </div>
      <Footer />
    </div>
  );
}

export default Latest;
