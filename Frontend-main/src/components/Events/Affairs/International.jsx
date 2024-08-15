import React from "react";

function International() {
  return (
    <>
      <h1 className="text-amber-500 text-center font-extrabold mt-10 md:my-14 dynamic-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        International Interactions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:mx-24">
        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../International/1.png"
              alt="AIChE BUET SC Interaction"
              className="rounded-xl h-80 w-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Interaction with AIChE BUET SC</h2>
            <p>
              Exploring innovative ideas and fostering cross-cultural
              engineering collaboration with AIChE's BUET Student Chapter.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../Events/5.png"
              alt="AIChE Unal Med SC Interaction"
              className="rounded-xl h-80 w-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Interactive meet between AIChE RGIPT and AIChE UI
            </h2>
            <p>
              In a productive session with AIChE University of Indonesia, we
              exchanged information about our Student Chapters and institutions.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10 ">
            <img
              src="../../International/3.png"
              alt="AIChE BPDC SC Interaction"
              className="rounded-xl h-80 w-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Interaction with AIChE BPDC SC</h2>
            <p>
              Strengthening ties and exchanging expertise with AIChE's BPDC
              Student Chapter for mutual academic growth.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../International/4.png"
              alt="AIChE UFU SC Interaction"
              className="rounded-xl h-80 w-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Interaction with AIChE UFU SC</h2>
            <p>
              Collaborating with UFU's AIChE Student Chapter to enhance
              educational experiences and professional networking.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../International/5.png"
              alt="AIChE Unal Med SC Interaction"
              className="rounded-xl h-80 w-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Interaction with AIChE Unal Med SC</h2>
            <p>
              Building bridges and sharing expertise with AIChE's Unal Med
              Student Chapter to advance chemical engineering education.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../International/2.png"
              alt="AIChE TUFTS SC Interaction"
              className="rounded-xl h-80 w-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Interaction with AIChE TUFTS SC</h2>
            <p>
              Engaging with Tufts' AIChE Student Chapter to share insights and
              drive collaborative research initiatives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default International
