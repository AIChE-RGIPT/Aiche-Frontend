import React from "react";

function Template(props) {
  return (
    <div className="md:mx-20 mx-5 md:my-40 my-10 manual-shadow2 md:p-10 md:py-16 py-5 rounded-2xl bg-lime-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-3xl font-bold text-amber-500">
            <i
              className="fa-solid fa-award"
              style={{
                color: "#007f5f",
                fontSize: "30px",
                marginRight: "10px",
              }}
            ></i>
            Pranjal Maheshwari's Triumph: Securing Top Honors in Ambuja's Best
            Home Paper Award at SCHEMCON-2021
          </h1>
          <p className="py-6">
            Reflecting on past glories, we proudly spotlight Mr. Pranjal
            Maheshwari, a distinguished alumnus and former President of
            AIChE-RGIPT, for his exceptional achievement in securing the First
            Prize for Ambuja's Best Home Paper Award during SCHEMCON-2021. His
            paper, "Design of Flue Gas Decarbonization Process Flow Sheet with
            Multi-Stage Heat Integration," stood as a testament to his
            dedication and the rigorous academic standards embraced by
            AIChE-RGIPT. As we commemorate this past achievement, we acknowledge
            his pivotal role in further enriching the legacy of AIChE-RGIPT and
            serving as an inspiration for aspiring chemical engineers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Template;
