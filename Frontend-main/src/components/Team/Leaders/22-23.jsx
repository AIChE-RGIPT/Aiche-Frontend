import React from "react";

function Leaders() {
  return (
    <div className="md:mx-28 mx-10 mb-16 md:p-10 p-8">
      <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-4 mt-10 text-center">
        Leaderboard 2022-23
      </h1>

      <div className="flex justify-center items-center flex-wrap gap-8">
        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Leaderboard/9.jpg"
              alt="Yashi Vijay"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-sm font-semibold mb-2">Yashi Vijay</div>
          <div className="text-xs text-center mb-1">
            Joint Secretary (External Affairs)
          </div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl "
            href="https://www.linkedin.com/in/yashi-vijay-b179921a9/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../Leaderboard/11.png"
              alt="Anshika Verma"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Anshika Verma</div>
          <div className="text-sm">Vice President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/anshika-verma-024a17208/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-56 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../Leaderboard/7.jpg"
              alt="Arpit Bhardwaj"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Arpit Bhardwaj</div>
          <div className="text-sm">President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/arpit-bhardwaj-1b3013193/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Leaderboard/8.jpg"
              alt="Sai Vazrang"
              className="object-cover h-32 rounded-full mb-10 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Sai Vazrang</div>
          <div className="text-sm">Volunteer Chair</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/sai-vazrang-0850441ab/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Leaderboard/10.jpg"
              alt="Sarthak Goel"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-sm font-semibold mb-2">Sarthak Goel</div>
          <div className="text-xs text-center mb-1">
            Joint Secretary (Internal Affairs)
          </div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/sarthak-goel-992bb21b6/"
          >
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
