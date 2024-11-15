import React from "react";

function National() {
  return (
    <>
      <h1 className="text-amber-500 text-center font-extrabold mt-10 md:my-14 dynamic-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        National Interactions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:mx-24 mb-20">
        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../National/SVNIT.png"
              alt="AIChE SVNIT Interaction"
              className="rounded-xl w-96 h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Inter Chapter Meet AIChE SVNIT</h2>
            <p>
              Connecting with AIChE SVNIT to discuss the latest in chemical
              engineering and share best practices across chapters.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../National/2.png"
              alt="AIChE GSFCU SC Interaction"
              className="rounded-xl w-96 h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Interaction with AIChE GSFCU SC</h2>
            <p>
              Partnering with AIChE GSFCU Student Chapter to explore
              collaborative projects and foster deeper academic connections.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10 ">
            <img
              src="../../National/3.png"
              alt="AIChE BMSCE SC Interaction"
              className="rounded-xl w-96 h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Interaction with AIChE BMSCE SC</h2>
            <p>
              Engaging with AIChE BMSCE to exchange knowledge and strengthen our
              mutual focus on innovative engineering solutions.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../National/6.png"
              alt="AIChE VIT SC Interaction"
              className="rounded-xl w-96 h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Interaction with AIChE VIT SC</h2>
            <p>
              Collaborating with AIChE VIT Student Chapter to share experiences
              and insights on chemical engineering education.
            </p>
          </div>
        </div>


         <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../National/ICTIOCB.png"
              alt="AIChE VIT SC Interaction"
              className="rounded-xl w-96 h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Interaction with AIChE ICT-IOCB SC</h2>
            <p>
              Interacting with AIChE ICT-IOCB Student Chapter to share experiences
              and insights on chemical engineering education and the Student Regional Conference 2024.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl container">
          <figure className="px-10 pt-10">
            <img
              src="../../Events/6.png"
              alt="AIChE VIT SC Interaction"
              className="rounded-xl w-96 h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">
              Interchapter Interaction With AIChE SVNIT
            </h2>
            <p>
              During our vibrant interaction with AIChE NIT Surat, we shared
              insights about our academic environments and ongoing research
              projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default National;
