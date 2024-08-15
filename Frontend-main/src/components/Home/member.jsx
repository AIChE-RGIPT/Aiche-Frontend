import React from 'react'

function member() {
  return (
    <div>
      <div className="card w-60 md:72 bg-base-100 shadow-2xl my-14 mx-4 shadow-lime-300 container">
        <figure className="pt-4">
          <img src="../../icon1.svg" alt="member" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">90+ Members</h2>
        </div>
      </div>
    </div>
  );
}

export default member;