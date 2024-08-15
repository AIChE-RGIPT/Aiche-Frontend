import React from "react";
import Navbar from "../../internal-components/Navbar";
import Footer from "../../internal-components/footer";
import Main from "./Main";
import International from "./International";
import National from "./National";


function Achievements() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Main />
          <International/>
          <National/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Achievements;
