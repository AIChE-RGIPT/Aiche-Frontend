import React from "react";

function Leaders() {
  return (
    <div className="md:mx-28 mx-10 mb-16 md:p-10 p-8 ">
      <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-10 text-center">
        Leaderboard 2023-24
      </h1>
      <div className="flex justify-start  items-center  flex-wrap gap-8">
        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Leaderboard/5.jpg"
              alt="Aniroodh Chobey"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-sm font-semibold mb-2">Aniroodh Chobey</div>
          <div className="text-xs text-center mb-1">
            Joint Secretary (Internal Affairs)
          </div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl "
            href="https://www.linkedin.com/in/aniroodh-chobey-95239a216/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../Leaderboard/2.jpg"
              alt="Manoj Kumar "
              className="object-cover h-32 w-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Manoj Kumar </div>
          <div className="text-sm">Vice President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/manoj-kumar-l-m-2b5769210/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-56 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <img
              src="../../Leaderboard/1.JPG"
              alt="Dhruv Mishra"
              className="object-cover h-32 w-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Dhruv Mishra</div>
          <div className="text-sm">President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/dhruvmishra30/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Leaderboard/3.jpg"
              alt="Aaksh Kanwar"
              className="object-cover h-32 w-32 rounded-full mb-10 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Aaksh Kanwar </div>
          <div className="text-sm">Volunteer Chair</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/aaksh-kanwar/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Leaderboard/4.jpg"
              alt="Mehul Kumar"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-sm font-semibold mb-2">Mehul Kumar</div>
          <div className="text-xs text-center mb-1">
            Joint Secretary (External Affairs)
          </div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/mehul-kumar-546a14200/"
          >
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
