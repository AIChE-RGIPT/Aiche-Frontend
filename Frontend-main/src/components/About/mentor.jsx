import React from 'react'

function mentor() {
  return (
    <div>
      <div className="hero bg-base-200 md:px-0 px-5 lg:py-16">
        <div className="hero-content flex-col-reverse  lg:flex-row-reverse">
          <img
           src="../../change/mentor.jpg"
           className="md:max-w-lg rounded-lg shadow-2xl w-96"
          />
          <div>
            <h1 className="md:text-5xl font-bold text-3xl">
              Meet Our Faculty Advisor
            </h1>
            <p className="py-6">
              Dr. Vivek Kumar, Assistant Professor of Chemical Engineering,
              provides expert guidance and mentorship to our student chapter,
              fostering academic and professional excellence.
            </p>
            <a
              className="btn bg-amber-300 text-amber-800 hover:bg-amber-400"
              href="https://www.rgipt.ac.in/faculty/Faculty/FacultyProfile?Sid=ToyvYIKzjPo%3D"
            >
              KNOW MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mentor
