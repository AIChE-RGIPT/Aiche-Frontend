import React from "react";

function President() {
  return (
    <section className="bg-gray-100 py-10 md:px-20 my-10">
      <div className="flex flex-col items-center justify-center mx-5 lg:mx-20 my-10  space-y-5">
        <h1 className="text-amber-600 text-4xl font-bold  text-center">
          Meet our President
        </h1>
        <img
          src="../../president.jpg"
          className="rounded-full h-60 w-60 object-cover shadow-2xl"
          alt="President"
        />
        <a
          className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 py-2 px-4 rounded-lg shadow-lg"
          href="https://www.linkedin.com/in/siddhanth-chatterjee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KNOW MORE
        </a>
        <div className="bg-sky-500 text-white text-center rounded-3xl p-2">
          <span className="text-sm">President's Message</span>
        </div>
        <div className=" mx-auto p-4">
          <p className="text-slate-900 md:text-base text-sm text-left md:text-center leading-relaxed">
            Welcome to the AIChE Student Chapter at Rajiv Gandhi Institute of
            Petroleum Technology (RGIPT)!
            <br />
            I am Siddhanth Chatterjee, the current President of our
            chapter. It is my honor to lead a team of dedicated and enthusiastic
            students committed towards advancing in the ever-evolving field of
            chemical engineering.
            <br />
            <br />
            Our chapter serves as a platform for the students to engage in
            professional development, networking, and collaborative learning.
            Our chapter organizes a plethora of events including guest lectures,
            workshops, industrial visits, social service, and technical
            competitions, all aiming towards enhancing the educational
            experience and paving a pathway of success for our members in their
            careers.
            <br />
            <br />
            At AIChE-RGIPT, we believe in fostering a collaborative environment
            where students can learn, innovate, and grow together. We are
            dedicated to promoting excellence and staying up to date with the
            latest trends in the industry and the various technological
            advancements. I invite you to explore our website to learn more
            about our activities, achievements, and how you can get involved.
            Together, we can make a significant impact and drive the future of
            chemical engineering.
            <br />
            <br />
            Thank you for your interest in our chapter. I look forward to a
            productive and inspiring year ahead.
            <br />
            <br />
            Best regards,
            <br />
            <span className="font-semibold">Siddhanth Chatterjee</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default President;
