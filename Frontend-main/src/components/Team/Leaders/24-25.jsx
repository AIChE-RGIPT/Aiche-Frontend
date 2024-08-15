import React from "react";

function Leaders() {
  return (
    <div className="md:mx-28 mx-10 mb-16 md:p-10 p-8 ">
      <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-10 text-center">
        Leaderboard 2024-25
      </h1>
      <div className="flex justify-start  items-center  flex-wrap gap-8">
        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Bhavani.jpg"
              alt="Bhavani Narayanasetti"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-sm font-semibold mb-2">
            Bhavani Narayanasetti
          </div>
          <div className="text-xs text-center mb-1">
            Joint Secretary (External Affairs)
          </div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl "
            href="https://www.linkedin.com/in/bhavani-narayanasetti-41a55b234/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../ankit.jpg"
              alt="Ankit Kumar Gupta"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Ankit Kumar Gupta</div>
          <div className="text-sm">Vice President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/ankit-kumar-gupta-7378b5229/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-56 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../president.jpg"
              alt="Siddhanth Chatterjee"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Siddhanth Chatterjee</div>
          <div className="text-sm">President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/siddhanth-chatterjee/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../devesh.jpg"
              alt="Devesh Vishwakarma"
              className="object-cover h-32 rounded-full mb-10 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Devesh Vishwakarma</div>
          <div className="text-sm">Volunteer Chair</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/devesh-vishwakarma-388026241/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../nimisha.jpg"
              alt="Nimisha Verma"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-sm font-semibold mb-2">Nimisha Verma</div>
          <div className="text-xs text-center mb-1">
            Joint Secretary (Internal Affairs)
          </div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/nimishaverma191/"
          >
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
