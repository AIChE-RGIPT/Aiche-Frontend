import React from "react";
import Navbar from "../../internal-components/Navbar";
import Footer from "../../internal-components/footer";
import Main from "./Main";
import _24_25 from "./24-25";
import _23_24 from "./23-24";
import _22_23 from "./22-23";
import _21_22 from "./21-22";
import _20_21 from "./20-21";


function Leaders() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Main />
        <_24_25 />
        <_23_24 />
        <_22_23 />
        <_21_22 />
        <_20_21 />
      </div>
      <Footer />
    </div>
  );
}

export default Leaders;
