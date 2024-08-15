import React from "react";

function Leaders() {
  return (
    <div className="md:mx-28 mx-10 mb-16 md:p-10 p-8">
      <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-4 mt-10 text-center">
        Leaderboard 2020-21
      </h1>

      <div className="flex justify-center items-center flex-wrap gap-8">
        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../Leaderboard/14.png"
              alt="Mr. Yogesh kumar"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Mr. Yogesh kumar</div>
          <div className="text-sm">Vice President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="#"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-56 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../Leaderboard/13.jpg"
              alt="Pranshu Dixit"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Pranshu Dixit</div>
          <div className="text-sm">President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/pranshu-dixit/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Leaderboard/15.png"
              alt="R Sudhanshu"
              className="object-cover h-32 rounded-full mb-10 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Mr. R Sudhanshu</div>
          <div className="text-sm">Secretary</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="#"
          >
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
