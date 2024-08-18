import React from "react";

function Testimonials() {
  return (
    <section className="bg-gray-100 text-gray-800 px-4 md:px-20">
      <div className=" px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className=" text-amber-600 text-3xl font-extrabold">
              Voices of AIChE-RGIPT : Hear What Our Members Say
            </h2>
            <p className="text-gray-600 text-left">
              Dive into the heartfelt experiences and reflections of our RGIPT
              AIChE Student Chapter members. Discover how our community has
              enriched their academic journey, empowered their professional
              growth, and fostered lasting friendships. From inspiring events to
              collaborative projects, explore the diverse perspectives that
              shape our vibrant chapter. Join us in celebrating the voices that
              make our community thrive.
            </p>
          </div>
          <div className="p-0 md:p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4 ">
                <div className="p-7 rounded shadow-md bg-gray-50 container">
                  <p>
                  Being the K-12 officer, I am committed to fostering enthusiasm for chemical engineering amongst the young learners.
                   Through interactive workshops, STEM activities, 
                   and mentorship programs we are building a foundation for a sustainable and technologically advanced future.
                  
                  </p>
                  <div className="flex items-center mt-4 space-x-4 ">
                    <img
                      src="../../adarsh.jpg"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold text-amber-600">
                        Adarsh Upadhyay
                      </p>
                      <p className="text-sm text-gray-600">
                        K-12 Officer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-gray-50 container">
                  <p>
                    Being part of the AIChE-RGIPT Student Chapter community has
                    been such a wonderful and collaborative experience.
                    Interacting with motivated individuals, contributing to
                    exciting events, and sharing knowledge has been incredibly
                    fulfilling. It's a supportive environment where learning and
                    growth truly flourish.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="../../mayank2.JPG"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold text-amber-600">
                        Mayank Gupta
                      </p>
                      <p className="text-sm text-gray-600">Editorial Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-gray-50 container">
                  <p>
                    "Grab as many opportunities as you've got!" As a member of the
                    International Relations Committee, I love connecting with
                    people globally. It's been an amazing journey that's helped
                    me grow and learn so much about the field. Working with such
                    fantastic colleagues has made the taste of success even
                    sweeter.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="../../harshit.JPG"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold text-amber-600">
                        Harshit Vishwakarma
                      </p>
                      <p className="text-sm text-gray-600">IR officer</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-gray-50 container">
                  <p>
                    Serving as the Event Management officer for the AIChE RGIPT
                    Student Chapter has been one of the most rewarding and
                    transformative experiences of my college life. This role not
                    only allowed me to contribute to the vibrant campus culture
                    but also helped me develop essential skills and forge
                    meaningful connections.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="../../aditya-k.jpg"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold text-amber-600">
                        Aditya kumar
                      </p>
                      <p className="text-sm text-gray-600">Event Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
