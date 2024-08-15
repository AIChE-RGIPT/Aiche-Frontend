import React from "react";

function Webinars() {
  return (
    <div>
      <div className="mx-8 md:mx-20 md:my-8 py-4 md:py-10">
        <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-8 text-center">
          Events and Programs
        </h1>
        <p className="text-slate-900 text-md md:text-lg my-4 md:mx-20 mb-8 md:text-center text-left">
          "The events were packed with exciting activities designed to enhance
          students' knowledge in STEM. These events included a variety of
          engaging webinars and hands-on workshops aimed at deepening
          understanding and sparking curiosity. Each session covered critical
          topics such as pressure dynamics, capillary action, electromagnetic
          effects, and chemical reactions, providing both theoretical insights
          and practical applications. The webinars featured expert speakers and
          interactive elements, allowing students to ask questions and engage in
          discussions."
        </p>
        <div className="flex-col flex md:flex-row justify-center items-center">
          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../Chem-e-versary/11.JPG"
                className="rounded-2xl h-56"
                alt="Competitive gaming"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                Competitive gaming
              </h2>
              <p>
                Continuing the legacy of our last event 'Gaming Arena', we
                organized AIChE Gaming Night on 8th October 2023. This event
                included two of the most famous and competitive esports games
                'BGMI' and 'Valvorant'. It was a successful event organized in
                which many esports enthusiast teams participated. The winning
                team was awarded Rs. 1000. This gaming night created an
                energetic and competitive atmosphere among the participants and
                also the atmosphere. You would have loved the vibe.
              </p>
            </div>
          </div>

          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../Chem-e-versary/13.JPG"
                className="rounded-2xl h-56"
                alt="Competitive gaming"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                Illustrating webinar
              </h2>
              <p>
                As industries evolve and educational paradigms shift, webinars
                emerge as the dynamic intersection where industrial insights
                meet educational advancement. AIChE organized various webinars
                for chemistry lovers where many experienced speakers were
                invited and shared their valuable and insightful thoughts about
                the chemical industry and future educational opportunities. You
                know spreading knowledge is considered the biggest donation a
                man could make and gaining it makes you a great man.
              </p>
            </div>
          </div>

          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../k12(4).jpg"
                className="rounded-2xl h-56"
                alt="Online Sessions"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                PITCH TANK
              </h2>
              <p>
                The event's standout feature was the array of innovative ideas
                showcased. Pitches reflected a keen grasp of market dynamics and
                consumer demands. Judges were not only impressed by the
                creativity but also by the comprehensive business plans and
                scalability potential. While winners emerged, every participant
                left with enhanced confidence and resolve. The Pitch Tank event
                not only hailed innovation but also nurtured an entrepreneurial
                ethos and creativity at RGIPT. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Webinars;
