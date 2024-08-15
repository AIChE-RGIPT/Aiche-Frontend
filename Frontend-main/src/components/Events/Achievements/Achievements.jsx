import React from "react";
import Navbar from "../../internal-components/Navbar";
import Footer from "../../internal-components/footer";
import Main from "./Main";
import Award1 from "./Award1";
import Award2 from "./Award2";
import Award3 from "./Award3";
import Award4 from "./Award4";
import Award5 from "./Award5";
import Award6 from "./Award6";
import Award7 from "./Award7";
import Award8 from "./Award8";
import Award9 from "./Award9";
import Award10 from "./Award10";
import Award11 from "./Award11";
import Award12 from "./Award12";
import Award13 from "./Award13";
import Award14 from "./Award14";


function Achievements() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Main />
          <Award1 />
          <Award2 />
          <Award3 />
          <Award4 />
          <Award5 />
          <Award6 />
          <Award7 />
          <Award8 />
          <Award9 />
          <Award10 />
          <Award11 />
          <Award12 />
          <Award13 />
          <Award14 />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Achievements;
