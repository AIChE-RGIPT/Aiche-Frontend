import React from 'react'

function Leaders() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10 mt-10 bg-base-200">
      <h1 className="text-amber-600 text-3xl md:text-4xl font-bold mb-5 text-center">
        Our Team Leaders
      </h1>
      <div>
        <div className="flex flex-col items-center gap-4 w-72 h-80 shadow-xl rounded-3xl container bg-white">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../arik.jpg"
              alt="Arik Parui"
              className="object-cover h-36 mb-10 w-full rounded-t-3xl"
            />
          </div>
          <div className="text-2xl font-semibold mt-4">Arik Parui</div>
          <time className="font-mono italic font-bold text-lg text-pink-600">
            "Overall Coordinator"
          </time>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl "
            href="https://www.linkedin.com/in/arik-parui-509231258/"
          >
            KNOW MORE
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center md:flex-row flex-col gap-10 md:gap-96">
        <div className="flex flex-col items-center gap-4 w-72 h-80 shadow-xl rounded-3xl container bg-white">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../Anish.jpg"
              alt="Anish Kumar"
              className="object-cover h-36 mb-10 w-full rounded-t-3xl"
            />
          </div>
          <div className="text-2xl font-semibold mt-4">Anish Kumar</div>
          <time className="font-mono italic font-bold">"Treasurer"</time>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl "
            href="https://www.linkedin.com/in/anish-kumar-90822024b/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-72 h-80 shadow-xl rounded-3xl container bg-white">
          <div className="h-32 w-full flex flex-col items-center">
            <img
              src="../../harshit.JPG"
              alt="Harshit Vishwakarma"
              className="object-cover h-36 mb-12 w-full rounded-t-3xl manual-shadow2"
            />
          </div>
          <div className="text-2xl font-semibold mt-4">Harshit Vishwakarma</div>
          <time className="font-mono italic font-bold ">"  International Relations Officer  "</time>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl "
            href="https://www.linkedin.com/in/harshit-vishwakarma-19285025a/"
          >
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Leaders
