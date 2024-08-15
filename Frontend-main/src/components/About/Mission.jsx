import React from 'react'

function Mission() {
  return (
    <div className="mx-8 md:20 md:my-8 py-4 md:py-10">
      <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-8  text-center">
        Mission and Vision
      </h1>
      <p className="text-slate-900 font-semibold text-md md:text-xl  my-4  mb-8 md:text-center text-left">
        "Our mission is to foster a diverse and inclusive community that
        promotes development and innovation in the field of chemical
        engineering. We are dedicated to the principles of Collaboration,
        Cognition, and Commitment, ensuring that our members excel in their
        academic and professional pursuits while contributing to the advancement
        of the chemical engineering profession."
      </p>
      <div className="flex-col flex md:flex-row justify-center items-center">
        <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4  rounded-2xl">
          <div className="card-body">
            <h2 className="text-pink-600 text-2xl font-bold text-center">
              Cognition
            </h2>
            <p>
              Our chapter emphasizes the importance of continuous learning and
              intellectual growth. Through workshops, seminars, and research
              initiatives, we encourage our members to expand their knowledge,
              stay updated with industry trends, and develop innovative
              solutions to engineering challenges.
            </p>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4  rounded-2xl">
          <div className="card-body">
            <h2 className="text-pink-600 text-2xl font-bold text-center">
              Collaboration
            </h2>
            <p>
              We believe in the power of teamwork and partnership. By fostering
              strong relationships within our community and with industry
              professionals, we create opportunities for collaborative projects,
              knowledge sharing, and networking that enhance the academic and
              professional growth of our members.
            </p>
          </div>
        </div>

        <div className="card md:w-96 md:my-0 bg-base-100 manual-shadow2 container m-4  rounded-2xl">
          <div className="card-body">
            <h2 className="text-pink-600 text-2xl font-bold text-center">
              Commitment
            </h2>
            <p>
              We are committed to the personal and professional development of
              our members. By promoting leadership, ethical practices, and a
              dedication to excellence, we prepare our members to become future
              leaders in the chemical engineering field who can make significant
              contributions to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission