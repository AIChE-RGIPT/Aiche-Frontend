import React from 'react';

function Template(props) {
  return (
    <div className="md:mx-20 mx-5 md:my-40 my-10 manual-shadow2 md:p-10 md:py-16 py-5 rounded-2xl bg-lime-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={props.image}
          className="md:max-w-sm rounded-lg shadow-2xl md:m-5 m-2"
          alt="Award"
        />
        <div>
          <h1 className="text-3xl font-bold text-amber-500">
            <i
              className="fa-solid fa-award"
              style={{
                color: "#007f5f",
                fontSize: "30px",
                marginRight: "10px",
              }}
            ></i>
            {props.heading}
          </h1>
          <p className="py-6">{props.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Template;