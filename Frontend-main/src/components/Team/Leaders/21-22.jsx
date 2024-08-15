import React from "react";

function Leaders() {
  return (
    <div className="md:mx-28 mx-10 mb-16 md:p-10 p-8">
      <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-10 text-center">
        Leaderboard 2021-22
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../Leaderboard/12.jpg"
              alt="Mehul Gidwani"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Mehul Gidwani</div>
          <div className="text-sm">Vice President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/mehul-gidwani-6ba036194/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-56 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../Leaderboard/11.jpg"
              alt="Pranjal Maheshwari"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Pranjal Maheshwari</div>
          <div className="text-sm">President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/maheshwari61/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Leaderboard/]13.jpg"
              alt="Saurabh Kumar "
              className="object-cover h-32 rounded-full mb-10 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Saurabh Kumar </div>
          <div className="text-sm">Secretary</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/saurabh-kumar-47539a174/"
          >
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
