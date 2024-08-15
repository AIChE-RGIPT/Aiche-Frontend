import React from 'react'

function Membership() {
    return (
      <div className="bg-base-200 pt-2 md:px-24 px-8 mb-20 py-10">
        <h1 className="font-bold text-4xl text-center my-8">
          Membership Information
        </h1>
        <p className="">
          Joining the AIChE RGIPT Student Chapter offers a wealth of
          opportunities to enhance your academic and professional journey in
          chemical engineering. Our chapter is dedicated to providing members
          with invaluable resources, networking opportunities, and a supportive
          community. Below, you'll find all the information you need to become a
          member and take full advantage of what our chapter has to offer.
        </p>
        <h1 className="text-center my-8 text-amber-600 text-2xl md:text-3xl font-bold mt-10">
          Benefits
        </h1>
        <div class="flex justify-center items-center flex-wrap gap-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="badge md:p-14 px-2 py-16 bg-amber-200 rounded-2xl manual-shadow3">
              <div class="text-center">
                <h1 class="text-xl font-bold mb-1 text-pink-900">
                  Global Network Access
                </h1>
                <p>
                  Connect with professionals and students worldwide, expanding
                  your professional network.
                </p>
              </div>
            </div>

            <div class="badge md:p-14 px-2 py-16 bg-amber-200 rounded-2xl manual-shadow3">
              <div class="text-center">
                <h1 class="text-xl font-bold mb-1 text-pink-900">
                  Exclusive Events
                </h1>
                <p>
                  Attend international conferences, workshops, and seminars on
                  the latest developments in chemical engineering.
                </p>
              </div>
            </div>

            <div class="badge md:p-14 px-2 py-16 bg-amber-200 rounded-2xl manual-shadow3">
              <div class="text-center">
                <h1 class="text-xl font-bold mb- text-pink-900">
                  Career Development
                </h1>
                <p>
                  Receive enhanced internship and job placement guidance from
                  experienced professionals.
                </p>
              </div>
            </div>

            <div class="badge md:p-14 px-2 py-16 bg-amber-200 rounded-2xl manual-shadow3">
              <div class="text-center">
                <h1 class="text-xl font-bold mb-1 text-pink-900">
                  Leadership Opportunities
                </h1>
                <p>
                  Develop your leadership skills by participating in various
                  chapter activities and committees.
                </p>
              </div>
            </div>

            <div class="badge md:p-14 px-2 py-16 bg-amber-200 rounded-2xl manual-shadow3">
              <div class="text-center">
                <h1 class="text-xl font-bold mb-1 text-pink-900">
                  Research Collaborations
                </h1>
                <p>
                  Engage in collaborative projects and research opportunities
                  with peers and industry experts.
                </p>
              </div>
            </div>

            <div class="badge md:p-14 px-2 py-16 bg-amber-200 rounded-2xl manual-shadow3">
              <div class="text-center">
                <h1 class="text-xl font-bold mb-1 text-pink-900">
                  Research Collaborations
                </h1>
                <p>
                  Engage in collaborative projects and research opportunities
                  with peers and industry experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Membership