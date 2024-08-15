import React from "react";


function Directory() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../../president-bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="badge md:p-14 px-2 py-16 sm:w-96 w-60 bg-lime-200 rounded-lg manual-shadow3">
              <div className="text-center">
                <h1 className="sm:text-xl text-lg font-bold">
                  Dr. Vivek Kumar
                </h1>
                <time className="font-mono italic font-bold">
                  Faculty Advisor
                </time>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center gap-4">
                    <i class="fa-solid fa-envelope"></i>
                    <p> vivekk@rgipt.ac.in</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <i class="fa-solid fa-phone"></i>
                    <p>+91-8299181650</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="badge md:p-14 px-2 py-16 sm:w-96 w-60 bg-lime-200 rounded-lg manual-shadow3">
              <div className="text-center">
                <h1 className="sm:text-xl text-lg font-bold">
                  Siddhanth Chatterjee{" "}
                </h1>
                <time className="font-mono italic font-bold">President</time>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center gap-4">
                    <i class="fa-solid fa-envelope"></i>
                    <p>21ce3011@rgipt.ac.in</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <i class="fa-solid fa-phone"></i>
                    <p>+91-7008445440 </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="badge md:p-14 px-2 py-16 sm:w-96 w-60 bg-lime-200 rounded-lg manual-shadow3">
              <div className="text-center">
                <h1 className="sm:text-xl text-lg font-bold">
                  Ankit Kumar Gupta
                </h1>
                <time className="font-mono italic font-bold">
                  Vice President
                </time>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center gap-4">
                    <i class="fa-solid fa-envelope"></i>
                   <p> 21ce3010@rgipt.ac.in </p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <i class="fa-solid fa-phone"></i>
                    <p>+91-7061914881</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="badge md:p-14 px-2 py-16 sm:w-96 w-60 bg-lime-200 rounded-lg manual-shadow3">
              <div className="text-center">
                <h1 className="sm:text-xl text-lg font-bold">Arik Parui</h1>
                <time className="font-mono italic font-bold">
                  Overall Coordinator
                </time>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center gap-4">
                    <i class="fa-solid fa-envelope"></i>
                    <p>22ce3012@rgipt.ac.in</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <i class="fa-solid fa-phone"></i>
                    <p>+91-6289504493</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directory;
