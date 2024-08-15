import React from "react";

function History() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mx-5 lg:mx-20 md:my-4 lg:space-y-0 lg:space-x-10 sm:-my-10 ">
      <div className="left lg:w-1/2">
        <h1 className="text-amber-600 text-4xl font-bold md:my-4 md:mt-10  text-center lg:text-left">
          Our chapter History
        </h1>
        <p className="text-slate-900 my-8 mx-5 md:mx-0 text-left md:text-base text-sm">
          In the symphony of molecules, the diligent AIChE-RGIPT orchestrates
          their success through the harmonious chords of hard work and
          dedication. Over the years, propelled by the vision of its past
          Presidents and fuelled by the unwavering dedication of its teams, the
          AIChE-RGIPT student chapter has ascended meteorically, and with the
          steadfast leadership of our current President and the tireless efforts
          of our present teams, the AIChE RGIPT chapter continues to soar to new
          heights, embodying a legacy of excellence and achievement.
        </p>
      </div>
      <div className="right flex flex-col justify-center items-center lg:w-1/2 space-y-4">
        <div className="upper-img w-full">
          <img
            src="../../img8.JPG"
            className="h-60 w-full rounded-lg shadow-lg object-cover"
            alt="History Image 1"
          />
        </div>
        <div className="lower-img flex justify-center items-center lg:space-x-5 space-x-0 space-y-4 lg:flex-row flex-col">
          <img
            src="../../img6.JPG"
            className="h-60 w-96 rounded-lg shadow-lg object-cover"
            alt="History Image 2"
          />
          <img
            src="../../img7.JPG"
            className="h-60 lg:w-60 w-96 rounded-lg shadow-lg object-cover"
            alt="History Image 3"
          />
        </div>
      </div>
    </div>
  );
}

export default History;
