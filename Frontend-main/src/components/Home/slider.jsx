import React from 'react'

function slider() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full rounded-3xl">
          <img src="../../img11.JPG" className="w-full image" />
        </div>
        <div id="item2" className="carousel-item w-full rounded-3xl">
          <img src="../../img2.JPG" className="w-full image" />
        </div>
        <div id="item3" className="carousel-item w-full rounded-3xl">
          <img src="../../img6.JPG" className="w-full image" />
        </div>
        <div id="item4" className="carousel-item w-full rounded-3xl">
          <img src="../../img7.JPG" className="w-full image" />
        </div>
        <div id="item5" className="carousel-item w-full rounded-3xl">
          <img src="../../img8.JPG" className="w-full image" />
        </div>
        <div id="item6" className="carousel-item w-full rounded-3xl">
          <img src="../../img9.JPG" className="w-full image" />
        </div>
        <div id="item7" className="carousel-item w-full rounded-3xl">
          <img src="../../img10.JPG" className="w-full image" />
        </div>
        <div id="item8" className="carousel-item w-full rounded-3xl">
          <img src="../../img1.JPG" className="w-full image" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
        <a href="#item7" className="btn btn-xs">
          7
        </a>

        <a href="#item8" className="btn btn-xs">
          8
        </a>
      </div>
    </div>
  );
}

export default slider
