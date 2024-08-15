import React from "react";

const Main = () => {
  return (
    <div className="relative h-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-2">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl brightness-50"
        style={{
          backgroundImage: `url('../../Latest/latest.jpg')`,
          height: "83vh",
        }}
      ></div>
      <div
        className="relative flex items-center justify-center flex-col bg-slate-900 bg-opacity-40 lg:px-20 md:px-16 sm:px-10 px-6 mt-24 rounded-2xl"
        style={{ height: "83vh" }}
      >
        <h1 className="text-amber-400 text-center font-extrabold my-2 dynamic-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Latest updates and News
        </h1>
        <p className="text-slate-50 text-center font-medium text-md sm:text-lg">
          Stay updated with the latest news, events, and achievements of the
          AIChE RGIPT Student Chapter. From groundbreaking projects to inspiring
          alumni stories, explore what's happening in our vibrant community.
        </p>
      </div>
    </div>
  );
};

export default Main;
