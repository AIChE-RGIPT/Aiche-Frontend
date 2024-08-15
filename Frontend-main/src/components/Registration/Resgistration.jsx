import React from "react";
import Navbar from "../internal-components/Navbar";
import Footer from "../internal-components/footer";
import Main from "./Main";


function Registration() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Main />
        
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
