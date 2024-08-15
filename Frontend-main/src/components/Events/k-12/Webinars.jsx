import React from "react";

function Webinars() {
  return (
    <div>
      <div className="mx-8 md:mx-20 md:my-8 py-4 md:py-10">
        <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-8 text-center">
          Events and Programs
        </h1>
        <p className="text-slate-900 text-md md:text-lg my-4 md:mx-20 mb-8 md:text-center text-left">
          "The events were packed with exciting activities to enhance students
          knowledge in STEM. The event includes experiential learning,
          workshops, 3D animations, and visualization, and other activities. The
          workshops cover essential topics such as "pressure decrement",
          Capillary actions," "Electromagnetic and magnetic effects of current",
          "vacuum creation in space", "acid base indicator experiment" etc. "
        </p>
        <div className="flex-col flex md:flex-row justify-center items-center">
          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../k12(2).png"
                className="rounded-2xl h-56"
                alt="Online Sessions"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                ONLINE SESSIONS
              </h2>
              <p>
                Virtual events and webinars were conducted to supplement missed
                lab experiences. Topics included "The Rusting of Iron in 3D
                Animations," aimed at enhancing students' comprehension of
                oxidation mechanisms and influencing factors. Through immersive
                3D simulations, participants gained insights into rust formation
                and propagation on iron surfaces, deepening their understanding
                of chemical reactions. These sessions provided a dynamic
                platform for visualizing complex concepts, offering students a
                unique perspective on real-world.
              </p>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../k12(3).jpg"
                className="rounded-2xl h-56"
                alt="Online Sessions"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                SCIENCE EXTRAVAGANZA
              </h2>
              <p>
                The AIChE RGIPT K-12 team conducted two captivating experiments,
                igniting students' curiosity and fostering creativity. The
                Dancing Raisin experiment showcased how gas bubbles induce
                buoyancy, while the Balloon Inflation experiment illuminated
                chemical reactions between acids and bases. These engaging
                activities offered a profound understanding of scientific
                principles. They served as a gateway for students to explore
                STEM wonders, empowering them with knowledge and confidence. As
                the adage goes, 'Learning demands passion and unwavering effort.
              </p>
            </div>
          </div>

          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../Events/9.png"
                className="rounded-2xl h-56"
                alt="Online Sessions"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                Unlocking Science for K-12 students: Offline Events Inspires
                Hands-On Learning
              </h2>
              <p>
                Our offline event for K-12 , featured fun experiments
                like "Denser Than You Think" and "Balloon Inflation." These
                activities helped students understand scientific concepts
                practically. Designed without  lab equipment, these
                experiments made learning engaging and accessible, demonstrating
                that science can be both fun and informative outside traditional
                classroom settings.This provides a platform
                for visualizing concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webinars;
