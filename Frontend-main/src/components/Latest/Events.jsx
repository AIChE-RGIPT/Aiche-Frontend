import React from "react";

function Events() {
  return (
    <div className="md:mx-24 mx-6 md:my-20 my-16">
      <h1 className="text-2xl md:text-5xl font-bold text-red-500 text-center mb-5">
        Announcement
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-top bg-base-100 rounded-3xl overflow-hidden">
        <figure className="w-full md:w-2/5">
          <img
            src="../../Latest/1.png"
            alt="Network Nexus Event"
            className="rounded-3xl w-full h-auto object-cover mt-8"
          />
        </figure>
        <div className="card-body p-6 md:p-8 text-left w-full md:w-2/5">
          <h2 className="card-title text-2xl md:text-xl font-semibold mb-4">
            Network Nexus: From Alma Mater to Achievements
          </h2>
          <p className="mb-4">
            We are thrilled to announce the launch of our exclusive alumni
            interaction series, Network Nexus: From Alma Mater to Achievements.
            This initiative by AIChE-RGIPT aims to bridge the gap between our
            esteemed alumni and current students, fostering a community of
            learning, inspiration, and professional growth.
          </p>

          <h2 className="card-title text-2xl md:text-xl font-semibold mb-4">
            About Network Nexus:
          </h2>
          <p className="mb-4">
            Network Nexus is designed to create a platform where our alumni can
            share their journeys, achievements, and insights with the RGIPT
            community. This series will feature engaging sessions with
            successful alumni from various industries, offering students a
            unique opportunity to learn from their experiences and gain valuable
            career advice.
          </p>

          <h2 className="card-title text-2xl md:text-xl font-semibold mb-4">
            First Session Details:
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Date:</strong> 2nd June 2024
            </li>
            <li>
              <strong>Time:</strong> 8:30 PM IST
            </li>
            <li>
              <strong>Venue:</strong> Google Meet
            </li>
            <li>
              <strong>Guest Speaker:</strong> Kamal Nayan, PhD, University of
              Toronto
            </li>
          </ul>

          <p className="mb-4">
            We are honored to host Mr. Kamal Nayan, a notable alumnus from the
            2019-2023 batch and PhD candidate at the University of Toronto. Mr.
            Nayan will share his experiences and offer guidance to students
            participating in the SRC for the Chem-E-Car competition.
          </p>
          <p className="mb-4">
            This session is a fantastic opportunity for inspiration and academic
            advice. All students are welcome to join this interactive event!
          </p>

          <p className="mb-4">
            For more information or any queries, please reach out to{" "}
            <a
              href="mailto:aiche@rgipt.ac.in"
              className="text-blue-500 underline"
            >
              aiche@rgipt.ac.in
            </a>
            .
          </p>

          <b>
            Warm regards,
            <br />
            AIChE-RGIPT Student Chapter
          </b>
        </div>
      </div>
    </div>
  );
}

export default Events;
