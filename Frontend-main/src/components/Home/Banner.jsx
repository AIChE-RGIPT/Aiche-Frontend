import React from "react";

const Banner = () => {
  return (
    <div className="relative h-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-2">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl brightness-50"
        style={{
          backgroundImage: `url('../../banner-bg.JPG')`,
          height: "83vh",
        }}
      ></div>
      <div
        className="relative flex items-center justify-center flex-col bg-slate-900 bg-opacity-40 lg:px-20 md:px-16 sm:px-10 px-6 mt-24 rounded-2xl"
        style={{ height: "83vh" }}
      >
        <h1 className="text-amber-400 text-center font-extrabold my-2 dynamic-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Institute of Chemical Engineers
        </h1>
        <div className="flex items-center justify-center flex-col md:flex-row">
          <img
            src="../../college-logo.png"
            className="h-8 sm:h-10 mx-2"
            alt="College Logo"
          />
          <p className="text-slate-50 text-center font-semibold my-3 text-lg sm:text-xl lg:text-2xl">
            Rajiv Gandhi Institute of Petroleum Technology Student Chapter
          </p>
        </div>
        <p className="text-slate-50 text-center font-medium text-xs sm:text-sm">
          RGIPT is an Institute of National Importance(INI), established by the
          Ministry of <br className="hidden md:inline" />
          Petroleum and Natural Gas(MOP&NG), Government of India, and
          co-promoted <br className="hidden md:inline" />
          as an energy domain specific institute by six leading Oil
          <br className="hidden md:inline" /> Public Sector Enterprise.
        </p>
      </div>
    </div>
  );
};

export default Banner;
