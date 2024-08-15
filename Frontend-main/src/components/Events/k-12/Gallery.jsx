import React from 'react'

function Gallery() {
  return (
    <div>
      <h1 className="text-center my-8 text-amber-600 text-2xl md:text-3xl font-bold mt-10">
        Gallery
      </h1>
      <div className="flex justify-center items-center mx-10">
        <div className="carousel carousel-center max-w-6xl p-4 mb-10 space-x-4 bg-base-300 rounded-box">
          <div className="carousel-item">
            <img src="../../k12/1.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/2.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/3.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/4.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/5.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/6.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/7.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/8.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/9.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/10.jpg" className="rounded-box h-96 w-96" />
          </div>
          <div className="carousel-item">
            <img src="../../k12/11.jpg" className="rounded-box h-96 w-96" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery